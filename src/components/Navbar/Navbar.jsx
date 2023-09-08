import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <header className={style.header}>
        <Link to = '/'>
            <h1 className='text-white text-2xl font-bold hover:scale-110 transition-all duration-500'>
                Quiz App
            </h1>
        </Link>
    </header>
  )
}
