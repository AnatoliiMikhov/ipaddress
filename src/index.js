import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import IPAddressContainer from './component/IPAddressContainer/IPAddressContainer.js'

const destination = document.querySelector('#container')

ReactDOM.render(
	<div>
		<IPAddressContainer />
	</div>,
	destination
)