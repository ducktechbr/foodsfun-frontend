import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

import back from '../../assets/backbutton.svg';
import botaoAdd from '../../assets/+.svg';
import hamburgui from '../../assets/hamburgui.svg';
import load from '../../assets/load.svg';

import { api } from '../../api';

import FooterBar from '../../components/FooterBar';
import { useEffect, useState } from 'react';

export default function comanda() {

	const [comanda, setComanda] = useState(null)
	const [product, setProduct] = useState(null)

	useEffect( () => {
		getChecksId();
	}, [] )

	async function getChecksId() {

		const localStore = localStorage.getItem("loggedInClient");
		const clientId = JSON.parse(localStore).clientId
		const response = await api.patch("/getChecksByClientId", { clientId })
		// console.log(response)
		setComanda(response.data);
		
		


		

	}
	async function getProductsById(){

		if(comanda !== null){
		 setProduct(await api.get(`/getProductsById/${comanda[0].orders[0].productId}` ))
		}
	}
	
	useEffect (() => {
		getProductsById();
	}, [comanda])

	useEffect(() => {
		// console.log(product)
	}, [product])


	return (
		<div>
			<div className={styles.header}>
				<Link href="/produtosApp">
					<div>
						<Image src={back} alt="back button" />
					</div>
				</Link>
				<h1>Comanda</h1>
				<div>
					<Image src={botaoAdd} alt="back button" />
				</div>
			</div>

			<div className={styles.divPedidos}>


				{ comanda !== null ? comanda.map((cur, key) => {
					return (
						
							  cur.orders.map(( cur, key ) => {
								console.log(cur)
								return(

									<div className={styles.divPedido} key={key} >
										<Image src={hamburgui} alt="hamburgui" />
										<div className={styles.divFooterPedidos}>
											<span>Quantidade : {cur.quantity}</span>
											<div className="flex items-center">
												<span>Status : </span>
												<Image src={load} alt="load" />
											</div>
										</div>
										
									</div>
								)
							})
							
								 

					)
				}): null}


			</div>

			<div className={styles.footer}>
				<FooterBar />
			</div>
		</div>
	);
}
