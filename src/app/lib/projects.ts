import type { ProjectId } from './routes.js'
import dashboardScreen from '../../assets/work/blockbolt-dashboard.webp'
import posScreen from '../../assets/work/blockbolt-pos.webp'
import paylinksScreen from '../../assets/work/blockbolt-paylinks.webp'
import universalScreen from '../../assets/work/blockbolt-universal.webp'
import ordersScreen from '../../assets/work/blockbolt-orders.webp'
import invoicesScreen from '../../assets/work/blockbolt-invoices.webp'
import questScreen from '../../assets/work/blockbolt-quest.webp'
import usecasesScreen from '../../assets/work/blockbolt-usecases.webp'
import settingsScreen from '../../assets/work/blockbolt-settings.webp'
import appSplash from '../../assets/work/blockbolt-app-splash.webp'
import appPayment from '../../assets/work/blockbolt-app-payment.webp'
import karrierPost from '../../assets/work/blockbolt-karrier-post.webp'
import pocketpayPost from '../../assets/work/pocketpay-post.webp'
import linq50Brand from '../../assets/work/linq50-brand.webp'
import designoBusinessCard from '../../assets/work/designo-business-card.webp'
import designoBoothBackdrop from '../../assets/work/designo-booth-backdrop.webp'
import designoPhotobookPages from '../../assets/work/designo-photobook-pages.webp'
import designoSportsTee from '../../assets/work/designo-sports-tee.webp'
import designoTeeParts from '../../assets/work/designo-tee-parts.webp'
import designoTshirt from '../../assets/work/designo-tshirt.webp'
import designoMailerBox from '../../assets/work/designo-mailer-box.webp'
import designoTuckBox from '../../assets/work/designo-tuck-box.webp'
import designoThreeWallBooth from '../../assets/work/designo-three-wall-booth.webp'
import designoTextPanel from '../../assets/work/designo-text-panel.webp'
import designoQrCodes from '../../assets/work/designo-qr-codes.webp'
import designoLayers from '../../assets/work/designo-layers.webp'
import designoMobileTshirt from '../../assets/work/designo-mobile-tshirt.webp'
import designoMobileBoxPreview from '../../assets/work/designo-mobile-box-preview.webp'
import designoMobileBooth from '../../assets/work/designo-mobile-booth.webp'
// [Placeholder] Grayscale copies of the new editor stand in for the previous studio until its real screens arrive.
import designoBeforeBusinessCard from '../../assets/work/designo-before-placeholder-business-card.webp'

export type Metric = { value: string; label: string }
export type Shot = { src: string; alt: string; width: number; height: number; caption?: string }
export type Quote = { text: string; source: string }
// Words from colleagues and clients; an ellipsis marks each cut. `highlight` is quoted verbatim from `text`.
export type Endorsement = { text: string; role: string; highlight?: string }
export type Flow = { label: string; steps: string[] }
// Rendered by the Remotion project in video/ into public/films.
// NDA films are AES-GCM encrypted; their key and iv only exist inside the unlocked case study.
export type Film = { src: string; poster: string; captions: string; duration: string; key?: string; iv?: string }

export type CaseStudy = {
  problem: { body: string; stats?: Metric[]; quote?: Quote }
  insight: string
  contrast?: { title: string; items: string[]; keep: boolean }[]
  // `basis` says where a decision's evidence comes from, such as the designer's confirmed role or the live product.
  decisions: { title: string; body: string; shots: Shot[]; flows?: Flow[]; compare?: true; basis?: string }[]
  result: { title?: string; body: string; metrics?: Metric[]; note?: string; quote?: Quote; changes?: [string, string][]; shots?: Shot[] }
  takeaway: { line: string; body?: string }
  partners?: Endorsement[]
  film?: Film
  // Replaces the public cover once a locked case study is opened.
  cover?: Shot
}

type Teaser = {
  id: ProjectId
  name: string
  category: string
  headline: string
  description: string
  summary: string
  role: string
  organization: string
  timeline?: string
  status?: string
  // Left out until Rahul confirms who he worked with; the case study then skips the Team row.
  team?: string
  scope: string
  metrics: Metric[]
  color: string
  ink: string
  cover: Shot
  // Earlier work is listed on the Work page only, after the featured projects.
  earlier?: true
  // Self-initiated or challenge work that wasn't built: Work page only, labelled as a concept.
  concept?: true
}

// Locked case studies live encrypted in src/protected/<id> and open with a password.
export type Project = Teaser & ((CaseStudy & { locked?: never }) | { locked: true })

// Copy and screens come from Rahul's Figma portfolio (rb-portfolio). Figures are counts of what those designs show, not results.
// DesignO screens are captures of the live DesignO editor demos; its figures are Design'N'Buy's published ones.
// Values marked [Placeholder] have no source in the Figma file yet and need Rahul's own content.
export const projects: Project[] = [
  {
    id: 'designo',
    name: 'DesignO',
    category: 'Product redesign · Web-to-print',
    headline: 'One editor for everything a print shop sells.',
    description: "Design'N'Buy's director asked me to redesign DesignO, the company's 14-year-old flagship product designer. I owned the revamp end to end, UX and UI, and in 10 months it launched as one editor for merchandise, printing, packaging and photo books.",
    summary: "I led the end-to-end redesign of a 14-year-old web-to-print editor, turning products that each worked differently into one editor and design system, launched in 10 months.",
    role: 'Lead UI/UX & Product Designer',
    organization: "Design'N'Buy",
    timeline: 'May 2025 to March 2026',
    status: 'Launched March 2026',
    team: "Brief from Design'N'Buy's director; built with developers and stakeholders",
    scope: 'End to end: audit, UX strategy, user flows, wireframes, prototypes, UI in Figma, design system, responsive and mobile design, implementation review',
    metrics: [
      { value: '10 months', label: 'From brief to launch, a complete revamp' },
      { value: '14 years', label: 'Of product, rebuilt as a modern platform' },
    ],
    problem: {
      body: "DesignO is Design'N'Buy's product personalization platform. A print shop connects it to its online store; shoppers design a product in the browser, check it in 2D and 3D, see the price as they go, and the shop receives a print-ready file. Over 14 years it grew to cover business cards, banners, booths, apparel, boxes and photo books, and my director asked me to rethink the whole experience. I started from three working hypotheses: each product type had grown its own way of doing the same task; print rules such as bleed, sizes and dielines reached shoppers in production language; and options, design and price sat apart, so a shopper couldn't see what a choice changed while designing.",
      stats: [
        { value: '2,000+', label: "Print businesses using Design'N'Buy, as the company reports" },
        { value: '1,000+', label: 'Packaging models with dielines and live 3D, as the company reports' },
        { value: '4', label: 'Ready store integrations: Shopify, WooCommerce, Magento and BigCommerce' },
      ],
    },
    insight: 'Print shops sell very different products, but their customers do the same four things: choose, design, check and buy.',
    contrast: [
      { title: 'Carried forward: what 14 years of product had to keep doing', items: ['Live pricing from product options', 'Print-ready output with bleed and safe areas', 'Dielines and 3D for packaging', 'Multi-page and multi-panel products', 'Names and numbers in bulk'], keep: true },
      { title: 'Made consistent: what every product now shares', items: ['One tool rail and options panel', 'One canvas with the same print guides', 'One 2D and 3D preview', 'One price, always visible'], keep: true },
    ],
    decisions: [
      {
        basis: 'Placeholder before image',
        title: 'From a studio that grew for 14 years to one designed as a whole',
        body: "The previous studio had collected 14 years of features. I audited it product by product, mapped every option and tool, and rebuilt the experience around the shopper's task instead of the feature list. Drag the handle to compare.",
        compare: true,
        shots: [
          { src: designoBeforeBusinessCard, alt: 'Placeholder for the previous DesignO studio: a grayscale copy of the new editor', width: 1568, height: 726, caption: 'Before: placeholder, to be replaced with the previous studio' },
          { src: designoBusinessCard, alt: 'The redesigned DesignO editor with a business card, options, print guides and live price', width: 1568, height: 726, caption: 'After: the redesigned editor' },
        ],
      },
      {
        basis: 'Shipped',
        title: 'One editor shell for every product',
        body: 'Every product opens in the same frame: tools on a left rail, the product and its options beside them, the canvas in the middle, a live preview on the right, and Save, Share, Download and the price across the top. A shopper who has designed a business card already knows where everything is on a box or a T-shirt, and the team builds one frame instead of one per product. I designed this shell, and everything inside it, from the first flows and wireframes to prototypes and the final UI in Figma.',
        shots: [{ src: designoBusinessCard, alt: 'DesignO editor with a business card on the canvas: tool rail, product options for size, paper type, corner radius and delivery, safe, cut and bleed guides, and a live price of ₹62.5 in the top bar', width: 1568, height: 726, caption: 'Printing: a business card in the shared editor shell' }],
      },
      {
        basis: 'Shipped',
        title: 'Options, design and price in one view',
        body: 'Product options live in the Info panel next to the canvas, with required choices marked, and the price on the cart button updates as they change. Apparel shows the maths openly: a size-and-quantity grid, the average print price and the artwork setup price. The hypothesis was that shoppers abandon custom orders when price arrives as a surprise at checkout, so cost stays visible during every decision.',
        flows: [
          { label: 'The shopper journey in the redesigned editor', steps: ['Choose options', 'Design', 'Check in 2D and 3D', 'See the price update', 'Save, share or add to cart'] },
        ],
        shots: [{ src: designoTshirt, alt: 'DesignO editor with a T-shirt: colour swatches, printing method, a size and quantity grid with per-size prices, average print price and artwork setup price, and Front, Back, Left and Right views', width: 1568, height: 726, caption: 'Merchandise: colours, printing method and size-by-size pricing beside the design' }],
      },
      {
        basis: 'Shipped',
        title: 'Make print rules visible, not technical',
        body: 'Safe, cut and bleed appear as coloured guides on the canvas with a small legend, and the product size sits under it, so shoppers keep text inside the safe area without learning print terms. The 3D preview closes the gap between a flat file and the real object: here a backdrop bends the way it will on the stand.',
        shots: [{ src: designoBoothBackdrop, alt: 'DesignO editor with a booth backdrop: safe, cut and bleed guides on the flat artwork and a 3D preview of the curved backdrop', width: 1568, height: 726, caption: 'Large format: print guides on the canvas, the curved backdrop in 3D' }],
      },
      {
        basis: 'Shipped',
        title: 'Let each product add only what it needs',
        body: 'The shell stays fixed; product-specific tools appear only where they matter. Apparel adds Front, Back, Left and Right views, Name & Number (typed in or uploaded as a CSV) and Parts, where each panel of a sports shirt gets its own colour or material. Packaging works on the dieline with Outside and Inside sides and a live 3D box. Photo books add a Pages panel of named spreads, and a 3-wall booth pages through its walls with Duplicate Page. New product types become configuration rather than a new interface.',
        shots: [
          { src: designoTeeParts, alt: 'DesignO Parts panel for a sports T-shirt: main body, sleeves, collar and sleeve ends, each with colour and material swatches', width: 1486, height: 726, caption: 'Merchandise: parts and materials' },
          { src: designoMailerBox, alt: 'DesignO editor with a custom mailer box dieline, material and finish options, Outside and Inside sides, and a live 3D preview of the open box', width: 1568, height: 726, caption: 'Packaging: dieline and live 3D' },
          { src: designoPhotobookPages, alt: 'DesignO photo book with the cover on the canvas and a Pages panel listing the front cover and each two-page spread', width: 1488, height: 726, caption: 'Photo books: pages as spreads' },
          { src: designoThreeWallBooth, alt: 'DesignO editor with a 3-wall enclosed booth: page 1 of 3 on the canvas, Duplicate Page, and a 3D preview of the walls', width: 1568, height: 726, caption: 'Large format: one booth, three walls' },
        ],
      },
      {
        basis: 'Shipped',
        title: 'Tools grouped by what shoppers make',
        body: 'The rail is organized around content, not software: Text, Art, Photos, Codes, Designs, Background and Templates. Text starts from roles such as Heading, Sub Heading, Body and Curve rather than font settings, with AI help at the top. Codes turns a website, phone number or map location into a QR code. Layers gives finer control to those who want it, with edit, arrange, hide and lock on every element, while staying out of the way for everyone else.',
        shots: [
          { src: designoTextPanel, alt: 'DesignO Text panel with an AI option and text styles for heading, sub heading, body, paragraph, circular and curved text', width: 1486, height: 726, caption: 'Text by role, with AI' },
          { src: designoQrCodes, alt: 'DesignO QR Code Generator with sources such as website URL, social media, YouTube video, phone number, email and Google Maps location', width: 1486, height: 726, caption: 'QR codes from what shoppers have' },
          { src: designoLayers, alt: 'DesignO Layers panel listing the business card elements with edit, arrange, visibility, lock and move controls', width: 1488, height: 726, caption: 'Layers for finer control' },
        ],
      },
      {
        basis: 'Shipped',
        title: 'Designed for the phone, not shrunk to it',
        body: 'On a phone the canvas gets the screen. The tool rail becomes a bottom tab bar (Info, Text, Art and Photos, with more behind it), Settings, Preview and Layers sit as round buttons just above it, and the top bar keeps only icons, with the cart always one tap away. The 3D preview opens as its own sheet instead of fighting the canvas for space, while the print guides, product views and page navigation stay exactly where shoppers expect them.',
        shots: [
          { src: designoMobileTshirt, alt: 'DesignO on a phone: a T-shirt on the canvas with Front, Back, Left and Right views, round Settings, Preview and Layers buttons, and a bottom tab bar with Info, Text, Art and Photos', width: 390, height: 844, caption: 'Merchandise: views and tools within thumb reach' },
          { src: designoMobileBoxPreview, alt: 'DesignO on a phone: the live 3D preview of an open mailer box shown as a full sheet', width: 387, height: 842, caption: 'Packaging: the 3D preview as its own sheet' },
          { src: designoMobileBooth, alt: 'DesignO on a phone: a 3-wall booth with safe, cut and bleed guides, page 1 of 3 navigation and the product size', width: 389, height: 842, caption: 'Large format: guides and pages kept on mobile' },
        ],
      },
      {
        basis: 'Shipped',
        title: 'A design system that scales across products and screens',
        body: "Every product reuses the same parts: the icon rail, options fields with required markers, segmented controls such as Outside and Inside or 2D and 3D, the zoom control and the preview pane. That keeps a growing catalogue consistent and makes new product types cheaper to build. I built the design system behind it and designed the responsive layouts, so the same components carry from desktop to tablet to phone.",
        shots: [{ src: designoTuckBox, alt: 'DesignO editor with a straight tuck box dieline using the same tool rail, options fields, Outside and Inside control and live 3D preview as the other products', width: 1568, height: 726, caption: 'The same components on a different product: a straight tuck box' }],
      },
      {
        basis: 'How I worked',
        title: 'Designing with engineering, not handing over to it',
        body: "Modernizing a 14-year-old product meant keeping everything businesses relied on while changing how it felt. I took the brief from my director, shaped the product strategy with stakeholders, and worked with developers through implementation, reviewing builds against the Figma designs so the revamp stayed consistent across every product type until launch in March 2026.",
        shots: [],
      },
    ],
    result: {
      title: 'Outcome',
      body: "The revamped DesignO launched in March 2026, ten months after the brief, and clients have welcomed it. One editor now runs merchandise, printing, packaging and photo books: shared tools and print guides, product-specific panels only where needed, a 2D and 3D preview and a price that is always visible. For the business, a new product type is now configuration work, not a new interface.",
      // [Placeholder] Add post-launch metrics here once Rahul has real figures, such as conversion or clients live.
      changes: [
        ['A 14-year-old flagship product', 'A modern, scalable platform'],
        ['A different way of working per product', 'One editor shell for every product'],
        ['Print rules in production language', 'Guides shoppers can see on the canvas'],
      ],
    },
    takeaway: {
      line: 'A platform scales when a new product is configuration, not a new interface.',
      body: "The hardest part of redesigning a long-lived product is deciding what must stay the same. Owning it end to end, from the audit to the last review before launch, meant every decision could be traced back to the shopper's four steps: choose, design, check and buy.",
    },
    color: '#5b54e0',
    ink: '#f5f4ff',
    cover: { src: designoSportsTee, alt: 'DesignO editor with a sports T-shirt: printing method, size and quantity pricing, Front, Back, Left and Right views, and a 3D preview of the layered design', width: 1568, height: 726 },
  },
  {
    id: 'blockbolt-dashboard',
    name: 'BlockBolt Dashboard',
    category: 'Dashboard design',
    headline: 'Crypto payments, made manageable for everyday merchants.',
    description: 'As the solo designer, I took the BlockBolt merchant dashboard from research to final UI: nine modules for accepting payments, invoicing, running a POS and tracking revenue across ICP, Solana and SUI.',
    summary: 'As the solo designer, I designed BlockBolt’s merchant dashboard end to end, from personas and information architecture to nine modules of UI.',
    role: 'Solo UI/UX designer',
    organization: 'BlockBolt',
    timeline: 'March 2024 to now',
    team: 'Solo UI/UX designer, leading the entire design process with business owners and project managers',
    scope: 'Research, user persona, user flows, information architecture, typography, colours and layouts',
    metrics: [
      { value: '9', label: 'Merchant modules designed' },
      { value: '3', label: 'Chains in orders: ICP, Solana and SUI' },
    ],
    problem: {
      body: 'BlockBolt is a decentralized payment system: businesses accept crypto online and in stores, users hold a secure wallet, and payments can recur automatically. The barrier is not the technology but the experience. Merchants find crypto setups complex and the tools hard to use, and both merchants and their customers worry about the security of handling digital currency.',
      quote: { text: 'I want to accept crypto payments, but it seems complicated and unclear.', source: 'Sarah Thompson, user persona: a small business owner, 32, moderately tech-savvy' },
    },
    insight: 'Users need a hassle-free, intuitive way to make and accept crypto payments without complex setups or confusing workflows.',
    contrast: [
      { title: 'Kept: what merchants need', items: ['User-friendly dashboard', 'Real-time transaction tracking', 'Strong security measures'], keep: true },
      { title: 'Removed: what existing platforms get wrong', items: ['Cluttered interfaces', 'Unclear transaction visibility', 'Complex setups', 'Confusing workflows'], keep: false },
    ],
    decisions: [
      {
        title: 'Organize every feature around what merchants do',
        body: 'I designed the information architecture of the dashboard to ensure smooth navigation. By organizing key features in a clear, logical way, merchants can access important actions and information quickly. I then mapped user flows for specific tasks, such as creating an invoice: the merchant logs in, navigates to the invoice section, clicks "Create Invoice," fills in the necessary details and finalizes the invoice.',
        flows: [
          { label: 'User flow: creating an invoice', steps: ['Start', 'Login', 'Verify OTP', 'Dashboard', 'Create invoice', 'Fill details', 'Generate invoice'] },
        ],
        shots: [{ src: invoicesScreen, alt: 'BlockBolt invoices page with a create invoice form beside a live invoice preview', width: 1600, height: 764, caption: 'Invoices' }],
      },
      {
        title: 'Put stats and payments first',
        body: 'I designed a dashboard where merchants can easily track their stats and payments. The layout presents key financial insights, recent transactions, and performance metrics in a clear, user-friendly way.',
        shots: [{ src: dashboardScreen, alt: 'BlockBolt dashboard with total earned, total transactions, revenue statistics, a monthly comparison and a table of recent payments', width: 1600, height: 764, caption: 'Dashboard' }],
      },
      {
        title: 'Give each part of the business its own place',
        body: 'The POS section helps merchants manage orders, add categories, update products, and handle customers. Paylinks let them create and share payment links and track payment statuses. The Orders page organizes orders by blockchain, providing a clear overview of transactions.',
        shots: [
          { src: posScreen, alt: 'BlockBolt POS section listing orders with their status, amount and customer', width: 1600, height: 764, caption: 'POS' },
          { src: paylinksScreen, alt: 'BlockBolt Paylinks page with a list of payment links and a panel to create a new one', width: 1600, height: 764, caption: 'Paylinks' },
          { src: ordersScreen, alt: 'BlockBolt Orders page listing orders across blockchains', width: 1600, height: 764, caption: 'Orders' },
        ],
      },
    ],
    result: {
      title: 'Outcome',
      body: 'Payments, invoices, POS, paylinks, orders, payouts, quests and settings now share one structure and one visual language. A merchant new to crypto can see what came in, on which chain, and what to do next, without learning blockchain terms first.',
      shots: [
        { src: universalScreen, alt: 'BlockBolt Universal page listing completed payouts with their transaction details', width: 1600, height: 764, caption: 'Universal' },
        { src: questScreen, alt: 'BlockBolt Quest page with current quests and a leaderboard', width: 1600, height: 764, caption: 'Quest' },
        { src: usecasesScreen, alt: 'BlockBolt Usecases page showing ways to use BlockBolt across its ecosystem', width: 1600, height: 764, caption: 'Usecases' },
        { src: settingsScreen, alt: 'BlockBolt Settings page for account information and payment configuration', width: 1600, height: 764, caption: 'Settings' },
      ],
    },
    takeaway: {
      line: 'In payments, clarity is part of security: merchants trust what they can read at a glance.',
      body: 'Even the typeface served that goal. I chose Nunito for headings and body text: it stays readable in dense tables, and its rounded forms make an unfamiliar product feel approachable without losing professionalism.',
    },
    color: '#f5b82e',
    ink: '#141414',
    cover: { src: dashboardScreen, alt: 'BlockBolt merchant dashboard with total earned, total transactions, revenue statistics and recent payments', width: 1600, height: 764 },
  },
  {
    id: 'blockbolt-app',
    name: 'BlockBolt App',
    category: 'App design',
    headline: 'Payment simplified, decentralized.',
    description: 'BlockBolt’s wallet app for payments on the Sui blockchain. I designed the way in and the payment flow so that paying a merchant reads as a short, clear sequence, with no technical knowledge needed.',
    summary: 'I designed the onboarding and payment flow of BlockBolt’s Sui wallet, so paying a merchant needs no technical knowledge.',
    role: 'UI/UX designer',
    organization: 'BlockBolt',
    scope: 'Splash screen, wallet and payment process',
    metrics: [
      { value: '3', label: 'Screens in the payment process' },
      { value: '2', label: 'Ways in: create or import a wallet' },
    ],
    problem: {
      body: 'Consumers struggle to find secure, reliable, and user-friendly platforms for making crypto payments in daily transactions.',
    },
    insight: 'A clean and intuitive design ensures anyone can make secure crypto payments without technical knowledge.',
    decisions: [
      {
        title: 'Say what BlockBolt is, then offer two ways in',
        body: 'The splash screen introduces BlockBolt as a decentralized payment protocol designed to facilitate fast, secure and cost-effective transactions on the Sui blockchain, then asks one question: create a wallet, or import one.',
        shots: [{ src: appSplash, alt: 'BlockBolt app splash screen with Create Wallet and Import Wallet buttons, beside the wallet home with token balances', width: 1600, height: 1492, caption: 'Splash screen' }],
      },
      {
        title: 'Make paying a short, clear sequence',
        body: 'Payment details show the merchant and merchant domain first, then the coin, network, wallet address and amount. Send leads to a clear confirmation with the transaction ID, amount, network and receiver, and a link to view it on the explorer.',
        flows: [
          { label: 'Payment process', steps: ['Payment details', 'Coin and network', 'Send', 'Transaction successful'] },
        ],
        shots: [{ src: appPayment, alt: 'Three BlockBolt payment screens: empty payment details, filled payment details, and transaction successful', width: 1440, height: 1248, caption: 'Payment process' }],
      },
    ],
    result: {
      body: 'From the splash screen to a confirmed transaction, each screen answers one question at a time: who am I paying, with what, and did it go through? The confirmation keeps the transaction ID and an explorer link one tap away for anyone who wants proof.',
    },
    takeaway: { line: 'Secure crypto payments, without needing technical knowledge.' },
    color: '#2b2f8f',
    ink: '#eef0ff',
    cover: { src: appSplash, alt: 'BlockBolt app splash screen and wallet home on two phones, with the line Payment simplified, decentralized', width: 1600, height: 1492 },
  },
  {
    id: 'social-media',
    name: 'Blockbolt & PocketPay',
    category: 'Social media design',
    headline: 'Bold visuals for a tech-savvy audience.',
    description: 'I designed bold, engaging social media visuals for Blockbolt & PocketPay, highlighting their secure and seamless payment solutions.',
    summary: 'Social media designs for Blockbolt and PocketPay, built on clear messaging and strong visuals.',
    role: 'Social media designer',
    organization: 'Blockbolt & PocketPay',
    scope: 'Campaign posts for Blockbolt NFTs and PocketPay',
    metrics: [
      { value: '2', label: 'Brands: Blockbolt and PocketPay' },
      { value: '5', label: 'Campaign posts in this selection' },
    ],
    problem: {
      body: 'Blockbolt and PocketPay needed social media visuals that highlight secure and seamless payment solutions to a tech-savvy audience.',
    },
    insight: 'Clear messaging and strong visuals are what resonate with a tech-savvy audience.',
    decisions: [
      {
        title: 'One bold message per post',
        body: "Blockbolt's campaigns, like 'Karrier Pigeons' NFT—Yours to Win!, WINSOME Is Going Live Tomorrow and Win NFTs—Enroll Now, each lead with a single headline and a clear call to action.",
        shots: [{ src: karrierPost, alt: "Blockbolt social post: 'Karrier Pigeons' NFT, yours to win, with an illustrated row of pigeons", width: 1600, height: 898, caption: 'Blockbolt' }],
      },
      {
        title: 'Show the product at work',
        body: 'PocketPay posts such as PocketPay in Action and Revolutionize Your Sales put the payment product front and centre.',
        shots: [{ src: pocketpayPost, alt: 'PocketPay social post: PocketPay in action, with a product illustration', width: 821, height: 459, caption: 'PocketPay' }],
      },
    ],
    result: {
      body: 'The designs focused on clear messaging and strong visuals to resonate with a tech-savvy audience.',
    },
    takeaway: { line: 'Clear messaging first, strong visuals second.' },
    earlier: true,
    color: '#1b1b1b',
    ink: '#f2c94c',
    cover: { src: karrierPost, alt: "Blockbolt social post: 'Karrier Pigeons' NFT, yours to win", width: 1600, height: 898 },
  },
  {
    id: 'linq50',
    name: 'Linq50',
    category: 'Logo design',
    headline: 'Unlock the possibilities.',
    description: 'The Linq50 logo features a UK map-inspired design, symbolizing connectivity and collaboration.',
    summary: 'A UK map-inspired logo for Linq50, symbolizing connectivity and collaboration.',
    role: 'Logo designer',
    organization: 'Linq50',
    scope: 'Logo, colour palette, typography and brand applications',
    metrics: [
      { value: '5', label: 'Colours in the palette' },
      { value: 'Kinn', label: 'Brand typeface' },
    ],
    problem: {
      body: "Linq50 needed a mark that reflects innovation, unity, and the brand's focus on fostering meaningful global partnerships.",
    },
    insight: 'Connectivity and collaboration, drawn as a map.',
    decisions: [
      {
        title: 'A UK map-inspired mark',
        body: 'The logo combines simplicity with modern aesthetics. It carries across a purple and orange palette, the Kinn typeface, and applications from ID cards and caps to T-shirts and a phone screen.',
        shots: [{ src: linq50Brand, alt: 'Linq50 brand board: the logo, an ID card, colour palette, phone, pattern, cap, Kinn typeface, T-shirts and a white logo', width: 1600, height: 1154, caption: 'Linq50 brand applications' }],
      },
    ],
    result: {
      body: "The Linq50 logo combines simplicity with modern aesthetics, reflecting innovation, unity, and the brand's focus on fostering meaningful global partnerships.",
    },
    takeaway: { line: 'Simplicity with modern aesthetics.' },
    earlier: true,
    color: '#7a00e6',
    ink: '#f4ecff',
    cover: { src: linq50Brand, alt: 'Linq50 brand board with the logo and its applications', width: 1600, height: 1154 },
  },
]
