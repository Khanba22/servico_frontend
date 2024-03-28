import React from 'react'
import man from "../Assets/manBG.png"
import styles from "./Stylesheets/Info.module.css"
import wave from "../Assets/Vector.png"
function Info() {
    return (
        <div className={styles.container}>
            <div className={styles.canvas}>
                <div className={styles.manCover}>
                    <img src={man} className={styles.manBG} alt='' />
                </div>
                <img className={styles.wave} src={wave} alt="" />
            </div>
            <div className={styles.content}>
                <h1>How Does Servico Works</h1>
                <div className={styles.card1}>
                    <div>1</div>
                    <h2>Moving Services</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquid adipisci consectetur, voluptatibus veniam ipsam officia vel ut ipsa delectus! Numquam vitae quam impedit aspernatur incidunt? Necessitatibus magnam cum, ea quos, quod dolor labore veniam libero nulla dolorum dignissimos laboriosam officia mollitia sed. Quam explicabo voluptas eveniet dolor perspiciatis optio?</p>
                    <button>I Need Help</button>
                </div>
                <div className={styles.card2}>
                    <div>2</div>
                    <h2>We Are Family</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquid adipisci consectetur, voluptatibus veniam ipsam officia vel ut ipsa delectus! Numquam vitae quam impedit aspernatur incidunt?</p>
                    <button>I Need Help</button>
                </div>
                <div className={styles.card3}>
                    <div>3</div>
                    <h2>Lorem, ipsum.</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati aliquid adipisci consectetur, voluptatibus veniam ipsam officia vel ut ipsa delectus! Numquam vitae quam impedit aspernatur incidunt? Necessitatibus magnam cum</p>
                    <button>I Need Help</button>
                </div>
            </div>
        </div>
    )
}

export default Info
