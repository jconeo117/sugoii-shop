import React, {useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSlider } from "../../redux/slices/products";
import { Link } from "react-router-dom";
import style from './slider.module.css'

export const Slider = () =>{

    const slider = useSelector((state)=>state.products.slider)
    const dispatch = useDispatch()

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [select, setSelect] = useState(slider[0]);
    const [loaded, setLoaded] = useState(false);

    useEffect(()=>{
        dispatch(GetSlider())
    },[])

    const selectNewSlide = (index, slider, next = true) => {
        setLoaded(false);
        setTimeout(() => {
          const condition = next ? selectedIndex < slider.length - 1 : selectedIndex > 0;
          const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : slider.length - 1;
          setSelect(slider[nextIndex]);
          setSelectedIndex(nextIndex);
        }, 800);
      };

    const PrevPage = () =>{
        selectNewSlide(selectedIndex, slider, false)
    }
    
    const NextPage = () =>{
        selectNewSlide(selectedIndex, slider)
    }

    

    return(
        <div className={style.slider}>
            <div 
            className={`${style.container_slider} ${loaded ? `${style.loaded}` : null}`}
            onLoad={()=>setLoaded(true)}
            >
                <div className={style.slider_info}>
                    <h2>{slider[selectedIndex]?.name}</h2>
                    <p>{slider[selectedIndex]?.description}</p>
                    <Link to={'/product/'}>mas detalle</Link>
                </div>
                <div>
                    <img src={slider[selectedIndex]?.photos} alt="" className={style.image}/>
                </div>
            </div>
            <div className={style.navigation}>
                <i 
                className={`fas fa-chevron-left ${style.prev_btn}`}
                onClick={PrevPage}
                ></i>
                <i 
                className={`fas fa-chevron-right ${style.next_btn}`}
                onClick={NextPage}
                ></i>
            </div>
        </div>
    )
}