import styles from '../../styles/login.module.css';

import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Login</title>
				<meta name="description" content="Template web app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className={styles.body}>
				<div className={styles.logo}></div>
			</div>

			<div className={styles.inputContainer}>
				<input
					className={styles.input}
					type="email"
					placeholder="Email"
				/>
				<input
					className={styles.input}
					type="password"
					placeholder="Senha"
				/>
				<Link href="../../Pedidos" >
				  <a className={styles.button} type="submit">
				  	Acessar
				  </a>
				</Link>
			</div>

			<div className={styles.textArea}>
				<Link href="#">
					<a className={styles.text}>Esqueceu a senha?</a>
				</Link>
				<Link href="/signUp">
					<a className={styles.text}>
						Não possui uma conta? Cadastre-se!
					</a>
				</Link>
			</div>
		</div>
	);
}
