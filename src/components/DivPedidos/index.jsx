import { useEffect, useState } from 'react';
import ModalInfo from '../ModalInfo';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { api } from '../../api';

export default function DivPedidos(props) {
	const [isOpen, setIsOpen] = useState(false);
	const [tableNumber, setTableNumber] = useState(0);
	const [table, setTable] = useState([]);
	const [number, setNumber] = useState('');

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	async function getTableNumber() {
		setTable(await api.get(`/getTables`));
	}

	useEffect(() => {
		getTableNumber();
	}, []);

	useEffect(() => {
		if (table.data) {
			const tableNums = table.data.filter(
				(current) => current.id === props.current.tableId
			);
			tableNums[0] ? setTableNumber(tableNums[0].number) : null;
		}
		setNumber(String(props.current.number).slice(-3));
	}, [table]);

	async function handleToggle() {
		// await api.patch(`/toggleOrder`);
	}

	return (
		<div className="flex px-2 h-14 bg-white" key={props.key}>
			<div className="w-1/8 bg-white">
				<span className="p-2 rounded-2xl bg-white border ">
					{number}
				</span>
			</div>
			<div className="w-1/8 bg-white">
				<span className="p-2 rounded-2xl bg-white border ">
					{tableNumber}
				</span>
			</div>
			<div className="w-1/8 bg-white">
				<span className="p-2 rounded-2xl bg-white border ">
					{props.current.quantity}
				</span>
			</div>
			<div className="w-4/8 bg-white flex">
				<span className="rounded-2xl bg-white ">
					{props.current.title}
				</span>

				<button type="button" onClick={openModal}>
					<BsFillChatLeftTextFill
						size={16}
						color="#AAA"
						style={{
							backgroundColor: 'transparent',
							marginLeft: '10px',
						}}
					/>
				</button>
			</div>
			<div className="w-1/8 bg-white">
				<button
					onClick={handleToggle}
					className="p-2 rounded-2xl bg-green-400 border border-green-400"
				>
					{props.current.active ? 'Preparando' : 'Concluido'}
				</button>
			</div>
			<ModalInfo
				isOpen={isOpen}
				closeModal={closeModal}
				info={props.current.info}
			/>
		</div>
	);
}
