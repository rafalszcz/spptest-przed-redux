import React, { Component } from 'react';

export class EditItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: ''
        };
    }
    componentWillReceiveProps(newProps) {
        this.setState({ Title: newProps.editedItem.Title });
    }
    handlerSetEditedItem = () => {
        let ei = {
            Id: 0,
            Title: ''
        }
        this.props.handlerSetEditedItem(ei);
    }
    handlerUpdateEditedItem = () => {

        let ei = {
            Id: this.props.editedItem.Id,
            Title: this.state.Title
        }
        this.props.handlerUpdateEditedItem(ei);
    }
    handleChange = (event) => {
        this.setState({ Title: event.target.value });
    }
    render() {
        return (
            <table className="EditItem">
                <tr>
                    <td colSpan='2'>Edycja elementu</td>
                </tr>
                <tr>
                    <td>Id elementu</td>
                    <td>{this.props.editedItem.Id == 0 ? '' : this.props.editedItem.Id}</td>
                </tr>
                <tr>
                    <td>Tytuł</td>
                    <td><input type='text' value={this.state.Title} onChange={this.handleChange} /></td>
                </tr>
                <tr>
                    <td></td>
                    <td>
                        <input type='button' value="Zapisz" onClick={this.handlerUpdateEditedItem} />
                        <input type='button' value='Anuluj' onClick={this.handlerSetEditedItem} />
                    </td>
                </tr>
            </table>
        );
    }
}