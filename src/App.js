import React from 'react'
import './App.scss';
import logo from './assets/headerImg/Logo.svg'
import headLine from './assets/mainImg/Headline.png'
import location from './assets/mainImg/locationSvg.svg'
import parrot from './assets/mainImg/Parrot.png'
import card from './assets/mainImg/Card.svg'
import leaf from './assets/getStartedImg/leaf.svg'
import leaf2 from './assets/getStartedImg/leaf2.svg'
import button from './assets/readyStartedImg/Btn-close.svg'
import button2 from './assets/readyStartedImg/Btn-open.svg'
import people1 from './assets/ourTeam-Block/img 1.png'
import people2 from './assets/ourTeam-Block/img2.png'
import people3 from './assets/ourTeam-Block/img 3.png'
import Slicker from './components/Slick/Slicker';
import Footer from './components/Footer/Footer';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

function App() {
  const [ menuActive, setMenuActive ] = React.useState(false)
  const [visibleAcc, setVisibleAcc] = React.useState(false)
  let targetElement = null
  React.useEffect(() =>{
    targetElement = document.querySelector('body') 
  })
  
  const onChangeMenuVisible = () =>{
      setMenuActive(!menuActive)
      disableBodyScroll(targetElement);
      if(menuActive === true){
         clearAllBodyScrollLocks(targetElement)
      }
  }

  const onChangeVisibleAcc = (e) =>{
       e.preventDefault()
       setVisibleAcc(!visibleAcc)
  }
  

  return (
    <div className="wrapper">
          <header className="header">
                 <a href="*" className="header__logo"><img src={logo} alt="logo" /></a>
                 <nav className="header__menu menu">
                     <ul className="menu__list">
                        <li className="menu__item active">
                          <a href="*" className="menu__link">
                            Home
                          </a>
                        </li>
                        <li className="menu__item">
                          <a href="*" className="menu__link">
                          Our mission
                          </a>
                        </li>
                        <li className="menu__item">
                          <a href="*" className="menu__link">
                          Places
                          </a>
                        </li>
                        <li className="menu__item">
                          <a href="*" className="menu__link">
                          Team
                          </a>
                        </li>
                     </ul>
                 </nav>
              <div onClick={onChangeMenuVisible} className={menuActive ? 'header-menu__icon _active' : 'header-menu__icon'}>
               <div class="menu__icon icon-menu">
                <span></span>
                <span></span>
                <span></span>
             </div>
             <nav className="menu__body">
              <ul className={menuActive ? 'menu__list active' : 'menu__list' }>
                <li><a href="*" className="menu__link">Home</a> </li>
                <li><a href="*" className="menu__link">Our mission</a> </li>
                <li><a href="tel:+38 (096) 622 86 13">Places</a></li>
                <li><a href="tel:+38 (096) 622 86 13">Team</a></li>
                <a href="*" className="menu__link button">Apply</a>
              </ul>
            </nav>
           </div>
                <div className="header__button">
                 <a href="*">
                    Apply
                 </a>
                </div>
          </header>
          <main className="page">
                <div className="page__main-block main-block">
                <div className="container">
                   <div className="main-block__body">
                       <div className="main-block__column">
                         <img src={headLine} alt="nature need you" style={{width:'100%'}} />
                         <div className="main-block__text">
                         The scale of the challenges facing our planet can seem daunting, but we can all do something.
                         </div>
                         <div className="main-block__search">
                           <img src={location} alt="location" /><input type="search" placeholder="Find the place to help" /><input type="submit" value="Search" />
                         </div>
                       </div>
                       <div className="main-block__column images">
                        <div className="images">
                           <div className="images__top">
                           <img src={parrot} className="image_1" alt="parrot" />
                           </div>
                           <div className="images__bottom">
                           <img src={card} className="image_2" alt="card" />
                           </div>
                        </div>
                       </div>
                   </div>
                </div>
             </div>
             <div className="page__team team-page">
                <div className="container">
                  <div className="team-page__body">
                   <div className="team-page__title">
                     <h2>Our top team</h2>
                   </div>
                   <div className="team-page__description">
                    Learn more about how you can save our planet's nature. 
                   </div>
                  <div className="team-page__peoples">
                     <div className="team-page__column">
                       <img src={people1} alt="people1" />
                     </div>
                     <div className="team-page__column">
                        <img src={people2} alt="people1" />
                    </div>
                     <div className="team-page__column">
                        <img src={people3} alt="people1" />
                     </div>
                 </div>
               </div>
            </div>
          </div>
             <div className="page__started started-today">
                <div className="container">
                   <div className="started-today__body">
                      <div className="started-today__column">
                         <div className="started-today__title">
                           <h2>Get started today!</h2>
                         </div>
                         <div className="started-today__text">
                         Learn more about how you can save our planet's nature.
                         From smart consumption to switching to renewable energy,
                          each of us can do our part to save the planet. 
                         </div>
                      </div>
                      <div className="started-today__column">
                         <div className="started-today__form">
                         <h4>Log In</h4>
                            <form>
                               <input type="text" placeholder="Name" />
                               <input type="email" placeholder="Email" />
                               <button>Book a demo</button>
                            </form>
                            <img className="started-today__cover" src={leaf} alt="leaf" />
                            <img className="started-today__cover_2" src={leaf2} alt="leaf2" />
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="page__ready ready-started">
                <div className="container">
                   <div className="ready-started__body">
                      <div className="ready-started__column">
                        <div className="ready-started__title">
                        <h2>Ready to Get started?</h2>
                        </div>
                        <div className="ready-started__text">
                            When pattern is mentioned in interior design,
                            it is easy to asso- ciate it with a geometric patterned wallpaper
                            or colourful prints on interior fabrics.
                        </div>
                        <div className="ready-started__button">
                           <a href="*">contact us</a>
                        </div>
                      </div>
                      <div className="ready-started__column accordion">
                         <div className="accordion__body">
                           <div className="accordion__column">
                              <div className="accordion__top">
                              <span>What can I do to protect our planet?</span>
                              <a href="*" onClick={onChangeVisibleAcc}>{visibleAcc ? <img src={button} alt="button" /> : <img src={button2} alt="button2" />}</a>                                          
                              </div>
                              <div className={visibleAcc ? 'accordion__bottom' : 'accordion__bottom active'}>
                              Not to make an open fire in nature and to clean up litter;
                              not to pollute open water bodies; to switch to alternative energy sources;
                              to reduce the use of non-renewable resources
                              </div>
                           </div>
                           <div className="accordion__column">
                           <div className="accordion__top" style={{padding: '35px 0'}}>
                              <span>How to save nature ecology?</span> <a href="*"><img src={button2} alt="button" /></a>
                              </div>
                           </div>
                           <div className="accordion__column">
                           <div className="accordion__top" style={{padding: '35px 0'}}>
                              <span>What is nature conservation?</span> <a href="*"><img src={button2} alt="button" /></a>
                              </div>
                           </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="page__carousel carousel">
              <Slicker />
             </div>
          </main>
          <footer className="footer">
              <div className="container">
                <Footer />
              </div>
          </footer>
    </div>
  );
}

export default App;
