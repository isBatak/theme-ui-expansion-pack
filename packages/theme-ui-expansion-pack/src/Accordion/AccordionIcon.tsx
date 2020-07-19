/** @jsx jsx */
import { forwardRef, useContext } from 'react';
import { jsx, BoxProps, Box } from 'theme-ui';

import { AccordionItemContext } from './AccordionItem';

export const AccordionIcon = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { isExpanded, isDisabled } = useContext(AccordionItemContext);

  return (
    <Box
      ref={ref}
      data-testid="accordion-icon"
      aria-hidden
      {...props}
      css={{
        opacity: isDisabled ? 0.4 : 1,
        transform: isExpanded ? 'rotate(-180deg)' : undefined,
        transition: 'transform 0.2s',
        transformOrigin: 'center',
      }}
    />
  );
});
