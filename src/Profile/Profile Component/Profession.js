import React from 'react'
import PropTypes from 'prop-types';

const Profession = ({Experrience1,Experrience2})=>{


  return(
    <div style={{textAlign:"justify" }}>
        <span className="title">My experience professional:<span className="desc">{Experrience1}</span></span><br/>
        <span className="title">My experience professional:<span className="desc">{Experrience2}</span></span><br/>
        
    </div>

)  
}
Profession.propTypes={
    Profession:PropTypes.string,
   
  };
export default Profession