import React, { Component } from 'react'
import {apiGetAllItems} from '../../../api/api'
import ShowItems from './ShowItems'
import CreateItem from './CreateItem'

class Items extends Component {
    constructor(props){
        super(props)

        this.state = {
            showItems: false,
            createNewItem: false,
            allItems: {}
        }
    }

    showItems = () => {
        apiGetAllItems()
            .then(items => {
                this.setState({
                    allItems: items,
                    showItems: true
                })
            })
            .catch(err => console.log(err))
    }

    newItem = () => {
        this.setState({
            createNewItem: true
        })
    }

    itemCreated = () => {
        this.setState({
            createNewItem: false
        })
    }

    returnToItems = () => {
        this.setState({
            showItems: false
        })
    }

    render() {

        return(
            <>
            {!this.state.showItems && !this.state.createNewItem ?
            <>
            <div id="main" style={styles.main}>
                <h3 className="text-center pt-3">Item Database</h3>
                <div id="top-buttons" style={styles.topButtons}>
                    <button onClick={this.showItems} type="button" className="btn btn-success">Show all Items</button>
                    &emsp;
                    <button onClick={this.newItem} type="button" className="btn btn-success">Add New Item</button>
                </div>
            </div>
            <div className="text-center">
                <button onClick={this.props.openItemDatabase} type="button" className="btn btn-warning mt-5">Back</button>
            </div>
            </>
            :
            ''
            }
            {this.state.showItems && !this.state.createNewItem ?
            <ShowItems
                allItems = {this.state.allItems}
                openItemDatabase={this.props.openItemDatabase}
                returnToItems={this.returnToItems}
            />
            :
            ''
            }
            {this.state.createNewItem && !this.state.showItems ?
            <CreateItem
                itemCreated={this.itemCreated}
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
        fontFamily: 'fantasy'
    },
    topButtons: {
        display: 'flex',
        justifyContent: 'center'
    }
}

export default Items