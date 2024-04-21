import { useState } from "react";
import Card from "../components/Card";
import {Data} from "../components/Data.js"

function LandingScreen(item) {

    const[data, setData] = useState(Data)
    const [totalAmount, setTotalAmount] = useState(2199.96)        
       
    return(
        <div id="landing-screen">
            <div id="navbar" className="flex h-16 w-full bg-blue-700 text-white">
                <div className="left w-2/3 flex justify-center items-center">
                    <p className="text-3xl">Shopping Cart</p>
                </div>

                <div className="right w-1/2 flex justify-center items-center">
                    <a href=""><i className="fa-solid fa-cart-plus text-2xl"></i></a>
                </div>
            </div>

            <div id="main" className="flex-col flex justify-center py-5">
                <h1 className="text-5xl">YOUR BAG</h1>

                <div>
                    {data.map((item, index) => {

                        return(

                            <Card key={index} index={index} totalAmount={totalAmount} setTotalAmount={setTotalAmount}  item={item} data={data} setData={setData} />

                            // setTotalAmount={{item}}
                            // setTotalAmount(totalAmount + item.price)


                        )

                        // setTotalAmount(totalAmount + Data[i])

                    })

                    }
                    

                </div>

            </div>
            <hr />

            <div id="footer" className="flex flex-col justify-center items-center h-20">

                <div className="top flex justify-between w-1/2">
                    <div className="left">
                        <p>Total</p>
                    </div>

                    <div id="total-amount" className="right">
                        <p>${totalAmount}</p>
                        {/* <p>$2999.94</p> */}
                    </div>
                </div>

                <div className="below">
                    <div id="clear-cart-button" className="text-center">
                        <button type="submit">Clear Cart</button>
                    </div>
                </div>

            </div>


        </div>
    )
}
 
export default LandingScreen;