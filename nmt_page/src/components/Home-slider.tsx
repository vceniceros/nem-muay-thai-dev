import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { Component } from "react";
import slide1 from '../assets/img/slide1-1.jpg';
import slide2 from '../assets/img/slide1-2.jpg';


function HomeSlider(){
    return(
        <section id="slider" >
        <Carousel data-aos="fade-up" className="carousel-custom">
        <Carousel.Item>
          <img
            className="d-block w-100 custom-slider"
            src={slide1}
            alt="nem muay thai slider1-1"
            
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-slider"
            src={slide2}
            alt="nem muay thai slider1-2"
           
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-slider"
            src={slide1}
            alt="nem muay thai slider1-3"
          
          />
        </Carousel.Item>
      </Carousel>
      </section>
    
    )
}
export default HomeSlider;