import Image from 'next/image';
import Link from 'next/link';

import styles from './styles.module.css';

import setinhaBranca from '../../assets/setinhaBranca.svg';
import setinha from '../../assets/setinha.svg';	

import FooterBar from '../../components/FooterBar';

export default function dados() {
	return (
		<div>
			<div className={styles.header2}>
				<Image src={setinhaBranca} alt="setinhaBranca" />
				<h1>Fulano de Tal</h1>
				<div />
			</div>
			<ul className={styles.ul}>
				<li className="w-full relative">
					<div className="flex justify-between">
						<div className="flex flex-col items-start">
							<div className="flex items-start space-x-2">
								<span className={styles.spanzin}>Email</span>
							</div>
							<span className={styles.span2}>
								email@email.com
							</span>
						</div>
					</div>
					<div className="h-px w-72 bg-white opacity-2 mt-5 mb-5"></div>
				</li>
				<li className="w-full relative">
					<div className="flex justify-between">
						<div className="flex flex-col items-start">
							<div className="flex items-start space-x-2">
								<span className={styles.spanzin}>Celular</span>
							</div>
							<span className={styles.span2}>
								+55 (00)00000-0000
							</span>
						</div>
					</div>
					<div className="h-px w-72 bg-white opacity-2 mt-5 mb-5"></div>
				</li>
			</ul>
			<div className={styles.footer}>
				<FooterBar />
			</div>
		</div>
	);
}
