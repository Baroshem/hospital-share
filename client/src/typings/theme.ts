export type Theme = typeof import('@constants').theme;

export type ThemeColors =
  | 'primary.background'
  | 'primary.border'
  | 'primary.light'
  | 'primary.main'
  | 'primary.dark'
  | 'info.background'
  | 'info.border'
  | 'info.light'
  | 'info.main'
  | 'info.dark'
  | 'success.background'
  | 'success.border'
  | 'success.light'
  | 'success.main'
  | 'success.dark'
  | 'warning.background'
  | 'warning.border'
  | 'warning.light'
  | 'warning.main'
  | 'warning.dark'
  | 'error.background'
  | 'error.border'
  | 'error.light'
  | 'error.main'
  | 'error.dark'
  | 'background.body'
  | 'background.component'
  | 'border.base'
  | 'border.split'
  | 'text.heading'
  | 'text.primary'
  | 'text.secondary'
  | 'text.placeholder'
  | 'text.disabled'
  | 'text.white';
