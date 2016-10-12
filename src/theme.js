import deepAssign from 'deep-assign';
import createTheme from 'spectacle/lib/themes/default';

const colors = {
  backgroundColor: 'rgb(27,43,52)',
  primary: '#5fb3b3',
  secondary: '#cdd3de'
};

const fonts = {
  primary: 'Helvetica',
  secondary: 'Helvetica'
};

const baseTheme = createTheme(colors, fonts);

const theme = deepAssign({}, baseTheme, {
  screen: {
    global: {
      body: {
        background: colors.backgroundColor
      }
    },
    components: {
      heading: {
        h1: {
          color: colors.primary
        },
        h2: {
          color: colors.secondary
        },
        h3: {
          color: colors.secondary
        },
        h4: {
          color: colors.secondary
        },
        h5: {
          color: colors.secondary
        },
        h6: {
          color: colors.secondary
        }
      },
      cite: {
        fontFamily: fonts.secondary
      }
    }
  }
});

export default theme;
