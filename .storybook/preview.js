import { VIEWPORTS } from '../utils/viewports'
import { configure } from '@storybook/web-components'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  backgrounds: {
    default: 'default',
    values: [{ name: 'default', value: '#f8f9fa' }],
  },
  viewport: {
    viewports: {
      ...VIEWPORTS,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

const req = require.context('../src/blocks', true, /\.stories\.(ts|tsx)$/)
configure(req, module)
if (module.hot) {
  module.hot.accept(req.id, () => {
    const currentLocationHref = window.location.href
    window.history.pushState(null, null, currentLocationHref)
    window.location.reload()
  })
}
