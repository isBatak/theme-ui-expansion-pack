import React, { forwardRef, useContext } from 'react';
import { BoxProps, Box } from 'theme-ui';

import { AccordionItemContext } from './AccordionItem';

export const AccordionIcon = forwardRef<undefined, BoxProps>((props, ref) => {
  const { isExpanded, isDisabled } = useContext(AccordionItemContext);

  return (
    <Box
      ref={ref}
      data-testid="accordion-icon"
      aria-hidden
      {...props}
      __css={{
        opacity: isDisabled ? 0.4 : 1,
        transform: isExpanded ? 'rotate(-180deg)' : null,
        transition: 'transform 0.2s',
        transformOrigin: 'center',
      }}
    />
  );
});
