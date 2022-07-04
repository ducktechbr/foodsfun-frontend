import Image from 'next/dist/client/image';
import logo from '../../assets/logo.png';
import cubo from '../../assets/cubo.svg';
import pedidos from '../../assets/pedidos.svg';
import mesas from '../../assets/mesas.svg';
import DropDown from '../Dropdown';

export function NavBar(props) {
	return (
		<div className="fixed h-full w-60 font-theme">
			<div className="h-2/8 bg-themeWhite rounded-tr-navBar flex justify-center items-center">
				<Image src={logo} alt="logo" className="bg-themeWhite" />
			</div>
			<div className="h-3/8 bg-themeWhite flex flex-col items-center pt-8">
				<div className="w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7">
					<div className="rounded-full h-10 w-10 ml-5 flex justify-center items-center group-hover:bg-themeOrange group-hover:drop-shadow-buttonIcon transition-all duration-500 ease-in-out">
						<Image
							src={cubo}
							alt="cubo"
							className="bg-transparent"
						/>
					</div>
					<div className="text-themeGray group-hover:text-themeOrange ">
						<h1 className=" pl-4 group-hover:bg-themeSoft transition-all duration-500 font-medium text-lg ">
							Cubo
						</h1>
					</div>
				</div>
				<div className="w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7">
					<div className="rounded-full h-10 w-10 ml-5 flex justify-center items-center group-hover:bg-themeOrange group-hover:drop-shadow-buttonIcon transition-all duration-500 ease-in-out">
						<Image
							src={pedidos}
							alt="pedidos"
							className="bg-transparent"
						/>
					</div>
					<div className="text-themeGray group-hover:text-themeOrange ">
						<h1 className=" pl-4 group-hover:bg-themeSoft transition-all duration-500 font-medium text-lg ">
							Pedidos
						</h1>
					</div>
				</div>
				<div className="w-52 h-14 rounded-navBar hover:bg-themeSoft flex items-center group transition-all duration-500 mb-7">
					<div className="rounded-full h-10 w-10 ml-5 flex justify-center items-center group-hover:bg-themeOrange group-hover:drop-shadow-buttonIcon transition-all duration-500 ease-in-out">
						<Image
							src={mesas}
							alt="mesas"
							className="bg-transparent"
						/>
					</div>
					<div className="text-themeGray group-hover:text-themeOrange ">
						<h1 className=" pl-4 group-hover:bg-themeSoft transition-all duration-500 font-medium text-lg ">
							Mesas
						</h1>
					</div>
				</div>
			</div>
			<div className="h-3/8 bg-themeWhite rounded-br-navBar">
				<DropDown
					info1="aranha"
					info2="bode"
					info3="macaco"
					header="NOME DO zÉ"
					button="/xeipe-beis"
				/>
			</div>
		</div>
	);
}
