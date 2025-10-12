
function Flooter() {
    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Columna 1 */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold mb-4">MiEmpresa</h3>
                        <p className="text-gray-300 mb-4">
                            Descripción breve de tu empresa o proyecto. Explica qué haces y cuál es tu misión.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                                <span className="sr-only">Facebook</span>
                                {/* Icono de redes sociales */}
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white transition duration-300">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184A4.92 4.92 0 0011.9 8.034a13.984 13.984 0 01-10.148-5.141 4.929 4.929 0 001.523 6.57 4.903 4.903 0 01-2.229-.616v.062a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.6 3.42 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.543l-.047-.02z"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Columna 2 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Enlaces</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Inicio</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Servicios</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Acerca de</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Contacto</a></li>
                        </ul>
                    </div>

                    {/* Columna 3 */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Política de Privacidad</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Términos de Servicio</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-white transition duration-300">Cookies</a></li>
                        </ul>
                    </div>
                </div>
                
                {/* Línea divisoria */}
                <div className="border-t border-gray-700 mt-8 pt-8">
                    <p className="text-gray-300 text-center">
                        © 2024 MiEmpresa. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Flooter;