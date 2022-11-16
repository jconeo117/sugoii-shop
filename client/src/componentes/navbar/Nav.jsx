import React from "react";
import {Link} from 'react-router-dom'
import { ImMenu } from 'react-icons/im'
import style from './Nav.module.css'
import { SearchBar } from "./searchbar/SearchBar";

export const Nav =()=>{
    return(
          <nav className={style.menu} id="menu">
            <div className={style.contenedor}>
            <div className={style.contenedor_botones_menu}>
              <div className={style.btn_logotipo} id="btn_logotipo">
                <Link to={'/'}>
                <img 
                src={'https://cdn.discordapp.com/attachments/972488139438444615/1042150530987851887/logotipo-animeyul.png'} 
                alt="sugoii-shop logotipo" 
                />
                </Link>
              </div>
              <button className="btn_menu_barras" id="btn_menu_barras">
                <ImMenu/>
              </button>
            </div>
            <div className={style.contenedor_enlaces_nav}>
             <div className={style.logotipo} id="logotipo">
              <Link to={'/'}>
                <img 
                src={'https://cdn.discordapp.com/attachments/972488139438444615/1042150530987851887/logotipo-animeyul.png'} 
                alt="sugoii-shop logotipo" 
                />
              </Link>
             </div>
             <div>
                <SearchBar/>
             </div>
             <div className={style.enlaces}>
                <Link to={'/'}>inicio</Link>
                <Link to={'/products'}>productos</Link>
                <Link to={'/login'}>iniciar sesion</Link>
             </div>
            </div>
            </div>
          </nav>
    )
}