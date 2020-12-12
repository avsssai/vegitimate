import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import styles from '../styles/NavbarStyles'

function Navbar({ classes }) {
    return (
        <div className={classes.navbar}>
            <div className={classes.logo}>Vegetimate</div>
        </div>
    )
}

export default withStyles(styles)(Navbar)
