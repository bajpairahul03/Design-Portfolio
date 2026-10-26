import { stories } from '../../stories.js'
import { resumeSections, education as educationLines, skillGroups } from '../../surfaces.js'
import portrait from '../../assets/rahul-portrait.webp'
import hero from '../../assets/rahul-hero.webp'
import chip from '../../assets/rahul-chip.webp'
import subject from '../../assets/rahul-subject.webp'
import { projects } from './projects'
import type { Endorsement } from './projects'
import type { ProjectId } from './routes.js'

export { projects }
export type { CaseStudy, Endorsement, Film, Flow, Metric, Project, Quote, Shot } from './projects'
// Rahul's portrait from his Figma portfolio is the only photograph so far, so every slot uses it. The cover uses a crop
// without the treetops, so his face sits under the name like the layout expects.
export const photos = { cameraPortrait: portrait, cameraChip: chip, candid: portrait, subject, benchScene: hero }
export const email = 'work.rahulbajpai@gmail.com'
export const phone = { label: '+91 95894 24837', href: 'tel:+919589424837' }
export const profiles = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rahulbajpai-uxdesigner/' },
]

export function projectById(id: ProjectId) {
  return projects.find((project) => project.id === id)!
}

export const projectNames = Object.fromEntries(projects.map((project) => [project.id, project.name]))
export const featuredProjects = projects.filter((project) => !project.earlier && !project.concept)

export const experience = (resumeSections as [string, string[]][]).map(([title, highlights]) => {
  const [role, company, dates] = title.split(' | ')
  return { role, company, dates: dates.replace('Present', 'Now'), highlights }
})

export const education = (educationLines as string[]).map((line) => {
  const [degree, school, dates] = line.split(' | ')
  return { degree, school, dates }
})

export const skills = (skillGroups as [string, string[]][]).map(([group, items]) => ({ group, items }))

export const practice = stories.notebook.pages.map((page) => ({ title: page.title, text: page.text, tools: page.items }))

export const about = {
  title: 'Hello, I’m Rahul Bajpai.',
  intro: stories.about.description,
  story: stories.about.sections.slice(0, 4).map(([heading, body]) => ({ heading, body })),
  career: stories.about.sections.slice(4, 7).map(([company, body], index) => {
    const job = experience[index]
    return {
      company,
      role: job.role,
      year: job.dates.match(/\d{4}/)![0],
      dates: job.dates.replace(' - ', ' to ').replace('Now', 'now'),
      body: body.slice(body.indexOf('. ') + 2),
    }
  }),
}

// [Placeholder] The Figma file has no interests: replace these with Rahul's own.
export const interests = [
  { title: 'Interest one', text: '[Placeholder] Something you enjoy outside work, and what it gives back to your design.' },
  { title: 'Interest two', text: '[Placeholder] Something you enjoy outside work, and what it gives back to your design.' },
  { title: 'Interest three', text: '[Placeholder] Something you enjoy outside work, and what it gives back to your design.' },
  { title: 'Interest four', text: '[Placeholder] Something you enjoy outside work, and what it gives back to your design.' },
]

export const toolkit = ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'HTML', 'CSS', 'CSS-in-JS', 'React', 'WordPress']

// [Placeholder] The Figma file has no testimonials: replace these with quotes from Rahul's colleagues or clients.
export const endorsements: { featured: Endorsement & { more: string }; quotes: Endorsement[] } = {
  featured: {
    text: '[Placeholder] Add a standout quote from a colleague or client about working with Rahul.',
    highlight: 'a standout quote',
    more: '[Placeholder] Add the rest of the quote, or a second line that gives it context.',
    role: '[Placeholder] Their role',
  },
  quotes: [
    { text: '[Placeholder] Add a quote about how Rahul approaches research and user needs.', highlight: 'research and user needs', role: '[Placeholder] Their role' },
    { text: '[Placeholder] Add a quote about the quality of Rahul’s visual and interface design.', highlight: 'visual and interface design', role: '[Placeholder] Their role' },
    { text: '[Placeholder] Add a quote about how Rahul works with developers.', highlight: 'works with developers', role: '[Placeholder] Their role' },
    { text: '[Placeholder] Add a quote about Rahul’s ownership and communication.', highlight: 'ownership and communication', role: '[Placeholder] Their role' },
    { text: '[Placeholder] Add a quote about the impact of Rahul’s work.', highlight: 'impact', role: '[Placeholder] Their role' },
  ],
}

export function splitChange(value: string) {
  const parts = value.split(' to ')
  return parts.length === 2 ? { from: parts[0], to: parts[1] } : null
}
