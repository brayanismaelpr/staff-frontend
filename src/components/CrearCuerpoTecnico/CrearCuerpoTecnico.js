// import Input from "../Layout/Input/Input";
import Input from "../Layout/Input/Input";

export default function CrearCuerpoTecnico() {
  return (
		<>
			<h1 className="text-3xl text-center mt-8 font-medium">Crear cuerpo técnico</h1>
			<div class="py-0.5 mt-4 bg-yellow-500 w-14 mx-auto"></div>
			<form class="mt-8 mb-12 shadow-2xl w-4/5 mx-auto max-w-xl py-12 px-12">
				<Input />
				<div class="flex items-center justify-between pt-4">
					<button
					class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					type="button"
					>
					Registrar
					</button>
				</div>
			</form>
		</>
  );
}
