// import { useState } from "react";

function Card(props) {


    function increaseNumber(index) {

        props.setData((previous) => {

            console.log(previous[index].quantity)

            previous[index].quantity ++;

            console.log(previous[index].quantity)

            props.setTotalAmount((previous) => {
                
                    console.log(previous)

                return (previous + props.item.price)


            })
            // props.setTotalAmount(() => {
            //     previous.reduce(accumulator, currentValue)
            // })

            console.log(previous);

            return [...previous];

        })          
        
    }

    function decreaseNumber(index) {


        props.setData((previous) => {

            // if(previous[index].quantity > 1) {

                previous[index].quantity--;

                props.setTotalAmount((previous) => {
                
                    console.log(typeof props.item.price)

                return (previous - props.item.price)    
            })

            // }

            // else {
            //     alert('Removed the phone!')
            //     previous[index].quantity--;

            // }

            console.log(previous);

            return [...previous];


        })


        
    }

    function removePhone(index) {

        const data = (props.item);

        console.log(data);


        // const data =  [...dataTwo]

        // data.splice(props.index, 1)

        // console.log("After Splice" + data);


        // console

        // props.setData(data)

        // console.log("Last One" + data);

        // return(data)

    
    }
    
    return(
        <div id="card" className="flex justify-center items-center">

            <div className="flex w-3/5 items-center">

                <div className="1/5 " >
                    <img className="w-20 h-20" src={props.item.imageSrc} alt="Samsung Galaxy S8" />
                </div>

                <div className="w-4/5 h-full  text-left p-5">
                    <div>
                        {/* <p>Samsung Galaxy S8</p> */}
                        <p>{props.item.name}</p>
                    </div>

                    <div>
                        {/* <p>$399.99</p> */}
                        <p>${props.item.price}</p>
                    </div>

                    <div>
                        {/* <button id="remove-button" value={"remove"} name="remove">remove</button> */}
                        <input type="button" onClick={removePhone} value="remove" id="remove-button" className=" text-cyan-800 hover:cursor-pointer hover:text-red-600"/>
                        
                    </div>
                </div>


                <div className=" w-1/12">
                    <div>
                        <button onClick={() => {
                            increaseNumber(props.index)
                            
                            }}><i className="fa-solid fa-angle-up"></i></button>
                    </div>

                    <div>
                        {/* <p>1</p>  */}
                        <p>{props.item.quantity}</p>
                        <p></p>
                    </div>

                    <div>
                        <button onClick={() => decreaseNumber(props.index)}><i className="fa-solid fa-angle-down"></i></button>
                    </div>
                </div>



            </div>
        
        </div>
    )
}

export default Card;