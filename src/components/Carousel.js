import React from 'react'
import { Carousel } from 'react-bootstrap'
import '../css/Carousel.css'

const carouselInstance = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="http://4.bp.blogspot.com/_AZm9WkiJk20/S19VY9S3Y0I/AAAAAAAABCo/vAJFGVECicc/s1600/DSCF2391.JPG"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="http://3.bp.blogspot.com/_AZm9WkiJk20/SzAXP2rBqNI/AAAAAAAABB0/djBzLOT1BRw/s1600/DSCF2361.JPG"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img width={900} height={500} alt="900x500" src="http://2.bp.blogspot.com/_AZm9WkiJk20/SyVWQpfc4AI/AAAAAAAAA_8/QeedqNYPxuM/s1600/DSCF1957.JPG"/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default carouselInstance
