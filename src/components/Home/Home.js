import { withStyles } from '@material-ui/core'
import React from 'react'
import styles from './HomeStyles'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'

function Home({ classes }) {
    return (
        <div className={classes.Home}>
            <div className={classes.slantBackground}>
                {/* NAVBAR */}
                <div className={classes.Navbar}>
                    <div className={classes.navContent}>
                        <div className={classes.logo}>Vegitimate</div>
                        <nav className={classes.navs}>
                            <ul>
                                <li>About us</li>
                                <li>Contact</li>
                                <li>Sign In</li>
                                <li>
                                    <ShoppingCartOutlinedIcon />
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>

                {/* LANDING PAGE */}
                <section className={classes.landingPage}>
                    <div className={classes.leftSection}>
                        <div className={classes.content}>
                            <div className={classes.heroHeader}>
                                Fresh produce
                                <br />
                                Delivered home
                            </div>
                            <div className={classes.heroSubHeader}>
                                Superfast contactless delivery to minimise time
                                from the market to your fridge.
                            </div>
                            <button className={classes.heroButton}>
                                Order now
                            </button>
                        </div>
                    </div>
                    <div className={classes.rightSection}></div>
                </section>
            </div>
            <div>
                <h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nihil veritatis voluptatum repudiandae vero quo. Enim
                    dignissimos libero quaerat odit ex eius laboriosam amet
                    dolorem doloremque, accusamus dicta sunt et non.
                </h1>
            </div>
        </div>
    )
}

export default withStyles(styles)(Home)
