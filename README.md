Sure. Here’s a more personal README version:

```md
# EyePause

EyePause is a small desktop eye-break reminder app I made out of boredom because I often get headaches from looking at my screen for too long.

After a set amount of time, the app opens a simple reminder window telling me to take an eye break, rest for a moment, and look away from the screen.

## Features

- Desktop eye-break reminder
- Simple pop-up break window
- Close button
- Customizable timer
- Customizable colors, fonts, and image
- Built with Electron, HTML, CSS, and JavaScript

## Built With

- Electron
- HTML
- CSS
- JavaScript

## How To Run

Install dependencies:

```bash
npm install
```

Start the app:

```bash
npm start
```

## Customization

Main files:

```text
main.js      -> timer and window behavior
break.html   -> break reminder content
styles.css   -> colors, fonts, layout, and close button
assets/      -> images and GIFs
```

To change the reminder delay, edit `main.js`:

```js
const EYE_BREAK_DELAY_MS = 20 * 60 * 1000;
```

To change colors, fonts, or layout, edit `styles.css`.

## Credits

EyePause is based on the  **GreenProductive** project by **Betelgeuse**.

Original project: `GreenProductive`  
Original author: `Betelgeuse`  
Original license: `ISC`

This version was modified into a focused eye-break reminder app.

## License

This project is based on an ISC-licensed project. Please keep the original credit and license notice when sharing or modifying this project.
```
