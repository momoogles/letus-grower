const { build: _build } = require('esbuild')
const glob = require('tiny-glob')
const path = require('path')
const { exit } = require('process')

async function build() {
  try {
    const entryPoints = await glob('src/blocks/**/*[!.stories].ts')
    const options = {
      bundle: true,
      target: 'es6',
      platform: 'browser',
      entryPoints,
      outdir: path.resolve(process.cwd(), 'dist'),
      tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
    }
    await _build({ ...options })
  } catch (e) {
    console.error(e)
    exit(1)
  }
}

build()
