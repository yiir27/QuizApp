import React from 'react';
import { Link } from 'react-router-dom';
import style from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <header className={style.header}>
        <Link to = '/'>
            <h1 className={style.font}>
                Quiz App
            </h1>
        </Link>
    </header>
  )
}
