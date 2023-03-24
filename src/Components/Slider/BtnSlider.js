import React from 'react';
import './Slider.css';
import leftArrow from './icons/arrow-left.png';
import rightArrow from './icons/arrow-right.png';

export default function BtnSlider({ moveSlide, direction }) {
  return (
    <button
      className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      onClick={moveSlide}
    >
      <img src={direction === 'next' ? rightArrow : leftArrow} />
    </button>
  );
}
