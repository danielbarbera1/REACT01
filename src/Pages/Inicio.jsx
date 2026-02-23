import Section from "../Components/Section";
import { Link } from "react-router-dom";
function Inicio() {
    return (
        <>
            <section className="py-12 bg-gradient-to-r from-blue-500 to-blue-700 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <h1 className="text-4xl font-bold mb-2">Bienvenido a REACT01</h1>
                    <p className="text-lg">Este proyecto es una demostración de estructura en React con rutas, componentes y desplegables en Vite. Explora las secciones para entender la navegación y el diseño.</p>
                    <div className="mt-4 space-x-3">
                        <Link to="/servicios" className="inline-block bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg">Servicios</Link>
                        <Link to="/acerdade" className="inline-block bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg">Acerca de</Link>
                        <Link to="/contacto" className="inline-block bg-white text-blue-600 font-semibold px-4 py-2 rounded-lg">Contacto</Link>
                    </div>
                </div>
            </section>
            <Section />
        </>
    );
}

export default Inicio;
