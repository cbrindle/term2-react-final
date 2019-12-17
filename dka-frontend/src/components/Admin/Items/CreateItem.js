import React, { Component } from 'react'
import {apiCreateItem} from '../../../api/api'

export default class CreateItem extends Component {
    state = {

    }

    createNewItem = () => {
        const data = {
            name: document.querySelector(`#itemName`).value,
            description: document.querySelector(`#description`).value,
            category: document.querySelector(`#category`).value,
            cost: document.querySelector(`#cost`).value
        }
        apiCreateItem(data)
            .then(item => {
                {this.props.itemCreated()}
            })
            .catch(err => console.log(err))
    }

    render() {


        return(
            <>
            <div id="main" style={styles.main}>
                <div id="form" className={styles.form}>
                    <div className="text-center py-3">
                        <h3>Create New Item</h3>
                    </div>
                    <div style={styles.formItem}>
                        <label>Item Name:&emsp;&emsp;</label>
                        <input style={styles.input} type="text" id="itemName" name="itemName"></input>
                    </div>
                    <div style={styles.formItem}>
                        <label>Description:&emsp;&emsp;</label>
                        <input style={styles.input} type="text" id="description" name="description"></input>
                    </div>
                    <div style={styles.formItem}>
                        <label>Category:&emsp;&emsp;</label>
                        <select style={styles.dropDown} id="category" name="category">
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
                    </div>
                    <div style={styles.formItem}>
                        <label>Cost:&emsp;&emsp;</label>
                        <input style={styles.input} type="text" id="cost" name="cost"></input>
                    </div>
                    <div style={styles.formItem}>
                        <button onClick={this.createNewItem} type="button" className="btn btn-success">Create</button>
                        &emsp;&emsp;
                        <button onClick={this.props.itemCreated} type="button" className="btn btn-danger">Cancel</button>
                    </div>
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
        flexDirection: 'column'
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '90vw',
        margin: 'auto',
        backgroundColor: 'white'
    },
    formItem: {
        display: 'flex',
        justifyContent: 'center',
        padding: '2vh 0 2vh 0'
    },
    input: {
        border: '1px solid black'
    },
    dropDown: {
        backgroundColor: 'white'
    }
}