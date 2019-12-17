import React, { Component } from 'react'
import QuestActual from './QuestActual'

export default class NJ extends Component {
    state = {
        allQuests: this.props.realmQuests
    }

    listQuests = () => {
        return this.props.realmQuests.map((item) => {
            return(
                <QuestActual
                    id ={ item._id }
                    description = { item.description }
                    category = { item.category }
                    resetRealm={this.props.resetRealm}
                />
            )
        })
    }


    render() {

        return(
            <>
            <div className="text-center mb-3">
                <h3>New Jersey Quests</h3>
            </div>
            <div>
                {this.listQuests()}
            </div>
            <div className="text-center">
                <button onClick={this.props.resetRealm} type="button" className="btn btn-warning mb-3">Back</button>
            </div>
            </>
        )
    }
}