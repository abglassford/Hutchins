import React, { Component } from 'react'
import Navbar from './Navbar'
import '../css/Navbar.css'

export default class Gallery extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <h1>This is the Gallery</h1>
      </div>
    )
  }
}
