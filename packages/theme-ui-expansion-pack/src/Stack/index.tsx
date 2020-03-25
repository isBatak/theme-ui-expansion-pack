import React, { Children, forwardRef } from 'react';
import { Box, Divider, BoxProps } from 'theme-ui';

const validStackComponents = ['div', 'ol', 'ul'] as const;
const alignDictionary = {
  left: 'flex-start',
  center: 'center',
  right: 'flex-end',
};

interface IStackProps extends BoxProps {
  component: 'div' | 'ol' | 'ul';
  spacing: any;
  align?: 'left' | 'right' | 'center';
  dividers?: boolean;
}

export const Stack = forwardRef<HTMLDivElement, IStackProps>(
  ({ component = 'div', children, spacing, align = 'left', dividers = false, ...rest }, ref) => {
    if (process.env.NODE_ENV === 'development' && !validStackComponents.includes(component)) {
      throw new Error(`Invalid Stack component: ${component}`);
    }

    const stackItems = Children.toArray(children);

    const isList = component === 'ol' || component === 'ul';
    const stackItemComponent = isList ? 'li' : 'div';

    return (
      <Box ref={ref} {...rest}>
        {stackItems.map((child, index) => (
          <Box
            as={stackItemComponent}
            key={index}
            sx={
              !dividers
                ? {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: alignDictionary[align],
                    pb: spacing,
                    '&:last-of-type': {
                      pb: 0,
                    },
                  }
                : undefined
            }
          >
            {dividers && index > 0 ? (
              <Box sx={{ py: spacing, width: '100%' }}>
                <Divider />
              </Box>
            ) : null}
            {child}
          </Box>
        ))}
      </Box>
    );
  },
);
