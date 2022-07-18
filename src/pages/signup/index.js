import styles from '../../../styles/login.module.css';
import { useRouter } from 'next/router';
import { useState, useContext } from 'react';
import { api } from '../../api/index';
import { AuthContext } from '../../contexts/authContext';
import { LoggedUser } from '../../middlewares/loggedUser';

import Head from 'next/head';
import Link from 'next/link';

function Page() {
	const { setLoggedInUser } = useContext(AuthContext);

	const router = useRouter();

	const [form, setForm] = useState({ email: '', password: '' });
	const [loading, setLoading] = useState(false);

	function handleChange(event) {
		setForm({ ...form, [event.target.name]: event.target.value });
	}

	async function handleSubmit(event) {
		event.preventDefault();

		try {
			setLoading(true);

			const response = await api.post('/newUser', form);

			setLoggedInUser(response.data);

			setLoading(false);
			console.log('usuário criado');
			router.push('/');
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}

	return (
		<div>
			<Head>
				<title>Login</title>
				<meta name="description" content="Template web app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.body}>
				<div className={styles.logo}></div>

				<form className={styles.inputContainer} onSubmit={handleSubmit}>
					<input
						className={styles.input}
						type="text"
						placeholder="Nome"
						name="userName"
						onChange={handleChange}
						required={true}
					/>
					<input
						className={styles.input}
						type="email"
						placeholder="Email"
						name="email"
						onChange={handleChange}
						required={true}
					/>
					<input
						className={styles.input}
						type="password"
						placeholder="Senha"
						name="password"
						onChange={handleChange}
						required={true}
					/>
					<button className={styles.button} type="submit">
						Cadastrar
					</button>
				</form>

				<div className={styles.textArea}>
					<Link href="/">
						<a className={styles.text}>
							Já possui uma conta? Acesse!
						</a>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default function Home() {
	return <LoggedUser component={Page} />;
}
