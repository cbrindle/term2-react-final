import React, { Component } from 'react'
import { apiUpdateSkill } from '../../../api/api'

export default class SkillActual extends Component {
    state = {
        editSkill: false,
        selectedClass: this.props.charClass
    }

    updateClassSelected = () => {
        this.setState({
            selectedClass: document.querySelector(`#class`).value
        })
    }

    handleEditSkill = () => {
        this.setState({
            editSkill: true
        })
    }

    cancelEdit = () => {
        this.setState({
            editSkill: false
        })
    }

    updateSkill = () => {
        const data = {
            name: document.querySelector(`#name`).value,
            class: document.querySelector(`#class`).value,
            path: document.querySelector(`#path`).value,
            level: document.querySelector(`#level`).value,
            description: document.querySelector(`#description`).value,
            id: this.props.id
        }
        apiUpdateSkill(data)
            .then(() => {
                this.setState({
                    editSkill: false
                })
                this.props.toggleShowSkills()
            })
            .catch(err => console.log(err))
    }

    deleteSkill = () => {

    }

    render() {

        const {
            name,
            description,
            lvl,
            charClass,
            path
        } = this.props
        return(
            <>
            <div onClick={this.handleEditSkill} id="main" style={styles.main}>
                <div id="info-area" style={styles.infoArea}>
                    {!this.state.editSkill ?
                    <>
                    <p className="mb-0"><b>{ name }</b></p>
                    <p className="mb-0">{ charClass }</p>
                    <p className="mb-0">{ path }</p>
                    <p className="mb-0">Level: {lvl}</p>
                    </>
                    :
                    <>
                    <input style={styles.input} type="text" id="name" name="name" defaultValue={name}></input>
                    <select onChange={this.updateClassSelected} style={styles.input} type="text" id="class" name="class" defaultValue={charClass}>
                        <option value="Warrior">Warrior</option>
                        <option value="Rogue">Rogue</option>
                        <option value="Mage">Mage</option>
                    </select>
                    <select style={styles.input} type="text" id="path" name="path" defaultValue={path}>
                        {this.state.selectedClass === 'Warrior' ?
                        <>
                        <option value="Basic">Basic</option>
                        <option value="Berserk">Berserk</option>
                        <option value="Marshall">Marshall</option>
                        <option value="Holy Knight">Holy Knight</option>
                        </>
                        :
                        ''}
                        {this.state.selectedClass === 'Rogue' ?
                        <>
                        <option value="Basic">Basic</option>
                        <option value="Thief">Thief</option>
                        <option value="Assassin">Assassin</option>
                        <option value="Acrobatic">Acrobatic</option>
                        </>
                        :
                        ''
                        }
                        {this.state.selectedClass === 'Mage' ?
                        <>
                        <option value="Basic">Basic</option>
                        <option value="Protection">Protection</option>
                        <option value="Power">Power</option>
                        </>
                        :
                        ''
                        }
                        </select>
                    <input style={styles.input} type="text" id="level" name="level" defaultValue={lvl}></input>
                    </>
                    }
                </div>
                <div id="description-area" style={styles.descriptionArea}>
                    {!this.state.editSkill ?
                    <p>{description}</p>
                    :
                    <input style={styles.input} type="text" id="description" name="description" defaultValue={description}></input>
                    }
                </div>
            </div>
            {this.state.editSkill ?
            <>
            <div className="text-center">
                <button onClick={this.updateSkill} type="button" className="btn btn-success mb-3 mx-3">Update</button>
                <button onClick={this.cancelEdit} type="button" className="btn btn-danger mb-3 mx-3">Cancel</button>
            </div>
            </>
            :
            ''
            }
            </>
        )
    }
}

const styles = {
    main: {
        fontFamily: 'Helvetica',
        display: 'grid',
        width: '90vw',
        height: '15vh',
        margin: '0 5vw 3vh 5vw',
        border: '1px solid black',
        gridTemplateColumns: '30% 70%',
        gridTemplateRows: '100%'
    },
    infoArea: {
        gridArea: '1 / 1 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        fontSize: '0.8em',
        borderRight: '2px dotted black',
        backgroundColor: 'rgb(182, 235, 249, 0.5)'
    },
    descriptionArea: {
        gridArea: '1 / 2 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgb(200, 200, 200, 0.5)'
    },
    input: {
        width: '100%',
        border: '1px solid black'
    }
}