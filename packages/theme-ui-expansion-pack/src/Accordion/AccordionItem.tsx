import React, { createContext, forwardRef, useState, useRef } from 'react';
import { BoxProps, Box } from 'theme-ui';

import { useId } from '../hooks/useId';

export const AccordionItemContext = createContext({
  isExpanded: false,
  isDisabled: false,
  headerId: '',
  panelId: '',
  onToggle: () => {},
});

interface IAccordionItemRenderProps {
  isExpanded?: boolean;
  isDisabled?: boolean;
}

/**
 * The content of the accordion.
 * The children must be the `AccordionHeader` and `AccordionPanel` components.
 */
type AccordionItemChildren =
  | { children(props: IAccordionItemRenderProps): React.ReactNode }
  | { children: React.ReactNode };

interface IAccordionItemProps extends Omit<BoxProps, 'onChange'> {
  /**
   * If `true`, expands the accordion in the controlled mode.
   */
  isOpen?: boolean;
  /**
   * If `true`, expands the accordion by on initial mount.
   */
  defaultIsOpen?: boolean;
  /**
   * A unique id for the accordion item.
   */
  id?: string;
  /**
   * If `true`, the accordion header will be disabled.
   */
  isDisabled?: boolean;
  /**
   * The callback fired when the accordion is expanded/collapsed.
   */
  onChange?(isOpen: boolean): void;
}

export const AccordionItem = forwardRef<HTMLDivElement, IAccordionItemProps & AccordionItemChildren>(
  ({ isOpen, defaultIsOpen, id, isDisabled, onChange, children, ...rest }, ref) => {
    const [expanded, setExpanded] = useState(defaultIsOpen || false);
    const { current: isControlled } = useRef(isOpen != null);
    const isExpanded = isControlled ? isOpen : expanded;

    const onToggle = () => {
      if (onChange) {
        onChange(!isExpanded);
      }
      if (!isControlled) {
        setExpanded(!expanded);
      }
    };

    const uuid = useId();
    const uniqueId = id || uuid;

    const headerId = `accordion-header-${uniqueId}`;
    const panelId = `accordion-panel-${uniqueId}`;

    return (
      <AccordionItemContext.Provider
        value={{
          isExpanded,
          isDisabled,
          headerId,
          panelId,
          onToggle,
        }}
      >
        <Box ref={ref} data-testid="accordion-item" {...rest}>
          {typeof children === 'function' ? children({ isExpanded, isDisabled }) : children}
        </Box>
      </AccordionItemContext.Provider>
    );
  },
);
