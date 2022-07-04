import Image from 'next/dist/client/image';
import logo from '../../assets/logo.png';
import cubo from '../../assets/cubo.svg';

export function NavBar(props) {
	return (
		<>
			<div className="fixed h-full w-60">
				<div className="h-1/8 bg-themeWhite rounded-tr-navBar flex justify-center items-center">
					<Image src={logo} alt="logo" />
				</div>
				<div className="h-3/8 bg-themeWhite flex flex-col items-center pt-12">
					<div className="w-52 h-14 rounded-navBar hover:bg-themeSoft transition-all duration-500 ease-in-out flex items-center">
						<div className="rounded-full hover:bg-themeOrange transition-all duration-500 h-10 w-10 ml-5 flex justify-center items-center hover:shadow-2xl hover:shadow-themeOrange">
							<Image
								src={cubo}
								alt="cubo"
								className="bg-transparent"
							/>
						</div>
						<div className="text-themeOrange ">
							<h1 className=" pl-4 hover:bg-themeSoft transition-all duration-500 ease-in-out font-medium text-lg ">
								Produtos
							</h1>
						</div>
					</div>
				</div>
				<div className="h-4/8 bg-themeWhite rounded-br-navBar"></div>
			</div>
		</>
	);
}
