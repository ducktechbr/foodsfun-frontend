

import { useState } from "react";
import classNames from "classnames";

export  function ToggleButton(){

    const [isSelected, setIsSelected] = useState(true)

    return(
        <div
            onClick={() => setIsSelected(!isSelected)} 
            className={classNames("flex w-10 h-5 bg-gray-600 rounded-full transition-all duration-500 cursor-pointer", {
                'bg-green-600' : isSelected,
            })}>
            <span className={classNames("h-5 w-5 bg-white rounded-full transition-all duration-500 shadow-lg", {
                    'ml-5' : isSelected,
                })} /> 
        </div>
    )
}   