import { useState } from "react";

function Prices(){
    const originalPrice=7899;
    const[price,setPrice]=useState(0);
    const[discount,setDiscount]=useState(0)
    const applyDiscount=(discountValue)=>{
        if(discountValue==10){
            setDiscount(10);
            setPrice(originalPrice*0.10)
        }
        else if(discountValue==20){
            setDiscount(20);
            setPrice(originalPrice*0.20)
        }
        else if(discountValue==30){
            setDiscount(30);
            setPrice(originalPrice*0.30);
        }
        else{setDiscount(0);
            setPrice(0);

        }
    }
    return(<>
    <h1>Original Price:${originalPrice}</h1>
    <p>Discount price:${price.toFixed(2)}</p>
    <p>Applied discount:{discount}%</p>
    <p>click a button to apply discount</p>
    <button onClick={()=>applyDiscount(10)}>apply 10% Discount</button>
    <button onClick={()=>applyDiscount(20)}>apply 20% Discount</button>
    <button onClick={()=>applyDiscount(30)}>apply 30% Discount</button>
    <button onClick={()=>applyDiscount(0)}>Reset price</button>
    </>)
}
export default Prices;