/** @jsx jsx */
import { withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { jsx } from 'theme-ui';
import { SecurityRating } from '.';

storiesOf('forms/Rating', module)
  .addDecorator(withKnobs)
  .add('security rating', () => <SecurityRating value={3} stop={5} />);
