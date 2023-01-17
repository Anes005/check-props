import React from "react";
import propTypes from 'prop-types';

const Bio =({Data,Adress,Mobile,Mail,Biog}) =>{
    return(
        <div style={{textAlign:"justify"}}>
    <span className="title">Date and Place of Birth :<span className="desc">{Data}</span></span><br/>
    <span className="title">Adress :<span className="desc">{Adress}</span></span><br/>
    <span className="title">Mobile :<span className="desc">{Mobile}</span></span><br/>
    <span className="title">Email :<span className="desc">{Mail}</span></span><br/>
    <span className="title">Biography :<span className="desc">{Biog}</span></span><br/>

        </div>
    )
}
Bio.defultprops={
    Mobile: '06 66 .. .. ..',
    Mail: '....@.....com',
};
Bio.propTypes={
    Bio:propTypes.string
};

export default Bio;