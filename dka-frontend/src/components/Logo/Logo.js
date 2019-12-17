import React from 'react'
import logo from './images/dka-logo.jpg'

const Logo = () => {
    return(
        <>
        <div id="main" style={styles.main}>
            <div id="logo-area">
                <img src={logo} style={styles.logoImg} alt="Dice Knight Adventures"></img>
            </div>
        </div>
        </>
    )
}

const styles = {
    main: {
        display: 'flex',
        height: '30vh',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage: 'radial-gradient(white, olivedrab)'
    },
    logoImg: {
        width: '100%'
    }
}

export default Logo