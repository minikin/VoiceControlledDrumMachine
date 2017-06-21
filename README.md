### Voice Controlled Drum Machine (LXR Digital DRUM SYNTH)

### THIS DOCUMENT WILL UPDATED!

1. You need to have `node` and `npm` on your machine.
2. Install [homebridge](https://github.com/nfarina/homebridge).
3. Clone this repo `git clone  https://github.com/minikin/VoiceControlledDrumMachine.git`
4. Switch to dir `VoiceControlledDrumMachine` and open project with your favorite text editor i.e. `atom .`
5. Switch to folder (in terminal emulator) `midi-clock` and run `npm i`
6. Connect your usb to midi device or an interface to a computer
7. Open new tab in terminal and run `system_profiler SPUSBDataType`
8. Find your device. In my case `Sonic Potions USB MIDI`
9. Switch to text editor, in folder `midi-clock` open `index.js` replace  on line #56 name of midi device `Sonic Potions USB MIDI` with your .
10. Switch to terminal  (folder `midi-clock`) run   `npm start`.  Set your BPM and keep this tab open and process  running!
11. Switch to text editor, in folder `homebridge-lxr` run   `npm i`
11. In text editor find file `machineConfig.json`
12. Modify it for your settings and save.
11. Open new terminal tab and run `cd  /Users/YourUserName/.homebridge-dev/`
12. Create empty `config.json` file at this folder.
13. And copy your settings from `machineConfig.json`
14. Open new terminal tab
15. Navigate to a root project path `/VoiceControlledDrumMachine` to folder `/homebridge`
16. Run `DEBUG=* ./bin/homebridge -D -U ~/.homebridge-dev -P ../homebridge-lxr/`
17. If everything is fine you should see something like this:


That's mean that you're almost ready to control your midi device with voice.



Send me a message [@minikin](https://twitter.com/minikin)
