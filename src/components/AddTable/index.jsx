import { Dialog, Transition } from '@headlessui/react';

import { Fragment, useState } from 'react';

import { api } from '../../api';

import styles from './styles.module.css';

import reloadStore from "../../store/reloadStore";

import { toast } from 'react-toastify';

export default function AddTable() {

    const [isOpen, setIsOpen] = useState(false);
	const [loading, setLoading] = useState(false);
	const setReload = reloadStore((state) => state.setReload);
	

    function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}
    
    async function handleAdd(){

		try {
			setLoading(true)
		   const table = await api.post("/newTable");
		   
		   closeModal();
		   setLoading(false)
			
		} catch (error) {
			console.log(error)
		}

		setReload(true)
		toast.success("Mesa adicionada com sucesso!", {
			position: toast.POSITION.TOP_CENTER,
		  });

    }

	return (
		<>
			<button type="button" onClick={openModal}>
				<div className={styles.content}>
					<div className={styles.contentText}>
						<h1>Adicionar +</h1>
					</div>
				</div>
			</button>

            <Transition appear show={isOpen} as={Fragment}>
				<Dialog as="div" className="relative z-10" onClose={closeModal}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-black bg-opacity-25" />
					</Transition.Child>

					<div className="fixed inset-0 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 scale-95"
								enterTo="opacity-100 scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 scale-100"
								leaveTo="opacity-0 scale-95"
							>
								<Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
									<Dialog.Title
										as="h3"
										className="text-lg font-medium leading-6 text-gray-900"
									>
										Deseja cadastrar uma nova Mesa?
									</Dialog.Title>
									<div>
										<button onClick={closeModal}> Cancelar </button>
										<button onClick={handleAdd} disabled={loading}> Ok </button>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>			
		</>
	);
}
