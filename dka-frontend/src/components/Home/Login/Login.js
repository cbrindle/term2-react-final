import React, { Component } from 'react'
import { apiLogin } from '../../../api/api'

export default class Login extends Component {
    state = {

    }

    login = () => {
        const data = {
            email: document.querySelector(`#email`).value,
            password: document.querySelector(`#password`).value
        }
        apiLogin(data)
            .then(result => {
                if (localStorage.isAdmin === 'true') {
                    this.props.authAdmin()
                    return
                }
                this.props.toggleAuth()
            })
    }

    render() {



        return(
            <>
            <div id="main" style={styles.main}>
                <h3 className="my-3">Login</h3>
                <div id="form-area">
                    <div style={styles.formItem}>
                        <p className="mb-0">Email:</p>
                        <input style={styles.input} type="text" id="email" name="email"></input>
                    </div>
                    <div style={styles.formItem}>
                        <p className="mb-0">Password:</p>
                        <input style={styles.input} type="password" id="password" name="password"></input>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={this.login} type="button" className="btn btn-success">Login</button>
                </div>
            </div>
            </>
        )
    }
}

const styles = {
    main: {
        fontFamily: 'fantasy',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    input: {
        border: '1px solid black',
        width: '60vw'
    },
    formItem: {
        margin: '0 0 3vh 0'
    }
}