function AcercaDe() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Nuestra Historia</h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        Más de 10 años transformando ideas en soluciones digitales innovadoras que impulsan el crecimiento de nuestros clientes.
                    </p>
                </div>
            </section>

            {/* Nuestra Historia */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Quiénes Somos</h2>
                            <p className="text-lg text-gray-600 mb-6">
                                Somos un equipo apasionado de profesionales dedicados a crear soluciones digitales que marcan la diferencia. 
                                Fundada en 2014, nuestra empresa nació con la visión de hacer la tecnología accesible y efectiva para todos.
                            </p>
                            <p className="text-lg text-gray-600 mb-6">
                                Creemos en el poder de la innovación, la calidad y las relaciones a largo plazo. 
                                Cada proyecto es una oportunidad para superar expectativas y entregar valor real.
                            </p>
                            <div className="grid grid-cols-2 gap-6 mt-8">
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                                    <div className="text-gray-600">Proyectos Completados</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
                                    <div className="text-gray-600">Clientes Satisfechos</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
                                    <div className="text-gray-600">Años de Experiencia</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                                    <div className="text-gray-600">Premios Ganados</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
                            <span className="text-gray-500 text-lg">Imagen del equipo o oficina</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Misión, Visión y Valores */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Pilares</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Los fundamentos que guían cada decisión y acción en nuestra empresa.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Misión */}
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                            <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misión</h3>
                            <p className="text-gray-600">
                                Desarrollar soluciones tecnológicas innovadoras que empoderen a las empresas para alcanzar su máximo potencial 
                                en el entorno digital actual.
                            </p>
                        </div>

                        {/* Visión */}
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Visión</h3>
                            <p className="text-gray-600">
                                Ser reconocidos como la empresa líder en transformación digital, siendo el partner estratégico preferido 
                                para empresas que buscan innovar y crecer.
                            </p>
                        </div>

                        {/* Valores */}
                        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
                            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg className="w-10 h-10 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                                </svg>
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Valores</h3>
                            <ul className="text-gray-600 space-y-2 text-left">
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Innovación constante
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Calidad excepcional
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Transparencia total
                                </li>
                                <li className="flex items-center">
                                    <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    Compromiso con el cliente
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Equipo */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Nuestro Equipo</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Conoce a las mentes creativas y apasionadas que hacen posible nuestra misión.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Miembro 1 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                            <div className="bg-gray-200 h-64 flex items-center justify-center">
                                <span className="text-gray-500">Foto del equipo</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">María González</h3>
                                <p className="text-blue-600 font-semibold mb-3">CEO & Fundadora</p>
                                <p className="text-gray-600 text-sm">
                                    Más de 15 años de experiencia en desarrollo de software y liderazgo de equipos.
                                </p>
                            </div>
                        </div>

                        {/* Miembro 2 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                            <div className="bg-gray-200 h-64 flex items-center justify-center">
                                <span className="text-gray-500">Foto del equipo</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Carlos Rodríguez</h3>
                                <p className="text-blue-600 font-semibold mb-3">CTO</p>
                                <p className="text-gray-600 text-sm">
                                    Especialista en arquitectura de software y tecnologías emergentes.
                                </p>
                            </div>
                        </div>

                        {/* Miembro 3 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                            <div className="bg-gray-200 h-64 flex items-center justify-center">
                                <span className="text-gray-500">Foto del equipo</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">Ana Martínez</h3>
                                <p className="text-blue-600 font-semibold mb-3">Directora de Diseño</p>
                                <p className="text-gray-600 text-sm">
                                    Apasionada por crear experiencias de usuario excepcionales y memorables.
                                </p>
                            </div>
                        </div>

                        {/* Miembro 4 */}
                        <div className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                            <div className="bg-gray-200 h-64 flex items-center justify-center">
                                <span className="text-gray-500">Foto del equipo</span>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2">David López</h3>
                                <p className="text-blue-600 font-semibold mb-3">Director de Marketing</p>
                                <p className="text-gray-600 text-sm">
                                    Estratega digital con expertise en crecimiento y posicionamiento de marca.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cultura y Ambiente */}
            <section className="py-16 bg-blue-600 text-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-6">Nuestra Cultura</h2>
                            <p className="text-lg mb-6">
                                Creemos en un ambiente de trabajo colaborativo, inclusivo y motivador. 
                                Fomentamos la creatividad, el aprendizaje continuo y el bienestar de nuestro equipo.
                            </p>
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span>Flexibilidad horaria y trabajo remoto</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span>Programas de desarrollo profesional</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-green-300 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                                    </svg>
                                    <span>Ambiente colaborativo y sin jerarquías</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-blue-500 rounded-lg h-96 flex items-center justify-center">
                            <span className="text-blue-200 text-lg">Imagen del ambiente de trabajo</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gray-900 text-white">
                <div className="max-w-4xl mx-auto px-4 text-center">
                    <h2 className="text-4xl font-bold mb-6">¿Te gustaría unirte a nuestro equipo?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Siempre estamos buscando talento apasionado y comprometido. 
                        Explora nuestras oportunidades de carrera.
                    </p>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300">
                        Ver Vacantes
                    </button>
                </div>
            </section>
        </>
    );
}

export default AcercaDe;