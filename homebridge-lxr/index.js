var midi = require("midi");
var midiOutputs = [];

// Midi -- return port number or throw error if not found
function OutPortNumberFromName(portName) {
    var out = new midi.output();
    for (var i = 0; i < out.getPortCount() ; i++) {
        if (out.getPortName(i) == portName) {
            return i;
        }
    }
    throw new Error("Couldn't find MIDI port '" + portName + "'");
}

function OutputForPortNumber(portNumber) {
    if (typeof midiOutputs[portNumber] == 'undefined') {
        midiOutputs[portNumber] = new midi.output();
        midiOutputs[portNumber].openPort(portNumber);
    }
    return midiOutputs[portNumber];
}

module.exports = function (homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;
    homebridge.registerAccessory("homebridge-minikin", "Midi", MidiAccessory);
}

function MidiAccessory(log, config) {
    this.log = log;

    this.outPortNumber = OutPortNumberFromName(config["port"]);
    this.channel = parseInt(config["channel"] || 1);
    this.start = config["start"];
    this.stop = config["stop"];
    this.log("  port " + this.outPortNumber + ", channel " + this.channel + ", start " + this.start, ", stop ", this.stop);
    this.service = config["service"] || "Switch";
    this.name = config["name"];
}

MidiAccessory.prototype = {

    midiRequest: function (outPortNumber, action, channel, callback) {
        if (action == 'start') {
            byteOne = 250 + (channel - 1);
        } else if (action == 'stop') {
            byteOne = 252 + (channel - 1);
        } else {
            throw new Error("Unrecognized MIDI action");
        }
        var bytes = [byteOne];
        OutputForPortNumber(outPortNumber).sendMessage(bytes);
        this.log("Sent MIDI message " + bytes);
        callback();
    },

    setPowerState: function (State, callback) {
        var action;

        if (State) {
            action = 'start';
        } else {
            action = 'stop';
        }

        this.midiRequest(this.outPortNumber, action, this.channel, function (error, response) {
            if (error) {
                this.log('Midi function failed: %s', error.message);
                callback(error);
            } else {
                this.log('Midi function succeeded');
                callback();
            }
        }.bind(this));
    },

    identify: function (callback) {
        this.log("Identify requested!");
        callback(); // success
    },

    getServices: function () {
      // you can OPTIONALLY create an information service if you wish to override
      // the default values for things like serial number, model, etc.
      var informationService = new Service.AccessoryInformation();

        informationService
			.setCharacteristic(Characteristic.Manufacturer, "Midi Manufacturer")
			.setCharacteristic(Characteristic.Model, "Midi Model")
			.setCharacteristic(Characteristic.SerialNumber, "Midi Serial Number");

        if (this.service == "Switch") {
            this._service = new Service.Switch(this.name);
            this._service
				.getCharacteristic(Characteristic.On)
				.on('set', this.setPowerState.bind(this));

            this._service.addCharacteristic(Characteristic.Brightness)
            return [this._service];
        }
    }
};
