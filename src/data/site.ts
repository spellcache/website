const repo = 'https://github.com/spellcache/spellcache';

export const links = {
  repo,
  docs: `${repo}/tree/main/docs`,
  selfHostingGuide: `${repo}/blob/main/docs/self-hosting.md`,
  manualInstall: `${repo}/blob/main/docs/self-hosting.md#21-get-the-files`,
  installScript: `${repo}/blob/main/install.sh`,
  releases: `${repo}/releases`,
  latestRelease: `${repo}/releases/latest`,
  fanContentPolicy: 'https://company.wizards.com/en/legal/fancontentpolicy',
  scryfall: 'https://scryfall.com',
};

export const installCommand = 'curl -fsSL https://get.spellcache.com | sudo sh';

export type FeatureIcon = 'collection' | 'decks' | 'value' | 'trading' | 'sharing' | 'mobile';

export const features: { icon: FeatureIcon; title: string; body: string }[] = [
  {
    icon: 'collection',
    title: 'Collection',
    body: 'Every copy with its finish, condition and language. Binders and lists, with fast search and filters over the whole catalogue.',
  },
  {
    icon: 'decks',
    title: 'Decks',
    body: 'Build from what you own or from cards you don’t have yet. Legality per format; assemble from owned copies, dismantle back.',
  },
  {
    icon: 'value',
    title: 'Value',
    body: 'Daily prices from TCGplayer in $ or Cardmarket in €, per collection, binder and deck.',
  },
  {
    icon: 'trading',
    title: 'Trading',
    body: 'A step-by-step wizard, in person or live with another account. Compare values, add cash, apply it to your collection.',
  },
  {
    icon: 'sharing',
    title: 'Sharing',
    body: 'Shared collections with owner, editor and viewer roles. Public links for decks and binders.',
  },
  {
    icon: 'mobile',
    title: 'Mobile first',
    body: 'Installable as an app, an Android APK with every release, and a sidebar with preview pane on desktop. Sign in with an email link — no passwords.',
  },
];

// Captures à déposer dans src/assets/screenshots/<key>-<device>.png (device :
// mobile 390×844 ou desktop 1440×900) ; sans fichier,
// la page affiche un emplacement réservé.
export const screenshots = [
  { key: 'collection', title: 'Collection', body: 'Search, filter and edit every copy.' },
  { key: 'deck-builder', title: 'Deck builder', body: 'Legality per format, owned vs missing.' },
  { key: 'trade', title: 'Trade', body: 'Both sides, values compared.' },
  { key: 'life-counter', title: 'Life counter', body: 'Built for the table.' },
];

export const dataFlow = [
  { when: 'Every night', title: 'Scryfall bulk data', body: 'Cards, images and prices downloaded once.' },
  { when: 'Worker', title: 'Imported locally', body: 'The worker refreshes the catalogue in your PostgreSQL.' },
  { when: 'All day', title: 'Your server', body: 'Search and browse with zero external API calls.' },
  { when: 'Anywhere', title: 'Your devices', body: 'Phone, tablet or desktop, through your own domain.' },
];
