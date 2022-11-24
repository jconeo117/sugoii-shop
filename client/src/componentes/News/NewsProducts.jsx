import React from "react";
import { useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { GetNewProducts } from "../../redux/slices/products";
import style from './news.module.css'


export const NewsProducts = () => {

    const products = useSelector((state) => state.products.productsNews)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetNewProducts())
    }, [])

    const slider = document.getElementById("slider");

    const slideLeft = () => {
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        slider.scrollLeft = slider.scrollLeft + 500;
    }


    return (
        <>
            <h2>Productos nuevos</h2>
            <div className={style.slide}>
                <MdChevronLeft size={40} className={`${style.slider_icon} ${style.left}`} onClick={slideLeft} />
                <div 
                className={style.cards_container}
                id="slider"
                >
                    {products && products.map((product) => {
                        return (
                            <div className={style.card} key={product._id}>
                                <img src={product.photos[0]}
                                    alt={product.alt || 'Image'} />
                                <div className={style.card_content}>
                                    <h2>{product.name}</h2>
                                    <p>{product.description}</p>
                                </div>
                            </div>
                        )
                    })
                    }
                </div>
                <MdChevronRight size={40} className={`${style.slider_icon} ${style.right}`} onClick={slideRight} />
            </div>
        </>
    )
}