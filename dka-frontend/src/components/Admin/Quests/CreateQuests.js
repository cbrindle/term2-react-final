import React, { Component } from 'react'
import { apiCreateNewQuest } from '../../../api/api'

export default class CreateQuest extends Component {
    state = {

    }

    appCreateNewQuest = () => {
        const data = {
            description: document.querySelector(`#description`).value,
            category: document.querySelector(`#category`).value,
            realm: document.querySelector(`#realm`).value
        }
        apiCreateNewQuest(data)
            .then(() => {
                this.props.showCreateQuest()
                this.props.successMessage()
            })
            .catch(err => console.log(err))
    }

    render(){



        return(
            <>
            <div id="main" style={styles.main}>
                <div id="form" style={styles.form}>
                    <h3>Create Quest</h3>
                    <div style={styles.formText}>
                        <p>Description:</p>
                        <textarea style={styles.inputText} type="text" id="description" name="description"></textarea>
                    </div>
                    <div style={styles.formItem}>
                        <label>Category:&emsp;&emsp;</label>
                        <select style={styles.dropDown} id="category" name="category">
                            <option value="Beginner">Beginner</option>
                            <option value="Advanced">Advanced</option>
                            <option value="Guild">Guild</option>
                        </select>
                    </div>
                    <div style={styles.formItem}>
                        <label>Realm:&emsp;&emsp;</label>
                        <select style={styles.dropDown} id="realm" name="realm">
                            <option value="New Jersey Renaissance Faire">New Jersey Renaissance Faire</option>
                            <option value="Connecticut Renaissance Faire">Connecticut Renaissance Faire</option>
                            <option value="Capital District Renaissance Faire">Capital District Renaissance Faire</option>
                            <option value="Smithville Renaissance Faire">SmithVille Renaissance Faire</option>
                            <option value="Mid-South Renaissance Faire">Mid-South Renaissance Faire</option>
                        </select>
                    </div>
                </div>
                <div className="text-center">
                    <button onClick={this.appCreateNewQuest} type="button" className="btn btn-success mt-3">Create</button>
                    &emsp;&emsp;
                    <button onClick={this.props.showCreateQuest} type="button" className="btn btn-danger mt-3">Cancel</button>
                </div>
            </div>
            </>
        )
    }
}

const styles = {
    main: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90vw',
        margin: 'auto',
        backgroundColor: 'rgb(255,255,255,0.5)',
        padding: '3vh 0 0 0'
    },
    formItem: {
        display: 'flex',
        justifyContent: 'center',
        padding: '2vh 0 2vh 0'
    },
    formText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '2vh 0 2vh 0'
    },
    input: {
        border: '1px solid black'
    },
    inputText: {
        border: '1px solid black',
        width: '60vw',
        height: '6em'
    },
    dropDown: {
        backgroundColor: 'white'
    }
}