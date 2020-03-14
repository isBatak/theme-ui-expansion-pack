import React, { useState } from 'react';
import lightTheme from 'prism-react-renderer/themes/nightOwlLight';
import darkTheme from 'prism-react-renderer/themes/nightOwl';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import { mdx } from '@mdx-js/react';
import * as ThemeUi from 'theme-ui';
// import * as ThemeUiExpansionPack from 'theme-ui-expansion-pack';
import * as ReactIcons from 'react-icons/md';

const ThemeUiExpansionPack = {};
const { Box, Button } = ThemeUi;

export const liveEditorStyle = {
  fontSize: '14',
  marginBottom: '32',
  marginTop: '32',
  overflowX: 'auto',
  fontFamily: 'Menlo,monospace',
  borderRadius: '10',
};

export const liveErrorStyle = {
  fontFamily: 'Menlo, monospace',
  fontSize: 14,
  padding: '1em',
  overflowX: 'auto',
  color: 'white',
  backgroundColor: 'red',
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

export const CodeBlock = ({ className, live = true, isManual, render, children, ...props }) => {
  const [editorCode, setEditorCode] = useState(children.trim());

  const language = className && className.replace(/language-/, '');
  // const { onCopy, hasCopied } = useClipboard(editorCode);

  const themes = { light: lightTheme, dark: darkTheme };
  const theme = themes['dark'];

  const liveProviderProps = {
    theme,
    language,
    code: editorCode,
    transformCode: (code) => '/** @jsx mdx */' + code,
    scope: { ...ThemeUi, ...ThemeUiExpansionPack, ...ReactIcons, mdx, StarIcon },
    noInline: isManual,
    ...props,
  };

  const handleCodeChange = (newCode) => setEditorCode(newCode.trim());

  if (language === 'jsx' && live === true) {
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
