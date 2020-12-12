const NavbarStyles = (theme) => ({
    navbar: {
        background: theme.palette.white,
        width: '100vw',
        height: '10vh',
        padding: '0 3rem',
        border: '1px solid red',
    },
    logo: {
        color: theme.palette.darkgreen,
        fontFamily: theme.fonts.pacifico,
        fontSize: theme.fonts.small,
    },
})

export default NavbarStyles
