import React, { Component } from 'react';
import './ImageChooser.css'

export class ImageChooser extends Component {
  constructor(props) {
    super(props);
    this.height = 150;
  }
  makePath(number, type) {
    return "https://images.pexels.com/photos/" + number + "/pexels-photo-" +
      number + "." + type + "?h=" + this.height +
      "&auto=compress&cs=tinysrgb";
  }
  render() {
    return (
      <div className='imc'>
        <img src={ this.makePath(249798, 'png') }  alt=''/>
        <img src={ this.makePath(370799, 'jpeg') }  alt=''/>
        <img src={ this.makePath(245250, 'jpeg') }  alt=''/>
      </div>
    );
  }
}

