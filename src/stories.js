// The keys are the legacy desk and story objects; their content now comes from Rahul's Figma portfolio (rb-portfolio).
export const stories = {
  vr: {
    name: 'Linq50', object: 'The brand board', category: 'Logo design', title: 'Unlock the possibilities.',
    description: 'The Linq50 logo features a UK map-inspired design, symbolizing connectivity and collaboration.', color: 'blue', role: 'Logo designer', organization: 'Linq50',
    summary: 'A UK map-inspired logo symbolizing connectivity and collaboration.',
    metrics: [['5', 'Colours in the palette'], ['Kinn', 'Brand typeface']],
    sections: [
      ['The idea', 'A UK map-inspired design, symbolizing connectivity and collaboration.'],
      ['The approach', 'It combines simplicity with modern aesthetics.'],
      ['The result', 'A mark reflecting innovation, unity, and the brand\'s focus on fostering meaningful global partnerships.'],
    ],
  },
  store: {
    name: 'BlockBolt Dashboard', object: 'The project folder', category: 'Dashboard design', title: 'End-to-end UI/UX for a secure blockchain-powered platform.',
    description: 'The BlockBolt Merchant Dashboard is a user-friendly platform designed for merchants to manage transactions, track analytics, and streamline operations.',
    summary: 'A merchant dashboard for a decentralized payment protocol, designed end to end.',
    color: 'blue', role: 'Solo UI/UX designer', organization: 'BlockBolt',
    metrics: [['9', 'Merchant modules designed'], ['March 2024', 'Project start, ongoing']],
    sections: [
      ['The problem', 'Many businesses face challenges integrating cryptocurrency payments due to complex processes and lack of easy-to-use tools, and both businesses and consumers are wary of the security risks involved in handling digital currencies.'],
      ['What I did', 'I led the entire design process: stakeholder interviews and user research, a user persona and empathy map, user flows and information architecture, then typography, colours and layouts.'],
      ['The result', 'A clean, intuitive interface that enhances trust and ensures a seamless experience, with easy onboarding, real-time tracking, and strong security.'],
    ],
  },
  copilot: {
    name: 'BlockBolt App', object: 'The pinned print', category: 'App design', title: 'Payment simplified, decentralized.',
    description: 'The BlockBolt App is a secure and user-friendly platform for managing digital transactions.', color: 'green', role: 'UI/UX designer', organization: 'BlockBolt',
    summary: 'A streamlined app for smooth navigation, quick payments and real-time updates.',
    metrics: [['3', 'Screens in the payment process'], ['2', 'Ways in: create or import a wallet']],
    sections: [
      ['The problem', 'Consumers struggle to find secure, reliable, and user-friendly platforms for making crypto payments in daily transactions.'],
      ['What I did', 'I focused on designing a streamlined interface that ensures smooth navigation, quick payment processing, and real-time updates.'],
      ['The result', 'An efficient and modern experience, from the splash screen to a successful transaction.'],
    ],
  },
  hello: {
    name: 'Blockbolt & PocketPay', object: 'The campaign wall', category: 'Social media design', title: 'Bold visuals for a tech-savvy audience.',
    description: 'I designed bold, engaging social media visuals for Blockbolt & PocketPay, highlighting their secure and seamless payment solutions.', color: 'red', role: 'Social media designer', organization: 'Blockbolt & PocketPay',
    summary: 'Social media designs built on clear messaging and strong visuals.',
    metrics: [['2', 'Brands'], ['5', 'Campaign posts in this selection']],
    sections: [
      ['The brief', 'Highlight secure and seamless payment solutions.'],
      ['What I did', 'I designed campaign posts for Blockbolt NFTs and for PocketPay.'],
      ['The result', 'Designs focused on clear messaging and strong visuals to resonate with a tech-savvy audience.'],
    ],
  },
  notebook: {
    name: 'Working notebook', object: 'The open notebook', category: 'Design practice', title: 'A thought, made tangible.',
    description: 'How I move from understanding a problem, to shaping the design, to building it.',
    color: 'blue', pages: [
      { title: 'Research', text: 'I start with stakeholder interviews, competitor analysis and user feedback, then turn what I learn into a user persona and an empathy map, so I design for the right audience.', items: ['Usability testing & user research', 'Stakeholder interviews', 'User persona', 'Empathy map'] },
      { title: 'Design', text: 'I map user flows and information architecture, then move to typography, colours and layout, turning complex challenges into simple, intuitive designs.', items: ['User flows', 'Interaction design', 'UI design & prototyping', 'Marketing materials & visual branding'] },
      { title: 'Build', text: 'I develop responsive front-end code using HTML, CSS, and React, and collaborate with developers to deliver functional, user-centric designs.', items: ['Front-end development', 'Responsive web design', 'WordPress theme styling & customization', 'Collaboration with team'] },
    ],
  },
  about: {
    name: 'Behind the work', object: 'The blue frame', category: 'About Rahul', title: 'Hello, I\'m Rahul Bajpai.',
    description: 'A designer who sees the big picture in every pixel.', color: 'blue',
    sections: [
      ['Where I\'m from', 'Originally from Balaghat, Madhya Pradesh.'],
      ['What I do', 'I\'m a UI/UX & Product Designer with 4.5+ years of experience designing user-centric digital products, websites, and dashboards. I turn complex challenges into simple, intuitive designs.'],
      ['My goal', 'To create user experiences that are so smooth, users won\'t even realize they\'re using an interface—just like magic, but with less smoke.'],
      ['Take a look', 'Take a look at my work—no users were harmed in the making of these designs!'],
      ['Design\'N\'Buy', 'UI/UX & Product Designer, March 2025 to now. I led the UX redesign of DesignO, revamping a 14-year-old flagship product into a modern and scalable platform, and contribute to product strategy, design systems, and UX improvements for enterprise-level web-to-print solutions.'],
      ['MCS Ventures', 'UI/UX Designer, December 2022 to March 2025. I designed user-friendly mobile apps, websites, and dashboards, created social media assets and marketing creatives, developed responsive front-end interfaces using HTML, CSS, and React, and styled and customized WordPress websites.'],
      ['iCONEX India', 'Web Designer, November 2021 to November 2022. I designed interactive website layouts and marketing assets for digital campaigns, developed branding visuals, and assisted in front-end development and UI improvements.'],
      ['Education', 'B.Tech (Computer Science & Engineering), RGPV University, Bhopal, 2017 to 2021.'],
    ],
  },
  explore: {
    name: 'Beyond the brief', object: 'The telescope', category: 'Personal interests', title: 'There is always more to see.',
    description: '[Placeholder] A few things that keep me curious outside the work.', color: 'green',
    sections: [
      ['Interest one', '[Placeholder] Something you enjoy outside work, and what it gives back to your design.'],
      ['Interest two', '[Placeholder] Something you enjoy outside work, and what it gives back to your design.'],
      ['Interest three', '[Placeholder] Something you enjoy outside work, and what it gives back to your design.'],
    ],
  },
}

export function storyMarkup(id, { headingId = 'story-title', title } = {}) {
  const story = stories[id]
  if (!story) return ''
  const metrics = story.metrics?.map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('') || ''
  const sections = story.sections?.map(([heading, paragraph]) => `<section class="story-section"><h3>${heading}</h3><p>${paragraph}</p></section>`).join('') || ''
  const notebook = story.pages ? `<div class="notebook-reader"><div class="notebook-tabs" role="tablist" aria-label="Notebook pages">${story.pages.map((page, index) => `<button type="button" role="tab" id="notebook-tab-${index}" aria-controls="notebook-panel-${index}" aria-selected="${index === 0}" tabindex="${index === 0 ? 0 : -1}" data-notebook-page="${index}">${page.title}</button>`).join('')}</div>${story.pages.map((page, index) => `<section class="notebook-page" id="notebook-panel-${index}" role="tabpanel" aria-labelledby="notebook-tab-${index}" tabindex="0" ${index ? 'hidden' : ''}><h3>${page.title}</h3><p>${page.text}</p><ul>${page.items.map((item) => `<li>${item}</li>`).join('')}</ul></section>`).join('')}</div>` : ''
  return `<div class="story-heading"><p class="story-category">${story.category}</p><h2 id="${headingId}" tabindex="-1">${title || story.title}</h2><p class="story-description">${story.description}</p></div>${story.role ? `<dl class="story-meta"><div><dt>My role</dt><dd>${story.role}</dd></div><div><dt>Company</dt><dd>${story.organization}</dd></div></dl>` : ''}${metrics ? `<div class="story-metrics">${metrics}</div>` : ''}${notebook}${sections}<div class="story-contact"><a href="mailto:work.rahulbajpai@gmail.com">Email Rahul <i data-lucide="arrow-up-right" aria-hidden="true"></i></a></div>`
}