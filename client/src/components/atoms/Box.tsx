import {
  space,
  color,
  layout,
  border,
  typography,
  flexbox,
  shadow,
  grid,
  compose,
  position,
  background,
  SpaceProps,
  ColorProps,
  LayoutProps,
  BorderProps,
  TypographyProps,
  FlexboxProps,
  ShadowProps,
  GridProps,
} from 'styled-system';
import styled from '@emotion/styled';
import { ThemeColors } from '@services';

type Props = Omit<
  SpaceProps & ColorProps & LayoutProps & BorderProps & TypographyProps & FlexboxProps & ShadowProps & GridProps,
  'color'
> & {
  color?: ThemeColors;
};

export const Box = styled.div<Props>(
  compose(space, color, layout, border, typography, flexbox, shadow, grid, position, background),
);
