import React from 'react'
import dkaLogo from './images/dka-main-logo.jpg'
import { FaFacebook } from 'react-icons/fa'


const openFacebook = () => {
    window.open('https://www.facebook.com/diceknightadventures/')
}


const Footer = () => {

    
        
        return(
            <>
            <div id="main" style={styles.mainDiv}>
                <div id="main-left" style={styles.mainDivLeft}>
                    Copyright &copy; May 2017 Dice Knight Adventures, All Rights Reserved.
                </div>
                <div id="main-center" style={styles.mainDivCenter}>
                    <img src={dkaLogo} style={styles.imgContain} alt="Dice Knight Adventures main logo"></img>
                </div>
                <div id="main-right" onClick={() => openFacebook()} style={styles.mainDivRight}>
                    <FaFacebook size={42}/>
                </div>
            </div>
            </>
        )
    }




const styles = {
    mainDiv: {
        display: 'grid',
        height: '7vh',
        gridTemplateColumns: '33.3% 33.3% 33.3%',
        gridTemplateRows: '100%',
        backgroundColor: 'tan',
        fontFamily: 'fantasy',
        fontSize: '0.8em'
    },
    mainDivLeft: {
        gridArea: '1 / 1 / span 1 / span 1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '8px',
        textAlign: 'center'
    },
    mainDivCenter: {
        gridArea: '1 / 2 / span 1 / span 1',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainDivRight: {
        gridArea: '1 / 3 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    imgContain: {
        height: '100%',
        width: '50%'
    }
}

export default Footer