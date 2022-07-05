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
                    <h1>Hamburguer de costela</h1>
                    <p>R$35,00</p>
                </div>

                <div className={styles.iconsArea}>
                    <button className={styles.icons}><div className='bg-eye h-5 w-8 bg-center bg-no-repeat bg-white'/><div className=' iconText bg-white'>Ver</div></button>
                    <button className={styles.icons}><div className='bg-edit h-5 w-5 bg-no-repeat'/><div className=' iconText bg-white'>Ver</div></button>
                    <button className={styles.icons}><div className='bg-trash h-5 w-5 bg-no-repeat'/><div className=' iconText bg-white'>Ver</div></button>
                    <button className={styles.icons}><div className='bg-enabled h-5 w-5 bg-no-repeat'/><div className='  bg-white text-center text-'>Ver</div></button>
                    
                </div>

               </div>
            </div>
        </> 
    )
}