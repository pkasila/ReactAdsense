# @pkasila/react-adsense

[![npm package][npm-img]][npm-url]
[![Build Status][build-img]][build-url]
[![Downloads][downloads-img]][downloads-url]
[![Issues][issues-img]][issues-url]
[![Code Coverage][codecov-img]][codecov-url]
[![Commitizen Friendly][commitizen-img]][commitizen-url]
[![Semantic Release][semantic-release-img]][semantic-release-url]

> ReactAdsense is a component which allows you to use Google Adsense in React

## Install

```bash
npm install @pkasila/react-adsense
```

### Ads by Google script

**Remember** to include `adsbygoogle.js`:

```html
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
```

## Usage

```tsx
import React from 'react';
import ReactAdsense from '@pkasila/react-katex';

function SimpleAd() {
  return <ReactAdsense client={'ca-pub-XXXXXXXXXXXXXXX'}
                       slot={'YYYYYYYYY'} />;
}

function CustomStyles() {
  return <ReactAdsense client={'ca-pub-XXXXXXXXXXXXXXX'}
                       slot={'YYYYYYYYY'}
                       format={''}
                       style={{width: 960, height: 64}} />;
}

function ResponsiveNativeAds() {
  return <ReactAdsense client={'ca-pub-XXXXXXXXXXXXXXX'}
                       slot={'YYYYYYYYY'}
                       layout={'in-article'}
                       format={'fluid'} />;
}
```

[build-img]:https://github.com/pkasila/ReactAdsense/actions/workflows/release.yml/badge.svg
[build-url]:https://github.com/pkasila/ReactAdsense/actions/workflows/release.yml
[downloads-img]:https://img.shields.io/npm/dt/@pkasila/react-adsense
[downloads-url]:https://www.npmtrends.com/@pkasila/react-adsense
[npm-img]:https://img.shields.io/npm/v/@pkasila/react-adsense
[npm-url]:https://www.npmjs.com/package/@pkasila/react-adsense
[issues-img]:https://img.shields.io/github/issues/pkasila/ReactAdsense
[issues-url]:https://github.com/pkasila/ReactAdsense/issues
[codecov-img]:https://codecov.io/gh/pkasila/ReactAdsense/branch/main/graph/badge.svg
[codecov-url]:https://codecov.io/gh/pkasila/ReactAdsense
[semantic-release-img]:https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-release-url]:https://github.com/semantic-release/semantic-release
[commitizen-img]:https://img.shields.io/badge/commitizen-friendly-brightgreen.svg
[commitizen-url]:http://commitizen.github.io/cz-cli/
