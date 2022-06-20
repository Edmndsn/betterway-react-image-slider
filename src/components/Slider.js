import React, {useState} from 'react';
import './Slider.css';
import BtnSlider from './BtnSlider.js';
import dataSlider from './DataSlider.js';


export default function Slider() {

    const [slideIndex, setSlideIndex] = React.useState(1)

    function nextSlide() {
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex + 1)
        } else if (slideIndex === dataSlider.length){
            setSlideIndex(1)
        }
    }

    function prevSlide() {
        if(slideIndex !== 1){
            setSlideIndex(slideIndex - 1)
        } else if (slideIndex === 1){
            setSlideIndex(dataSlider.length)
        }
    }

    function moveDot(index){
        setSlideIndex(index)
    } 

    return (
        <div className="container-slider">
            {dataSlider.map((obj, index) => {
        return (
            <div class={slideIndex === index + 1 ? "slide active-anim" : "slide"} key={obj.id}>
                <img 
                src={`/images/img${index + 1}.jpeg`} alt="image" />
            </div>
        )
    })}
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
            <div 
            className={slideIndex === index + 1 ? "dot active" : "dot"}
            onClick={() => moveDot(index + 1)} >
            </div>
            ))}
            </div>
        </div>
    )
}