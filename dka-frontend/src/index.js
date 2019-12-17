import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import Admin from './components/Admin/Admin'
import Logo from './components/Logo/Logo'

class App extends Component {
    state = {
        isAdmin: true
    }

    authAdmin = () => {
        this.setState({
            isAdmin: !this.state.isAdmin
        })
    }

    adminLogout = () => {
        this.setState({
            isAdmin: false
        })
    }

    render() {
        return(
            <>
            <Logo />

            {!this.state.isAdmin ?
            <Home
                authAdmin={this.authAdmin}
                adminLogout={this.adminLogout}
            />
            :
            <Admin
                adminLogout={this.adminLogout}
            />
            }
            <Footer
            
            />
            </>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));