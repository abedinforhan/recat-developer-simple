import React, { useState } from 'react';

const Developer = (props) => {

  const [xyz, setXyz] = useState("")


  const [count , setCount]= useState(0)

  const showPartner=(abc)=>{
       setXyz(abc)
  }


    return (
        <div className="col-md-4 border">
            <img  src={props?.developer?.img}   />
            <h4>{props?.developer?.name}</h4>
            <h4>{xyz}</h4>
            <button 
                onClick={ () =>showPartner(props.developer.partner)}
               className="btn btn-primary">
                Show Partner
            </button>


            <button 
            onClick={ props.handleIncrease }
            className="btn btn-warning">
                Add Member</button>
        </div>
    );
};

export default Developer;