import React, { FC, SVGProps } from 'react';

export const Logo: FC<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" {...props}>
      <circle cx="256" cy="256" r="256" fill="#D8262C" />
      <path
        fill="#FFF"
        fill-rule="nonzero"
        d="M186.2 151v113.3c0 11.3 2.4 21 7.2 29.4a49.4 49.4 0 0020 19.3 60.4 60.4 0 0028.8 6.8c10.6 0 20.1-2.3 28.6-6.8 8.4-4.5 15-11 19.8-19.3a53.2 53.2 0 006.4-18.3V218h43v144h-43v-15.1a102.1 102.1 0 01-54.9 15.1c-18.4 0-35.1-4.1-50-12.4a90 90 0 01-35.3-34.6 99.6 99.6 0 01-12.8-49.7V151h42.2zm153.8 0v43h-43v-43h43z"
      />
    </svg>
  );
};
