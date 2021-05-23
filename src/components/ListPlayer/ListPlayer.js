import { useEffect, useState } from "react";

export default function ListPlayer() {
	// const [listaCuerpoTecnico, setListaCuerpoTecnico] = useState([]);
	const [listaPlayer, setListaPlayer] = useState([]);
	const [idEquipo, setIdEquipo] = useState(undefined);
	// const [idCuerpoTecnico, setIdCuerpoTecnico] = useState(undefined);
	const [idPlayer, setIdPlayer] = useState(undefined);
	const [listaIntegrantes, setListaIntegrantes] = useState([]);

	useEffect(() => {
		const getlistaPlayers = async () => {
			const res = await listarPlayers();
			if (!res.error) {
				setListaPlayer(res);
			}
		};
		if (idEquipo) {
			getlistaPlayers();
		}
	}, [idEquipo]);

	useEffect(() => {
		const getlistaIntegrantes = async () => {
			const res = await listarIntegrantes();
			if (!res.error) {
				setListaIntegrantes(res);
			}
		};
		if (idEquipo) {
			getlistaIntegrantes();
		}
	}, [idPlayer]);

	const listarPlayers = async () => {
		const resp = await fetch(
			`http://localhost:4000/cuerpo_tecnico/listar_por_equipo/${idEquipo}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then((res) => res.json());
		return resp;
	};

	const listarIntegrantes = async () => {
		const resp = await fetch(
			`http://localhost:4000/integrante_cuerpo_tecnico/listar_por_cuerpo_tecnico/${idPlayer}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		).then((res) => res.json());
		return resp;
	};

	return (
		<>
			<div className="overflow-x-auto">
				<div className="min-w-screen min-h-screen flex justify-center bg-gray-50 font-sans overflow-hidden">
					<div className="w-full lg:w-5/6">
						<h1 className="text-3xl text-center mt-8 font-medium">
							Lista jugadores de un equipo
						</h1>
						<div class="py-0.5 mt-4 bg-yellow-500 w-14 mx-auto"></div>
						<div className="md:flex flex-wrap items-center mt-8">
							<div className="mr-2">
								<p class="font-medium">Equipo</p>
								<div className="relative">
									
									<select
										className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-state"
										onChange={(e) => setIdEquipo(e.target.value)}
									>
										<option value="">Seleccione un equipo</option>
										<option value="0">Barcelona</option>
										<option value="1">Atletico de madrid</option>
										<option value="4">PSG</option>
									</select>
									
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg
											className="fill-current h-4 w-4"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</div>
								</div>
							</div>
							<div className="ml-2">
								<div className="relative">
									<label class="font-medium">Jugador:</label>
									<select
										className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
										id="grid-state"
										onChange={(e) => setIdPlayer(e.target.value)}
										name="id_cuerpo_tecnico"
									>
										<option value="">Seleccione una opción</option>
										{listaPlayer.map((el, pos) => (
											<option value={el.id} key={pos}>
												{el.nombre}
											</option>
										))}
									</select>
									<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
										<svg
											className="fill-current h-4 w-4"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
										</svg>
									</div>
								</div>
							</div>
						</div>
						<div className="bg-white shadow-md rounded my-6">
							<table className="min-w-max w-full table-auto">
								<thead className="bg-yellow-500">
									<tr className="text-white uppercase text-sm leading-normal">
										<th className="py-3 px-6 text-left">Documento</th>
										<th className="py-3 px-6 text-left">Nombre</th>
										<th className="py-3 px-6 text-center">Apellidos</th>
										<th className="py-3 px-6 text-center">Fecha nacimiento</th>
										<th className="py-3 px-6 text-center">Teléfono</th>
										<th className="py-3 px-6 text-center">Correo</th>
										<th className="py-3 px-6 text-center">Acciones</th>
									</tr>
								</thead>
								<tbody className="text-gray-600 text-sm font-light">
									{listaIntegrantes.map((integrante, pos) => (
										<tr className="border-b border-gray-200 hover:bg-gray-100">
											<td className="py-3 px-6 text-left whitespace-nowrap">
												<div className="flex items-center">
													<span className="font-medium">
														{integrante.documento}
													</span>
												</div>
											</td>
											<td className="py-3 px-6 text-left">
												<div className="flex items-center">
													<span className="font-medium">
														{integrante.nombres}
													</span>
												</div>
											</td>
											<td className="py-3 px-6 text-center">
												<span className="font-medium bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
													{integrante.apellidos}
												</span>
											</td>
											<td className="py-3 px-6 text-center">
												<span className="font-medium">
													{integrante.fecha_nacimiento}
												</span>
											</td>
											<td className="py-3 px-6 text-center">
												<span className="font-medium">
													{integrante.telefono}
												</span>
											</td>
											<td className="py-3 px-6 text-center">
												<p className="font-medium">
													{integrante.correo}
												</p>
											</td>
											<td className="py-3 px-6 text-center">
												<a href="#">
													<i className="far fa-edit mr-2"></i>
												</a>
												<a href="#">
													<i className="far fa-trash-alt text-red-500"></i>
												</a>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
