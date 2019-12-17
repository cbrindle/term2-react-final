import React, { Component } from 'react'
import { apiCreateSkill } from '../../../api/api'

export default class AddSkills extends Component {
    state = {
        selectedClass: 'Warrior'
    }

    updateStateClass = (event) => {
        this.setState({
            selectedClass: event.target.value
        })
    }

    updateClass = (event) => {
        this.setState({
            selectedClass: event.target.value
        })
    }

    appCreateSkill = () => {
        const data = {
            name: document.querySelector(`#name`).value,
            description: document.querySelector(`#description`).value,
            level: document.querySelector(`#level`).value,
            class: document.querySelector(`#class`).value,
            path: document.querySelector(`#path`).value
        }
        apiCreateSkill(data)
            .then(() => {
                this.props.toggleAddSkills()
            })
    }

    render() {



        return(
            <>
            <div id="main" style={styles.main}>
                <h3 className="my-3">Add Skill</h3>
                <div id="form-area" style={styles.form}>
                    <div style={styles.formItem}>
                        <p className="mb-0">Name</p>
                        <input style={styles.input} type="text" id="name" name="name"></input>
                    </div>
                    <div style={styles.formItem}>
                        <p className="mb-0">Description</p>
                        <input style={styles.input} type="text" id="description" name="description"></input>
                    </div>
                    <div style={styles.formItem}>
                        <p className="mb-0">Required Level</p>
                        <input style={styles.input} type="text" id="level" name="level"></input>
                    </div>
                    <div style={styles.formItem}>
                        <p className="mb-0">Class</p>
                        <select style={styles.dropDown} onChange={this.updateClass} type="text" id="class" name="class">
                            <option value="Warrior">Warrior</option>
                            <option value="Rogue">Rogue</option>
                            <option value="Mage">Mage</option>
                        </select>
                    </div>
                    <div style={styles.formItem}>
                        <p className="mb-0">Path</p>
                        {this.state.selectedClass === 'Warrior' ?
                            <select style={styles.dropDown} type="text" id="path" name="path">
                                <option value="Basic">Basic</option>
                                <option value="Berserk">Berserk</option>
                                <option value="Marshall">Marshall</option>
                                <option value="Holy Knight">Holy Knight</option>
                            </select>
                        :
                        ''
                        }
                        {this.state.selectedClass === 'Rogue' ?
                            <select style={styles.dropDown} type="text" id="path" name="path">
                                <option value="Basic">Basic</option>
                                <option value="Thief">Thief</option>
                                <option value="Assassin">Assassin</option>
                                <option value="Acrobatic">Acrobatic</option>
                            </select>
                        :
                        ''
                        }
                        {this.state.selectedClass === 'Mage' ?
                            <select style={styles.dropDown} type="text" id="path" name="path">
                                <option value="Basic">Basic</option>
                                <option value="Protection">Protection</option>
                                <option value="Death">Death</option>
                                <option value="Power">Power</option>
                            </select>
                        :
                        ''
                        }
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={this.appCreateSkill} type="button" className="btn btn-success mx-3 mb-3">Create</button>
                    <button onClick={this.props.toggleAddSkills} type="button" className="btn btn-danger mx-3 mb-3">Cancel</button>
                </div>
            </div>
            </>
        )
    }
}

const styles = {
    main: {
        fontFamily: 'Helvetica',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    formItem: {
        margin: '0 0 3vh 0'
    },
    input: {
        border: '1px solid black',
        width: '60vw'
    },
    dropDown: {
        backgroundColor: 'white',
        width: '60vw'
    }
}