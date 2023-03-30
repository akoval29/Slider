import React, {useState} from 'react';
import {Helmet} from "react-helmet";

import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'

import Servise from './components/servise';
import Spinner from './components/spinner';
import ErrorMSG from './components/error/errorMSG';
import SliderBlock from './components/sliderBlock';
import ControlsBlock from './components/controls';
import CheckBox from './components/checkBox';

import './components/style/app.css';
import './components/style/button.scss';

const Slider = () => {
  const {search, perPage, result, handleChange, process} = Servise();   // income form Servise
  const [current, setCurrent] = useState(0);                            // current slide

  //Навігація
  const length = result.length;
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  // Доти
  const moveDot = (index) => {
    setCurrent(index)
  }

  // console.log(process);

  return (
    <div className='container'>

      <Helmet>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <title>Pexels Slider</title>
      </Helmet>

      <div className='block-slider'>
        
        <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
        <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
        
        {process === 'axiosError' ? <ErrorMSG/> : null}
        {process === 'getting data...' ? <div className="Spinner"><Spinner /></div> : null}
        {process === 'dataRecieved' ? <SliderBlock current={current} length={length} result={result} moveDot={moveDot}/> : null}

      </div>

      <CheckBox 
        nextSlide={nextSlide}
      />

      <ControlsBlock 
        result={result}
        handleChange={handleChange}
        search={search}
        perPage={perPage}
        ErrorMSG={ErrorMSG}
      />

    </div>
  )
}

export default Slider