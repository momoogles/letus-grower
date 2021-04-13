import { VIEWPORTS } from '../utils/viewports'

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
