/** @jsx jsx */
import { jsx } from 'theme-ui';
import { FC } from 'react';
import Tippy, { TippyProps } from '@tippy.js/react';
import { BoxProps } from 'theme-ui';

type TooltipProps = Pick<BoxProps, 'sx'> & TippyProps;

export const Tooltip: FC<TooltipProps> = ({ sx, ...rest }) => (
  <Tippy
    sx={{
      variant: 'variants.tooltip',
      position: 'relative',
      color: 'textInverse',
      borderRadius: '4px',
      fontSize: '12px',
      lineHeight: '16px',
      textAlign: 'center',
      transitionProperty: 'transform,visibility,opacity', //check what it does
      maxWidth: 'calc(100vw - 10px)', //check what it does

      '.tippy-content': {
        position: 'relative',
        padding: '4px 8px',
        zIndex: '1', //check what it does
      },
      ...sx,
    }}
    {...rest}
  />
);
