const sizes = Object.freeze({
  small: 5,
  normal: 10,
  medium: 15,
  large: 20,

  //  fonts
  h1: 62,
  h2: 42,
  h3: 38,
  h4: 32,
  h5: 28,
  h6: 24,

  // misc.
  buttonRadius: 45,
  buttonHeight: 45,
});

const margin = Object.freeze({ ...sizes });
const padding = Object.freeze({ ...sizes });

const colors = Object.freeze({
  primary: '#7258F6', // purple color
  secondary: '#80E723', // green highlights
  tertiary: '#F757AD', // pink highlights
  black: '#000',
  white: '#fff',
  muted: '#535762', // for typography
  gray: '#383F51',
  darkGray: '#232837', // main bg color
});

const fonts = Object.freeze({
  h1: { fontSize: sizes.h1 },
  h2: { fontSize: sizes.h2 },
  h3: { fontSize: sizes.h3 },
  h4: { fontSize: sizes.h4 },
  h5: { fontSize: sizes.h5 },
  h6: { fontSize: sizes.h6 },
});

const theme = Object.freeze({
  sizes,
  margin,
  padding,
  colors,
  fonts,
});

export { theme as default };
