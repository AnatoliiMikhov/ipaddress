import { Component } from 'react'
import IPAddress from '../IPAddress/IPAddress'


let xhr
class IPAddressContainer extends Component {
    constructor ( props ) {
        super( props )


        this.state = {
            ip_address: '...',
            city: '...'
        }

        this.processRequest = this.processRequest.bind( this )
    }

    componentDidMount () {
        xhr = new XMLHttpRequest() // TODO use fetch
        xhr.open( "GET", "https://ipinfo.io/json?token=0b06a0d63684da", true )
        xhr.send()

        xhr.addEventListener( "readystatechange",
            this.processRequest, false )
    }

    processRequest () {
        if ( xhr.readyState === 4 && xhr.status === 200 ) {
            const response = JSON.parse( xhr.responseText )

            this.setState( {
                ip_address: response.ip,
                city: response.city
            } )
        }
    }

    render () {
        const { ip_address, city } = this.state
        return (
            <IPAddress ip={ ip_address } city={ city } />
        )
    }
}

export default IPAddressContainer
