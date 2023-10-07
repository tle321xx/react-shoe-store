import React from 'react'
import { AiFillStar } from 'react-icons/ai';
import { BsFillBagHeartFill } from 'react-icons/bs';
const Card = ({ img, title, star, reviews, newPrice, prevPrice }) => {
  return (
    <div className="card">
          <img src={img} alt={title} className="card-img" />
          <div className="card-title">{title}</div>
          <div className="card-reviews">
            {star}
            <span className="total-reviews">{reviews}</span>
          </div>
          <div className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
            </div>
            <div className="bag-icon">
              <BsFillBagHeartFill />
            </div>
          </div>
        </div>
  )
}

export default Card