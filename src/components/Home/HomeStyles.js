import Home from './Home'

const HomeStyles = (theme) => ({
    Home: {
        width: '100vw',
        fontFamily: theme.fonts.poppins,
    },

    slantBackground: {
        height: '100vh',
        width: '100%',
        background: `linear-gradient(105deg, ${theme.palette.white} 25%, ${theme.palette.lightgreen} 70%)`,
    },

    //***************NAVBAR STYLES ****************/
    Navbar: {
        width: '100%',
        // height: '10vh',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        padding: '1rem 0',
    },
    navContent: {
        width: '80vw',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        // padding: '0 2rem',
        alignItems: 'center',
    },
    logo: {
        fontFamily: theme.fonts.pacifico,
        fontSize: theme.fonts.small,
        fontWeight: theme.text.mainWeight,
        color: theme.palette.darkgreen,
    },
    navs: {
        '& ul': {
            display: 'flex',
            justifyContent: 'space-around',
            listStyle: 'none',

            padding: '0',
            margin: '0',
            '& li': {
                padding: '0 1rem',
                fontWeight: theme.text.subWeight,
                color: theme.palette.white,
            },
        },
    },
    //***************NAVBAR STYLES END ****************/

    //***************LANDING STYLES ****************/

    landingPage: {
        height: '90vh',
        width: '80vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
    },
    leftSection: {
        height: '100%',
        width: '50%',
    },
    content: {
        margin: '10rem 2rem',
        // width: '80%',
    },
    heroHeader: {
        fontSize: theme.fonts.extraLarge,
        fontWeight: theme.text.mainWeight,
        color: theme.palette.darkgreen,
        fontFamily: theme.fonts.poppins,
        lineHeight: '4.5rem',
    },
    heroSubHeader: {
        fontSize: theme.fonts.xSmall,
        color: theme.palette.black,
        // fontWeight: theme.text.mainWeight,
        fontWeight: '500',
        marginTop: '1rem',
        width: '70%',
    },
    heroButton: {
        marginTop: '2rem',
        padding: '.75rem 1.5rem',
        borderRadius: '10px',
        color: theme.palette.darkgreen,
        fontFamily: theme.fonts.poppins,
        fontWeight: '800',
        fontSize: theme.fonts.xSmall,
        '&:focus': {
            outline: 'none !important',
        },
        background: theme.palette.lightgreen,
        borderColor: theme.palette.darkgreen,
        border: '2px solid',
    },
    rightSection: {
        height: '100%',
        width: '50%',
    },
})

export default HomeStyles
