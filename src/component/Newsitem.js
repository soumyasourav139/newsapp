import React, { Component } from 'react'

import { useEffect,useState  } from 'react';
export class Newsitem extends Component {

  render() {
   
   let {title,description,imageurl,Newsurl} = this.props;
    return (
      <div className='my-3'>
       <div className="card" style={{width: "18rem"}}>
  <img src={imageurl} className='card-img-top' alt=".."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description}</p>
    <a href={Newsurl}target='blank' className="btn btn-primary">read more</a>
  </div>
</div>
      </div>
    )
    }
}
export default Newsitem;