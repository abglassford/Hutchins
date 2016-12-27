import React, { Component } from 'react'
import Navbar from './Navbar'
import '../css/Navbar.css'

export default class Gallery extends Component {
  render () {
    let test = [1, 2, 3, 4, 5, 6, 7]
    return (
      <div>
        <Navbar/>
        <h1>This is the Gallery</h1>
        {test.map((el) => {
          return <h1>HEY!</h1>
        })}
      </div>
    )
  }
}
