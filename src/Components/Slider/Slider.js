import React, { useState } from 'react';
import './Slider.css';
import BtnSlider from './BtnSlider';
import DataSlider from './DataSlider';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== DataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DataSlider.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(DataSlider.length);
    }
  };

  return (
    <div className="container-slider">
      {DataSlider.map((obj, index) => {
        return (
          <div key={obj.id}>
            <div
              className={
                slideIndex === index + 1 ? 'slide active-anim' : 'slide'
              }
            >
              <img src={process.env.PUBLIC_URL + `img/img${index + 1}.jpg`} />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  width: '100%',
                  justifyContent: 'center',
                  alignItems: 'center',
                  position: 'absolute',
                  bottom: '-22%',
                  color: 'red',
                }}
              >
                <h3 className="txt-color-yellow">{obj.title}</h3>
                <p>{obj.descricao}</p>
                <a href={obj.link} className="txt-link" target="_blank">
                  {obj.link}
                </a>
              </div>
            </div>
          </div>
        );
      })}
      <BtnSlider moveSlide={nextSlide} direction={'next'} />
      <BtnSlider moveSlide={prevSlide} direction={'prev'} />
    </div>
  );
};

export default Slider;
