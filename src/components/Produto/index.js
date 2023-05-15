import React from 'react'
import styles from './Produto.module.css'
import { NavLink } from 'react-router-dom'
export default function Produto({ img, children, paginaRelativa }) {
  return (
    <NavLink  className={styles.produto} to={paginaRelativa} style={{textDecoration:'none', color:'black'}}>
        <img src={img} className={styles.imagemCardPizza} alt='imagem para o card de pizza' />
        <h2 className={styles.tituloCard}>{children}</h2>
    </NavLink>
  )
}
