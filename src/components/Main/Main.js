import React from 'react'
import './Main.css'

const Main = () => {
  return (
    <div className='Main'>
      <div className='background'>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/862cc171-8df5-418c-886f-2aaf767ae159/a2446503-ce3b-45a5-85f8-5dbe8c5dde72/DE-de-20230130-popsignuptwoweeks-perspective_alpha_website_large.jpg'
      id='background-cover' />
      </div>
      <img src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg' 
      id='logo'/>
      <div className='top-buttons'>
        <div className='lang-button'>
          <h3>Deutsch</h3>
          </div>
        <div className='login-ctn'>
          <button className='login-btn'>
            Einloggen
          </button>
        </div>
        </div>
      <div className='centered-content'>
        <h1 style={{textAlign:"center"}}>Unbegrenzt Filme, Serien <br/>
        <span style={{textAlign:"center"}}> und mehr</span></h1>
        <h4 className='test'>Genießen Sie Netflix, wo immer Sie möchten. Jederzeit kündbar.</h4>
      
        <form className='form-email-form'>
        <h5 className='form-title'>Sind Sie startklar? Geben Sie Ihre E-Mail-Adresse ein, um Ihre Mitgliedschaft zu beginnen oder zu <br />reaktivieren.</h5>
        <div className='email-form-lockup'>
          <input type="text" 
          placeholder='E-Mail-Adresse'
          id='input-form'  
        />
        <button className='letsgo-btn'>
           Loslegen
           <i class='bx bx-chevron-right'></i> 
        </button>
        </div>
        </form>
      </div>
      <div className='tv-card-ctn'>
        <h1>Auf Ihrem Fernseher</h1>
        <h2>Streamen Sie mit Smart-TVs, Playstation,<br/>
          Xbox, Chromecast, Apple TV, Blu-ray-Player <br />
           u. v. m.</h2>

           <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
           id='tv-img' />
      </div>
      
      
    </div>
    
  )
}

export default Main