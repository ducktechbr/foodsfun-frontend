import styles from './style.module.css'

export default function Input(){
    return(
        <>
        <input className={styles.input} type='email' placeholder="Email"></input>
        <input type='password' placeholder="Senha"></input>
        </>
    )
}