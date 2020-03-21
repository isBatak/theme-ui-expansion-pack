import React from 'react';
import { Global, css } from '@emotion/core';

export const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        @font-face {
          font-family: 'GT Haptik';
          src: url(/fonts/gt-haptik-bold-webfont.eot);
          src: url(/fonts/gt-haptik-bold-webfont.eot?#iefix) format('embedded-opentype'),
            url(/fonts/gt-haptik-bold-webfont.woff2) format('woff2'),
            url(/fonts/gt-haptik-bold-webfont.woff) format('woff'),
            url(/fonts/gt-haptik-bold-webfont.ttf) format('truetype');
          font-weight: 700;
          font-style: normal;
        }

        @font-face {
          font-family: 'GT Haptik';
          src: url(/fonts/gt-haptik-regular-webfont.eot);
          src: url(/fonts/gt-haptik-regular-webfont.eot?#iefix) format('embedded-opentype'),
            url(/fonts/gt-haptik-regular-webfont.woff2) format('woff2'),
            url(/fonts/gt-haptik-regular-webfont.woff) format('woff'),
            url(/fonts/gt-haptik-regular-webfont.ttf) format('truetype');
          font-weight: 400;
          font-style: normal;
        }
      `}
    />
  );
};
