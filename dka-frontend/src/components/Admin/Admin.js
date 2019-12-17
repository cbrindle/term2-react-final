import React, { Component } from 'react'
import background from '../Home/NotLoggedIn/images/dka-bg2.png'
import PlayerSearch from './PlayerSearch/PlayerSearch'
import PlayerDisplay from './PlayerDisplay/PlayerDisplay'
import CreatePlayer from './CreatePlayer/CreatePlayer'
import Quests from './Quests/Quests'
import Skills from './Skills/Skills'
import {apiPlayerSearch} from '../../api/api'
import Items from './Items/Items'


class Admin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            playerFound: false,
            playerInfo: '',
            playerUpdated: false,
            alert: false,
            createPlayer: false,
            viewItems: false,
            viewQuests: false,
            viewSkills: false
        }
    }

    appHandlePlayerSearch = (event) => {
        event.preventDefault()

        const loginInfo = {
            email: this.state.email,
            password: this.state.password
        }
        apiPlayerSearch(loginInfo)
    }

    changeAlert = () => {
        this.setState({
            alert: !this.state.alert
        })
    }

    changePlayerFound = (playerInfo) => {
        this.setState({
            playerFound: !this.state.playerFound,
            playerInfo: playerInfo
        })
    }

    changePlayerUpdated = () => {
        this.setState({
            playerUpdated: !this.state.playerUpdated
        })
    }

    changeCreatePlayer = () => {
        this.setState({
            createPlayer: !this.state.createPlayer
        })
    }

    openItemDatabase = () => {
        this.setState({
            viewItems: !this.state.viewItems,
            createPlayer: false,
            viewQuests: false,
            playerFound: false,
            viewSkills: false
        })
    }

    openQuestDatabase = () => {
        this.setState({
            viewQuests: !this.state.viewQuests,
            createPlayer: false,
            playerFound: false,
            viewItems: false,
            viewSkills: false
        })
    }

    openSkillDatabase = () => {
        this.setState({
            viewSkills: !this.state.viewSkills,
            viewItems: false,
            viewQuests: false,
            playerFound: false,
            playerUpdate: false
        })
    }

    render() {

        return(
            <>
                <div id="main" style={styles.main}>
                    {!this.state.viewSkills && !this.state.playerFound && !this.state.createPlayer && !this.state.viewQuests && this.state.viewItems ?
                    <Items
                        openItemDatabase = {this.openItemDatabase}
                    />
                    :
                    ''
                    }
                    {this.state.createPlayer && !this.state.viewItems && !this.state.viewQuests && !this.state.viewSkills ?
                    <CreatePlayer
                        changeCreatePlayer = {this.changeCreatePlayer}
                    />
                    :
                    ''
                    }
                    {!this.state.playerFound && !this.state.createPlayer && !this.state.viewItems && !this.state.viewQuests && !this.state.viewSkills ?
                    <PlayerSearch
                        playerSearch = {this.appHandlePlayerSearch}
                        playerFound = {this.state.playerFound}
                        changePlayerFound = {this.changePlayerFound}
                        updatedPlayer = {this.state.playerUpdated}
                        changePlayerUpdated = {this.changePlayerUpdated}
                        alert = {this.state.alert}
                        changeAlert = {this.changeAlert}
                        changeCreatePlayer = {this.changeCreatePlayer}
                        openItemDatabase = {this.openItemDatabase}
                        openQuestDatabase = {this.openQuestDatabase}
                        adminLogout={this.props.adminLogout}
                        openSkillDatabase={this.openSkillDatabase}
                    />
                    :
                    ''
                    }
                    {this.state.playerFound && !this.state.createPlayer && !this.state.viewItems &&!this.state.viewSkills ?
                    <PlayerDisplay
                        playerInfo = {this.state.playerInfo}
                        playerFound = {this.state.playerFound}
                        changePlayerFound = {this.changePlayerFound}
                        changePlayerUpdated = {this.changePlayerUpdated}
                        updatedPlayer = {this.state.playerUpdated}
                        alert = {this.state.alert}
                        changeAlert = {this.changeAlert}
                    />
                    :
                    ''
                    }
                    {this.state.viewQuests && !this.state.playerFound && !this.state.createPlayer && !this.state.viewItems && !this.state.viewSkills ?
                    <Quests
                        openQuestDatabase={this.openQuestDatabase}
                    />
                    :
                    ''
                    }
                    {this.state.viewSkills && !this.state.playerFound && !this.state.playerUpdated && !this.state.viewItems && !this.state.viewQuests ?
                    <Skills
                        openSkillDatabase = {this.openSkillDatabase}
                    />
                    :
                    ''
                    }
                </div>
            </>
        )
    }
}

const styles = {
    main: {
        height: '63vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundImage: `url(${background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflowY: 'scroll'
    }
}


export default Admin