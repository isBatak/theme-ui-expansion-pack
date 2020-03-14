import React, { FC } from 'react';
import { Box } from 'theme-ui';
import { MDXProvider } from '@mdx-js/react';

import { CodeBlock } from './CodeBlock';
import { Layout } from './Layout';

const Pre = (props) => <Box my="2em" rounded="sm" {...props} />;

const components = {
  wrapper: Layout,
  code: CodeBlock,
  pre: Pre,
};

export const MDXComponents: FC = ({ children }) => {
  return <MDXProvider components={components}>{children}</MDXProvider>;
};
