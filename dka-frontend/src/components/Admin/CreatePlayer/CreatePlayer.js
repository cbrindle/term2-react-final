import React, { Component } from 'react'
import {apiCreatePlayer} from '../../../api/api'

class CreatePlayer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            error: false,
            errorMessage: '',
            createAdmin: false
        }
    }

    changeError = () => {
        this.setState({
            error: false,
            errorMessage: ''
        })
    }

    appCreatePlayer = () => {
        const data = {
            playerName: document.querySelector(`#irlName`).value,
            charName: document.querySelector(`#charName`).value,
            email: document.querySelector(`#email`).value,
            password: document.querySelector(`#password`).value,
            class: document.querySelector(`#class`).value,
            guild: document.querySelector(`#guild`).value,
            race: document.querySelector(`#race`).value,
            level: document.querySelector(`#level`).value,
            hp: document.querySelector(`#hp`).value,
            zenni: document.querySelector(`#zenni`).value,
            xp: document.querySelector(`#xp`).value,
            combatMod: document.querySelector(`#combatMod`).value,
            defenseMod: document.querySelector(`#defenseMod`).value,
            admin: document.querySelector(`#admin`).value
        }
        if (data.playerName === '' ||
            data.charName === '' ||
            data.email === '' ||
            data.password === '' ||
            data.class === '' ||
            data.guild === '' ||
            data.race === '' ||
            data.hp === '' ||
            data.zenni === '' ||
            data.xp === '' ||
            data.combatMod === '' ||
            data.defenseMod === '') {
                this.setState({
                    error: true,
                    errorMessage: 'Please ensure all fields are filled out'
                })
                return
            }
        apiCreatePlayer(data)
            .then(result => {
                this.props.changeCreatePlayer()
            })
            .catch(err => {
                this.setState({
                    error: true,
                    errorMessage: err
                })
                document.querySelector(`#main`).scrollIntoView()
            })
    }

    cancelCreate = () => {
        this.props.changeCreatePlayer()
    }

    render() {

        return(
            <>
            <div id="main" style={styles.main}>
                <div id="title" style={styles.title}>
                    <h3 className='my-3'>Create Account</h3>
                </div>
                <div id="form-section" style={styles.formSection}>
                    <p className="mb-0">Player Name</p>
                    <input style={styles.input} type="text" id="irlName" name="irlName"></input>
                    <br/>

                    <p className="mb-0">Character Name</p>
                    <input style={styles.input} type="text" id="charName" name="charName"></input>
                    <br/>

                    <p className="mb-0">Email</p>
                    <input style={styles.input} type="text" id="email" name="email"></input>
                    <br/>

                    <p className="mb-0">Password</p>
                    <input style={styles.input} type="text" id="password" name="password"></input>
                    <br/>

                    <p className="mb-0">Class</p>
                    <input style={styles.input} type="text" id="class" name="class"></input>
                    <br/>

                    <p className="mb-0">Guild</p>
                    <input style={styles.input} type="text" id="guild" name="guild"></input>
                    <br/>

                    <p className="mb-0">Race</p>
                    <input style={styles.input} type="text" id="race" name="race"></input>
                    <br/>

                    <p className="mb-0">Level</p>
                    <input style={styles.input} type="text" id="level" name="level"></input>
                    <br/>

                    <p className="mb-0">Heats</p>
                    <input style={styles.input} type="text" id="hp" name="hp"></input>
                    <br/>

                    <p className="mb-0">Zenni</p>
                    <input style={styles.input} type="text" id="zenni" name="zenni"></input>
                    <br/>

                    <p className="mb-0">XP</p>
                    <input style={styles.input} type="text" id="xp" name="xp"></input>
                    <br/>

                    <p className="mb-0">Combat Bonus</p>
                    <input style={styles.input} type="text" id="combatMod" name="combatMod"></input>
                    <br/>

                    <p className="mb-0">Defense Modifier</p>
                    <input style={styles.input} type="text" id="defenseMod" name="defenseMod"></input>
                    <br/>

                    <p className="mb-0">Admin</p>
                    <input type="text" style={styles.input} id="admin" name="admin"></input>
                    <br/>
                </div>
                {this.state.error ?
                <div id="error-box" onClick={this.changeError} style={styles.errorBox}>
                    <p className="mt-3"><b>{this.state.errorMessage}</b></p>
                    <p><i>(Click to close)</i></p>
                </div>
                :
                ''}
                <div>
                    <center><button type="button" onClick={this.appCreatePlayer} className="btn btn-success my-3">Submit</button>
                    &emsp;OR&emsp;
                    <button type="button" onClick={this.cancelCreate} className="btn btn-danger">Cancel</button>
                    </center>
                </div>
            </div>
            </>
        )
    }
}

const styles = {
    main: {
        display: 'grid',
        flexDirection: 'column',
        fontFamily: 'fantasy'
    },
    title: {
        display: 'flex',
        justifyContent: 'center'
    },
    formSection: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    label: {
        padding: '0 0 0 0'
    },
    input: {
        border: '1px solid black',
        borderRadius: '3px',
        height: '1.5em',
        width: '60vw',
    },
    errorBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        border: '1px solid black',
        backgroundColor: 'pink',
        width: '80vw',
        margin: 'auto'
    }
}

export default CreatePlayer