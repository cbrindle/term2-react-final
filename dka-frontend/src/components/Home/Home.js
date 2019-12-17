import React, { Component } from 'react'
import NotLoggedIn from './NotLoggedIn/NotLoggedIn'

class Home extends Component {

        state = {
            isAuth: false,
            loginShow: false,
            signupShow: false
        }

        showLogin = () => {
            const hide = document.querySelector('#welcome').style.display
            if (hide === '') {
                document.querySelector('#welcome').style.display = 'none'
            } else {
                document.querySelector('#welcome').style.display = ''
            }
            this.setState({
                loginShow: !this.state.loginShow
            })
        }

        toggleAuth = () => {
            this.setState({
                isAuth: !this.state.isAuth
            })
        }



    render() {

        return(
            <>
            
            {!this.state.isAuth ? <NotLoggedIn 
                isAuth = {this.state.isAuth}
                authAdmin={this.props.authAdmin}
                toggleAuth={this.toggleAuth}
                adminLogout={this.props.adminLogout}
            />
            :
            'LOGGED IN'
            }
            
            </>
        )
    }
}


export default Home