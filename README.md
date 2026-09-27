# Birthday V2 — React Edition 🎂

A React/Vite conversion of the original sapthesh/Birthday-V2 experience.

## Includes

- Interactive envelope opening
- Animated envelope flap and seal
- Letter reveal
- Left/right memory photo cards
- Responsive mobile layout
- Typewriter "Happy Birthday" greeting
- Randomized floating balloons
- Animated birthday cake and candle
- Original visual style preserved
- React state instead of DOM event listeners

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite gives you.

## Personalize it

### 1. Name and final message

Open:

```text
src/components/FinalCard.jsx
```

Change:

```jsx
<h2 className="name">YOUR SISTER'S NAME!</h2>
```

and the `<p className="wish-message">`.

### 2. Letter

Open:

```text
src/components/Letter.jsx
```

Replace the letter paragraphs with your own message.

### 3. Photos

Put four images in:

```text
public/images/
```

using these exact names:

```text
photo1.jpg
photo2.jpg
photo3.jpg
photo4.jpg
```

You can use PNG/WebP too, but then update the `src` values in `Letter.jsx`.

## Build for deployment

```bash
npm run build
```

The production files will be generated in `dist/`.
