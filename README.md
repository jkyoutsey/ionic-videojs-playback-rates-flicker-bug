Illustrates the following issues:

- videojs playback rate button flickering in an ionic tab application. (This has been determined to be a bug with Ionic version)
- Android only - video.js won't go into picture-in-picture mode

## Steps to reproduce

```bash
npm install
npx cap sync android
npx cap open android
```

- Open the app on a device in Android Studio.
- Click the play button and then try to open the playback rate menu.
- Notice that the playback rate opens the menu, but then it immediately closes.
- Notice that the picture-in-picture button is disabled.
