import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='Header'>
      <div className='new-batch'>
        NEU!
      </div>
    <div className='banner-offer-text'>
      <span>Abos jetzt schon ab <span className='pricing'>4,99€</span></span>
    </div>
    <div className='weitere-infos-button'>
     <a href='index.html'>Weitere Infos</a>
     <i class='bx bx-chevron-right' id='chevron'></i> 
    </div>
    </div>
  )
}

export default Header