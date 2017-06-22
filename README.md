### Voice Controlled Drum Machine (LXR Digital DRUM SYNTH)

### THIS DOCUMENT WILL BE UPDATED TONIGHT! (22.06.2017)

[![Voice Controlled Drum Machine](https://lh3.googleusercontent.com/Fne_D9tGZ6a6CCST5W7yX4zF59s0wiknf5mETOyGDtuRRTusq4bxehiioJvQBBQLwSBbg9oBVa0WGVWAal3oNkQ-Cecf137mbz05yxTj7Hcyw4Z3QtU_9dSxHYe48rya1HsQiKfQStK9nb_-LuD6ZtDiKhTsFhYMjJYK0F9kRd08ZqtrSj6i7zjT05_9xk7q0TXehiPTUfgGuMxfii2DHsI1jrSjaGvBCgPjtXFq1JnYA7IadcsYGoz-ZoveBs2u1WVSEPcya4Hg6IRARrr0XY4l6XdAFtVM5xvCmT5F3j2yvHAunv9J0WT4Th3C5MmIRrhsI8NU022FmSZuf-pIE6b4E5zIkPyEh_9JWowkkeFse-oLzkHYZdvG9PJMsOHOdDD07I9sBUEf4LhHzWkWxwPvSLZgNxmsBJ5BYDYZTEamEGl4ttgoz9E5htTk2XEKWQ1g2uGcqGk-w8We-LvrOd9id1UP4VlHJ0IaPvZzFPUh9KcAGmnAL5KR4eR2KUX2Eom57Dr68Oy6ICt65M3xBDe-TLNI48hZC-2knH6MBCInakomdA40H9O-23xYAh87jues38BTWaTtj7cXnf4pUN8TLVLZKZW-aclDNST_gyxjUJpqT_5edpJHp3pLGVNsk-fnksHp5EfcEpv9ElbED56DGUhNOfo1ofMn5kf0lw=w1440-h1024-no)](https://vimeo.com/222174271 "Voice Controlled Drum Machine")

1. You need to have `node` and `npm` on your machine.
2. Install [homebridge](https://github.com/nfarina/homebridge).
3. Clone this repo `git clone  https://github.com/minikin/VoiceControlledDrumMachine.git`
4. Switch to dir `VoiceControlledDrumMachine` and open project with your favorite text editor i.e. `atom .`
5. Switch to folder (in terminal emulator) `midi-clock` and run `npm i`
6. Connect your usb to midi device or an interface to a computer
7. Open new tab in terminal and run `system_profiler SPUSBDataType`
8. Find your device. In my case `Sonic Potions USB MIDI`
You should see something like this:
![midi-clock](https://lh3.googleusercontent.com/MWa0423sMiEP3_zmn19JkUZNpdZp2ygq1fntbs510ZeInZxRdmrCHO6yREDdhmQ4ZtFpEGEBZTm6fXzszCAgEgFi-pc2kQaViJ58vc8FlHF8oKAf34tta0CjtIhMQnRQjF2ygbegpAbRYgpz_c9BNkUH79cb6-k33tCdKzQiqqZ6h0-mLJF37PUSMknQY8rK5qxY0IX8ulFTu_cbtSonecs1VfggfqIsub0sVAiWEWQ7bPRVClDT4nTIkxwtFiBFF30oU9EWO2vUaMTry87-MXEW_H3d-pcXMnUoMc6fjE9G1x0KpnYAAfIogHuraPwyiW--3YYLAxL6q6di7f2IkldMDIO8NQYiQCyV6onc0QAmIFt9tEJS7mxz51ZxyQmChAFERqWyPjfUJBlyN6j_fqQHv1J70s3xGmjyU5Q2289iuh5WBknlw4PLzDJCH4f_GTbnF0zS29AqP-XX50rqAIZF9XsqicPS_4iMpShvkzayIMjvmdpOyVLk72O48yZs9eIxGRVwxOMqRwaX6WP5KzOlt6gbmI3GZSOLViB-MQxnMRsXC7mWjg5pDyV0pww0F6ksoEnC49LT1PTfKTanHyYkFyqMQsejVMIZS8RhiNSitR9npMYU=w387-h394-no)
9. Switch to text editor, in folder `midi-clock` open `index.js` replace  on line #56 name of midi device `Sonic Potions USB MIDI` with your .
10. Switch to terminal  (folder `midi-clock`) run   `npm start`.  Set your BPM and keep this tab open and process  running!
![Midi clock](https://lh3.googleusercontent.com/Q36CRBF9aHkPLVeKTFgR59-w6r-QtwJ-QYuZ7UbC8PZ9D3_eIyr4zEoqHOHpN8qqT_xKMZbVvDrf95iHd-2-39O0SBXP16PcSHeRvZT5uR1f8lLKf8KmGkPPlh2lorRIXsMRp-5-_EKJ8GiJIPZdO9sxEX1N7vJCiwBbGo4cHCq6976JVCMiAgF5LqZsTuOfHudbK-c5yv5v0aDdtcaUxN20qz0lahRy5hnAv_-S38H8khybgGbgxFjd4dex18ti2y5nEdxTuSaQd6R8Az8k2j9BY_jUWN73On-_LH_Vu1MWLlRnHIM2optGE0RvRGseRXBLnVNQnXdWEm2W3x7XOrQT8eEVlwCARPB-u0smNruq6CTDxsrUa6Lrhx3ZOIDV0_ujVbj5K8lqhi7-xZaxBhT0JvE7iAEZ0vYmJP-MZ5tkxPMuJ7Oabb6KWa4rhgV9RC1wuHMGDyI_aGXCvjfrzYdDbaPkFSdbDxOv7Ew90g2bWUeVMDTefEhKJyS6nu6ggdiG6CmspqAt__Wa_sD9MFJgNIeEKqvcEJ41jQq4mD3kTN9Jm-VG2p6EMWS-WwWOOk79Q8vwNO-Y_4yymp8GtgUbeJd_JkVy3oOrIdrqJ2R-G0Tc=w1146-h794-no)
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
