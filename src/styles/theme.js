import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    color: '#eeee',
    palette: {
        lightgreen: '#97BE11',
        darkgreen: '#28590C',
        black: 'black',
        white: 'white',
        specialHeadings: '#FFA820',
    },
    fonts: {
        extraLarge: '64px',
        large: '48px',
        medium: '36px',
        small: '24px',
        xSmall: '18px',
        text: '16px',
        pacifico: "'Pacifico', cursive;",
        poppins: "'Poppins', sans-serif;",
    },
    text: {
        mainWeight: '600',
        subWeight: '400',
        subText: {
            textStyle: 'italic',
        },
    },
})

export default theme
