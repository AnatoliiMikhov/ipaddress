import { Component } from 'react'
import './IPAddress.scss'

class IPAddress extends Component {
    render () {
        const { ip, city } = this.props

        return (
            <div>
                <h1>{ ip }</h1>
                <p>( This is your IP address...probably :P )</p>
                <p>Of course, if you are not using a VPN...</p>
                <p>Your city is: { city }</p>
            </div>
        )
    }
}

export default IPAddress
