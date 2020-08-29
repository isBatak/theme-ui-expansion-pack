/** @jsx jsx */
import { forwardRef, useContext } from 'react';
import { jsx, BoxProps, Box } from 'theme-ui';

import { AccordionItemContext } from './AccordionItem';

export const AccordionIcon = forwardRef<HTMLDivElement, BoxProps>(function(props, ref) {
  const { isExpanded, isDisabled } = useContext(AccordionItemContext);

  return (
    <Box
      as="svg"
      ref={ref}
      data-testid="accordion-icon"
      viewBox="0 0 24 24"
      aria-hidden
      {...props}
      // @ts-ignore
      __css={{
        fontSize: '1.25em',
        opacity: isDisabled ? 0.4 : 1,
        transform: isExpanded ? 'rotate(-180deg)' : undefined,
        transition: 'transform 0.2s',
        transformOrigin: 'center',
      }}
    >
      <path fill="currentColor" d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
    </Box>
  );
});
