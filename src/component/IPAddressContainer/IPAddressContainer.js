import React, {Component} from 'react'

let xhr;

class IPAddressContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			ip_address: '...'
		}

		this.processRequest = this.processRequest.bind(this)
	}

	componentDidMount() {
		xhr = new XMLHttpRequest()
		xhr.open("GET", "https://ipinfo.io/json?token=0b06a0d63684da", true)
		xhr.send()

		xhr.addEventListener("readystatechange",
			this.processRequest, false);
	}

	processRequest() {
		if (xhr.readyState === 4 && xhr.status === 200) {
			const response = JSON.parse(xhr.responseText)

			this.setState({
				ip_address: response.ip
			})
		}
	}

	render() {
		return (
			<p>{this.state.ip_address}</p>
		)
	}
}

export default IPAddressContainer