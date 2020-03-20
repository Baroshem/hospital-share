import React from 'react';
import { Slider as AntSlider, SliderProps as AntSliderProps } from 'formik-antd';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../shared';

export type SliderProps = AntSliderProps & StyledSystemStyles;

const StyledSlider = styled(AntSlider)(styledSystemStyles);

export const Slider = (props: SliderProps) => <StyledSlider {...props} />;
