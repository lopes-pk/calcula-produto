import React from 'react'
import styles from './CastraItens.module.css'
import cardPizza from '../../assets/images/90em_fek6_210524.jpg'
import cardHamburguer from '../../assets/images/dqph_8ule_210929.png.jpg'
import cardFastFood from '../../assets/images/30898.jpg'
import Produto from '../Produto'

export default function CadastraItens() {
  return (
    <main className={styles.screen}>
      <h1 className={styles.tituloPrincipal}>selecione o produto</h1>
      <section className={styles.box}>
        <Produto img={cardPizza} paginaRelativa={'/pizza'}>pizza</Produto>
        <Produto
          img={cardHamburguer} paginaRelativa={'/hamburguer'}>Hamburguer</Produto>
        <Produto
          img={cardFastFood} paginaRelativa={'/fastfood'}>Fast Food</Produto>
      </section>
    </main>
  )
}
