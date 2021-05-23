import { useEffect, useState } from "react";

export default function FormRegistrar() {
	const [data, setData] = useState({});
	const [listaJugadores, setListaTipoIntegrantes] = useState([]);
	const [listaCuerpoTecnico, setListaCuerpoTecnico] = useState([]);
	const [idEquipo, setIdEquipo] = useState(undefined);

	useEffect(() => {
		const getlistaJugadores = async () => {
			const res = await listarTipoIntegrantes();
			if (!res.error) {
				setlistaJugadores(res);
			}
		};
		getlistaJugadores();
	}, []);

	useEffect(() => {
		const getlistaCuerpoTecnicos = async () => {
			const res = await listarCuerpoTecnicos();
			if (!res.error) {
				setListaCuerpoTecnico(res);
			}
		};
		if (idEquipo) {
			getlistaCuerpoTecnicos();
		}
	}, [idEquipo]);

	const listarTipoIntegrantes = async () => {
		const resp = await fetch("http://localhost:4000/tipo_integrante/listar", {
			method: "GET",
			headers: {
				"Content-Type": "application/json",
			},
		}).then((res) => res.json());
		return resp;
	};

	const listarCuerpoTecnicos = async () => {
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

	const handleChange = (e) => {
		const target = e.target;
		const name = target.name;
		const value = target.value;
		setData({ ...data, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const resp = await fetch(
			"http://localhost:4000/integrante_cuerpo_tecnico/guardar",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		).then((res) => res.json());
		if (resp.error) {
			alert(resp.error);
		}
	};

	return (
		<form
			class="mt-8 mb-12 shadow-2xl w-4/5 mx-auto max-w-xl py-12 px-12"
			onSubmit={handleSubmit}
		>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Estado
					</label>
					<select
						className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state"
						onChange={(e) => setEstado(e.target.value)}
					>
						<option value="">Seleccione un estado</option>
						<option value="0">Lesionado</option>
						<option value="1">Activo</option>
						<option value="2">Inactivo</option>
						<option value="4">Retirado</option>
					</select>
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Documento
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="10901234567"
						onChange={handleChange}
						name="documento"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Nombres
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Juan"
						onChange={handleChange}
						name="nombres"
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
						onChange={handleChange}
						name="apellidos"
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
						onChange={handleChange}
						name="email"
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
						onChange={handleChange}
						name="telefono"
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
						onChange={handleChange}
						name="celular"
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
						onChange={handleChange}
						name="fecha_nacimiento"
					/>
				</div>
			</div>
			<div className="flex flex-wrap -mx-3 mb-6">
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Dirección
					</label>
					<input
						className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
						id="grid-first-name"
						type="text"
						placeholder="Calle 1 Avenida 2"
						onChange={handleChange}
						name="direccion"
					/>
				</div>
				<div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
					<label
						className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
						for="grid-first-name"
					>
						Indumentaria
					</label>
					<select
						className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
						id="grid-state"
						onChange={(e) => setEstado(e.target.value)}
					>
						<option value="">Seleccione un estado</option>
						<option value="0">Tallas</option>
						<option value="1">Sudadera</option>
						<option value="2">Camiseta</option>
						<option value="4">Pantaloneta</option>
						<option value="4">Zapato deportivo</option>
						<option value="4">Tipo de sangre</option>
						<option value="4">Nivel de hemoglobina</option>
						<option value="4">Consumo de 02</option>
						<option value="4">Nivel de lacteo en sangre</option>
					</select>
				</div>
			</div>
			<div class="flex items-center justify-between pt-4">
				<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="submit"
				>
					Registrar
				</button>
			</div>
		</form>
	);
}
