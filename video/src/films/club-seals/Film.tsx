import type { CSSProperties } from 'react'
import { AbsoluteFill, Img } from 'remotion'
import { projects } from '../../../../src/app/lib/projects'
import { beats } from '../beats.js'
import defs from './beats.js'
import { C, Count, Mark, Rise, body, display, heading } from '../../lib/ui'
import { DecisionLayout, EndCard, FilmShell, Statement, TakeawayCard, TitleCard, line, typo, type SceneProps, type Timeline } from '../../lib/film'
import data from './timeline.json'

const timeline = data as Timeline
const found = projects.find((p) => p.id === 'club-seals')
if (!found || found.locked) throw new Error('Club Seals case study missing')
const seals = found
const B = beats(timeline, defs)
const b = (name: string) => B[name].frame
const PHONE = 900 / 1948

// Phone screenshots already carry their frame and rounded corners.
function Phone({ src, h, at, style }: { src: string; h: number; at: number; style?: CSSProperties }) {
  return (
    <div style={{ position: 'absolute', ...style }}>
      <Rise at={at} y={60} dur={30}>
        <Img src={src} style={{ display: 'block', width: Math.round(h * PHONE), height: h, filter: 'drop-shadow(0 40px 60px rgba(0, 0, 0, 0.55))' }} />
      </Rise>
    </div>
  )
}

function Hook({ scene }: SceneProps) {
  const l0 = line(scene, 0), empty = b('hook.empty')
  const q = seals.problem.quote!
  return (
    <AbsoluteFill style={{ padding: '0 160px', justifyContent: 'center' }}>
      <Rise at={l0 - 10} style={{ ...display, fontSize: 300 }}>
        <Count at={l0 - 8} from={0} to={6} dur={30} format={(v) => (v >= 6 ? '6+' : `${v}`)} />
      </Rise>
      <Rise at={l0 + 6} style={{ ...body, fontSize: 48, color: C.mute, marginTop: 34 }}>places FirstClub members get rewards in the app.</Rise>
      <Rise at={empty - 6} style={{ marginTop: 70, maxWidth: 1300, borderLeft: `3px solid ${C.rose}`, paddingLeft: 30 }}>
        <div style={{ ...heading, fontSize: 40, fontWeight: 560 }}>“<Mark at={empty + 34} dur={18}>{typo(q.text)}</Mark>”</div>
        <div style={{ ...body, fontSize: 24, color: C.mute, marginTop: 16 }}>{q.source}</div>
      </Rise>
    </AbsoluteFill>
  )
}

function Title() {
  return <TitleCard name={seals.name} headline={seals.headline} width={1100} chips={[seals.role, 'Design challenge', 'Concept']} phone cover={{ src: seals.cover.src, size: [900, 1948], box: [380, 822], left: 1360, top: 210 }} />
}

function Problem({ scene }: SceneProps) {
  const pains = [
    ['Nearly every reward asks for something first', b('problem.spend')],
    ['A toss can land on the losing side', b('problem.toss')],
    ['Nothing brings people back between orders', b('problem.reason')],
  ] as const
  return (
    <AbsoluteFill style={{ padding: '0 160px', justifyContent: 'center' }}>
      <Rise at={line(scene, 0) - 6} style={{ ...body, fontSize: 26, fontWeight: 620, color: C.rose, letterSpacing: '0.04em' }}>What my audit of the live app found</Rise>
      <Rise at={line(scene, 0)} style={{ ...heading, fontSize: 64, marginTop: 18, maxWidth: 1500 }}>A 24-hour challenge for a premium grocery app.</Rise>
      <div style={{ marginTop: 60, display: 'grid', gap: 22 }}>
        {pains.map(([text, at]) => (
          <Rise key={text} at={at} y={14} dur={16} style={{ ...body, fontSize: 38, display: 'flex', alignItems: 'center', gap: 22 }}>
            <span style={{ width: 26, height: 3, background: C.rose, flex: 'none' }} />{text}
          </Rise>
        ))}
      </div>
    </AbsoluteFill>
  )
}

function Insight({ scene }: SceneProps) {
  const [first, second] = seals.insight.split(/(?<=\.) /)
  return <Statement parts={[{ text: first, at: line(scene, 0) - 6 }, { text: second, at: line(scene, 1) - 6, mark: { phrase: second, at: b('insight.mark') + 6 } }]} />
}

// Home today, then the same Home with a seal on the gift icon.
function Decision1() {
  const d = seals.decisions[0], four = b('decision1.four'), seal = b('decision1.seal'), old = b('decision1.old')
  const [today, after] = d.shots
  return (
    <DecisionLayout n={1} title={d.title} chips={[{ text: 'Four places compared', at: four }, { text: 'A seal on the gift icon', at: seal }, { text: 'Only when there’s one to open', at: seal + 24 }, { text: 'The old Profile row still works', at: old }]}>
      <div style={{ position: 'relative', width: 800, height: 840 }}>
        <Phone src={today.src} h={700} at={2} style={{ left: 0, top: 120, opacity: 0.55, transform: 'rotate(-4deg)' }} />
        <Phone src={after.src} h={780} at={seal - 10} style={{ left: 380, top: 30 }} />
      </div>
    </DecisionLayout>
  )
}

// Hold, crack and reveal, one after another as they're named.
function Decision2() {
  const d = seals.decisions[1], stamp = b('decision2.stamp'), hold = b('decision2.hold'), crack = b('decision2.crack'), inside = b('decision2.inside')
  const [held, cracked, reveal] = d.shots
  return (
    <DecisionLayout n={2} title={d.title} chips={[{ text: 'From their own Approved stamp', at: stamp }, { text: 'Press and hold, under a second', at: hold }, { text: 'A ring fills, then it cracks', at: crack }, { text: 'Something useful, every time', at: inside }, { text: 'Nothing to buy first', at: inside + 30 }]}>
      <div style={{ position: 'relative', width: 900, height: 840 }}>
        <Phone src={held.src} h={620} at={hold - 6} style={{ left: 0, top: 150, transform: 'rotate(-5deg)' }} />
        <Phone src={cracked.src} h={660} at={crack - 6} style={{ left: 290, top: 90 }} />
        <Phone src={reveal.src} h={720} at={inside - 6} style={{ left: 590, top: 30, transform: 'rotate(4deg)' }} />
      </div>
    </DecisionLayout>
  )
}

function Decision3() {
  const d = seals.decisions[2], five = b('decision3.five'), choose = b('decision3.choose'), cart = b('decision3.cart')
  const [week, golden, inCart] = d.shots
  return (
    <DecisionLayout n={3} title={d.title} chips={[{ text: 'Any five seals in a week', at: five }, { text: 'No streak to lose', at: five + 20 }, { text: 'Members choose the gift', at: choose }, { text: 'Applied in the cart on its own', at: cart }]}>
      <div style={{ position: 'relative', width: 900, height: 840 }}>
        <Phone src={week.src} h={620} at={five - 6} style={{ left: 0, top: 150, transform: 'rotate(-5deg)' }} />
        <Phone src={golden.src} h={720} at={choose - 6} style={{ left: 290, top: 40 }} />
        <Phone src={inCart.src} h={640} at={cart - 6} style={{ left: 600, top: 130, transform: 'rotate(5deg)' }} />
      </div>
    </DecisionLayout>
  )
}

function Result() {
  const audit = b('result.audit'), edges = b('result.edges'), prototype = b('result.prototype'), next = b('result.next')
  const [night, shelf, rules] = seals.result.shots!
  const cards = [
    { at: audit, value: <Count at={audit} from={0} to={24} format={(v) => `${v}h`} />, label: 'From brief to a clickable prototype' },
    { at: audit + 10, value: '18', label: 'Screens in the main flow' },
    { at: edges, value: '9', label: 'Edge cases designed' },
    { at: prototype, value: 'AI', label: 'Built the clickable prototype' },
  ]
  return (
    <AbsoluteFill>
      <div style={{ position: 'absolute', left: 160, top: 0, bottom: 0, width: 860, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <Rise at={audit - 8} style={{ ...heading, fontSize: 56 }}>Delivered in a day.</Rise>
        <Rise at={next - 4} style={{ ...heading, fontSize: 56, color: C.mute, marginTop: 10 }}>Next, testing with members.</Rise>
        <div style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 22 }}>
          {cards.map((c) => (
            <Rise key={c.label} at={c.at} style={{ border: `1.5px solid ${C.line}`, borderRadius: 22, padding: '24px 30px 28px', background: 'rgba(240, 231, 230, 0.035)' }}>
              <div style={{ ...display, fontSize: 84 }}>{c.value}</div>
              <div style={{ ...body, fontSize: 24, color: C.mute, marginTop: 12 }}>{c.label}</div>
            </Rise>
          ))}
        </div>
      </div>
      <div style={{ position: 'absolute', left: 1120, top: 150, width: 700, height: 780 }}>
        <Phone src={night.src} h={560} at={edges - 4} style={{ left: 0, top: 130, transform: 'rotate(-6deg)' }} />
        <Phone src={rules.src} h={560} at={edges + 4} style={{ left: 420, top: 130, transform: 'rotate(6deg)' }} />
        <Phone src={shelf.src} h={640} at={edges - 12} style={{ left: 200, top: 40 }} />
      </div>
    </AbsoluteFill>
  )
}

function Takeaway({ scene }: SceneProps) {
  return <TakeawayCard scene={scene} lines={[{ text: seals.takeaway.line, mark: 'connecting it' }]} size={88} width={1300} />
}

const glow: Record<string, [number, number]> = { hook: [18, 30], title: [80, 70], problem: [12, 62], insight: [50, 55], decision1: [80, 48], decision2: [80, 58], decision3: [80, 42], result: [74, 45], takeaway: [40, 55], end: [30, 62] }

export function Film() {
  return <FilmShell id="club-seals" timeline={timeline} scenes={{ hook: Hook, title: Title, problem: Problem, insight: Insight, decision1: Decision1, decision2: Decision2, decision3: Decision3, result: Result, takeaway: Takeaway, end: () => <EndCard /> }} glow={glow} accent={seals.color} name={seals.name} />
}
