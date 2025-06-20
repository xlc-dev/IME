// @refresh reload
import { createHandler, StartServer } from "@solidjs/start/server";

export default createHandler(() => (
  <StartServer
    document={({ assets, children, scripts }) => (
      <html lang="en">
        <head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>QuickIME – An Input Method Editor that doesn't suck</title>
          <link rel="icon" href="icon.png" />
          <meta name="author" content="xlcdev" />
          <meta
            name="description"
            content="A local-first Input Method Editor (IME) for Japanese, aiming for a fast and frustration-free experience. Since all IME's on Linux/Windows/Android are annoying or slow."
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="A local-first Input Method Editor (IME) for Japanese, aiming for a fast and frustration-free experience. Since all IME's on Linux/Windows/Android are annoying or slow."
          />
          <meta
            property="og:description"
            content="A local-first Input Method Editor (IME) for Japanese, aiming for a fast and frustration-free experience. Since all IME's on Linux/Windows/Android are annoying or slow."
          />
          <meta property="og:image" content="https://xlc-dev.github.io/QuickIME/icon.png" />
          <meta property="og:url" content="https://xlc-dev.github.io/QuickIME/" />

          <meta name="twitter:title" content="QuickIME" />
          <meta
            name="twitter:description"
            content="A local-first Input Method Editor (IME) for Japanese, aiming for a fast and frustration-free experience. Since all IME's on Linux/Windows/Android are annoying or slow."
          />
          <meta name="twitter:image" content="https://xlc-dev.github.io/QuickIME/icon.png" />
          {assets}
        </head>
        <body>
          <div id="app">{children}</div>
          {scripts}
        </body>
      </html>
    )}
  />
));
