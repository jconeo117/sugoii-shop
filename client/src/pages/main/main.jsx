import React from "react";
import { NewsProducts } from "../../componentes/News/NewsProducts";
import { Slider } from "../../componentes/slider/slider";

export const Main =()=>{
    return(
        <>
            <Slider/>
            <NewsProducts/>
        </>
    )
}