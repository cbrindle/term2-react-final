import React, { Component } from 'react'
import CreateQuests from './CreateQuests'
import ChooseRealm from './ChooseRealm'

export default class Quests extends Component {
    state = {
        showQuests: false,
        createNewQuest: false,
        alert: false,
        alertMessage: '',
        allQuests: {}
    }

    showAllQuests = () => {
        this.setState({
            showQuests: !this.state.showQuests,
            createNewQuest: false
        })
    }

    showCreateQuest = () => {
        this.setState({
            showQuests: false,
            createNewQuest: !this.state.createNewQuest
        })
    }

    successMessage = () => {
        this.setState({
            alert: true,
            alertMessage: 'Quest created successfully!'
        })
    }

    closeAlert = () => {
        this.setState({
            alert: false,
            alertMessage: ''
        })
    }

    render(){


        return(
            <>
            {!this.state.showQuests && !this.state.createNewQuest ?
            <>
            <div id="main" style={styles.main}>
                <div id="title" style={styles.title}>
                    <h3 className="pt-3">Quest Database</h3>
                </div>
                <div id="button-area" style={styles.buttonSec}>
                    <button onClick={this.showAllQuests} type="button" className="btn btn-success">Show All Quests</button>
                    &emsp;
                    <button onClick={this.showCreateQuest} type="button" className="btn btn-success">Add New Quest</button>
                </div>
            </div>
            <div className="text-center">
                <button onClick={this.props.openQuestDatabase} type="button" className="btn btn-warning mt-5">Back</button>
            </div>
            </>
            :
            ''
            }
            {this.state.createNewQuest && !this.state.showQuests ?
            <CreateQuests
                showCreateQuest = {this.showCreateQuest}
                successMessage = {this.successMessage}
            />
            :
            ''
            }
            {this.state.showQuests && !this.state.createNewQuest ?
            <ChooseRealm
                showAllQuests = {this.showAllQuests}
            />
            :
            ''
            }
            {this.state.alert ?
            <div onClick={this.closeAlert} style={styles.alertBox}>
                <p><b>{this.state.alertMessage}</b></p>
                <p><i>(Click to close)</i></p>
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
        fontFamily: 'fantasy',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        display: 'flex',
        
    },
    alertBox: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '80vw',
        backgroundColor: 'skyblue',
        border: '1px solid blue',
        margin: '3vh 10vw 0 10vw'
    }
}