### Voice Controlled Drum Machine (LXR Digital DRUM SYNTH)

[![Voice (Siri) Controlled Drum Machine](https://lh3.googleusercontent.com/Fne_D9tGZ6a6CCST5W7yX4zF59s0wiknf5mETOyGDtuRRTusq4bxehiioJvQBBQLwSBbg9oBVa0WGVWAal3oNkQ-Cecf137mbz05yxTj7Hcyw4Z3QtU_9dSxHYe48rya1HsQiKfQStK9nb_-LuD6ZtDiKhTsFhYMjJYK0F9kRd08ZqtrSj6i7zjT05_9xk7q0TXehiPTUfgGuMxfii2DHsI1jrSjaGvBCgPjtXFq1JnYA7IadcsYGoz-ZoveBs2u1WVSEPcya4Hg6IRARrr0XY4l6XdAFtVM5xvCmT5F3j2yvHAunv9J0WT4Th3C5MmIRrhsI8NU022FmSZuf-pIE6b4E5zIkPyEh_9JWowkkeFse-oLzkHYZdvG9PJMsOHOdDD07I9sBUEf4LhHzWkWxwPvSLZgNxmsBJ5BYDYZTEamEGl4ttgoz9E5htTk2XEKWQ1g2uGcqGk-w8We-LvrOd9id1UP4VlHJ0IaPvZzFPUh9KcAGmnAL5KR4eR2KUX2Eom57Dr68Oy6ICt65M3xBDe-TLNI48hZC-2knH6MBCInakomdA40H9O-23xYAh87jues38BTWaTtj7cXnf4pUN8TLVLZKZW-aclDNST_gyxjUJpqT_5edpJHp3pLGVNsk-fnksHp5EfcEpv9ElbED56DGUhNOfo1ofMn5kf0lw=w1440-h1024-no)](https://vimeo.com/222174271 "Voice Controlled Drum Machine")

1. You need to have `node` and `npm` on your machine.
2. Install [homebridge](https://github.com/nfarina/homebridge).
3. Clone this repo `git clone  https://github.com/minikin/VoiceControlledDrumMachine.git`
4. Switch to dir `VoiceControlledDrumMachine` and open project with your favorite text editor i.e. `atom .`
5. Switch to folder (in terminal emulator) `midi-clock` and run `npm i`
6. Connect your usb to midi device or an interface to a computer
7. Open new tab in terminal and run `system_profiler SPUSBDataType`
8. Find your device. In my case `Sonic Potions USB MIDI`
You should see something like this:
  ![midi-clock](https://image.ibb.co/fwbNf5/212.png)
9. Switch to text editor, in folder `midi-clock` open `index.js` replace  on line #56 name of midi device `Sonic Potions USB MIDI` with your .
10. Switch to terminal  (folder `midi-clock`) run   `npm start`.  Set your BPM and keep this tab open and process  running!
  ![Midi clock](https://image.ibb.co/k3hHDQ/Screen_Shot_2017_06_22_at_1_09_27_AM.png)
11. Switch to text editor, in folder `homebridge-lxr` run   `npm i`
11. In text editor find file `machineConfig.json`
12. Modify it for your settings and save.
11. Open new terminal tab and run `cd  /Users/YourUserName/.homebridge-dev/`
12. Create empty `config.json` file at this folder.
13. And copy your settings from `machineConfig.json`
  ![config.json](https://image.ibb.co/k3Ua05/Screen_Shot_2017_06_22_at_1_09_35_AM.png)
14. Open new terminal tab
15. Navigate to a root project path `/VoiceControlledDrumMachine` to folder `/homebridge`
16. Run `DEBUG=* ./bin/homebridge -D -U ~/.homebridge-dev -P ../homebridge-lxr/`
17. If everything is fine you should see something like this:
![config.json](https://image.ibb.co/dYxZtQ/Screen_Shot_2017_06_22_at_1_02_52_AM.png)
18. Take your iOS device.  Locate and open `Home` app.

  ![Home app](https://image.ibb.co/izc37k/1.png)
19. Press `Add Accessory` button. You might be asked to turn on Bluetooth.

  ![Add Accessory](https://image.ibb.co/kVmVnk/2.png)

20. In case everything is works fine you should see screen with you device

  ![Homebridge midi](https://image.ibb.co/fJ7QL5/3.png)

21. Select your device. I'll see notification from Apple. Press `Add anyway`.

  ![Add anyway](https://image.ibb.co/ftjGSk/5.png)

22. Then you need manually enter code (check your terminal)
23.  After that you'll see a few other screens. The meaning of them is self-explanatory.

  ![Add anyway](https://image.ibb.co/e5uuDQ/6.png)
  ![Add anyway](https://image.ibb.co/i7BwSk/7.png)

  `Type` should be a `Switch`

24. You finally successfully added your device to Home app!

  ![Siri](https://image.ibb.co/btrkL5/9.png)

25. Now just ask `Siri` : `Siri turn on drum machine, please` 😍

Enjoy!

Send me a message [@minikin](https://twitter.com/minikin) in case you have any questions.
