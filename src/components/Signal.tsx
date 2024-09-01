import React, { Component } from 'react';
import "./signal.css";

// Define the type for the props
interface SignalProps {
    color: string;
    isActive:boolean
}

export default class Signal extends Component<SignalProps> {
    render() {
        // Destructure the color prop
        const { color } = this.props;

        return (
            <div
                className='signal'
                style={{ backgroundColor: `${this.props.isActive?color:"grey"}` }} // Use the color prop to set the background color
            ></div>
        );
    }
}
