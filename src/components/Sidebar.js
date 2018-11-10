import React, {Component} from "react";
import VenueList from "./VenueList";

export default class Sidebar extends Component {
    constructor() {
        super();
        this.state = {
            query: ""
        };
    }
    /*Filters the Venue List itself according to search queries*/
    handleFilterVenues = () => {
        if (this.state.query.trim() !== "") {
            const venues = this.props.venues.filter(venue =>
                venue.name.toLowerCase().includes(this.state.query.toLowerCase())
            );
            return venues;
        }
        return this.props.venues;
    };
    /*Filters the Venue List markers according to search queries*/
    handleChange = e => {
        this.setState({ query: e.target.value });
        const markers = this.props.venues.map(venue => {
            const matchingQuery = venue.name
                .toLowerCase()
                .includes(e.target.value.toLowerCase());
            const marker = this.props.markers.find(marker => 
                marker.id === venue.id);
            if (matchingQuery) {
                marker.isVisible = true;
            } else {
                marker.isVisible = false;
            }
            return marker;
        });
        this.props.updateSuperState({ markers });
    };
    render() {
        return (
            <div className="sideBar">
                <input 
                    tabIndex={0}
                    type={"search"} 
                    id={"search"} 
                    placeholder={"Filter Venues"}
                    onChange={this.handleChange} 
                />
                <VenueList 
                    {...this.props}
                    venues={this.handleFilterVenues()} 
                    handleListItemClick={this.props.handleListItemClick} 
                />
            </div>)
    }
}