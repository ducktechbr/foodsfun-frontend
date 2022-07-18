import create from 'zustand';

const paymentStore = create((set) => ({
	paymentMethods: {
		pix: Boolean,
		cartao: Boolean,
		dinheiro: Boolean,
	},
	changeMethods: (target) => {
		set((state) => ({ paymentMethods: target }));
	},
}));
export default paymentStore;
