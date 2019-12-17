import React, { Component } from 'react'

export default class ARskills extends Component {
    state = {
        addSkill: false,
        removeSkill: false
    }

    toggleAddSkill = () => {
        this.setState({
            addSkill: !this.state.addSkill,
            removeSkill: false
        })
    }

    render() {


        return(
            <>
            <div id="main" style={styles.main}>
                <span><button onClick={this.toggleAddSkill} type="button" className="btn btn-success mx-3">Add Skill</button>
                <button type="button" className="btn btn-success mx-3">Remove Skill</button></span>
                <div>
                    {this.state.addSkill && !this.removeSkill ?
                    <input type="checkbox" name="text" value="test">Testing checkbox</input>
                    :
                    ''
                    }
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
    }
}