import React, { useState, useEffect, useRef } from 'react';
import Modal from '@mui/material/Modal';
import './App.css';
import { useForm, ValidationError } from '@formspree/react';
import Footer from './components/Footer.js';

function ContactForm() {
    const [answer, setAnswer] = useState('');
    const [state, handleSubmit] = useForm("xkndqlgr");


useEffect(() => {
  // fetch('hhttps://api.quotable.io/random')
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data)
  // });
  // .catch(error){
  //   console.error(error);
  // };
}, [])



    const checkAnswer = (e) => {
        e.preventDefault(); // Prevent default form submission

        // Check if the answer is correct
        if (parseInt(answer) !== 18) {
            alert("Incorrect answer. Try again!");
        } else {
            // If the answer is correct, proceed with form submission
            handleSubmit(e); // Submit the form
        }
    };
    if (state.succeeded) {
        return (
          <div>
       <form method='POST' className='container contact' id='contact' action='https://formspree.io/f/xkndqlgr' onSubmit={checkAnswer}>
       <div className='text-center pb-3'>
         <h1>Contact me</h1>
         <p>Want to start an interesting project?? 🤔. Hola at me!</p>
       </div>
         <div className='row'>
         <div className='col-5'>
            <img className='mb-2' style={{height: '70px'}} src="/media/images/shortimgLogo.png" />
            <h2>Got a problem to solve?</h2>
            <p style={{lineHeight: '1.5', fontSize: '.8rem'}}>Get a world class high tech rand revolutionary website that makes your business stand out.</p>
         </div>
          <div className='col ContactDetails'>
            <p className='container text-center p-4 p-flex justify-content-center align-content-center' style={{minHeight: "400px", display: "flex", alignItems: "center", color: "green", backgroundColor: "whitesmoke"}}>
              Congratulations! Your message has been sent successfully!
              <a href='#explore'><button className='btn btn-0' style={{backgroundColor: 'gainsboro', color: '#354e92', border: '1px solid #354e92'}}>Explore</button> </a>
            </p>
            </div>
         </div>
       </form >
          </div>
        )
    }
    return (
       <form method='POST' className='container contact' id='contact' action='https://formspree.io/f/xkndqlgr' onSubmit={checkAnswer}>
       <div className='text-center pb-3'>
         <h1>Contact me</h1>
         <p>Want to start an interesting project?? 🤔. Hola at me!</p>
       </div>
         <div className='row'>
         <div className='col-5'>
            <img className='mb-2' style={{height: '70px'}} src="/media/images/shortimgLogo.png" />
            <h2>Got a project to build?</h2>
            <p style={{lineHeight: '1.5', fontSize: '.8rem'}}>Get a world class high tech rand revolutionary website that makes your business stand out.</p>
         </div>
          <div className='col ContactDetails'>
                <div className="form-group">
                <label htmlFor='service' >NAME</label>
                  <input type="text" className="form-control" name='senderName' placeholder="Full Name" required/>
                </div>
                <div className="form-group">
                <label htmlFor='service'  className=''>EMAIL</label>
                  <input type="email" className="form-control" name='senderEmail' placeholder="Email address" />
                </div>
              <div className="form-group">
              <label htmlFor='service'  className=''>MESSAGE</label>
                 <textarea className="form-control" required name='typedMessage' id="exampleFormControlTextarea1" rows="3" placeholder='Enter message'></textarea>
               </div>
               
               <div className="form-group  ">
                 <label htmlFor='service'  className=''>What service are you looking to get?</label>
                  <select type="text" className="form-control" name='service' placeholder="Full Name" required >
                   <option>Web Development </option>
                   <option>Web Design </option>
                   <option>Project Consultation </option>
                   <option>Other </option>
                  </select>
                </div>
                
               <div className='btnSend mt-5'><span> 13 + 5 = <input type='text' required onChange={(e) => setAnswer(e.target.value)}/></span>  <button type='submit' className='btn btn-0 text-dark' style={{border: '1px solid black', }}>Send</button> </div>
            </div>
         </div>
       </form >
    );
  }

function App() {
  const [open, setOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');




  
  const projects = [
    {
      title: 'A-Codes Website',
      category: 'Web Development',
      date: 'Feb - Mar 2024',
      link: 'https://a-codes-photography.vercel.app/',
      description: 'This is a photography website containing image portfolios. It showcases meticulous implementation of Libraries to offer a seamless image viewing on a website.',
      technologies: ['React.JS', 'Material UI','Figma', 'Bootstrap', 'Javascript', 'Node.JS', 'Express', 'MongoDB', 'Sass', 'HTML/CSS'],
      image: '/media/images/A-codes.png'
    },
    // Add more projects as needed
    {
      title: 'Music Suggestion App',
      category: 'Web Development',
      date: 'Mar - May 2024',
      link: '/',
      description: 'This web app suggests music using the music api to listeners.',
      technologies: ['React.JS', 'Material UI', 'Bootstrap', 'Javascript','Figma', 'Node.JS', 'Express', 'MongoDB', 'Sass', 'HTML/CSS'], // Empty technologies array
      image: '/media/images/MusicSuggestion App.jpg'
    },
    {
      title: 'Social Media Posta',
      category: 'Graphic Design',
      date: 'Oct, 2024',
      link: '/media/images/Poster.png',
      description: 'This is a posta design for an ad for website developer social media.',
      technologies: ['Figma', 'Adobe Photoshop'], // Empty technologies array
      image: '/media/images/Poster.png'
    },
    {
      title: 'Car-smatics Website',
      category: 'Web Development',
      date: 'Dec, 2023',
      link: '/',
      description: 'This is a car rental, buying and selling high level website containing highly advanced technologies.',
      technologies: ['React.JS', 'Material UI', 'Bootstrap','Figma', 'Javascript', 'Node.JS', 'Express', 'MongoDB', 'Sass', 'HTML/CSS'],
      image: '/media/images/Light Mode.png'
    },
    {
      title: 'Clinic/Consultation Website',
      category: 'Web Development',
      date: 'Sep, 2024',
      link: '/',
      description: 'This is a health clinic and consultation website containing multiple pages put together. Find out more...',
      technologies: ['Figma', 'Javascript', 'Bootstrap', 'Node.JS', 'Express', 'MongoDB', 'Sass', 'HTML/CSS'],
      image: '/media/images/J&MClinic.png'
    },
    {
      title: 'Autokonnect Website',
      category: 'Web Development',
      date: 'Oct, 2024',
      link: 'https://autokonnect-app.vercel.app/',
      description: 'This is a health clinic and consultation website containing multiple pages put together. Find out more...',
      technologies: ['Figma', 'Javascript', 'Bootstrap', 'Node.JS', 'Express', 'MongoDB', 'Sass', 'HTML/CSS'],
      image: '/media/images/J&MClinic.png'
    },
    {
      title: 'My EComerce Website Acc.',
      category: 'Web Development',
      date: 'Jan - Mar, 2023',
      link: '/',
      description: 'This is a health clinic and consultation website containing multiple pages put together. Find out more...',
      technologies: ['React.JS', 'Bootstrap', 'Material UI','Figma', 'Javascript', 'Node.JS', 'Express', 'MongoDB', 'Sass', 'HTML/CSS'],
      image: '/media/images/EComerce.png'
    },
    {
      title: 'Advert banner/post',
      category: 'Graphic Design',
      date: 'June, 2024',
      link: '/',
      description: 'This is a graphic banner for an electronics company for a black friday sales.',
      technologies: ['Adobe Ilustrator','Figma', 'Photoshop'],
      image: '/media/images/wideBanner.png'
    },
    {
      title: 'Word Editor',
      category: 'Project',
      date: 'Feb 2023 - Current',
      link: 'https://assistant-word-editor.vercel.app/',
      description: 'This is a website that helps writers count words, keep track of words, set word limits and avoids being below or Above set limits. Comes in handy for students and writers. Still under development!',
      technologies: ['Figma', 'Javascript', 'Node.JS', 'Bootstrap', 'Sass', 'HTML/CSS'],
      image: '/media/images/WordEditor.png'
    },
  ];







  const filteredProjects = projects.filter(project => {
    if (activeFilter === 'All') {
      return true;
    }
    return project.category.includes(activeFilter);
  });

  const [selectedProject, setSelectedProject] = useState({});
  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setSelectedProject({});
  };

  const right = '>';

  const ContainModal = () => {
    return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {selectedProject && (
          <div className='itemPreview'>
            <div className='imageHolder'>
              <img src={selectedProject.image} alt='' loading='lazy'/>
              <button className='btn categoryId'>{selectedProject.category}</button>
            </div>
            <div>
              <h3>{selectedProject.title}</h3>
              <h4>{selectedProject.category} • {selectedProject.date}  • <a target='_blank' href={selectedProject.link}>{selectedProject.link}</a></h4>
              <p>{selectedProject.description}</p>
            </div>
            {selectedProject.technologies && selectedProject.technologies.length > 0 && (
              <>
                <h5>Technologies</h5>
                <div className='technologiesUsed'>
                  {selectedProject.technologies.map((tech, index) => (
                    <div className='btn technology' key={index}>{tech}</div>
                  ))}
                </div>
              </>
            )}
            <a href={selectedProject.link} target='_blank'><button className='btn seePreview'>View Website {right}</button></a>
            <ion-icon onClick={handleClose} name="close-outline"></ion-icon>
          </div>
        )}
      </Modal>
    );
  };





  // const chevyleft = () => {
  //   const Menu = document.querySelector(".Menu");
  //   if (Menu.style.right !== "0px") {
  //     Menu.style.transition = ".4s ease";
  //     Menu.style.right = "0px";
  //   } else {
  //     Menu.style.right = "-300px";
  //   }
  // };
  const Navigation = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isTop, setIsTop] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        const threshold = window.innerHeight; // Threshold at 100vh
  
        if (prevScrollPos < threshold || currentScrollPos === 0) {
          setIsTop(true);
        } else {
          setIsTop(false);
        }
        setPrevScrollPos(currentScrollPos);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollPos]);
  
    const navStyle = {
      backgroundColor: isTop ? 'transparent' : '#294585d0',
      position: isTop ? 'absolute' : 'fixed',
      transition: '.5s ease',
    };

useEffect(() => {
  if(window.innerWidth < 1000){
    setMenuOpen(false)
  } else (
    setMenuOpen(true)
  )

}, [window.innerWidth])

useEffect(() => {
  if(window.innerWidth < 1000){
    if(menuOpen){
      document.body.classList.add('menuOpen')
    } else {
      document.body.classList.remove('menuOpen')
    }
  }

}, [menuOpen])


  return(
    <div className='mainNavigation'  style={navStyle}>
            <style jsx>{`
              @media (max-width: 1000px) {
                .navList {
                  display: ${menuOpen ? 'block' : 'none'};
              }
              }
      `}</style>
      <a href='/' className='logo p-0'>
          <img src="/media/images/Logocoder.png" className='p-0 m-0'/>
      </a>
      {menuOpen && (
         <ul className='navList'>
          <a onClick={()=> window.innerWidth < 1000 && setMenuOpen(false)} href='#home'><li>Home</li></a>
          <a onClick={()=> window.innerWidth < 1000 && setMenuOpen(false)} href='#about'><li>About</li></a>
          <a onClick={()=> window.innerWidth < 1000 && setMenuOpen(false)} href='#portfolio'><li>Portfolio</li></a>
          <a onClick={()=> window.innerWidth < 1000 && setMenuOpen(false)} href='#contact'><li>Contact</li></a>
          <a onClick={()=> window.innerWidth < 1000 && setMenuOpen(false)} href='#blogs'><li>Blogs</li></a>
         </ul>
      )}
         <div className='menubtn' onClick={()=> setMenuOpen(!menuOpen)}>{menuOpen ? <ion-icon name="close-outline"></ion-icon> : <ion-icon name="menu-outline"></ion-icon>}</div>
    </div>
  )
}


const Hexagon = (props) => {
  return (
    <div className="hex-container">
      <div className="hexagon"></div>
      <div className="content">
        <h3>{props.number}</h3>
        {props.svg}
          <h4 style={{fontSize: '1rem'}}>{props.trait}</h4>
      </div>
    </div>
  )
}







const [activePlan, setActivePlan] = useState('Intermediate');

const plans = [
  {
    name: 'Basic',
    description: 'Simple design',
    price: 59.99,
    bestFor: 'A simple design good for small businesses and personal websites and portfolios!',
    features: [
      'Single landing Page',
      'Website deployment',
      'Basic SEO',
      'Responsive website design',
      'Clean Site',
      'Email Support',
      'Social Media Integration'
    ],
    color: 'black'
  },
  {
    name: 'Intermediate',
    description: 'Intermediate level design (Prefered)',
    price: 98.49,
    bestFor: 'his is an intermediate website suitable for business portfolios, company websites and low scale ecommerse.',
    features: [
      '2 to 5 Pages',
      'Website deployment',
      'Advanced SEO',
      'Responsive website design',
      'Clean Site',
      'Email & Phone Support',
      'Social Media Integration',
      'Custom Contact Forms',
      'Blog Setup'
    ],
    color: 'blue'
  },
  {
    name: 'Professional',
    description: 'Complex UI/UX design',
    price: 129.25,
    bestFor: '',
    features: [
      'Multiple unlimited Pages',
      'Free domain name',
      'Advanced SEO',
      'Responsive website design',
      'Clean Site',
      'Priority Support',
      'Social Media Integration',
      'Custom Contact Forms',
      'Blog Setup',
      'E-commerce Functionality',
      'Analytics Setup',
      'Custom Graphics',
      'Content Management System'
    ],
    color: 'green'
  }
];



  return (
    <div className="App" id='home'>
      <ContainModal />
      <Navigation />
      <div className='heroHome'>
          <div className='homeOverlay'>
            <h1>Hello there, I am <strong>Austine Oduk,</strong> <br/></h1>
            <h5>I am a passionate Front-end web developer.</h5>
            <small>Working at Autokonnect Co. as the lead Website Developer and PM, I have an eye for user friendly design, responsive websites, and fast, scalable and clean Software</small>
            <div className='d-flex flex-row justify-content-center gap-3 p-0 fs-4 text-light mt-2'>
                <a href='https://www.instagram.com/oduk_sr/'><i className="fa-brands fa-instagram"></i></a>
                <a href='https://www.facebook.com/profile.php?id=100069487444055'><i className="fa-brands fa-facebook-f"></i></a>
                <a href='https://www.youtube.com/channel/UCPrYwmoy9wVGNwg-dmyCNRQ'><i className="fa-brands fa-youtube"></i></a>
                <a href='https://open.spotify.com/user/31uk62sl7qzzfdry74zbulgvumri'><i className="fa-brands fa-spotify"></i></a>
                <a href='https://www.blogger.com/blog/posts/205945650435362831?bpli=1&pli=1'><i className="fa-solid fa-blog"></i></a>
            </div>
            <div>
                <a href='#portfolio'><button className='btn btn-0'>Portfolio</button> </a> <a href='/media/Documents/resume.pdf'><button className='btn btn-0'>Resume</button></a>
            </div>

          </div>
          <div className='bubblesContainer'>
              <img src="/media/images/bubble.png" className="imagefloat bubble"  />
              <img src="/media/images/bubble.png" className="imagefloat bubble1" />
              <img src="/media/images/bubble.png" className="imagefloat bubble2" />
              <img src="/media/images/bubble.png" className="imagefloat bubble3" />
              <img src="/media/images/bubble.png" className="imagefloat bubble4" />
              <img src="/media/images/bubble.png" className="imagefloat bubble5" />
              <img src="/media/images/bubble.png" className="imagefloat bubble6" />
              <img src="/media/images/bubble.png" className="imagefloat bubble7" />
              <img src="/media/images/bubble.png" className="imagefloat bubble8" />
              <img src="/media/images/bubble.png" className="imagefloat bubble9" />
              <img src="/media/images/bubble.png" className="imagefloat bubble10"/>
              <img src="/media/images/bubble.png" className="imagefloat bubble11"/>
          </div>
          <a href='#about' title='Scroll' className="down-arrow"></a>
      </div>

      <div className='container' id='about'>
          <div className='text-center pb-3'>
            <h1>About</h1>
            <p>Who is this guy?? 🤔.</p>
            <p>Oduk is a passionate website developer having interest in building and deploying responsive, user friendly, interactive and intuitive scalable websites using popular frameworks. I build the best solutions for your business or proffession</p>
          </div>
        <div className='d-flex justify-content-center gap-4 align-items-center flex-wrap hexagonsCont' style={{width: '100%', minHeight: '50vh'}}>
            <Hexagon trait="Dedicated" svg={<ion-icon name="barbell-outline"></ion-icon>} />
            <Hexagon trait="Ambitious" svg={<ion-icon name="bulb-outline"></ion-icon>} />
            <Hexagon trait="Industrious" svg={<ion-icon name="bar-chart-outline"></ion-icon>} />
            <Hexagon trait="Team-Leader" svg={<ion-icon name="people-outline"></ion-icon>} />
            <Hexagon trait="Mentor" svg={<ion-icon name="shield-checkmark-outline"></ion-icon>} />
        </div>
          <h4 className='text text-center mt-3'>Hello there, it's <b>Austine</b>. again. <br/>I am a <code>Full-stack developer, Designer, SEO specialist, Writer, Mentor and Consultant</code></h4>
          <p>(I have an immense passion for Front-end [Particularly React - I just love it])</p>
        <div className="alert alert-primary" role="alert" style={{width: '100%', borderLeft: '5px solid blue'}}>
          Austine is currently working as a mentor, consulting and freelance web developer at Car-ismatics based in Atlanta Georgia...
        </div>
        <div className='d-flex gap-3 pt-4 pb-4 mt-4 mb-4 educationWrap' style={{width: '100%', position: 'relative'}}>
            <div style={{position: 'relative'}}>
                <div className="hex-container profile">
                  <div className="hexagon profilePhoto">
                  </div>
                </div>
              </div>
            <div className='' style={{width: '100%'}}>
              <h2>Education</h2>
              <div className='d-flex mt-3'  style={{width: '100%'}}>
                <div style={{width: '35%'}}>Harvard University (2023 - 2024)</div>
                <div className='right' style={{width: '65%'}}>
                  <h5><b>Certification in Introduction to Computer Science (CS50)</b></h5>
                  <p>Received training and certification in Introduction to Computer Science (CS50). Gaining skills to CODING.</p>
                  <ol>
                    <li>Javascript</li>
                    <li>C</li>
                    <li>Scratch</li>
                    <li>Data Structures and Algorithms</li>
                  </ol>
                  <h5>Achievements</h5>
                  <ul>
                    <li>Certification in Frontend Web Development</li>
                    <li>Capstone Project</li>
                  </ul>
                </div>
              </div>

              <div className='d-flex mt-3'  style={{width: '100%'}}>
                <div style={{width: '35%'}}>ALX College (2021 - 2022)</div>
                <div className='right' style={{width: '65%'}}>
                  <h5><b>Certification in Software Development</b></h5>
                  <p>Received training and certification in frontend website developemtn. Gaining skills to fully build and deploy any scale website from simple landing pages to eCommerce.</p>
                  <ol>
                    <li>Javascript (Vanilla, Vue, Angular, JQuery)</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Node JS</li>
                    <li>MongoDB</li>
                    <li>PHP</li>
                  </ol>
                  <h5>Achievements</h5>
                  <ul>
                    <li>Certification in Frontend Web Development</li>
                    <li>Capstone Project</li>
                  </ul>
                </div>
              </div>

              <div className='d-flex mt-3'  style={{width: '100%'}}>
                <div style={{width: '35%'}}>Codecademy (2022 - 2024)</div>
                <div className='right' style={{width: '65%'}}>
                  <h5><b>Certification in Website Development</b></h5>
                  <p>Received training and certification in frontend and backend website developemtn. Gaining skills to fully build and deploy any scale website from simple landing pages to eCommerce.</p>
                  <ol>
                    <li>Javascript (Vanilla, Vue, Angular, JQuery)</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Node JS</li>
                    <li>MongoDB</li>
                    <li>PHP</li>
                  </ol>
                  <h5>Achievements</h5>
                  <ul>
                    <li>Certification in Frontend Web Development</li>
                    <li>Capstone Project</li>
                  </ul>
                </div>
              </div>

              <div className='d-flex mt-3'  style={{width: '100%'}}>
                <div style={{width: '35%'}}>Udemy (2023 - 2024)</div>
                <div className='right' style={{width: '65%'}}>
                  <h5><b>Certification in Frontend Web Development</b></h5>
                  <p>Received training and certification in frontend website developemtn. Gaining skills to fully build and deploy any scale website from simple landing pages to eCommerce.</p>
                  <ol>
                    <li>Javascript (Vanilla, Vue, Angular, JQuery)</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Node JS</li>
                    <li>MongoDB</li>
                    <li>PHP</li>
                  </ol>
                  <h5>Achievements</h5>
                  <ul>
                    <li>Certification in Frontend Web Development</li>
                    <li>Capstone Project</li>
                  </ul>
                </div>
              </div>
              <div className="alert alert-primary" role="alert" style={{width: '100%', borderLeft: '5px solid blue'}}>
                <b>Fun Fact:</b> Austine was in the top 3 performers of the year 2019 with 3 <strong><i> Best in Mathematics Regionally</i></strong> certificates
              </div>
            </div>
        </div>

      </div>


    
  <h4 className='text-center mb-5'>Socials</h4>
  <div className="mainCont">
    <div className="socialWrapper alert alert-primary">
        <i className="fa-brands fa-instagram icon"></i>
        <div>Instagram</div>
        <div className="followers">1.2k Folowers</div>
        <button className="button">View profile</button>
    </div>
    <div className="socialWrapper alert alert-primary">
        <i className="fa-brands fa-facebook icon"></i>
        <div>Facebook</div>
        <div className="followers">17.2k Folowers</div>
        <button className="button">View profile</button>
    </div>
    <div className="socialWrapper alert alert-primary">
        <i className="fa-brands fa-linkedin icon"></i>
        <div>LinkedIn</div>
        <div className="followers">1.2k Folowers</div>
        <button className="button">View profile</button>
    </div>
    <div className="socialWrapper alert alert-primary">
        <i className="fa-brands fa-github icon"></i>
        <div>GitHub</div>
        <div className="followers">1.2k Folowers</div>
        <button className="button">View profile</button>
    </div>
    <div className="socialWrapper alert alert-primary">
        <i className="fa-brands fa-youtube icon"></i>
        <div>Youtube</div>
        <div className="followers">19.72k Subscribers</div>
        <button className="button">View profile</button>
    </div>
</div>





            <div className='d-flex flex-column justify-content-center bg-dark text-light gap-3' style={{alignItems: 'center', minHeight: '40vh', margin: '70px 0'}}>
            <h6> <i>Live as if you were to die tomorrow. Learn as if you were to live forever.</i> </h6>
            <p>~ Austine O.</p>
      </div>
          <div className='text-center pb-3'>
            <h2>Skills</h2>
            <div className='container skills d-flex flex-row'>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/Javascript.png'/>
                </div>
                <h5 className='m-2'>Javascript <ion-icon name="battery-full-outline"></ion-icon></h5>
              </div>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/node.png'/>
                </div>
                <h5 className='m-2'>Node.Js <ion-icon name="battery-full-outline"></ion-icon></h5>
              </div>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/Bootstrap.png'/>
                </div>
                <h5 className='m-2'>Bootstrap <ion-icon name="battery-full-outline"></ion-icon></h5>
              </div>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/figma.webp'/>
                </div>
                <h5 className='m-2'>Figma <ion-icon name="battery-full-outline"></ion-icon></h5>
              </div>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/css.png'/>
                </div>
                <h5 className='m-2'>CSS <ion-icon name="battery-full-outline"></ion-icon></h5>
              </div>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/html.png'/>
                </div>
                <h5 className='m-2'>HTML <ion-icon name="battery-full-outline"></ion-icon></h5>
              </div>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/React.png'/>
                </div>
                <h5 className='m-2'>React.Js <ion-icon name="battery-half-outline"></ion-icon></h5>
              </div>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/mongodb.webp'/>
                </div>
                <h5 className='m-2'>MongoDB <ion-icon name="battery-half-outline"></ion-icon></h5>
              </div>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/sass.png'/>
                </div>
                <h5 className='m-2'>Sass <ion-icon name="battery-full-outline"></ion-icon></h5>
              </div>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/Tailwind.png'/>
                </div>
                <h5 className='m-2'>Tailwind <ion-icon name="battery-full-outline"></ion-icon></h5>
              </div>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/mui.png'/>
                </div>
                <h5 className='m-2'>Material UI <ion-icon name="battery-full-outline"></ion-icon></h5>
              </div>
            <div className='skill'>
                <div>
                  <img src='/media/images/languages/php.png'/>
                </div>
                <h5 className='m-2'>PHP <ion-icon name="battery-half-outline"></ion-icon></h5>
              </div>
            </div>
          </div>

    <div className='container' id='portfolio' style={{backgroundColor: 'rgba(220, 220, 220, 0.258)', borderRadius: '50px'}}>
      <div className='text-center pb-3'>
        <h1>My Recent Work</h1>
        <p>Here are some of my past and current design and development projects.</p>
      </div>
      <div className="selectCategory mb-4">
        <button className={`btn ${activeFilter === 'All' ? 'activeCategory' : ''}`} type="" onClick={() => setActiveFilter('All')}>All</button>
        <button className={`btn ${activeFilter === 'Development' ? 'activeCategory' : ''}`} type="" onClick={() => setActiveFilter('Development')}>Web Dev</button>
        <button className={`btn ${activeFilter === 'Design' ? 'activeCategory' : ''}`} type="" onClick={() => setActiveFilter('Design')}>Web Design</button>
        <button className={`btn ${activeFilter === 'Project' ? 'activeCategory' : ''}`} type="" onClick={() => setActiveFilter('Project')}>Projects</button>
      </div>
      <div className='projects'>
        {filteredProjects.map((project, index) => (
          <div className='projectContainer' key={index} onClick={() => handleOpen(project)}>
            <img src={project.image} alt='' loading='lazy'/>
            <div className='projectOverlay'>
              <h5>{project.date}</h5>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button className='btn seePreview'>See Preview {right}</button>
            </div>
          </div>
        ))}
      </div>
    </div>




      <div className='text-center pb-3 mt-3 bg-dark text-light pt-5 pb-5'>
            <h3>See something you like? </h3>
            <p>Choose a plan below</p>
            <p>
            <svg width="40" height="150" viewBox="0 0 16 35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.31463 34.7282C7.71681 35.1067 8.34968 35.0875 8.7282 34.6853L14.8965 28.1315C15.275 27.7294 15.2558 27.0965 14.8536 26.718C14.4515 26.3395 13.8186 26.3586 13.4401 26.7608L7.95716 32.5864L2.13156 27.1035C1.72939 26.725 1.09652 26.7442 0.718 27.1463C0.339483 27.5485 0.358661 28.1814 0.760835 28.5599L7.31463 34.7282ZM6.00046 1.03029L7.00046 34.0303L8.99954 33.9697L7.99954 0.969711L6.00046 1.03029Z" fill="white"/>
            </svg>
            </p>
            <div>
                <a href='#portfolio'><button className='btn btn-0'> Hire Me </button> </a>
            </div>
      </div>

      <div className='container pb-3 mt-2 mb-2' style={{textAlign: 'left'}}>
            <h1>My Services <code className='www'>www.</code></h1>
            <p>These are some of my packages. Feel free to inquire. I agree to disagree...</p>
    <div className='d-flex flex-wrap planWrapper justify-content-between'>
      {plans.map((plan, index) => (
        <div
          key={index}
          className={`planContainer ${activePlan === plan.name ? 'activePlan' : ''}`}
          onClick={() => setActivePlan(plan.name)}
          style={{
            border: activePlan === plan.name ? `2px solid ${plan.color}` : '1px solid gray',
            position: 'relative'
          }}
        >
          {activePlan === plan.name && (
            <ion-icon
              id='selected'
              name="checkmark-circle"
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                color: plan.color,
                fontSize: '24px'
              }}
            ></ion-icon>
          )}
          <h2>{plan.name}</h2>
          <h6>{plan.description}</h6>
          <h1>
            {plan.price}<span>$</span>
          </h1>
          <p>{plan.bestFor}</p>
          <h3>Includes;</h3>
          <div className='itemslist'>
            {plan.features.map((feature, index) => (
              <div className='planItem' key={index}>
                <ion-icon name="checkmark-circle"></ion-icon> {feature}
              </div>
            ))}
          </div>
          <div className='buttonDiv mt-1'>
          <button
            className='btn'
            style={{
              backgroundColor: activePlan === plan.name ? plan.color : 'gray',
              color: 'white'
            }}
          >
            Select
          </button>
          </div>
        </div>
      ))}
    </div>
    <div className='mt-5'>
    <button
            className='btn'
            style={{
              backgroundColor: 'green',
              color: 'white',
              width: '200px'
            }}
          >
        Make Reservations
      </button>
    </div>
      </div>



      <ContactForm />

      <h1 className='h1 text-center'>Testimonials</h1>
        <h6 style={{textAlign: "center"}}>Listen to what people have to say about us</h6>
      <div className='videoBackground'>
      <video src="/media/videos/F82-M4-Cinematic-4K.mp4" autoPlay muted loop loading='lazy' />
            <div>
              <h2>"We love their creative and laid back style.<br/> Best duo in the industry.” </h2>
              <p><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon></p>
              <p><small>~ Austine & J Co.</small></p>
            </div>
      <br id='about'/>
      </div>
      <div>
      <h1 className='h1 text-center'>Blog Posts</h1>
        <h6 style={{textAlign: "center"}}>FEATURED</h6>
        <div className='blogs container d-flex flex-row'>
          
        <div className='blogItem'>
            <a href='/#'>
                <img src='https://media.licdn.com/dms/image/D5612AQEnPQSM_AJ80Q/article-cover_image-shrink_600_2000/0/1694148630782?e=2147483647&v=beta&t=XbtTM6lzzEoWVf7ZzSQI_zbBdelfziIrYtoHTlvz7-I' alt='/media/images/man-7799486_960_720.webp' />
                <div className='overlay d-flex flex-column justify-content-end text-center p-4'>
                  <h3>TECHNOLOGY/IT NEWS</h3>
                  <p>10 Tips for taking professional level photos for Beginners 📷</p>
                </div>
            </a>
          </div>
          
        <div className='blogItem'>
            <a href='/#'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw6pTCD-ACc3SeluJm_vOKl86cXLBeZr_qsg&usqp=CAU' alt='/media/images/man-7799486_960_720.webp' />
                <div className='overlay d-flex flex-column justify-content-end text-center p-4'>
                  <h3>PHOTOGRAPHY/VIDEOGRAPHY</h3>
                  <p>10 Tips for taking professional level photos for Beginners 📷</p>
                </div>
            </a>
          </div>
          <div className='blogItem'>
            <a href='/#'>
                <img src='https://www.tourmyindia.com/blog//wp-content/uploads/2019/11/Romantic-Honeymoon-Destinations-around-the-World.jpg' alt='/media/images/man-7799486_960_720.webp' />
                <div className='overlay d-flex flex-column justify-content-end text-center p-4'>
                  <h3>WEDDING/COUPLES</h3>
                  <p>Top 7 Most epic honeymoon destination for newly weds❤️</p>
                </div>
            </a>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
