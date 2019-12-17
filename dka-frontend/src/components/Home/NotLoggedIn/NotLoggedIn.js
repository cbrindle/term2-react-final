import React, { Component } from 'react'
import background from './images/dka-bg2.png'
import scrollLogin from './images/scroll.png'
import scrollSignup from './images/signup.png'
// import scrollSubmit from './images/scroll-submit.png'
import Login from '../Login/Login'

class NotLoggedIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showLogin: false,
            showSignup: false
        }
        
    }

    showLogin = () => {
        this.setState({
            showLogin: !this.state.showLogin,
            showSignup: false
        })
    }
    

    render() {

        return(
        <>
        <div id="main" style={styles.main}>
        {!this.state.showLogin ?
            <>
            <div id="main-top" className="pt-3 font-weight-bold" style={styles.mainTop}>
                <h2>Welcome Home!</h2>
                <br/>
                <p style={styles.mainTopP}>DiceKnight Adventures is the festival wide RPG! Start a character, roll dice, complete quests and grow in power to experience the Faire like never before! That's right, the Renaissance Faire wasn't nerdy enough for us... so we made it a Dice-Based RPG.</p>
            </div>
            <div id="main-bottom" style={styles.mainBottom}>
                <img onClick={this.showLogin} src={scrollLogin} style={styles.submitImg} alt="A link that submits user credentials to login." />
                OR
                <img src={scrollSignup} style={styles.submitImg} alt="A link to sign up for a user account." />
            </div>
            </>
            :
            <Login
                authAdmin={this.props.authAdmin}
                toggleAuth={this.props.toggleAuth}
                adminLogout={this.props.adminLogout}
            />
        }
        </div>
        </>
        )
    }
}


const styles = {
    main: {
        display: 'grid',
        gridTemplateColumns: '100%',
        gridTemplateRows: '55% 45%',
        height: '63vh',
        fontFamily: 'fantasy',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'

    },
    mainTop: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gridArea: '1 / 1 / span 1 / span 1'
    },
    mainTopP: {
        textAlign: 'justify',
        margin: '0 5vw 0 5vw'
    },
    mainBottom: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '2 / 1 / span 1 / span 1',
        alignItems: 'center'
    },
    submitImg: {
        height: '40%',
        width: '90%',
    }
}

export default NotLoggedIn