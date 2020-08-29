import React, { useState } from 'react';
import lightTheme from 'prism-react-renderer/themes/github';
import darkTheme from 'prism-react-renderer/themes/vsDark';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';
import * as ThemeUi from 'theme-ui';
import * as ThemeUiExpansionPack from 'theme-ui-expansion-pack';
import * as ReactIcons from 'react-icons/md';
import Lorem from 'react-lorem-component';

const { Button, ...restThemeUi } = ThemeUi;
const { Box } = restThemeUi;

export const liveEditorStyle = {
  fontSize: '14px',
  marginBottom: '32px',
  marginTop: '32px',
  overflowX: 'auto',
  fontFamily: 'Menlo, monospace',
  borderRadius: '10px',
};

export const liveErrorStyle = {
  fontFamily: 'Menlo, monospace',
  fontSize: 14,
  padding: '1em',
  overflowX: 'auto',
  color: 'white',
  backgroundColor: 'red',
};

const images = {
  nyc:
    'https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  flatiron:
    'https://images.unsplash.com/photo-1520222984843-df35ebc0f24d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  logo: 'https://contrast.now.sh/fff/000?text=UI&size=96&fontSize=1.5&baseline=1',
};

const LiveCodePreview = (props) => <Box as={LivePreview} sx={{ fontFamily: 'body', mb: 3 }} {...props} />;

const CopyButton = (props) => (
  <Button
    size="sm"
    position="absolute"
    textTransform="uppercase"
    variantColor="teal"
    fontSize="xs"
    height="24px"
    top={0}
    zIndex="1"
    right="1.25em"
    {...props}
  />
);

const StarIcon = (props) => {
  return (
    <Box m="2px" as="svg" fill="current" size="3" viewBox="0 0 24 24" {...props}>
      <path d="M23.555 8.729a1.505 1.505 0 0 0-1.406-.98h-6.087a.5.5 0 0 1-.472-.334l-2.185-6.193a1.5 1.5 0 0 0-2.81 0l-.005.016-2.18 6.177a.5.5 0 0 1-.471.334H1.85A1.5 1.5 0 0 0 .887 10.4l5.184 4.3a.5.5 0 0 1 .155.543l-2.178 6.531a1.5 1.5 0 0 0 2.31 1.684l5.346-3.92a.5.5 0 0 1 .591 0l5.344 3.919a1.5 1.5 0 0 0 2.312-1.683l-2.178-6.535a.5.5 0 0 1 .155-.543l5.194-4.306a1.5 1.5 0 0 0 .433-1.661z"></path>
    </Box>
  );
};

export const CodeBlock = ({ className, live, isManual, render, children, ...props }) => {
  const [editorCode, setEditorCode] = useState(children.trim());
  const [mode, _] = ThemeUi.useColorMode();

  const language = className && className.replace(/language-/, '');
  // const { onCopy, hasCopied } = useClipboard(editorCode);

  const themes = { default: lightTheme, dark: darkTheme };
  const theme = themes[mode];

  const liveProviderProps = {
    theme,
    language,
    code: editorCode,
    transformCode: (code) => `/** @jsx jsx */\n<>${code}</>`,
    scope: { ...ThemeUi, ...ThemeUiExpansionPack, ...ReactIcons, Lorem, mdx, StarIcon, images },
    noInline: isManual,
    ...props,
  };

  const handleCodeChange = (newCode) => setEditorCode(newCode.trim());

  if (language.startsWith('js') && Boolean(live)) {
    return (
      <LiveProvider {...liveProviderProps}>
        <LiveCodePreview />
        <Box sx={{ position: 'relative' }}>
          <LiveEditor
            onChange={handleCodeChange}
            p={20}
            // @ts-ignore
            sx={liveEditorStyle}
          />
          {/* <CopyButton onClick={onCopy}>{hasCopied ? 'copied' : 'copy'}</CopyButton> */}
        </Box>
        <Box
          as={LiveError}
          // @ts-ignore
          sx={liveErrorStyle}
        />
      </LiveProvider>
    );
  }

  if (render) {
    return (
      <div sx={{ marginTop: '40px' }}>
        <LiveProvider {...liveProviderProps}>
          <LiveCodePreview />
        </LiveProvider>
      </div>
    );
  }

  return (
    <LiveProvider disabled {...liveProviderProps}>
      <Box
        as={LiveEditor}
        p={20}
        // @ts-ignore
        sx={liveEditorStyle}
      />
    </LiveProvider>
  );
};

CodeBlock.defaultProps = {
  mountStylesheet: false,
};
