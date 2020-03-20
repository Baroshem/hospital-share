import { transparentize } from 'polished';

const colors = {
  primary: {
    background: '#e6f7ff',
    border: '#91d5ff',
    light: '#40a9ff',
    main: '#1890ff',
    dark: '#096dd9',
  },
  info: {
    background: '#e6fffb',
    border: '#87e8de',
    light: '#36cfc9',
    main: '#13c2c2',
    dark: '#08979c',
  },
  success: {
    background: '#f6ffed',
    border: '#b7eb8f',
    light: '#73d13d',
    main: '#52c41a',
    dark: '#389e0d',
  },
  warning: {
    background: '#fffbe6',
    border: '#ffe58f',
    light: '#ffc53d',
    main: '#faad14',
    dark: '#d48806',
  },
  error: {
    background: '#fff1f0',
    border: '#ffa39e',
    light: '#ff4d4f',
    main: '#f5222d',
    dark: '#cf1322',
  },
  background: {
    body: '#fff',
    component: '#fff',
  },
  border: {
    base: '#d9d9d9',
    split: '#f0f0f0',
  },
  text: {
    heading: transparentize(0.15, '#000'),
    primary: transparentize(0.35, '#000'),
    secondary: transparentize(0.55, '#000'),
    placeholder: transparentize(0.75, '#000'),
    disabled: transparentize(0.75, '#000'),
    white: '#fff',
  },
};

const fonts = {
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  codeFamily: "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
};

const fontSizes = {
  heading1: 38,
  heading2: 30,
  heading3: 24,
  heading4: 20,
  large: 16,
  normal: 14,
  small: 12,
};

const lineHeights = {
  heading1: 1.23,
  heading2: 1.35,
  heading3: 1.35,
  heading4: 1.4,
  large: 1.5715,
  normal: 1.5715,
  small: 1.5715,
};

const shadows = {
  base: 'rgba(0, 0, 0, 0.15)',
  box: '0 3px 6px -4px rgba(0, 0, 0, 0.12), 0 6px 16px 0 rgba(0, 0, 0, 0.08), 0 9px 28px 8px rgba(0, 0, 0, 0.05)',
  card: '0 1px 2px -2px rgba(0, 0, 0, 0.16), 0 3px 6px 0 rgba(0, 0, 0, 0.12), 0 5px 12px 4px rgba(0, 0, 0, 0.09)',
};

const breakpoints = {
  xs: '480px',
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
  xxl: '1600px',
};

export const theme = {
  colors,
  fonts,
  fontSizes,
  lineHeights,
  shadows,
  breakpoints,
};
