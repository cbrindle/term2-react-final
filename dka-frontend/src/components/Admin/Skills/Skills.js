import React, { Component } from 'react'
import AddSkills from './AddSkills'
import ShowSkills from './ShowSkills'
import { apiGetAllSkills } from '../../../api/api'

export default class Skills extends Component {
    state = {
        showSkills: false,
        addSkills: false,
        allSkills: {}
    }

    toggleShowSkills = () => {
        this.setState({
            showSkills: !this.state.showSkills,
            addSkills: false
        })
    }

    toggleAddSkills = () => {
        this.setState({
            addSkills: !this.state.addSkills,
            showSkills: false
        })
    }

    getAllSkills = () => {
        apiGetAllSkills()
            .then((skills) => {
                this.setState({
                    allSkills: skills,
                    showSkills: true
                })
            })
            .catch(err => console.log(err))
    }

    render() {



        return(
            <>
            <div id="main" style={styles.main}>

                {!this.state.showSkills && !this.state.addSkills ?
                <>
                <h3 className="mt-3">Skills Database</h3>
                <div id="button-area">
                    <button onClick={this.getAllSkills} type="button" className="btn btn-success mx-3 mt-3">Show All Skills</button>
                    <button onClick={this.toggleAddSkills} type="button" className="btn btn-success mx-3 mt-3">Add New Skill</button>
                </div>
                <div id="back-area" className="text-center">
                    <button onClick={this.props.openSkillDatabase} type="button" className="btn btn-warning mt-5">Back</button>
                </div>
                </>
                :
                ''
                }

                {this.state.showSkills && !this.state.addSkills ?
                <ShowSkills
                    allSkills={this.state.allSkills}
                    toggleShowSkills={this.toggleShowSkills}
                />
                :
                ''
                }

                {this.state.addSkills && !this.state.showSkills ?
                <AddSkills
                    toggleAddSkills={this.toggleAddSkills}
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
        fontFamily: 'Helvetica',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }
}