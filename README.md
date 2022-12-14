> The colors of [@sathmin's](https://github.com/Sathmin-Januth) beautiful [Nora Cora color scheme](https://github.com/Sathmin-Januth/NoraCora-Theme) extracted as a NPM package.

### Installation

```
npm install --save nora-theme
yarn add nora-theme
```

### Usage

```JS
import { dark, light, mirage } from 'nora'

dark.common.bg.hex() === '#0f1419'
light.common.fg.hex() === '#828c99'
mirage.syntax.error.hex() === '#ff3333'

dark.common.bg.rgb() === '15, 20, 25'
light.common.fg.rgb() === '97, 103, 108'
mirage.syntax.error.rgb() === '255, 51, 51'
```

_This package includes TypeScript definitions._

### Colors

<img width="100%" src="./colors.svg">
