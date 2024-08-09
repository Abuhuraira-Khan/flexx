# Docs & Installation

## Installation

### NPM
```bash
npm install flexx
```

### CDN
```
coming soon
```

## Usage & Example

### Initialize FlexxTyping

#### Basic AutoTyping

- **HTML**
  ```javascript
  new FlexxTyping('#text', {
    textList: ["Hello, world!"],
    speed: 100,
  });
  ```
- **React**
  ```javascript
  new FlexxTyping(textRef.current, {
    textList: ["Hello, world!"],
    speed: 100,
    domSyntax: 'react'
  });
  ```

### Customize the Cursor

To get the default typing cursor with a customizable design:

```javascript
new FlexxTyping('#text', {
    textList: ["Hello, world!"],
    speed: 100,
    cursorColor: '#ff0000',
    cursorHeight: '1em',
    cursorWidth: '2px'
  });
```

If you don't want the default cursor, you can disable it:

```javascript
new FlexxTyping('#text', {
    textList: ["Hello, world!"],
    speed: 100,
    cursor: false
  });
```

### Multiple Text & Looping AutoTyping

To initialize multiple text options with looping:

```javascript
new FlexxTyping('#text', {
    textList: ["Hello, world!", "Welcome to Flexx!"],
    speed: 100,
    loop: true
  });
```

### All Properties

```javascript
new FlexxTyping('type string', {
    textList, // type: array
    speed, // type: number
    cursorColor, // type: string
    cursorHeight, // type: string
    cursorWidth, // type: string
    cursor, // type: boolean
    loop // type: boolean
  });
```

## Syntax With More Explanation

### HTML Syntax
```html
<p id="text"></p>
```

### JavaScript Syntax
```javascript
new FlexxTyping('#text', {
    textList: ["Hello, world!"],
    speed: 100,
  });
```

### React Syntax
```javascript
import { useRef } from 'react';
import { FlexxTyping } from 'flexx';

export default const App = () => {

  const textRef = useRef(null);

  new FlexxTyping(textRef.current, {
      textList: ["Hello, world!", "Welcome to Flexx!"],
      speed: 100,
      domSyntax: 'react'
  });

  return(
      <div>
        <p ref={textRef}></p>
      </div>
  );
}
```

## Author Details

### Social Profiles

- [LinkedIn](https://www.linkedin.com/in/abu-huraira-khan-197415289)
- [GitHub](https://github.com/AbuHurairaKhan)
- [X (Twitter)](https://twitter.com/Abuhuraira_K)
- [YouTube](https://www.youtube.com/@Abuhuraira_Khan)
