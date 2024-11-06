// config/theme.js
export const theme = {
    colors: {
      primary: {
        light: '#f9a8d4',
        DEFAULT: '#ec4899',
        dark: '#be185d',
      },
      secondary: {
        light: '#c4b5fd',
        DEFAULT: '#8b5cf6',
        dark: '#5b21b6',
      },
      background: {
        start: '#4c1d95',
        middle: '#881337',
        end: '#831843',
      },
      text: {
        primary: '#fce7f3',
        secondary: '#fbcfe8',
        muted: '#f9a8d4',
      },
      glass: {
        light: 'rgba(0, 0, 0, 0.2)',
        DEFAULT: 'rgba(0, 0, 0, 0.3)',
        dark: 'rgba(0, 0, 0, 0.4)',
      },
    },
    animations: {
      timings: {
        fast: '300ms',
        normal: '500ms',
        slow: '1000ms',
      },
      curves: {
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  };
  
  export const getRandomMessage = (messages) => {
    return messages[Math.floor(Math.random() * messages.length)];
  };
  
  export const transitions = {
    pageTransition: {
      initial: {
        opacity: 0,
        y: 20,
      },
      animate: {
        opacity: 1,
        y: 0,
      },
      exit: {
        opacity: 0,
        y: -20,
      },
    },
  };