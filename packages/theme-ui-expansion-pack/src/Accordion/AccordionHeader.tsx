/** @jsx jsx */
import { jsx, BoxProps, Box } from 'theme-ui';
import { forwardRef, useContext } from 'react';

import { AccordionItemContext } from './AccordionItem';

interface IAccordionHeader extends BoxProps {
  iconPath?: string;
}

export const AccordionHeader = forwardRef<HTMLDivElement, IAccordionHeader>(
  (
    {
      onClick,
      iconPath = 'M11.5 13.7L6.1 9.2A1 1 0 005 10.8l6 5c.3.3.9.3 1.2 0l6-5A1 1 0 1017 9.2l-5.4 4.5z',
      children,
      ...rest
    },
    ref,
  ) => {
    const { isExpanded, panelId, headerId, isDisabled, onToggle } = useContext(AccordionItemContext);

    return (
      <Box
        ref={ref}
        as="button"
        // @ts-ignore
        type="button"
        id={headerId}
        disabled={isDisabled}
        aria-disabled={isDisabled}
        aria-expanded={isExpanded}
        area-controls={panelId}
        onClick={(event) => {
          onToggle();
          if (onClick) {
            onClick(event);
          }
        }}
        __themeKey="accordion"
        variant="accordionHeader"
        {...rest}
        // @ts-ignore
        __css={{
          background: 'none',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          color: 'text',
          width: '100%',
        }}
      >
        {children}
      </Box>
    );
  },
);
