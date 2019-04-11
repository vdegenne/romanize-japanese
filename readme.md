# romanize-japanese

romanize-japanese is a Node.js ES6 Module port of `hepburn` package. It's used to convert Hiragana/Katakana to Roman (or vice versa).

visit the [original repository](https://github.com/lovell/hepburn) for more information about `hepburn`.

## installation

```bash
yarn add romanize-japanese
// or
npm install romanize-japanese
```

## Usage

### on a webpage

```javascript
<script type=module>
  import * as romanize from './node_modules/romanize-japanese/romanize-japanese.js'
  console.log(romanize.fromKana('みみ')) // outputs "MIMI"
</script>
```
*(mention: `node_modules` needs to be publicly accessible from the client)*

### in a node es module

```javascript
import * as romanize from 'romanize-japanese'

console.log(romanize.fromKana('みみ')) // outputs "MIMI"
```

## Known limitations

This module will only convert hiragana/katakana literals to roman but will not convert any Kanji characters.

## Build

- fork this repository
- `yarn install` to install the default dependencies (in `package.json`)
  - (but for instance) if you want to build another version of `hepburn` use `yarn add hepburn@<version>`
- then run `yarn build`
- now `romanize-japanese.mjs` is containing the esm code of `hepburn`