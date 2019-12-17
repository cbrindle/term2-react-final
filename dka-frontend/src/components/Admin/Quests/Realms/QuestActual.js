import React, { Component } from 'react'
import { apiUpdateQuest, apiDeleteQuest } from '../../../../api/api'

export default class QuestActual extends Component {
    state = {
        editQuest: false
    }

    editQuest = () => {
        this.setState({
            editQuest: true
        })
    }

    cancelEdit = () => {
        this.setState({
            editQuest: false
        })
    }

    updateQuest = () => {
        const data = {
            description: document.querySelector(`#description`).value,
            category: document.querySelector(`#category`).value,
            id: this.props.id
        }
        apiUpdateQuest(data)
            .then(() => {
                this.setState({
                    editQuest: false
                })
                this.props.resetRealm()
            })
            .catch(err => console.log(err))
    }

    deleteQuest = () => {
        const id = {
            id: this.props.id
        }
        apiDeleteQuest(id)
            .then(payload => {
                this.setState({
                    editQuest: false
                })
                this.props.resetRealm()
            })
            .catch(err => console.log(err))
    }

    render() {

        const {
            id,
            description,
            category,
        } = this.props

        return(
            <>
            <div onClick={this.editQuest} key={ id } id="main" style={styles.main}>
                <div id="description-section" style={styles.top}>
                    {!this.state.editQuest ? 
                    <p>{ description }</p>
                    :
                    <input style={styles.input} type="text" id="description" name="description" defaultValue={ description }></input>
                    }
                </div>
                <div id="category-section" style={styles.bottom}>
                    {!this.state.editQuest ?
                    <p>{ category }</p>
                    :
                    <select style={styles.input} type="text" id="category">
                        <option value="Beginner">Beginner</option>
                        <option value="Advanced">Advanced</option>
                        <option value="Guild">Guild</option>
                    </select>
                    }
                </div>
            </div>
            {this.state.editQuest ?
                <div className="text-center">
                    <button onClick={this.updateQuest} type="button" className="btn btn-success mb-3">Update</button>
                    &emsp;&emsp;
                    <button onClick={this.cancelEdit} type="button" className="btn btn-warning mb-3">Cancel</button>
                    &emsp;&emsp;
                    <button onClick={this.deleteQuest} type="button" className="btn btn-danger mb-3">Delete</button>
                </div>
            :
            ''}
            </>
        )
    }
}

const styles = {
    main: {
        fontFamily: 'Helvetica',
        height: '15vh',
        display: 'grid',
        gridTemplateRows: '70% 30%',
        gridTemplateColumns: '100%',
        border: '1px solid black',
        margin: '0 0 3vh 0'
    },
    top: {
        display: 'flex',
        gridArea: '1 / 1 / span 1 / span 1',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottom: '2px dotted black',
        backgroundColor: 'rgb(135, 206, 235, 0.5)'
    },
    bottom: {
        display: 'flex',
        gridArea: '2 / 1 / span 1 / span 1',
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: 'rgb(64, 159, 237, 0.5)'
    },
    input: {
        border: '1px solid black',
        width: '70%'
    }
}