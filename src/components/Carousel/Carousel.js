import React from 'react'
import {Children,cloneElement} from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import './Carousel.scss'

const ITEM_WIDTH = 270

 const Carousel = ({children}) => {
  const [ items, setItems ] = React.useState([])
  const [offset, setOffset] = React.useState(-75)

  const handleLeftArrowClick = () =>{
    setOffset((currentOffset) => {
      const newOffset = currentOffset + ITEM_WIDTH

      return Math.min(newOffset, 0)
    })
  }
  const handleRightArrowClick = () =>{
    setOffset(() => {
      const newOffset = -50 - ITEM_WIDTH + 150

      const maxOffset = -(ITEM_WIDTH * (items.length - 1))

           return Math.max(newOffset, maxOffset)
    })
  }

  React.useEffect(() =>{
     setItems(
      Children.map(children, (child) =>{
        return cloneElement(child, {
          style: {
            height: '100%',
            minWidth: `${ITEM_WIDTH}px`,
            maxWidth: `${ITEM_WIDTH}px`
          }
        })
      })
     )
  },[])
  return (
    <div className="main-container">
       <div className="window">
         <div className="window__container"
          style={{
            transform: `translateX(${offset}px)`
          }}>
            {children}
         </div>
       </div>
       <div className="window__buttons">
       <FaChevronLeft className="arrow-left" onClick={handleLeftArrowClick} />
       <FaChevronRight className="arrow-right" onClick={handleRightArrowClick} />
       </div>
    </div>
  )
}

export default Carousel