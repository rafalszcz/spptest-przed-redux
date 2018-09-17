import React, { Component } from 'react';
import { ItemsList } from './ItemsList'
import {EditItem} from './EditItem'
export class Layout extends Component {

    handleChange = (event) => {
        this.props.setListId(event.target.value);
    }
    handleGetListItems = () => {
        this.props.getListItems();
    }
    render() {
        let listSelection;
        listSelection = this.props.webLists.map(list => {
            return (
                <option value={list.Id} >{list.Title}</option>
            );
        });
    
        return (
            <div className="Layout">
                <form>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Wybierz listę</label>
                        <select className='form-control' onChange={this.handleChange}>
                            <option>Wybierz</option>
                            {listSelection}
                        </select>
                    </div>
                    <input type="button" className="btn btn-primmary" value="Wczytaj" onClick={this.handleGetListItems} />
                </form>
                <EditItem editedItem={this.props.editedItem} handlerSetEditedItem={this.props.handlerSetEditedItem} handlerUpdateEditedItem={this.props.handlerUpdateEditedItem} />
                <ItemsList listItems={this.props.listItems} handlerSetEditedItem={this.props.handlerSetEditedItem} />
            </div>
        );
    }
}