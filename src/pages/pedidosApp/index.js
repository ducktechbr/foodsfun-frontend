import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useEffect, useState } from 'react';

import styles from './styles.module.css';

import back from '../../assets/backbutton.svg';
import botaoAdd from '../../assets/botaoAdd.svg';
import botaoFinalizar from '../../assets/botaoFinalizar.svg';
import FooterBar from '../../components/FooterBar';
import { api } from '../../api';

export default function Pedidos() {
	const router = useRouter();

	const [check, setCheck] = useState(null);

	useEffect(() => {
		getCheck();
	}, []);

	async function getCheck() {
		const localStore = localStorage.getItem('loggedInClient');
		if (JSON.parse(localStore).checkId) {
			const id = JSON.parse(localStore).checkId;
			const response = await api.patch('/getCheck', { id: id });
			setCheck(response.data);
		}
	}

	//Funcao a ser usada no pagamento para fechar a mesa

	// function handleClearStorege(){
	// }

	async function handleToggleCheck() {
		const localStore = localStorage.getItem('loggedInClient');
		const id = JSON.parse(localStore).checkId;
		await api.patch('/toggleCheck', { id: id });
		const localStored = JSON.parse(localStorage.getItem('loggedInClient'));
		delete localStored.checkId;
		localStorage.setItem('loggedInClient', JSON.stringify(localStored));
		router.push('/comandaApp');
	}

	return (
		<div>
			<div className={styles.header}>
				<Link href="/produtosApp">
					<div>
						<Image src={back} alt="back button" />
					</div>
				</Link>
				<h1>Meus Pedidos</h1>
				<div></div>
			</div>
			<div className={styles.grupoPedidos}>
				<h1>
					<strong>Último pedido</strong>
				</h1>

				<div className="bg-transparent my-2">
					{check
						? !check.isDisabeled
							? check.orders.map((cur, key) => {
								return (
									<div
										className="bg-transparent flex items-center"
										key={key}
									>
										<span className={styles.numero}>
											{' '}
											{cur.quantity}{' '}
										</span>
										<span className={styles.text}>
											{' '}
											{cur.title}{' '}
										</span>
									</div>
								);
							})
							: null
						: null}
				</div>
				<div className="bg-transparent flex justify-around">
					<Link href="/produtosApp">
						<button>
							<Image
								src={botaoAdd}
								alt="botao adicionar"
								className="bg-transparent"
							/>
						</button>
					</Link>
					<button onClick={handleToggleCheck}>
						<Image
							src={botaoFinalizar}
							alt="botao finalizar"
							className="bg-transparent"
						/>
					</button>
				</div>
			</div>

			<div className={styles.divHistorico}>

				{check
					? check.isDisabeled 
						? check.orders.map((cur, key) => {
							return(
								<><h1>
									<strong className={styles.segundoHeader}>Histórico</strong>
								</h1><div className={styles.grupoPedidos}>
										<div className="bg-transparent my-2" key={key}>
											<div className="bg-transparent flex items-center">
												<span className={styles.numero}>{cur.quantity}</span>
												<span className={styles.text}>{cur.title}</span>
											</div>
											<div className="bg-transparent flex items-center">
												<span className={styles.numero}>{cur.quantity}</span>
												<span className={styles.text}>{cur.title}</span>
											</div>
											<div className="bg-transparent flex items-center">
												<span className={styles.numero}>{cur.quantity}</span>
												<span className={styles.text}>{cur.title}</span>
											</div>
										</div>
									</div></>
							)
						})
						:null 
						:null}
			</div>
				

			<div className={styles.footer}>
				<FooterBar />
			</div>
		</div>
	);
}
