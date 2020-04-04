export default {
  colors: {
    text: '#353535',
    textInverted: '#ffffff',
    background: '#ffffff',
    primary: '#D8262C',
    secondary: '#BD0101',
    muted: '#f4f4f4',
    highlight: '#f6f6f6',
    gray: '#b0b0b0',
    border: '#0000001f',
    neutral: '#b0b0b0',
    neutrals: {
      10: '#121212',
      20: '#1a1a1a',
      30: '#292929',
      40: '#333333',
    },
    modes: {
      dark: {
        text: '#ffffff',
        textInverted: '#121212',
        background: '#121212',
        primary: '#D8262C',
        secondary: '#BD0101',
        muted: '#191919',
        highlight: '#292929',
        gray: '#b0b0b0',
        border: '#ffffff1f',
        neutral: '#b0b0b0',
        neutrals: {
          10: '#333333',
          20: '#292929',
          30: '#1a1a1a',
          40: '#121212',
        },
      },
    },
  },
  fonts: {
    body: '"GT Haptik", Helvetica, Arial, sans-serif',
    heading: 'inherit',
    monospace: 'Menlo, monospace',
  },
  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 72],
  space: [0, 4, 8, 16, 32, 64],
  breakpoints: ['40em', '56em', '64em'],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700,
    display: 800,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  sizes: {
    sidebar: 256,
    container: 1024,
  },
  radii: {
    default: '4px',
  },
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'heading',
      lineHeight: 'heading',
    },
    display: {
      variant: 'text.heading',
      fontSize: [5, 6],
      fontWeight: 'display',
      letterSpacing: '-0.03em',
      mt: 3,
    },
    caps: {
      textTransform: 'uppercase',
      letterSpacing: '0.2em',
    },
  },
  buttons: {
    primary: {
      color: 'background',
      bg: 'primary',
      fontWeight: 'bold',
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'background',
      bg: 'secondary',
    },
  },
  links: {
    button: {
      display: 'inline-block',
      textDecoration: 'none',
      fontWeight: 'bold',
      fontSize: 2,
      p: 3,
      color: 'background',
      bg: 'text',
      borderRadius: 6,
      '&:hover, &:focus': {
        color: 'background',
        bg: 'primary',
      },
    },
    nav: {
      display: 'block',
      width: '100%',
      px: 2,
      py: 2,
      color: 'inherit',
      textDecoration: 'none',
      fontSize: 1,
      fontWeight: 'bold',
      bg: 'transparent',
      transitionProperty: 'background-color',
      transitionTimingFunction: 'ease-out',
      transitionDuration: '.2s',
      borderRadius: 2,
      '&:hover': {
        bg: 'highlight',
      },
      '&.active': {
        color: 'primary',
        bg: 'highlight',
      },
    },
  },
  badges: {
    primary: {
      color: 'background',
    },
    highlight: {
      color: 'text',
      bg: 'highlight',
    },
    accent: {
      color: 'background',
      bg: 'accent',
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px',
    },
    circle: {
      height: 16,
      minWidth: 16,
      lineHeight: '16px',
      textAlign: 'center',
      borderRadius: 9999,
    },
  },
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 9999,
    },
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
    },
    compact: {
      padding: 1,
      borderRadius: 2,
      border: '1px solid',
      borderColor: 'muted',
    },
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold',
    },
    input: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    select: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    textarea: {
      borderColor: 'gray',
      '&:focus': {
        borderColor: 'primary',
        boxShadow: (t) => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none',
      },
    },
    slider: {
      bg: 'muted',
    },
  },
  alerts: {
    primary: {
      color: 'background',
    },
    secondary: {
      color: 'background',
      bg: 'secondary',
    },
    accent: {
      color: 'background',
      bg: 'accent',
    },
    highlight: {
      color: 'text',
      bg: 'highlight',
    },
  },
  layout: {
    container: {
      p: 3,
      // maxWidth: 1024,
    },
  },
  styles: {
    root: {
      margin: 0,
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body',
    },
    img: {
      maxWidth: '100%',
      height: 'auto',
    },
    h1: {
      variant: 'text.display',
    },
    h2: {
      variant: 'text.heading',
      fontSize: 5,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4,
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3,
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2,
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1,
    },
    a: {
      color: 'primary',
      '&:hover': {
        color: 'secondary',
      },
    },
    pre: {
      fontFamily: 'monospace',
      fontSize: 1,
      p: 3,
      color: 'text',
      bg: 'muted',
      overflow: 'auto',
      code: {
        color: 'inherit',
      },
      variant: 'prism',
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 1,
    },
    inlineCode: {
      fontFamily: 'monospace',
      color: 'secondary',
      bg: 'muted',
    },
    table: {
      width: '100%',
      my: 4,
      borderCollapse: 'separate',
      borderSpacing: 0,
      // @ts-ignore
      [['th', 'td']]: {
        textAlign: 'left',
        py: '4px',
        pr: '4px',
        pl: 0,
        borderColor: 'muted',
        borderBottomStyle: 'solid',
      },
    },
    th: {
      verticalAlign: 'bottom',
      borderBottomWidth: '2px',
    },
    td: {
      verticalAlign: 'top',
      borderBottomWidth: '1px',
    },
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: 'muted',
    },
    navlink: {
      display: 'inline-block',
      fontWeight: 'bold',
      color: 'inherit',
      textDecoration: 'none',
      ':hover,:focus': {
        color: 'primary',
      },
    },
  },
  // prism,
};
