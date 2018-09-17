import React, { Component } from 'react';

export class ListItem extends Component {
    handleEditItem = () => {
       
        let ei = {
            Id: this.props.Id,
            Title: this.props.Title
        }
        this.props.handlerSetEditedItem(ei);
    }
    render() {
        return (
            <tr className="ListItem">
                <td>{this.props.Id}</td>
                <td>{this.props.Title}</td>
                <td><a onClick={this.handleEditItem}>Edytuj</a></td>
            </tr>
        );
    }
}