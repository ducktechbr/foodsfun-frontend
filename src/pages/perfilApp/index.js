import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

import fulano from '../../assets/fulano.svg';
import dados from '../../assets/dados.svg';
import setinha from '../../assets/setinha.svg';

import bell from '../../assets/bell.svg';

import FooterBar from '../../components/FooterBar';

export default function perfil() {
	return (
		<div>
			<div className={styles.header}>
				<Image src={fulano} alt="foto do usuário" />
				<h1>Fulano de Tal</h1>
			</div>
			<ul className={styles.ul}>
				<li className="w-full relative">
					<div className="flex justify-between">
						<div className="flex flex-col items-start">
							<div className="flex items-start space-x-2">
								<Image src={dados} alt="icone dados" />
								<span className={styles.spanzin}>
									Meus Dados
								</span>
							</div>
							<span className={styles.span}>
								Meus dados de conta
							</span>
						</div>
						<button className="absolute right-10 h-5 w-5">
							<Image src={setinha} alt="setinha" />
						</button>
					</div>
					<hr className={styles.line} />
				</li>
				<li className="w-full relative">
					<div className="flex justify-between">
						<div className="flex flex-col items-start">
							<div className="flex items-start space-x-2">
								<Image src={bell} alt="bell" />
								<span className={styles.spanzin}>
									Notificações
								</span>
							</div>
							<span className={styles.span}>
								Central de notificaçãoes
							</span>
						</div>
						<button className="absolute right-10 h-5 w-5">
							<Image src={setinha} alt="setinha" />
						</button>
					</div>
					<hr className={styles.line} />
				</li>
			</ul>
			<div className={styles.footer}>
				<FooterBar />
			</div>
		</div>
	);
}
