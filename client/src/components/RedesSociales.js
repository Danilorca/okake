import React from 'react';
import styles from './RedesSociales.module.css'
import img_1 from '../assets/img_redesSociales/uno.png'
import img_2 from '../assets/img_redesSociales/dos.png'
import img_3 from '../assets/img_redesSociales/fabiola.png'
import img_4 from '../assets/img_redesSociales/cuatro.png'


const RedesSociales = () => {
  return (
    <div className={styles.contenedor}>
      <div className={styles.contenedor_rrss}>
        <div className={styles.contenedor_card}>
            <img className={styles.redes} src={img_1} alt="imagen de una mujer"/>
            <p className={styles.redessociales1}>@Josefa_2020</p>
            <p className={styles.redessociales2}>Cuando no puedes escoger un pastel, los escoges todos! #autoregalo #HappyBirthday #Feliz #pasteles</p>
        </div>


        <div className='contenedor-card'>
            <img  className={styles.redes} src={img_2} alt="imagen de madre e hija"/>
            <h3 className={styles.redessociales1}>@mamitamilf</h3>
            <p className={styles.redessociales2}>No puedo creer lo que ha crecido la Antonia, me encanta disfrutar los dulces momentos #MadreHija #Rega...</p>
        </div>

        <div className='contenedor-card'>
            <img  className={styles.redes} src={img_3} alt="imagen de una mujer"/>
            <h3 className={styles.redessociales1}>@Fabiolabonita</h3>
            <p className={styles.redessociales2}>Al fin te tengo! Chao pandemia #Dulcegusto #Helado #Alone
                #Valparaísopalmundo</p>
        </div>

        <div className='contenedor-card'>
            <img className={styles.redes} src={img_4} alt="imagen de celebración"/>
            <p className={styles.redessociales1}>@La_Makina</p>
            <p className={styles.redessociales2}>Después de darlo todo en la pega, nada mejor que un break con el equipo #LoDimosTodo #salud #coffee </p>
        </div>


       </div>


        <section>
            <article class={styles.fondoonda} >
            </article>
        </section>

    </div>
  );
}

export default RedesSociales;
