import React, { Component } from 'react'
import Navbar from './Navbar'
import '../css/Navbar.css'

export default class Gallery extends Component {
  render () {
    let test = [1, 2, 3, 4, 5, 6, 7]
    return (
      <div>
          <Navbar/>
          <div className="container-fluid">
            <div className="row">
              <h1>Gallery</h1>
              {test.map((el, i) => {
                return (
                <div className="col-md-4" key={i}>
                  <h1>This is a thing</h1>
                  <img alt="cabinet" src="http://4.bp.blogspot.com/_AZm9WkiJk20/S19VY9S3Y0I/AAAAAAAABCo/vAJFGVECicc/s1600/DSCF2391.JPG"/>
                </div>
                )
              })}
          </div>
        </div>
      </div>
    )
  }
}
