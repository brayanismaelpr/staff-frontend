export default function InputCol2() {
	return (
		<>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Nombre
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Juan"
					/>
				</div>
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Apellidos
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Peñaranda"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Email
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="email"
						placeholder="Juan@gmail.com"
					/>
				</div>
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Teléfono
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="number"
						placeholder="3157438902"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Celular
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="number"
						placeholder="3157438902"
					/>
				</div>
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Fecha nacimiento
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="date"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Tipo sangre
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="A positivo"
					/>
				</div>
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Tipo integrante
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Cuerpo ténico
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
					/>
				</div>
			</div>
		</>
	);
}
