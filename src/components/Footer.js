import React, { useEffect, useState } from 'react'

function Footer() {
  
  function functionAcceptCookies() {
    localStorage.setItem('acceptCookies', true);
    setAcceptCookies(true)
  };
  function functionRejectCookies() {
    localStorage.setItem('acceptCookies', false);
    setAcceptCookies(true)
  };


const userCookies = localStorage.getItem('acceptCookies')

const [acceptCookies, setAcceptCookies] = useState(false);
useEffect(() => {
  if(userCookies === null){
    setAcceptCookies(false)
  } else{
    setAcceptCookies(true)
  }
}, [])


  return (
    <div>
      { !acceptCookies &&(
        <div className='cookies'>
          <p>By using this website, you agree to our use of cookies. We use cookies to provide you with a great experience and to help our website run effectively.</p>
          <div>
            <button className='accept' onClick={functionAcceptCookies}>Accept</button>
            <button className='reject' onClick={functionRejectCookies}>Reject All</button>
          </div>
        </div>
      )}
        <footer className='text-center d-flex flex-column gap-2'>
          <div className="top" onClick={()=> window.scrollTo(0, 0)}>
            <svg width="37" height="39" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.29289 8.70711C9.68342 9.09763 10.3166 9.09763 10.7071 8.70711L17.0711 2.34315C17.4616 1.95263 17.4616 1.31946 17.0711 0.928937C16.6805 0.538413 16.0474 0.538412 15.6569 0.928936L10 6.58579L4.34315 0.928928C3.95263 0.538404 3.31946 0.538403 2.92894 0.928927C2.53841 1.31945 2.53841 1.95262 2.92894 2.34314L9.29289 8.70711ZM9 7L9 8L11 8L11 7L9 7Z" fill="white"/>
            <path d="M9.29289 20.7071C9.68342 21.0976 10.3166 21.0976 10.7071 20.7071L17.0711 14.3432C17.4616 13.9526 17.4616 13.3195 17.0711 12.9289C16.6805 12.5384 16.0474 12.5384 15.6569 12.9289L10 18.5858L4.34315 12.9289C3.95263 12.5384 3.31946 12.5384 2.92894 12.9289C2.53841 13.3195 2.53841 13.9526 2.92894 14.3431L9.29289 20.7071ZM9 19L9 20L11 20L11 19L9 19Z" fill="white"/>
            <path d="M9.29289 14.7071C9.68342 15.0976 10.3166 15.0976 10.7071 14.7071L17.0711 8.34315C17.4616 7.95263 17.4616 7.31946 17.0711 6.92894C16.6805 6.53841 16.0474 6.53841 15.6569 6.92894L10 12.5858L4.34315 6.92893C3.95263 6.5384 3.31946 6.5384 2.92894 6.92893C2.53841 7.31945 2.53841 7.95262 2.92894 8.34314L9.29289 14.7071ZM9 13L9 14L11 14L11 13L9 13Z" fill="white"/>
            </svg>
          </div>
          <div className='d-flex flex-row justify-content-center gap-3'>
                <a href='https://www.instagram.com/oduk_sr/'><i className="fa-brands fa-instagram"></i></a>
                <a href='https://www.facebook.com/profile.php?id=100069487444055'><i className="fa-brands fa-facebook-f"></i></a>
                <a href='https://www.youtube.com/channel/UCPrYwmoy9wVGNwg-dmyCNRQ'><i className="fa-brands fa-youtube"></i></a>
                <a href='https://open.spotify.com/user/31uk62sl7qzzfdry74zbulgvumri'><i className="fa-brands fa-spotify"></i></a>
                <a href='https://www.blogger.com/blog/posts/205945650435362831?bpli=1&pli=1'><i className="fa-solid fa-blog"></i></a>
          </div>
          <p>Copyright © All Rights Reserved | Designed & Developed by Austine Oduk <a href='https://github.com/DevOduk'>See Portfolio</a></p>
        </footer>
    </div>
  )
}

export default Footer
