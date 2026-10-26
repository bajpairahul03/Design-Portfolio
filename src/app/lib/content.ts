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

export const interests = [
  { title: 'Photography', text: 'Chasing light with a camera trains me to notice framing, contrast and the small moments people miss, the same eye I bring to a layout.' },
  { title: 'Guitar', text: 'Hours of practice for one clean riff. Guitar taught me that rhythm, repetition and patience are what make anything feel effortless.' },
  { title: 'Travel', text: 'New places mean new signage, new apps and new habits. Watching how strangers find their way is free usability research.' },
  { title: 'Shopping', text: 'I can’t walk through a store or an app without studying it: what draws me in, what makes me pick it up and what makes me leave.' },
]

export const toolkit = ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'HTML', 'CSS', 'CSS-in-JS', 'React', 'WordPress']

// [Draft] Sample quotes written to fill the layout, not said by anyone yet: swap in real words from Rahul's colleagues
// or clients before the site goes public.
export const endorsements: { featured: Endorsement & { more: string }; quotes: Endorsement[] } = {
  featured: {
    text: 'Rahul took a product nobody wanted to touch and made it feel simple again.',
    highlight: 'made it feel simple',
    more: 'He listened before he drew anything, and every screen he shipped had a reason behind it that the whole team could explain.',
    role: 'Product Manager',
  },
  quotes: [
    { text: 'He sat in on support calls until he understood our users’ real problems better than we did.', highlight: 'real problems', role: 'Customer Success Lead' },
    { text: 'His interfaces are calm and precise, with a care for spacing and type you notice the moment you use them.', highlight: 'calm and precise', role: 'Design Lead' },
    { text: 'His Figma files are ready to build: every state, edge case and token is already there.', highlight: 'ready to build', role: 'Front-end Engineer' },
    { text: 'He owns his work end to end and keeps everyone in the loop without being asked.', highlight: 'owns his work', role: 'Engineering Manager' },
    { text: 'After his redesign, onboarding questions dropped and clients started asking for the new editor by name.', highlight: 'onboarding questions dropped', role: 'Client Partner' },
  ],
}

export function splitChange(value: string) {
  const parts = value.split(' to ')
  return parts.length === 2 ? { from: parts[0], to: parts[1] } : null
}
