import { ViewportMap } from '@storybook/addon-viewport/dist/ts3.9/models'

export const VIEWPORTS: ViewportMap = {
  small: {
    name: 'sm',
    styles: {
      width: '640px',
      height: '100%',
    },
    type: 'mobile',
  },
  medium: {
    name: 'md',
    styles: {
      width: '768px',
      height: '100%',
    },
    type: 'tablet',
  },
  large: {
    name: 'lg',
    styles: {
      width: '1024px',
      height: '100%',
    },
    type: 'desktop',
  },
}
