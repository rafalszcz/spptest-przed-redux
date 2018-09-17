import React, { Component } from 'react';
import { ListItem } from './ListItem'
export class ItemsList extends Component {

    render() {
        let itemsRows;
        
        if (this.props.listItems) {

          
            itemsRows = this.props.listItems.map(item => {
                return (
                   // <tr>
                   //     <td>{item.Id}</td>
                   //     <td>{item.Title}</td>
                   //     </tr>
                    <ListItem Id={item.Id} Title={item.Title} handlerSetEditedItem={this.props.handlerSetEditedItem} />
                );

            }

            );

        }
        
        return (
            <div className="ItemsList">
                Pobrane elementy listy
            <table>
                    {itemsRows}
                </table>
            </div>
        );
    }
}