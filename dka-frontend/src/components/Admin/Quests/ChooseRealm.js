import React, { Component } from 'react'
import capLogo from './images/cap-logo.jpeg'
import ctLogo from './images/ct-logo.png'
import midsouthLogo from './images/midsouth-logo.png'
import njLogo from './images/nj-logo.png'
import smithLogo from './images/smith-logo.jpg'
import NJ from './Realms/NJ'
import CT from './Realms/CT'
import Smithville from './Realms/Smithville'
import Capital from './Realms/Capital'
import Midsouth from './Realms/Midsouth'
import { apiGetRealmQuests } from '../../../api/api'

export default class ChooseRealm extends Component {
    state = {
        realm: '',
        realmQuests: {}
    }

    chooseRealm = (event) => {
        let clickedRealm = event.target.className
        let data = ''
        const check = event.target.className
        if (check === 'ct') {
            data = 'Connecticut Renaissance Faire'
        } else if (check === 'nj') {
            data = 'New Jersey Renaissance Faire'
        } else if (check === 'smithville') {
            data = 'Smithville Renaissance Faire'
        } else if (check === 'capital') {
            data = 'Capital District Renaissance Faire'
        } else if (check === 'midsouth') {
            data = 'Mid-South Renaissance Faire'
        }
        apiGetRealmQuests(data)
            .then(quests => {
                this.setState({
                    realm: clickedRealm,
                    realmQuests: quests
                })
            })
            .catch(err => console.log(err))
    }

    resetRealm = () => {
        this.setState({
            realm: ''
        })
    }

    render() {




        return(
            <>
            {this.state.realm === '' ?
            <div id="main" style={styles.main}>
                <div id="form" style={styles.form}>
                    <h3>Choose Realm</h3>
                    <div id="logos" className="mt-5" style={styles.logos}>
                        <div id="logos-top" style={styles.logosTop}>
                            <div id="top-left" style={styles.logoTopLeft}>
                                <img className="ct" onClick={this.chooseRealm} src={ctLogo} style={styles.picLogo} alt="Connecticut Renaissance Faire"></img>
                                <p className="ct" onClick={this.chooseRealm}>Connecticut</p>
                            </div>
                            <div id="top-center" style={styles.logoTopCenter}>
                                <img className="nj" onClick={this.chooseRealm} src={njLogo} style={styles.picLogo} alt="New Jersey Renaissance Faire"></img>
                                <p className="nj" onClick={this.chooseRealm}>New Jersey</p>
                            </div>
                            <div id="top-right" style={styles.logoTopRight}>
                                <img className="smithville" onClick={this.chooseRealm} src={smithLogo} style={styles.picLogo} alt="Smithville Renaissance Faire"></img>
                                <p className="smithville" onClick={this.chooseRealm}>Smithville</p>
                            </div>
                        </div>
                        <div id="logos-bottom" style={styles.logosBottom}>
                            <div id="bottom-left" style={styles.logoBottomLeft}>
                                <img className="capital" onClick={this.chooseRealm} src={capLogo} style={styles.picLogoBottom} alt="Capital District Renaissance Faire"></img>
                                <p className="capital" onClick={this.chooseRealm}>Capital District</p>
                            </div>
                            <div id="bottom-right" style={styles.logoBottomRight}>
                                <img className="midsouth" onClick={this.chooseRealm} src={midsouthLogo} style={styles.picLogoBottom} alt="Mid-South Renaissance Faire"></img>
                                <p className="midsouth" onClick={this.chooseRealm}>Mid-South</p>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-3">
                        <button onClick={this.props.showAllQuests} type="button" className="btn btn-warning">Back</button>
                    </div>
                </div>
            </div>
            :
            ''
            }

            {this.state.realm === 'ct' ?
            <CT
                realmQuests={this.state.realmQuests}
                resetRealm={this.resetRealm}
            />
            :
            ''
            }

            {this.state.realm === 'nj' ?
            <NJ
                realmQuests = {this.state.realmQuests}
                resetRealm={this.resetRealm}
            />
            :
            ''
            }

            {this.state.realm === 'smithville' ?
            <Smithville
                realmQuests={this.state.realmQuests}
                resetRealm={this.resetRealm}
            />
            :
            ''
            }

            {this.state.realm === 'capital' ?
            <Capital
                realmQuests={this.state.realmQuests}
                resetRealm={this.resetRealm}
            />
            :
            ''
            }

            {this.state.realm === 'midsouth' ?
            <Midsouth
                realmQuests={this.state.realmQuests}
                resetRealm={this.resetRealm}
            />
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
    logos: {
        display: 'grid',
        height: '50vh',
        gridTemplateColumns: '100%',
        gridTemplateRows: '50% 50%'
    },
    picLogo: {
        height: '60%',
        width: '80%'
    },
    picLogoBottom: {
        height: '50%',
        width: '60%'
    },
    logosTop: {
        display: 'grid',
        gridArea: '1 / 1 / span 1 / span 1',
        gridTemplateColumns: '1fr 1fr 1fr',
        gridTemplateRows: '100%',
        justifyContent: 'space-between'
    },
    logoTopLeft: {
        gridArea: '1 / 1 / span 1 / span 1',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoTopCenter: {
        display: 'flex',
        gridArea: '1 / 2 / span 1 / span 1',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoTopRight: {
        display: 'flex',
        gridArea: '1 / 3 / span 1 / span 1',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logosBottom: {
        display: 'grid',
        gridArea: '2 / 1 / span 1 / span 1',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '100%',
        justifyContent: 'space-between'
    },
    logoBottomLeft: {
        display: 'flex',
        gridArea: '1 / 1 / span 1 / span 1',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoBottomRight: {
        display: 'flex',
        gridArea: '1 / 2 / span 1 / span 1',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
}