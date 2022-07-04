import Link from 'next/link';

export default function DropDown(props) {
	const info = [
		props.info1,
		props.info2,
		props.info3,
		props.info4,
		props.info5,
		props.info6,
	];

	return (
		<div className="dropdown text-gray1">
			<Link href={props.button}>
				<button className="dropbtn no-underline transition  delay-150 hover:text-golden h-14 mb-1">
					{props.header}
				</button>
			</Link>
			<div className="dropdown-content origin-top-right shadow-lg bg-theme2 ring-black ring-opacity-5 focus:outline-none flex flex-col mt-3 w-64">
				<ul>
					{info.map((info, key) => {
						return info === '' ? null : (
							<li key={key} className="px-8 py-2">
								<Link
									href={`${props.button}/${info
										.replaceAll(' ', '-')
										.toLowerCase()}`}
								>
									<button className="no-underline text-left transition duration-300 delay-100 hover:text-golden block px-4 py-2">
										{info}
									</button>
								</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
}
