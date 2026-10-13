# spellcache website

The source of [spellcache.com](https://spellcache.com), the website of
[spellcache](https://github.com/spellcache/spellcache): a static site built
with [Astro](https://astro.build) and deployed on Cloudflare Workers.

## Development

Requirements: Node.js 24 and pnpm 10.

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm check      # type-check the Astro files
pnpm build      # static output in dist/
```

## Content

- Page copy lives in `src/pages/` and the lists (features, screenshots, data
  flow, links) in `src/data/site.ts`.
- Screenshots go in `src/assets/screenshots/`, named `<key>-mobile.png`
  (390×844) and `<key>-desktop.png` (1440×900), with the keys listed in
  `src/data/site.ts`. A missing file shows a placeholder.
- Fonts are self-hosted through Fontsource; the site loads nothing from a third
  party.

## Deployment

The site is a Cloudflare Worker that only serves static assets
(`wrangler.jsonc`). Workers Builds deploys `main` on every push and uploads a
preview version for other branches:

| Setting | Value |
| --- | --- |
| Build command | `pnpm build` |
| Deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler versions upload` |
| Build variables | `NODE_VERSION=24`, `PNPM_VERSION=10.27.0` |

- `public/_headers` sets the security headers (strict CSP: no inline script or
  style, no third-party origin).
- `public/_redirects` maps `/install.sh` to the installer of the latest
  release.
- `www.spellcache.com` and `get.spellcache.com` are Cloudflare redirect rules
  on the zone: `www` to the apex, `get` (302) to
  `https://github.com/spellcache/spellcache/releases/latest/download/install.sh`.

To test the production behaviour locally (headers, redirects, 404):

```bash
pnpm build && pnpm exec wrangler dev
```

## Contributing

See the [spellcache organisation](https://github.com/spellcache) defaults for
the contributing guide, code of conduct and security policy.

## License

[MIT](LICENSE)
