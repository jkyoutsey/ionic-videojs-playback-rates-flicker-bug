Illustrates issue with videojs playback rate button flickering in an ionic tab application.

## Steps to reproduce

```bash
npm install
ionic serve
```

- Open the site localhost:8100 in Chrome.
- Open Chrome DevTools and switch to mobile device view.
- Click the play button and then try to open the playback rate menu.
- Notice that the playback rate opens the menu, but then it immediately closes.
