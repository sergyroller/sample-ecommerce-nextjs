'use client'

import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface Props {
   quantity: number;
}


export const QuantitySelector = ({ quantity }: Props) => {

   const [count, setCount] = useState(quantity);
   const [error, setError] = useState("");
   const MaxProduct = 5


   const onQuantityChanged = (value: number) => {
      if ( count + value < 1) return;
      if ( count + value > MaxProduct) return;
      if (error) setError("");

      setCount( count + value );
   }

  return (
    <div className="flex gap-4 items-center">
      <div className="flex">
         <button onClick={ () => onQuantityChanged( -1 ) }>
            <IoRemoveCircleOutline size={30} />
         </button>

         <span className="w-20 mx-3 px-5 bg-gray-200 text-center rounded flex justify-center items-center">
            { count }
         </span>
         <button onClick={ () => onQuantityChanged( 1 ) }>
            <IoAddCircleOutline  style={{
          cursor: count === MaxProduct ? "not-allowed" : "pointer",
          opacity: count === MaxProduct ? 0.5 : 1,
        }} size={30} />
         </button>
      </div>
     {
      error &&
      <p className="text-red-500 text-sm">{error}</p>
      }
    </div>

  )
}

