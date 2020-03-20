import { compose, space, layout, SpaceProps, LayoutProps } from 'styled-system';

export type StyledSystemStyles = SpaceProps & LayoutProps;

export const styledSystemStyles = compose(space, layout);
