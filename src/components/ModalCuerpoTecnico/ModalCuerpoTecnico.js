export default function ModalCuerpoTecnico({statemodal}) {
    
    return (
        <div className={`modal ${statemodal ? "modal-active" : ""} bg-white rounded-md shadow-2xl px-5 py-6 z-10`}>
            <ul className="">
                <li className="p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <i class="fas fa-futbol text-yellow-500"></i>
                    <a className="ml-4 text-gray-500" href="/registerstaff">Crear cuerpo técnico</a>
                </li>
                <li className="p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <i class="fas fa-child text-yellow-500"></i>
                    <a className="ml-4 text-gray-500" href="/registermemberstaff">Crear integrante cuerpo técnico</a>
                </li>
                <li className="p-3 flex items-center rounded-lg hover:bg-gray-50">
                    <i class="fas fa-book-open text-yellow-500"></i>
                    <a className="ml-4 text-gray-500" href="/listpersonstaff">Listar integrante</a>
                </li>
            </ul>
        </div>
    );
}