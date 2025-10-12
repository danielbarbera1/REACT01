import React from "react";

function Contacto() {
    return (
        <>
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <h1 className="text-5xl font-bold mb-6">Contáctanos</h1>
                    <p className="text-xl mb-8 max-w-3xl mx-auto">
                        ¿Tienes un proyecto en mente? Estamos aquí para ayudarte. Hablemos sobre cómo podemos hacerlo realidad.
                    </p>
                </div>
            </section>

            {/* Información de Contacto y Formulario */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Información de Contacto */}
                        <div className="lg:col-span-1">
                            <h2 className="text-3xl font-bold text-gray-900 mb-8">Información de Contacto</h2>
                            <div className="space-y-6">
                                {/* Teléfono */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Teléfono</h3>
                                        <p className="text-gray-600">+1 (555) 123-4567</p>
                                        <p className="text-gray-600">+1 (555) 987-6543</p>
                                    </div>
                                </div>
                                {/* Email */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                                        <p className="text-gray-600">info@miempresa.com</p>
                                        <p className="text-gray-600">ventas@miempresa.com</p>
                                    </div>
                                </div>
                                {/* Dirección */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Dirección</h3>
                                        <p className="text-gray-600">Av. Principal 1234</p>
                                        <p className="text-gray-600">Ciudad, Estado 12345</p>
                                        <p className="text-gray-600">País</p>
                                    </div>
                                </div>
                                {/* Horario */}
                                <div className="flex items-start">
                                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                                        <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">Horario de Atención</h3>
                                        <p className="text-gray-600">Lunes - Viernes: 9:00 - 18:00</p>
                                        <p className="text-gray-600">Sábados: 9:00 - 14:00</p>
                                    </div>
                                </div>
                            </div>
                            {/* Redes Sociales */}
                            <div className="mt-8">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Síguenos en</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-400 hover:text-white transition duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.016 10.016 0 01-3.127 1.184A4.92 4.92 0 0011.9 8.034a13.984 13.984 0 01-10.148-5.141 4.929 4.929 0 001.523 6.57 4.903 4.903 0 01-2.229-.616v.062a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.6 3.42 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.213c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.543l-.047-.02z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center hover:bg-blue-700 hover:text-white transition duration-300">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* Formulario de Contacto */}
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg shadow-lg p-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-6">Envíanos un Mensaje</h2>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">Nombre Completo *</label>
                                            <input type="text" id="nombre" name="nombre" required 
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                                placeholder="Tu nombre" />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                                            <input type="email" id="email" name="email" required 
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                                placeholder="tu@email.com" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                                            <input type="tel" id="telefono" name="telefono" 
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                                placeholder="+1 (555) 123-4567" />
                                        </div>
                                        <div>
                                            <label htmlFor="asunto" className="block text-sm font-medium text-gray-700 mb-2">Asunto *</label>
                                            <select id="asunto" name="asunto" required 
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300">
                                                <option value="">Selecciona un asunto</option>
                                                <option value="cotizacion">Solicitud de Cotización</option>
                                                <option value="informacion">Información General</option>
                                                <option value="soporte">Soporte Técnico</option>
                                                <option value="trabajo">Oportunidades de Trabajo</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">Mensaje *</label>
                                        <textarea id="mensaje" name="mensaje" rows="6" required 
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                                            placeholder="Describe tu proyecto o consulta..."></textarea>
                                    </div>
                                    <div className="flex items-center">
                                        <input type="checkbox" id="newsletter" name="newsletter" 
                                            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
                                        <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                                            Suscribirme al newsletter para recibir actualizaciones
                                        </label>
                                    </div>
                                    <button type="submit" 
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg transition duration-300 transform hover:scale-105">
                                        Enviar Mensaje
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mapa */}
            <section className="py-16 bg-gray-100">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Visítanos</h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Estamos ubicados en el corazón de la ciudad. ¡Te esperamos!
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <div className="h-96 bg-gray-200 flex items-center justify-center">
                            <div className="text-center">
                                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                                </svg>
                                <p className="text-gray-500 text-lg">Mapa interactivo aquí</p>
                                <p className="text-gray-400">Integrar con Google Maps o similar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16">
                <div className="max-w-4xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Preguntas Frecuentes</h2>
                        <p className="text-xl text-gray-600">Encuentra respuestas a las preguntas más comunes</p>
                    </div>
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">¿Cuál es el tiempo de respuesta?</h3>
                            <p className="text-gray-600">Normalmente respondemos dentro de las 24 horas hábiles. Para consultas urgentes, recomendamos contactarnos por teléfono.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">¿Ofrecen soporte técnico?</h3>
                            <p className="text-gray-600">Sí, ofrecemos soporte técnico para todos nuestros productos y servicios. El nivel de soporte depende del plan contratado.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">¿Trabajan con empresas internacionales?</h3>
                            <p className="text-gray-600">Absolutamente. Trabajamos con clientes de todo el mundo y adaptamos nuestros servicios según las necesidades regionales.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Contacto;