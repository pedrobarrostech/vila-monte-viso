import React, { Component } from 'react'
import Scroll from 'react-scroll'
import BackgroundSlideshow from 'react-background-slideshow'
import { URL_ASSETS } from '../config'
const Element = Scroll.Element

export default class Gallery extends Component {

  constructor (props) {
    super(props)
    this.state = {
      banners: []
    };
    this.fetchBanners = this.fetchBanners.bind(this)
  }

  componentDidMount () {
    this.fetchBanners()
  }

  fetchBanners () {
    this.props.fetchBanners().then((res) => {
      let banners = res.payload.data.data
      const newBanners = banners.map((banner) => {
        return `${URL_ASSETS}${banner.image}`
      })
      this.setState({ banners: newBanners })
    })
  }

  render () {
    return (
      <Element name='banner' className='element'>
        <div className='container logo'>
          <div className='row center'>
            <img className='main-logo' src={require('../template/images/logo.png')} width='600' />
          </div>
          <div className='row center margin--bottom-3x'>
            <a href='https://www.facebook.com/pedrohawt' className='btn-large waves-effect waves-light red darken-3'>Ir para o Facebook</a>
          </div>
        </div>
        <BackgroundSlideshow images={this.state.banners} />
      </Element>

    )
  }
}