const midi = require('midi');
const readline = require('readline');
const midiOutputs = [];

// Helper to handle user input in console
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Midi -- return port number or throw error if not found
function OutPortNumberFromName(portName) {
    const out = new midi.output();
    for (let i = 0; i < out.getPortCount(); i++) {
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

function sleep(delay) {
    const start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

function prepareMidiData(bpm, outPort, channel){

  const now = Date.now();
  const bytes = [248];
  const msPerTick = (60 * 1000 / bpm) / 24;

  if (outPort != null) {
    for (let ticks = 1; ticks <= 24; ticks++) {
      sleep(Math.round(msPerTick));
      OutputForPortNumber(outPort).sendMessage(bytes);
    }
  } else {
    throw new Error("Couldn't find MIDI port '" + outPort + "'");
  }
}

// Send midi clock to midi port
function sendMidiClock(bpm){
  console.log(`Sending midi clock ${bpm} BPM ...`);
  rl.close();
  while (true) {
    prepareMidiData(bpm, OutPortNumberFromName("Sonic Potions USB MIDI"), 1);
  }
}

rl.question('What BPM do you prefere ? ', (bpm) => {
  if (bpm <= 300){
    sendMidiClock(bpm);
  } else {
    console.log("Can't do this. Try another value.");
  }
});
