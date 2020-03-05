import React, { forwardRef } from 'react';
import ReactRating, { RatingComponentProps } from 'react-rating';
import { Box } from '@theme-ui/components';
import LockIcon from '../../../assets/icons/icon-lock.svg';

interface IExtendedRatingComponentProps extends Omit<RatingComponentProps, 'initialRating'> {
  value?: number;
}

export const SecurityRating = forwardRef<any, IExtendedRatingComponentProps>(({ value, ...rest }, ref) => {
  return (
    <ReactRating
      ref={ref}
      initialRating={value}
      emptySymbol={
        <Box
          as={LockIcon}
          sx={{
            path: {
              fill: 'neutralLight40',
            },
          }}
        />
      }
      fullSymbol={<Box as={LockIcon} sx={{ path: { fill: 'warning' } }} />}
      {...rest}
    />
  );
});

// TODO: StarRating
