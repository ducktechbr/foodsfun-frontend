import styles from './styles.module.css';


export default function Card(){
    return(
        <>
            <div className={styles.container}>
                <div className='overflow-visible h-20 z-10'>
                <div className={styles.img}></div>
                </div>
                
                <div className={styles.content}>
               
                <div className={styles.contentText}>
                    <h1>Prato feito de frango <br/> com salada</h1>
                </div>

                <div className={styles.iconsArea}>
                    <button className={styles.icons}><div className='bg-eye h-5 w-5'/><div>Ver</div></button>
                    <button className={styles.icons}><div>.</div></button>
                    <button className={styles.icons}><div>.</div></button>
                    <button className={styles.icons}><div>.</div></button> 
                </div>

               </div>
            </div>
        </> 
    )
}