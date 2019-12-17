import React, { Component } from 'react'
import ItemActual from './ItemActual'


class ShowItems extends Component {
    constructor(props){
        super(props)

        this.state = {
            
        }
    }

    listItems = () => {
        return this.props.allItems.map((item) => {
            return(
                <ItemActual
                    id = { item._id }
                    key = { item._id }
                    name = { item.name }
                    category = { item.category }
                    description = { item.description }
                    cost = { item.cost }
                    openItemDatabase={this.props.openItemDatabase}
                    returnToItems={this.props.returnToItems}
                />
            )
        })
    }

    render() {
        

        return(
            <>
            <div className="text-center">
                <h3>Click Item to Update</h3>
            </div>
            <div>
                {this.listItems()}
            </div>
            <div className="text-center">
                <button onClick={this.props.openItemDatabase} type="button" className="btn btn-danger mb-3">Cancel</button>
            </div>
            </>
        )
    }
}



export default ShowItems