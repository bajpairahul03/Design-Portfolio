import { stories, storyMarkup } from './stories.js'

export const resumeSections = [
  ["UI/UX & Product Designer | Design'N'Buy | Mar 2025 - Present", [
    'Led the UX redesign of DesignO, revamping a 14-year-old flagship product into a modern and scalable platform.',
    'Designed user-centric workflows, wireframes, prototypes, and responsive interfaces focused on improving product experience.',
    'Collaborated with cross-functional teams and developers to ensure seamless implementation and consistency across the product.',
    'Contributed to product strategy, design systems, and overall UX improvements for enterprise-level web-to-print solutions.',
  ]],
  ['UI/UX Designer | MCS Ventures | Dec 2022 - Mar 2025', [
    'Designed user-friendly mobile apps, websites, and dashboards, ensuring an intuitive user experience across platforms.',
    'Created visually engaging social media assets and marketing creatives aligned with brand guidelines and user engagement goals.',
    'Developed responsive front-end interfaces using HTML, CSS, and React, focusing on usability and performance.',
    'Styled and customized WordPress websites while collaborating with developers to implement and refine UI/UX experiences.',
  ]],
  ['Web Designer | iCONEX India | Nov 2021 - Nov 2022', [
    'Designed interactive website layouts and marketing assets to support digital campaigns and drive user engagement.',
    'Developed branding visuals to maintain a consistent aesthetic and messaging across digital platforms.',
    'Assisted in front-end development and UI improvements to create a seamless and engaging user experience.',
  ]],
]

export const education = [
  'B.Tech, Computer Science & Engineering | RGPV University, Bhopal | 2017 - 2021',
]

export const skillGroups = [
  ['Skills', ['UI/UX & product design', 'Interaction design & user flows', 'Usability testing & user research', 'Front-end development & responsive web design', 'Branding & marketing creatives']],
  ['Design', ['Figma', 'Adobe Illustrator', 'Adobe Photoshop']],
  ['Development', ['HTML', 'CSS', 'React (CSS-in-JS & UI design)']],
  ['Web technologies', ['WordPress theme styling & customization']],
]

export const skills = `${skillGroups.flatMap(([, items]) => items).join(', ')}.`

function icon(name) { return `<i data-lucide="${name}" aria-hidden="true"></i>` }
function back() { return `<button class="surface-icon return-control" data-action="close" type="button" aria-label="Return to desk" title="Return to desk">${icon('arrow-left')}</button>` }

export const surfaceMarkup = `
  <section id="name-surface" class="physical-surface nameplate">
    <button type="button" data-open="resume" class="name-button" title="Open resume"><h1>Rahul Bajpai<span>.</span></h1><p>UI/UX & Product Designer at Design'N'Buy</p></button>
  </section>
  <section id="catalog-surface" class="physical-surface display catalog" aria-label="Work monitor">
    <header class="screen-bar"><span class="screen-brand">${icon('aperture')} rahul / workspace</span><button class="surface-icon" data-action="home" type="button" aria-label="Return to desk" title="Return to desk">${icon('armchair')}</button></header>
    <div class="catalog-body"><p class="screen-eyebrow">DASHBOARDS / APPS / BRANDING</p><h2>Selected work</h2>
      <div class="project-list">${['store', 'copilot', 'hello'].map(id => `<button class="project-item" data-project="${id}" type="button"><span><strong>${stories[id].name}</strong><small>${stories[id].category}</small></span>${icon('arrow-up-right')}</button>`).join('')}</div>
    </div>
    <footer class="screen-footer"><button data-open="notebook" type="button">${icon('notebook-pen')} My practice</button><button data-open="vr" type="button">${icon('glasses')} Spatial work</button><button data-open="sky" type="button" aria-label="Look through the telescope" title="Look through the telescope">${icon('telescope')}</button><button data-open="resume" type="button">${icon('file-text')} Resume</button></footer>
  </section>
  <section id="work-surface" class="physical-surface display work-display" aria-label="Project display">
    <header class="screen-bar">${back()}<span id="work-screen-label">Selected project</span><div class="screen-arrows"><button class="surface-icon" type="button" data-action="previous-project" aria-label="Previous project" title="Previous project">${icon('chevron-left')}</button><button class="surface-icon" type="button" data-action="next-project" aria-label="Next project" title="Next project">${icon('chevron-right')}</button></div></header>
    <div class="screen-scroll" id="work-content" tabindex="0"></div>
    <footer class="screen-footer work-footer"><button data-action="read-project" type="button" id="read-project">${icon('maximize-2')} Open project</button><a href="mailto:work.rahulbajpai@gmail.com">Get in touch ${icon('arrow-up-right')}</a></footer>
  </section>
  <section id="resume-surface" class="physical-surface paper resume-paper" aria-label="Rahul's hanging resume">
    <header class="paper-toolbar">${back()}<span>Resume</span><button class="surface-icon" id="resume-download" data-action="download-resume" type="button" aria-label="Download resume PDF" title="Download resume PDF">${icon('download')}</button></header>
    <div class="resume-scroll" tabindex="0"><button data-open="resume" class="paper-title" type="button"><h2>Rahul Bajpai</h2><p>UI/UX Designer | Product Designer</p></button><p class="resume-summary">UI/UX & Product Designer with 4.5+ years of experience designing user-centric digital products, websites, and dashboards.</p>
    <a class="resume-email" href="mailto:work.rahulbajpai@gmail.com">work.rahulbajpai@gmail.com</a><h3>Experience</h3>${resumeSections.map(([title, bullets]) => `<section><h4>${title}</h4><ul>${bullets.map(bullet => `<li>${bullet}</li>`).join('')}</ul></section>`).join('')}<h3>Skills</h3><p>${skills}</p><h3>Education</h3>${education.map(item => `<p>${item}</p>`).join('')}</div>
    <footer class="paper-footer"><button data-open="resume" type="button">Read resume ${icon('arrow-up-right')}</button><span>Design / Build / Explore</span></footer>
  </section>
  <section id="notebook-surface" class="physical-surface paper notebook-paper" aria-label="Rahul's working notebook">
    <header class="paper-toolbar">${back()}<span>Working notebook</span>${icon('notebook-pen')}</header>
    <div class="notebook-content"><button class="paper-title" data-open="notebook" type="button"><h2>A thought,<br />made tangible.</h2></button><div class="notebook-tabs" role="tablist" aria-label="Notebook pages">${stories.notebook.pages.map((page, index) => `<button role="tab" type="button" id="practice-tab-${index}" data-page="${index}" aria-selected="${index === 0}" aria-controls="practice-panel-${index}" tabindex="${index ? '-1' : '0'}">${page.title}</button>`).join('')}</div>${stories.notebook.pages.map((page, index) => `<section id="practice-panel-${index}" role="tabpanel" aria-labelledby="practice-tab-${index}" tabindex="0" ${index ? 'hidden' : ''}><h3>${page.title}</h3><p>${page.text}</p><ul>${page.items.map(item => `<li>${item}</li>`).join('')}</ul></section>`).join('')}</div>
    <footer class="paper-footer"><button data-open="notebook" type="button">Open notebook ${icon('arrow-up-right')}</button></footer>
  </section>
  <section id="contact-surface" class="physical-surface contact-card" aria-label="Contact Rahul"><a href="mailto:work.rahulbajpai@gmail.com"><span>Let's make something.</span><strong>work.rahulbajpai@gmail.com ${icon('arrow-up-right')}</strong></a></section>
  <section id="camera-surface" class="physical-surface camera-display" aria-label="Canon camera display">
    <div id="camera-resting" class="camera-id"><span class="camera-wordmark">Canon</span><button type="button" data-action="pickup" id="pickup-camera">${icon('camera')} Pick up camera</button></div>
    <div id="camera-off" class="camera-id" hidden>${icon('aperture')}<p>Through my lens.</p><button type="button" data-action="power" id="screen-power">${icon('power')} Power on</button></div>
    <div id="camera-live" class="camera-live" hidden><img id="live-image" alt="Live view from the camera in the virtual room" /><span id="camera-focus-name">BlockBolt Dashboard</span><button type="button" data-action="viewfinder" id="enter-viewfinder">${icon('scan')} Viewfinder</button></div>
    <div id="camera-playback" class="camera-playback" hidden><header><button type="button" data-action="close" aria-label="Back to camera">${icon('arrow-left')}</button><span>Contact sheet</span></header><p id="empty-playback">No frames yet.</p><div id="camera-frames"></div></div>
  </section>
  <section id="camera-controls-surface" class="physical-surface camera-controls" aria-label="Physical camera buttons"><button id="camera-power" type="button" data-action="power" aria-label="Camera power" title="Camera power">${icon('power')}</button><button id="camera-shutter" type="button" data-action="viewfinder" aria-label="Look through viewfinder" title="Look through viewfinder">${icon('circle')}</button><div class="dial-buttons"><button type="button" data-action="previous" aria-label="Previous object" title="Previous object">${icon('chevron-left')}</button><button type="button" data-action="next" aria-label="Next object" title="Next object">${icon('chevron-right')}</button></div><button id="camera-play" type="button" data-action="gallery" aria-label="View captured frames" title="View captured frames">${icon('images')}</button><button id="put-camera-down" type="button" data-action="putdown" aria-label="Put camera down" title="Put camera down">${icon('corner-down-left')}</button></section>
`

export function projectMarkup(id, reading = false) {
  const story = stories[id]
  if (!story) return ''
  if (reading) return storyMarkup(id)
  const metrics = story.metrics?.slice(0, 2).map(([value, label]) => `<div><strong>${value}</strong><span>${label}</span></div>`).join('') || ''
  return `<article class="project-preview" data-color="${story.color}"><p class="screen-eyebrow">${story.category}</p><h2>${story.title}</h2><p class="preview-role">${story.role} at ${story.organization}</p><p>${story.description}</p><div class="preview-metrics">${metrics}</div></article>`
}

export function workIndexMarkup() {
  return `<div class="review-projects">${['store', 'copilot', 'hello', 'vr'].map(id => {
    const story = stories[id]
    const [value, label] = story.metrics[0]
    return `<a class="review-project" href="#work/${id}"><div><p class="review-category">${story.category}</p><h3>${story.name}</h3><p class="review-description">${story.summary}</p><p class="review-role">${story.role} / ${story.organization}</p></div><div class="review-result"><strong>${value}</strong><span>${label}</span></div>${icon('arrow-up-right')}</a>`
  }).join('')}</div>`
}

export function scrollWorkMarkup(exhibits) {
  return exhibits.map(exhibit => {
    const story = stories[exhibit.id]
    const [value, label] = story.metrics[0]
    const ink = ['hello', 'vr'].includes(exhibit.id) ? '#101714' : exhibit.paper
    return `<article class="work-chapter" id="exhibition/${exhibit.id}" data-project="${exhibit.id}" tabindex="-1" style="--cp-project-bg:${exhibit.color};--cp-project-ink:${ink}"><p class="project-discipline">${exhibit.lens}</p><h3>${story.name}</h3><p class="chapter-summary">${story.summary}</p><figure class="chapter-artwork"><img data-artwork="${exhibit.id}" alt="${exhibit.artwork}" width="1440" height="960" loading="lazy" decoding="async" /><figcaption>Original illustration, not product UI</figcaption></figure><dl class="chapter-evidence"><div><dt>My role</dt><dd>${story.role} / ${story.organization}</dd></div><div><dt>${label}</dt><dd class="chapter-result">${value}</dd></div></dl><a class="story-project-link" href="#work/${exhibit.id}" aria-label="Read project: ${exhibit.label}">Read project ${icon('arrow-up-right')}</a></article>`
  }).join('')
}

export function readerMarkup(page) {
  const projects = ['store', 'copilot', 'hello', 'vr']
  if (page === 'resume') return `<article class="reader-resume"><h2 id="reader-title" tabindex="-1">Resume</h2><p class="reader-lead">Rahul Bajpai / UI/UX Designer | Product Designer</p><h3>Experience</h3>${resumeSections.map(([title, bullets]) => `<section><h4>${title}</h4><ul>${bullets.map(bullet => `<li>${bullet}</li>`).join('')}</ul></section>`).join('')}<h3>Skills</h3><p>${skills}</p><h3>Education</h3>${education.map(item => `<p>${item}</p>`).join('')}</article>`
  if (page === 'about') return `<article class="reader-story">${storyMarkup('about', { headingId: 'reader-title', title: 'About Rahul' })}</article>`
  if (projects.includes(page)) {
    const index = projects.indexOf(page)
    const previous = projects[index - 1]
    const next = projects[index + 1]
    return `<article class="reader-story"><a class="reader-back" href="#work">${icon('arrow-left')}All work</a>${storyMarkup(page, { headingId: 'reader-title', title: stories[page].name })}<nav class="reader-pagination" aria-label="Project navigation"><a href="${previous ? `#work/${previous}` : '#work'}">${icon('arrow-left')}${previous ? stories[previous].name : 'All work'}</a><a href="${next ? `#work/${next}` : '#work'}">${next ? stories[next].name : 'All work'}${icon('arrow-right')}</a></nav></article>`
  }
  return `<section class="reader-overview"><h2 id="reader-title" tabindex="-1">Selected work</h2><p class="reader-lead">Dashboards, apps, social media and logo design.</p>${workIndexMarkup()}</section>`
}

export async function downloadResume() {
  const { jsPDF } = await import('jspdf')
  const document = new jsPDF({ unit: 'pt', format: 'a4' })
  const margin = 42
  const width = 511
  let cursor = 47
  const write = (value, size, bold = false, gap = 6) => {
    document.setFont('helvetica', bold ? 'bold' : 'normal')
    document.setFontSize(size)
    const lines = document.splitTextToSize(value, width)
    const lineHeight = size * 1.32
    if (cursor + lines.length * lineHeight > 794) { document.addPage(); cursor = 47 }
    document.text(lines, margin, cursor)
    cursor += lines.length * lineHeight + gap
  }
  write('Rahul Bajpai', 25, true, 3)
  document.setTextColor(46, 95, 126)
  write('UI/UX Designer | Product Designer', 12, true, 7)
  document.setTextColor(35, 35, 35)
  write('work.rahulbajpai@gmail.com | +91 9589424837 | linkedin.com/in/rahulbajpai-uxdesigner', 9, false, 10)
  write('Innovative UI/UX & Product Designer with 4.5+ years of experience designing user-centric digital products, websites, and dashboards. Skilled in UX strategy, wireframing, prototyping, and creating scalable, intuitive user experiences. Led the redesign of a 14-year-old flagship product, transforming it into a modern and user-focused platform. Passionate about crafting impactful digital solutions that align user needs with business goals.', 9, false, 12)
  write('EXPERIENCE', 10, true, 8)
  for (const [title, bullets] of resumeSections) {
    write(title, 9.1, true, 5)
    for (const bullet of bullets) write(`- ${bullet}`, 8.5, false, 4)
    cursor += 5
  }
  write('SKILLS', 10, true, 5)
  write(skills, 8.5, false, 9)
  write('EDUCATION', 10, true, 5)
  for (const item of education) write(item, 8.5, false, 4)
  document.save('Rahul-Bajpai-Resume.pdf')
}