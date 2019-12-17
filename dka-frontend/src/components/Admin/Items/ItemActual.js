import React, { Component } from 'react'
import { apiUpdateItem, apiDeleteItem } from '../../../api/api'

export default class ItemActual extends Component {
    state = {
        editItem: false
    }

    editItem = () => {
        this.setState({
            editItem: true
        })
    }

    updateItem = () => {
        const data = {
            name: document.querySelector(`#itemName`).value,
            category: document.querySelector(`#category`).value,
            description: document.querySelector(`#description`).value,
            cost: document.querySelector(`#cost`).value,
            id: this.props.id
        }
        apiUpdateItem(data)
            .then(updateItem => {
                this.setState({
                    editItem: false
                })
                this.props.openItemDatabase()
            })
            .catch(err => console.log(err))
    }

    deleteItem = () => {
        const data = {
            id: this.props.id
        }
        apiDeleteItem(data)
            .then(payload => {
                this.setState({
                    editItem: false
                })
                this.props.returnToItems()
            })
            .catch(err => console.log(err))
    }

    render() {
        
        const {
            id,
            name,
            category,
            description,
            cost
        } = this.props

        return(
            <>
            <div onClick={this.editItem} key={ id } id="main" style={styles.main}>
                <div id="name-section" style={styles.nameSec}>
                    {!this.state.editItem ?
                    <>
                    <p><b>{ name }</b></p>
                    <p>{ category }</p>
                    </>
                    :
                    <>
                    <input style={styles.input} type="text" id="itemName" name="itemName" defaultValue={ name }></input>
                    <br/>
                    <select style={styles.input} type="text" id="category" name="category">
                        <option value="Level 1 Item">Level 1 Item</option>
                        <option value="Level 2 Item">Level 2 Item</option>
                        <option value="Level 5 Item">Level 5 Item</option>
                        <option value="Level 10 Item">Level 10 Item</option>
                        <option value="Add-On">Add-On</option>
                        <option value="Basic Race">Basic Race</option>
                        <option value="Exotic Race">Exotic Race</option>
                        <option value="Training">Training</option>
                        <option value="Enchantment">Enchantment</option>
                    </select>
                    </>
                    }
                </div>
                <div id="description-section" style={styles.descriptionSec}>
                    {!this.state.editItem ?
                    <p className="pt-1">{ description }</p>
                    :
                    <>
                    <input style={styles.input} type="text" id="description" name="description" defaultValue={ description }></input>
                    </>
                    }
                </div>
                <div id="info-area" style={styles.infoSec}>
                    {!this.state.editItem ?
                    <p className="pt-1">Cost: { cost }</p>
                    :
                    <>
                    <input style={styles.input} type="text" id="cost" name="cost" defaultValue={ cost }></input>
                    </>
                    }
                </div>
            </div>
            {this.state.editItem ?
            <>
            <div className="text-center">
                <button onClick={this.updateItem} type="button" className="btn btn-success">Update</button>
                &emsp;
                <button onClick={this.deleteItem} type="button" className="btn btn-danger">Delete</button>
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
        fontFamily: 'fantasy',
        height: '15vh',
        display: 'grid',
        gridTemplateRows: '50% 50%',
        gridTemplateColumns: '30% 80%',
        border: '1px solid black',
        margin: '2vh 0 2vh 0'
    },
    nameSec: {
        display: 'flex',
        flexDirection: 'column',
        gridArea: '1 / 1 / span 2 / span 1',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.8em',
        backgroundColor: 'lightGray',
        borderRight: '1px solid black'
    },
    descriptionSec: {
        display: 'flex',
        gridArea: '1 / 2 / span 1 / span 1',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: '0.9em',
        width: '70vw',
        fontFamily: 'Helvetica',
        backgroundColor: 'rgb(135, 206, 235, 0.5)'
    },
    infoSec: {
        display: 'flex',
        gridArea: '2 / 2 / span 1 / span 1',
        borderTop: '2px dotted black',
        justifyContent: 'center',
        alignItems: 'center',
        width: '70vw',
        fontFamily: 'Helvetica',
        fontSize: '0.9em',
        backgroundColor: 'rgb(64, 159, 237, 0.5)'
    },
    input: {
        width: '100%',
        border: '1px solid black'
    }
}