import React, { Component } from 'react'
import {apiPlayerSearch} from '../../../api/api'
import setAuthJWT from '../../../api/setAuthJWT'


class PlayerSearch extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: '',
            errorMessage: '',
            playerUpdated: false
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    appHandlePlayerSearch = (event) => {
        event.preventDefault()
        
        const loginInfo = {
            email: this.state.email,
            password: this.state.password
        }
        apiPlayerSearch(loginInfo)
            .then(player => {
                this.props.changePlayerFound(player.data)
            })
            
            .catch(err => {
                this.setState({
                    errorMessage: err
                })
                this.props.changeAlert()
                
            })
    }

    closeAlert = () => {
        this.props.changeAlert()
        document.querySelector('#email').value='';
        document.querySelector('#email').focus();
    }

    closeSuccess = () => {
        this.props.changePlayerUpdated()
        document.querySelector('#email').value = '';
        document.querySelector('#email').focus();
    }

    logout = () => {
        this.props.adminLogout()

        localStorage.removeItem('jwtToken')
        setAuthJWT(null)
    }

    render() {

    return(
        <>
        <div id="main" style={styles.main}>
            <br/>
            <h1>Find a Player</h1>
            <form onSubmit={this.appHandlePlayerSearch}>
                <div className="form-group">
                    <label>Email</label>
                    <br/>
                    <input style={styles.input} onChange={this.handleChange} type="text" id="email" name="email"></input>
                </div>
                <div className="text-center">
                    <button style={styles.button} type="submit" className="btn btn-success">Submit</button>
                </div>
            </form>

            <p className='pt-3'>OR</p>
            
            <span><button style={styles.button} onClick={this.props.changeCreatePlayer} type="button" className="btn btn-success">Create Player</button>
            &emsp;
            <button onClick={this.props.openSkillDatabase} style={styles.button} type="button" className="btn btn-success">Skill Database</button></span>
            <br/>
            <span><button style={styles.button} onClick={this.props.openItemDatabase} type="button" className="btn btn-success">Item Database</button>
            &emsp;
            <button style={styles.button} onClick={this.props.openQuestDatabase} type="button" className="btn btn-success">Quest Database</button></span>
            <br/>
            <button style={styles.button} onClick={this.logout} type="button" className="btn btn-danger">Log Out</button>
        </div>
        <br/>
        {this.props.alert ?
        <div id="error-box" onClick={this.closeAlert} style={styles.errorBox}>
            <p><b>{this.state.errorMessage}</b></p>
            <p><i>(Click to close)</i></p>
        </div>
        :
        ''
        }
        {this.props.updatedPlayer ?
        <div id="success-box" onClick={this.closeSuccess} style={styles.successBox}>
            <p><b>Player has been updated successfully</b></p>
            <p><i>(click to close)</i></p>
        </div>
        :
        ''
        }
        </>
    )
}
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'fantasy',
        justifyContent: 'center',
        alignItems: 'center'
        
    },
    input: {
        border: '1px solid black',
        margin: '0 0 4vh 0'
    },
    errorBox: {
        width: '80vw',
        margin: '0 10vw 0 10vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
        border: '2px solid red'
    },
    successBox: {
        width: '80vw',
        margin: '0 10vw 0 10vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'skyblue',
        border: '2px solid black'
    },
    button: {
        width: '40vw'
    }
}

export default PlayerSearch