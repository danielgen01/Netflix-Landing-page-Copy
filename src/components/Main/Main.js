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
        <div className='tv-card-text'>
        <h1>Auf Ihrem Fernseher</h1>
        <h2>Streamen Sie mit Smart-TVs, Playstation,<br/>
          Xbox, Chromecast, Apple TV, Blu-ray-Player <br />
           u. v. m.</h2>
           </div>
            <div className='tv-and-animation-container'>
           <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
           id='tv-img' />
          <div className='tv-card-video-animation'>
            <video className='tv1-card-video' autoPlay playsInline muted loop>
            <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
            type='video/mp4'></source>
            </video>
            </div>
          </div>
      </div>

      <div className='all-devices-card-ctn'>
      <div className='tv2-and-animation-container'>
      <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png'
           id='tv-2-img' />
           <div className='tv2-card-video-animation'>
            <video className='tv2-card-video' autoPlay playsInline muted loop>
              <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'>

              </source>
            </video>
           </div>
           </div>

        <div className='all-devices-card-text'>
        <h1>Auf allen Geräten</h1>
        <h2>Sie können unbegrenzt Filme und Serien auf<br/>
        Ihrem Smartphone, Tablet, Laptop und<br />
        Fernseher ansehen – ohne Extragebühren.</h2>
           </div>

          
      </div>

      <div className='tv-card-ctn'>
        <div className='tv-card-text'>
        <h1>Profile für Kinder <br />erstellen</h1>
        <h2>Schicken Sie Kinder auf Abenteuer mit ihren <br/>Lieblingsfiguren in einem speziell auf ihre<br/>
         Bedürfnisse abgestimmten Kids-Bereich, der<br/>
          ohne Aufpreis in Ihrer Mitgliedschaft <br/>inbegriffen ist.</h2>
           </div>

           <img src='https://occ-0-5595-3212.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVQJAYnFD-7T5xVFXMD0XzHsQzMajxuCxBBV140Poh4PomimUtpx_DanZ0w-VlpsfROeQEroObAYl3zsLjwKBkq5PZ8eL5Rlb2rE.png?r=244'
           id='tv-img' />
      </div>

      <div className='download-and-watch-card-ctn'>
      <img src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
           id='tv-2-img' />
        <div className='download-and-watch-text'>
        <h1>Serien herunterladen<br/>und offline genießen</h1>
        <h2>Bei sämtlichen Abos außer dem Basis-Abo<br/> mit Werbung inbegriffen.</h2>
           </div>

          
      </div>
      
      
      
    </div>
    
  )
}

export default Main