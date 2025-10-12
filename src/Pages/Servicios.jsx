function Servicios() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Nuestros Servicios</h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Ofrecemos soluciones innovadoras y personalizadas para impulsar tu negocio al siguiente nivel.
                    </p>
                    <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
                        Contáctanos
                    </button>
                </div>
            </section>

            {/* Servicios Principales */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Servicios Destacados</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Descubre cómo podemos ayudarte a alcanzar tus objetivos con nuestros servicios especializados.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Servicio 1 */}
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Desarrollo Web</h3>
                            <p className="text-gray-600 mb-6">
                                Creamos sitios web modernos, responsivos y optimizados que convierten visitantes en clientes.
                            </p>
                            <ul className="text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Diseño responsivo
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Optimización SEO
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    E-commerce
                                </li>
                            </ul>
                            <button className="text-blue-600 hover:text-blue-700 font-semibold transition duration-300">
                                Más información →
                            </button>
                        </div>

                        {/* Servicio 2 */}
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Marketing Digital</h3>
                            <p className="text-gray-600 mb-6">
                                Estrategias de marketing efectivas para aumentar tu presencia online y generar más leads.
                            </p>
                            <ul className="text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    SEO y SEM
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Redes Sociales
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Email Marketing
                                </li>
                            </ul>
                            <button className="text-blue-600 hover:text-blue-700 font-semibold transition duration-300">
                                Más información →
                            </button>
                        </div>

                        {/* Servicio 3 */}
                        <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition duration-300">
                            <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Analítica de Datos</h3>
                            <p className="text-gray-600 mb-6">
                                Transformamos datos en insights accionables para optimizar tu negocio y tomar mejores decisiones.
                            </p>
                            <ul className="text-gray-600 space-y-2 mb-6">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Dashboards interactivos
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Reportes automatizados
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Análisis predictivo
                                </li>
                            </ul>
                            <button className="text-blue-600 hover:text-blue-700 font-semibold transition duration-300">
                                Más información →
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Proceso de Trabajo */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Proceso</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Trabajamos de manera estructurada para garantizar los mejores resultados.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                            <h3 className="text-xl font-semibold mb-2">Consulta</h3>
                            <p className="text-gray-600">Analizamos tus necesidades y objetivos</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                            <h3 className="text-xl font-semibold mb-2">Planificación</h3>
                            <p className="text-gray-600">Creamos una estrategia personalizada</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                            <h3 className="text-xl font-semibold mb-2">Ejecución</h3>
                            <p className="text-gray-600">Implementamos la solución acordada</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                            <h3 className="text-xl font-semibold mb-2">Seguimiento</h3>
                            <p className="text-gray-600">Monitoreamos y optimizamos resultados</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">¿Listo para comenzar?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Contáctanos hoy mismo y descubre cómo podemos ayudarte a alcanzar tus objetivos.
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-white text-blue-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition duration-300">
                            Solicitar Cotización
                        </button>
                        <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg transition duration-300">
                            Llamar Ahora
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Servicios;