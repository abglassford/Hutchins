import React, { Component } from 'react'
import Navbar from './Navbar'
import Carousel from './Carousel'
import '../css/Navbar.css'

export default class Home extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <Carousel/>
      </div>
    )
  }
}
