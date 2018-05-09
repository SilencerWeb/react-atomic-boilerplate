const css = String.raw;

export const font = {
  family: {
    primary:
      '-apple-system, BlinkMacSystemFont, San Francisco, Helvetica Neue, Helvetica, Ubuntu, Roboto, Noto, Segoe UI, Arial, sans-serif',
  },
};

export const color = {
  primary: '#111111',
  secondary: '#999999',
  tertiary: '#ffffff',
};

export const transition = '0.3s';

export const globalStyles = css`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
    -ms-overflow-style: scrollbar;
  }

  body {
    position: relative;
    min-width: 32rem;
    font-family: ${font.family.primary};
    color: ${color.primary};
    overflow-x: hidden;
  }
`;
