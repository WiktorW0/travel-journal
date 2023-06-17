import React from 'react'
import pin from '../images/pin.svg'

function Cards(props){
  return(
    <div className='cards--main'>
      <div className='cards--image-container'>
        <img src={props.placeImg} alt="" className='cards--image'/>
      </div>
      <div className='cards--info-container'>
        <div className='cards--title'>
          <img src={pin} alt="" className='cards--pin'/>
          <p className='cards--country'>{props.country}</p>
          <p className='cards--google'>
            <a href={props.googleURL}>View on Google Maps</a>
          </p>
        </div>
        <h1 className='cards--place-header'>
          {props.place}
        </h1>
        <h3 className='cards--date'>
          {props.date}
        </h3>
        <p className='cards--description'>
          {props.description}
        </p>
      </div>
    </div>
  )
}

export default Cards