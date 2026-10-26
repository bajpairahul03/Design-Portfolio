// Prints scripts/resume.html to public/Rahul_Bajpai_Resume.pdf with headless Chrome or Edge.
// Set CHROME_PATH if neither is installed in its usual place.
import { execFileSync } from 'node:child_process'
import { existsSync, mkdtempSync, rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const source = fileURLToPath(new URL('./resume.html', import.meta.url))
const output = fileURLToPath(new URL('../public/Rahul_Bajpai_Resume.pdf', import.meta.url))
const browsers = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium',
]
const browser = browsers.find((path) => path && existsSync(path))

if (!browser) {
  console.error('No Chrome or Edge found. Set CHROME_PATH to the browser executable, then run npm run resume again.')
  process.exit(1)
}

// A throwaway profile keeps headless Chrome from touching the everyday one; Roboto loads from Google Fonts, so stay online.
const profile = mkdtempSync(join(tmpdir(), 'resume-'))
try {
  execFileSync(browser, [
    '--headless=new',
    '--disable-gpu',
    '--no-pdf-header-footer',
    '--virtual-time-budget=8000',
    `--user-data-dir=${profile}`,
    `--print-to-pdf=${output}`,
    pathToFileURL(source).href,
  ], { stdio: 'inherit' })
} finally {
  // Chrome can hold the profile for a moment after exiting on Windows; a leftover temp folder is harmless.
  try { rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 }) } catch {}
}
console.log('Check that the resume still fits on one page before committing it.')
