export const exhibits = [
  {
    id: 'store', label: 'BlockBolt Dashboard', discipline: 'Dashboard design', lens: 'End-to-end ownership',
    title: 'End-to-end UI/UX for a secure blockchain-powered platform.',
    summary: 'A merchant dashboard, designed from research to layout.',
    color: '#b52845', paper: '#f0e7e6', ink: '#43202a',
    metric: '9', metricLabel: 'Merchant modules designed', baselineLabel: 'Project type', baseline: 'Dashboard design',
    detail: 'March 2024, ongoing', detailLabel: 'Project duration',
    artwork: 'Three layered doorway frames with an open path through the centre, an original abstract illustration.',
  },
  {
    id: 'copilot', label: 'BlockBolt App', discipline: 'App design', lens: 'Smooth navigation',
    title: 'Payment simplified, decentralized.',
    summary: 'A secure, user-friendly app for digital transactions.',
    color: '#2d5bcc', paper: '#e2e9f5', ink: '#182c59',
    metric: '3', metricLabel: 'Screens in the payment process', baselineLabel: 'Ways in', baseline: 'Create or import a wallet',
    detail: 'Quick payment processing', detailLabel: 'Focus',
    artwork: 'Four open rectangular modules in blue, lime and white, an original abstract illustration.',
  },
  {
    id: 'hello', label: 'Blockbolt & PocketPay', discipline: 'Social media design', lens: 'Clear messaging',
    title: 'Bold visuals for a tech-savvy audience.',
    summary: 'Social media designs for secure, seamless payments.',
    color: '#d0e266', paper: '#eaf0d3', ink: '#293724',
    metric: '2', metricLabel: 'Brands', baselineLabel: 'Campaign posts', baseline: '5 in this selection',
    detail: 'Strong visuals', detailLabel: 'Focus',
    artwork: 'An abstract pattern of curved dark ridges on lime, an original illustration.',
  },
  {
    id: 'vr', label: 'Linq50', discipline: 'Logo design', lens: 'Brand identity',
    title: 'Unlock the possibilities.',
    summary: 'A UK map-inspired logo for connectivity and collaboration.',
    color: '#dc6b3d', paper: '#f2e8df', ink: '#573020',
    metric: '5', metricLabel: 'Colours in the palette', baselineLabel: 'Brand typeface', baseline: 'Kinn',
    detail: 'Simplicity with modern aesthetics', detailLabel: 'Approach',
    artwork: 'An arch, a blue corner and a lime wedge arranged as dimensional pieces, an original abstract illustration.',
  },
]

export function exhibitAt(index) {
  return exhibits[((index % exhibits.length) + exhibits.length) % exhibits.length]
}

export function exhibitIndex(id) {
  return Math.max(0, exhibits.findIndex(exhibit => exhibit.id === id))
}