import propTypes from 'prop-types';
import React,{children} from 'react';

const FullName =({children,FullName,alertMe}) =>{
    return(
        <div className="container">
            <span>{children}</span>
            <h1 className="bigTitle">{FullName}</h1>
            <div className="btn">
                <br/> <button onClick={alertMe}>Click Me</button>
            </div>
        
        </div>
    )
}
FullName.propTypes={
    FullName:propTypes.string,
};

export default FullName;