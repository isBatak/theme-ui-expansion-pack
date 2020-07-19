import React, { forwardRef, useContext } from 'react';
import { BoxProps, Box } from 'theme-ui';

import { AccordionItemContext } from './AccordionItem';

export const AccordionPanel = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  const { isExpanded, panelId, headerId } = useContext(AccordionItemContext);

  return (
    <Box sx={{ overflow: 'hidden' }} style={{ height: isExpanded ? 'auto' : 0 }}>
      <Box
        ref={ref}
        data-testid="accordion-panel"
        role="region"
        id={panelId}
        aria-labelledby={headerId}
        aria-hidden={!isExpanded}
        {...props}
      />
    </Box>
  );
});
