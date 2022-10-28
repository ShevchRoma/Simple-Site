import Slider from "react-slick";
import React from 'react'
import card1 from '../../assets/carousel/card 1.png'
import card2 from '../../assets/carousel/card 2.png'
import card3 from '../../assets/carousel/card 3.png'
import card4 from '../../assets/carousel/card 4.png'
import card from '../../assets/carousel/card-main.png'
import arrowRight from '../../assets/slick/Chevron Right.svg'
import arrowLeft from '../../assets/slick/Chevron Left.svg'
import './Slicker.scss'



export default class Slicker extends React.Component {
  constructor(props) {
    super(props);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
        state = {
          slideIndex: 1,
          updateCount: 0
        };
        next(e) {
          e.preventDefault()
          this.slider.slickNext();
        }
        previous(e) {
          e.preventDefault()
          this.slider.slickPrev();
        }

    render(){

    const settings ={
      className: "center slider variable-width",
      centerMode: true,
      slidesToShow: 4.5,
      speed: 500,
      slidesToScroll: 1,
      initialSlide: 2,
      variableWidth: true,
      afterChange: () =>
        this.setState(state => ({ updateCount: state.updateCount + 1 })),
      beforeChange: (current, next) => {
      if(this.state.slideIndex < 5){
        this.setState({ slideIndex: this.state.slideIndex + 1 })
      } else{
        this.setState({ slideIndex: 1})
      }
  },
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return(
        <div>
            <Slider ref={slider => (this.slider = slider)} {...settings}>
              <div>
                  <img src={card1} alt="slide1"  />
               </div>
               <div>
                  <img src={card2}  alt="slide2"  />
               </div>
               <div>
                  <img src={card}  alt="slide3"  />
               </div>
               <div>
                  <img src={card3}  alt="slide4"   />
               </div>
               <div>
                  <img src={card4}  alt="slide5" />
               </div>
               </Slider>
               <div style={{ textAlign: "center",display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <a href="*" className="button" onClick={this.previous}>
                       <img src={arrowLeft} alt="arrow" />
                  </a>
                  <div style={{margin: '0 40px'}}>
                 <span style={{marginRight: '4px'}}>{this.state.slideIndex}</span><span style={{color: '#00000033'}}>/ 6</span>
                 </div>
                 <a href="*" className="button" onClick={this.next}>
                    <img src={arrowRight} alt="arrow" />
                 </a>
          </div> 
        </div>
    )
        }
}
