import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

import back from '../../assets/backbutton.svg';
import botaoAdd from '../../assets/+.svg';
import hamburgui from '../../assets/hamburgui.svg';
import load from '../../assets/load.svg';

import FooterBar from '../../components/FooterBar';

export default function comanda() {
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




				<div className={styles.divPedido}>
					<Image src={hamburgui} alt="hamburgui" />
					<div className={styles.divFooterPedidos}>
						<span>Quantidade : 1</span>
						<div className="flex items-center">
							<span>Status : </span>
							<Image src={load} alt="load" />
						</div>
					</div>
				</div>
				
			</div>

			<div className={styles.footer}>
				<FooterBar />
			</div>
		</div>
	);
}
