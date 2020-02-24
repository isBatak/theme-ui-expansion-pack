import React, { forwardRef, Children, cloneElement, isValidElement, useState, useRef, ReactNode } from 'react';
import { BoxProps, Box } from 'theme-ui';

const getExpandCondition = (index, itemIndex) => {
  if (Array.isArray(index)) {
    return index.includes(itemIndex);
  }
  return index === itemIndex;
};

interface IAccordionProps extends Omit<BoxProps, 'onChange'> {
  /**
   * If `true`, multiple accordion items can be expanded at once.
   */
  allowMultiple?: boolean;
  /**
   * If `true`, any expanded accordion item can be collapsed again.
   */
  allowToggle?: boolean;
  /**
   * The index(es) of the expanded accordion item
   */
  index?: number | Array<number>;
  /**
   * The initial index(es) of the expanded accordion item
   */
  defaultIndex?: number | Array<number>;
  /**
   * The content of the accordion. Must be `AccordionItem`
   */
  children: ReactNode;
  /**
   * The callback invoked when accordion items are expanded or collapsed.
   */
  onChange?(expandedIndex?: number | Array<number>): void;
}

export const Accordion = forwardRef<undefined, IAccordionProps>(
  ({ allowMultiple, allowToggle, index, defaultIndex, onChange, children, ...rest }, ref) => {
    const initializeState = () => {
      if (allowMultiple) {
        return defaultIndex || [];
      }

      return defaultIndex || 0;
    };

    const [expandedIndex, setExpandedIndex] = useState(initializeState);
    const { current: isControlled } = useRef(index != null);

    const internalIndex = isControlled ? index : expandedIndex;

    return (
      <Box ref={ref} data-testid="accordion" {...rest}>
        {Children.map(children, (child, childIndex) => {
          if (!isValidElement(child)) {
            return null;
          }

          return cloneElement(child, {
            isOpen: getExpandCondition(internalIndex, childIndex),
            onChange: (isExpanded) => {
              if (allowMultiple) {
                let newIndices;

                if (isExpanded) {
                  newIndices = [...internalIndex, childIndex];
                } else {
                  newIndices = (internalIndex as Array<number>).filter((itemIndex) => itemIndex !== childIndex);
                }

                if (!isControlled) {
                  setExpandedIndex(newIndices);
                }

                if (onChange) {
                  onChange(newIndices);
                }
              } else {
                if (isExpanded) {
                  if (!isControlled) {
                    setExpandedIndex(childIndex);
                  }

                  if (onChange) {
                    onChange(childIndex);
                  }
                } else {
                  if (allowToggle) {
                    if (!isControlled) {
                      setExpandedIndex(null);
                    }

                    if (onChange) {
                      onChange(null);
                    }
                  }
                }
              }
            },
          });
        })}
      </Box>
    );
  },
);
