import styles from './styles.module.css';
import Image from 'next/image';

import setinhaBranca from '../../assets/setinhaBranca.svg';

import FooterBar from '../../components/FooterBar';

export default function notificacoes() {
  return (
    <div>
      <div className={styles.header2}>
        <Image src={setinhaBranca} alt="setinhaBranca" />
        <h1>Notificações</h1>
        <div />
      </div>

        <div className={styles.notificacoes}> 
            <h1>Sem novidades por enquanto</h1>
            <p>Quando uma notificação chegar, ela ficará aqui.</p>
        </div>

        <div className={styles.footer}>
			<FooterBar />
		</div>

    </div>
  );
}
