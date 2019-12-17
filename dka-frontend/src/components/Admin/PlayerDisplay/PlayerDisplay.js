import React, { Component } from 'react'
import ARskills from './ARskills/ARskills'
import { apiPlayerUpdate, apiGetAllSkills } from '../../../api/api'

class PlayerDisplay extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showEditSkills: false,
            showEditItems: false,
            allSkills: {},
            allItems: {}
        }
    }

    toggleShowSkills = () => {
        this.setState({
            showEditSkills: !this.state.showEditSkills,
            showEditItems: false
        })
    }

    toggleShowItems = () => {
        this.setState({
            showEditItems: !this.state.showEditItems,
            showEditSkills: false
        })
    }

    loadSkills = () => {
        apiGetAllSkills()
            .then(allSkills => {
                this.setState({
                    allSkills: allSkills
                })
                this.toggleShowSkills()
            })
            .catch(err => console.log(err))
    }

    appHandleUpdatePlayer = () => {
        const data = {
            playerName: document.querySelector('#irlName').value,
            charName: document.querySelector(`#charName`).value,
            email: document.querySelector(`#email`).value,
            class: document.querySelector(`#class`).value,
            guild: document.querySelector(`#guild`).value,
            race: document.querySelector(`#race`).value,
            level: document.querySelector(`#level`).value,
            xp: document.querySelector(`#xp`).value,
            zenni: document.querySelector(`#zenni`).value,
            hp: document.querySelector(`#hp`).value,
            combatMod: document.querySelector(`#combatMod`).value,
            defenseMod: document.querySelector(`#defenseMod`).value,
        }
        apiPlayerUpdate(data)
        this.props.changePlayerFound()
        this.props.changePlayerUpdated()
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    cancelUpdate = () => {
        this.props.changePlayerFound()
    }


    render() {
        const playerInfo = this.props.playerInfo

        return(
            <>
            <div id="main" style={styles.main}>
                <p style={styles.title}>{playerInfo.player}</p>
            </div>
            {!this.state.showEditItems && !this.state.showEditSkills ?
            <>
            <form style={styles.form} className="text-center">
                <div className="form-group">
                    <label>IRL Name</label>
                    <br/>
                    <input onChange={this.handleChange} style={styles.input} type="text" id="irlName" name="irlName" defaultValue={playerInfo.player}></input>
                </div>
                <div className="form-group">
                    <label>Character Name</label>
                    <br/>
                        <input onChange={this.handleChange} style={styles.input} type="text" id="charName" name="charName" defaultValue={playerInfo.charName}></input>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <br/>
                        <input onChange={this.handleChange} style={styles.input} type="text" id="email" name="email" defaultValue={playerInfo.email}></input>
                </div>
                <div className="form-group">
                    <label>Class</label>
                    <br/>
                        <input onChange={this.handleChange} style={styles.input} type="text" id="class" name="class" defaultValue={playerInfo.class}></input>
                </div>
                <div className="form-group">
                    <label>Guild</label>
                    <br/>
                        <input onChange={this.handleChange} style={styles.input} type="text" id="guild" name="guild" defaultValue={playerInfo.guild}></input>
                </div>
                <div className="form-group">
                    <label>Race</label>
                    <br/>
                        <input onChange={this.handleChange} style={styles.input} type="text" id="race" name="race" defaultValue={playerInfo.race}></input>
                </div>
                <div className="form-group">
                    <label>Level</label>
                    <br/>
                        <input onChange={this.handleChange} style={styles.input} type="text" id="level" name="level" defaultValue={playerInfo.level}></input>
                </div>
                <div className="form-group">
                    <label>XP</label>
                    <br/>
                        <input onChange={this.handleChange} style={styles.input} type="text" id="xp" name="xp" defaultValue={playerInfo.xp}></input>
                </div>
                <div className="form-group">
                    <label>Zenni</label>
                    <br/>
                        <input onChange={this.handleChange} style={styles.input} type="text" id="zenni" name="zenni" defaultValue={playerInfo.zenni}></input>
                </div>
                <div className="form-group">
                    <label>Max Hearts</label>
                    <br/>
                        <input onChange={this.handleChange} style={styles.input} type="text" id="hp" name="hp" defaultValue={playerInfo.hp}></input>
                </div>
                <div className="form-group">
                    <label>Combat Bonus</label>
                    <br/>
                        <input onChange={this.handleChange} style={styles.input} type="text" id="combatMod" name="combatMod" defaultValue={playerInfo.combatMod}></input>
                </div>
                <div className="form-group">
                    <label>Defense Modifier</label>
                    <br/>
                        <input onChange={this.handleChange} style={styles.input} type="text" id="defenseMod" name="defenseMod" defaultValue={playerInfo.defenseMod}></input>
                </div>
                <div className="form-group">
                    <label>Skills / Spells / Abilities</label>
                    <br/>
                    <textarea style={styles.textArea} id="skills" name="skills" value={playerInfo.skills} disabled></textarea>
                    <br/>
                    <button onClick={this.loadSkills} type="button" className="btn btn-primary mx-auto" id="addSkillBtn">Add or Remove Skills</button>
                </div>
                <div className="form-group">
                    <label>Items</label>
                    <br/>
                    <textarea style={styles.textArea} id="items" name="items" value={playerInfo.items} disabled></textarea>
                    <br/>
                    <button type="button" className="btn btn-primary mx-auto" id="addItemBtn">Add or Remove Items</button>
                </div>
            <div className="text-center">
                <button type="button" className="btn btn-success" onClick={this.appHandleUpdatePlayer}>Submit</button>
                &emsp;OR&emsp;
                <button type="button" className="btn btn-danger" onClick={this.cancelUpdate}>Cancel</button>
            </div>
            </form>
            <br/>
            
            
            </>
            :
            ''
            }
            {this.state.showEditSkills && !this.state.showEditItems ?
            <ARskills
                allSkills = {this.state.allSkills}
            />
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
        justifyContent: 'center',
        fontFamily: 'fantasy'
    },
    form: {
        overflowY: 'scroll'
    },
    title: {
        fontSize: '1.4em',
        padding: '2vh 0 0 0'
    },
    input: {
        border: '1px solid black',
        width: '75%'
    },
    textArea: {
        border: '1px solid black',
        width: '75%',
        height: '30vh'
    },
    submitArea: {
        padding: '3vh 0 3vh 0',
        display: 'flex',
        justifyContent: 'center'
    }
}

export default PlayerDisplay