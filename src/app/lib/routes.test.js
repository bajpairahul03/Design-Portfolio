import test from 'node:test'
import assert from 'node:assert/strict'
import { parseRoute, routeKey, routeTitle } from './routes.js'

test('reading routes stay compatible with the previous portfolio', () => {
  assert.deepEqual(parseRoute('#work'), { page: 'work' })
  assert.deepEqual(parseRoute('#about'), { page: 'about' })
  assert.deepEqual(parseRoute('#resume'), { page: 'resume' })
  assert.deepEqual(parseRoute('#work/designo'), { page: 'project', id: 'designo' })
  assert.deepEqual(parseRoute('#work/social-media'), { page: 'project', id: 'social-media' })
  assert.deepEqual(parseRoute('#work/linq50'), { page: 'project', id: 'linq50' })
  assert.deepEqual(parseRoute('#work/hello'), { page: 'work' })
})

test('film links open the project with its film', () => {
  assert.deepEqual(parseRoute('#work/blockbolt-dashboard/film'), { page: 'project', id: 'blockbolt-dashboard', film: true })
  assert.equal(routeKey(parseRoute('#work/blockbolt-dashboard/film')), routeKey(parseRoute('#work/blockbolt-dashboard')))
  assert.deepEqual(parseRoute('#work/hello/film'), { page: 'home' })
  assert.deepEqual(parseRoute('#work/blockbolt-dashboard/films'), { page: 'home' })
})

test('legacy story links resolve to home anchors', () => {
  assert.deepEqual(parseRoute('#exhibition/blockbolt-dashboard'), { page: 'home', anchor: 'project-blockbolt-dashboard' })
  assert.deepEqual(parseRoute('#exhibition/vr'), { page: 'work' })
  assert.deepEqual(parseRoute('#my-story'), { page: 'home', anchor: 'my-story' })
  assert.deepEqual(parseRoute('#selected-work'), { page: 'home', anchor: 'selected-work' })
  assert.deepEqual(parseRoute('#exhibition'), { page: 'home' })
})

test('unknown or malicious hashes fall back to home', () => {
  assert.deepEqual(parseRoute(''), { page: 'home' })
  assert.deepEqual(parseRoute('#work/unknown'), { page: 'home' })
  assert.deepEqual(parseRoute('#<img src=x onerror=alert(1)>'), { page: 'home' })
})

test('route keys and titles', () => {
  assert.equal(routeKey({ page: 'project', id: 'blockbolt-dashboard' }), 'project:blockbolt-dashboard')
  assert.equal(routeKey({ page: 'home', anchor: 'contact' }), 'home')
  assert.equal(routeTitle({ page: 'project', id: 'blockbolt-dashboard' }, { 'blockbolt-dashboard': 'BlockBolt Dashboard' }), 'BlockBolt Dashboard')
  assert.equal(routeTitle({ page: 'resume' }), 'Resume')
})
