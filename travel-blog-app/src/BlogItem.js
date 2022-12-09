import React from 'react';

export default function BlogItem(props) {
    return ( 
      <div className='blogItem--con'>
        <img className='blogItem--img' src={props.data.imgUrl}/>
        <div className='blogItem--text-con'>
          <div>
              <span>{props.data.location}</span> 
              <a className='blogItem--link' href={props.data.googleMapUrl}>View on Google Maps;</a>
          </div>
          <h3>{props.data.title}</h3>
          <p>{props.data.startDate} - {props.data.endDate}</p>
          <p>{props.data.description}</p>
        </div>
      </div>
    );
}