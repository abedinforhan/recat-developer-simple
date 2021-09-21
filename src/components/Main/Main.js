import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Developer from '../Developer/Developer';

const Main = () => {


    const [developers,  setDevelopers] = useState( [] )

    const [count, setCount]=useState( 0)



   const handleIncrease=()=>{
   
    const newcount=count+1
       setCount(newcount)
   }




     useEffect( ()=>    {
         fetch("/devsData.json")
         .then(res=> res.json())
         .then(data=> setDevelopers(data))
     }
      ,  []    )



    return (
        <section className="container">
            <h2 className="text-center"> Hi am from Main</h2>

            <div className="row">

                <div className="col-md-8">
                   
                <div className="row border">
                {
                       developers.map(developer =>    <Developer
                           handleIncrease={handleIncrease}
                           developer={developer}
                       >

                       </Developer>
                        )
                   }
                </div>
                   
                   
                
                    
                </div>
                <div className="col-md-4">
                    <Cart   count={count}>

                    </Cart>
                </div>

            </div>

        </section>
    );
};

export default Main;