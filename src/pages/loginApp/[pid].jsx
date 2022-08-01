import styles from './style.module.scss';

import Head from 'next/dist/shared/lib/head';

import InputMask from 'react-input-mask';

import { useRouter } from 'next/router';

import { useState } from 'react';

import { api } from '../../api/index';


export default function Login() {
	const router = useRouter();

	const { pid } = router.query;
	const [form, setForm] = useState({ name: '', number: '' });

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
		console.log(form);
	}

	async function submitLogin(event) {

		event.preventDefault();

		const response = await api.post('/loginClient', form);
		console.log(response);
		if (response.status === 200) {
			localStorage.setItem(
				'loggedInClient',
				JSON.stringify({ ...form, tableId: pid })
			);
			router.push("/produtosApp");
		}
	}

	return (
		<div className={styles.background}>
			<Head>
				<title>Login</title>
				<meta name="description" content="Template web app" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<div className={styles.logo}></div>

			<div className={styles.login}>
				<p>
					Entre com o seu nome e telefone para obter acesso ao
					cardapio e realizar seu pedido.
				</p>

				<form onSubmit={submitLogin}>
					<input
						type="text"
						placeholder="Nome"
						name="name"
						onChange={handleChange}
					/>

					<InputMask
						mask="(99) 99999-9999"
						placeholder="Telefone"
						onChange={handleChange}
						name="number"
					/>

					<div>
						<button type="submit">ACESSAR</button>
					</div>
				</form>
			</div>
		</div>
	);
}
