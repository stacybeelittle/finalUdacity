import React, {Component} from "react";

export default class ListItem extends Component {
    render() {
        return (<li className="listItem" 

        /*Handles adding info to the list items*/
        onClick={() => this.props.handleListItemClick(this.props)} >
            <p>{this.props.name}</p> 
            <p>{this.props.url}</p>
        </li>);
    }
}