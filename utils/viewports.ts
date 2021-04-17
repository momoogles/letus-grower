type ViewportType = 'mobile' | 'tablet' | 'desktop'
type Viewports = {
  [key in string]: {
    name: string
    styles: {
      width: string
      height: string
    }
    type: ViewportType
  }
}

export const VIEWPORTS: Viewports = {
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
