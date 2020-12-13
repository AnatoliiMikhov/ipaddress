import React, {Component} from 'react';
import './IPAddress.scss'

class IPAddress extends Component {
	render() {
		return (
			<div>
				<h1>{this.props.ip}</h1>
				<p>( This is your IP address...probably :P )</p>
				<p>Your city: {this.props.city}</p>
			</div>
		);
	}
}

export default IPAddress;