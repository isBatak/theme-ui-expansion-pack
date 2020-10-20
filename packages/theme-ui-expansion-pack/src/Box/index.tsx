import { ReactNode } from 'react';
import styled from '@emotion/styled';
import { css, get } from '@theme-ui/css';
import { SxProps } from '@theme-ui/core';
import { createShouldForwardProp } from '@styled-system/should-forward-prop';
// @ts-ignore
import space from '@styled-system/space';
// @ts-ignore
import color from '@styled-system/color';

export interface IBoxProps extends SxProps {
  as?: ReactNode;
  variant?: string;
}

const shouldForwardProp = createShouldForwardProp([...space.propNames, ...color.propNames]);

const themeKey = 'variants';

const sx = (props: any) => css(props.sx)(props.theme);
const variant = ({ theme, variant }: any) => css(get(theme, themeKey + '.' + variant, get(theme, variant)));

export const Box = styled('div', {
  label: 'Box',
  shouldForwardProp,
})(
  {
    boxSizing: 'border-box',
    margin: 0,
    minWidth: 0,
  },
  variant,
  space,
  color,
  sx,
  (props) => props.css,
);
