import React from 'react';
import { Typography as AntTypography } from 'antd';
import { TextProps as AntTextProps } from 'antd/lib/typography/Text';
import { TitleProps as AntTitleProps } from 'antd/lib/typography/Title';
import { ParagraphProps as AntParagraphProps } from 'antd/lib/typography/Paragraph';
import { styled } from '@utils';
import { StyledSystemStyles, styledSystemStyles } from '../../shared';

export type TitleProps = AntTitleProps & StyledSystemStyles;

const StyledTitle = styled(AntTypography.Title)(styledSystemStyles);

export const Title = (props: TitleProps) => <StyledTitle {...props} />;

export type ParagraphProps = AntParagraphProps & StyledSystemStyles;

const StyledParagraph = styled(AntTypography.Paragraph)(styledSystemStyles);

export const Paragraph = (props: ParagraphProps) => <StyledParagraph {...props} />;

export type TextProps = AntTextProps & StyledSystemStyles;

const StyledText = styled(AntTypography.Text)(styledSystemStyles);

export const Text = (props: TextProps) => <StyledText {...props} />;
