import './Rating_mc.css';
import React, {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Rating_mc() {

  const [rating, setRating] = useState(0);

  const handleClick = (rate) => {
      console.log("in handleClick", rate);
      setRating(rate);
  }

return (
  <div className='star_rating'>
    {
      [...Array(5)].map((item, index) => {
        return <FontAwesomeIcon 
                      icon={faStar}
                      key={index+1}
                      onClick={() => handleClick(index+1)}
                      className={`${(index+1) <= rating ? '' : 'color_grey'}`}
                />
      })
    }
    
  </ div>
);
   
}

export default Rating_mc;
