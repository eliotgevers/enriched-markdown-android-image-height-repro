# Android Markdown image-height reproduction

A single image rendered by `EnrichedMarkdownText` must reserve its full height before the following React Native `Text`. Mixed inline/block images must also occupy separate layout regions.

## Run

```sh
bun install
bun run android
```

Use a development build, not Expo Go: this package contains native code.
The app pins Expo 57.0.26, React Native 0.86.3 and enriched-markdown 1.1.0.
`diagram.png` is an original deterministic PNG fixture included in this repository.

The first example contains no image callback, custom preview, navigation or backend. The second uses the same URL for inline and block images.

For a fix comparison, apply the linked upstream `ImageSpan.getSize` change to the installed package and rebuild the Android app. JavaScript reload alone cannot apply a Kotlin change.
