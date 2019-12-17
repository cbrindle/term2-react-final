import React, { Component } from 'react'
import SkillActual from './SkillActual'

export default class ShowSkills extends Component {
    state = {

    }

    // class: "Warrior"
    // path: "Berserk"
    // name: "Super Slash"
    // lvl: 3
    // description: "Does a bunch of damage"

    listSkills = () => {
        return this.props.allSkills.map((item) => {
            return(
                <SkillActual
                    id = { item._id }
                    key = { item._id }
                    name = { item.name }
                    description = { item.description }
                    lvl = { item.lvl }
                    charClass = { item.class }
                    path = { item.path }
                    toggleShowSkills={this.props.toggleShowSkills}
                />
            )
        })
    }



    render() {


        return(
            <>
            <div id="main" style={styles.main}>
                <h3 className="mt-3">Skill Database</h3>
            </div>
            <div>
                
                {this.listSkills()}

            </div>
            <div className="text-center">
                <button onClick={this.props.toggleShowSkills} type="button" className="btn btn-warning my-3">Back</button>
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
    }
}