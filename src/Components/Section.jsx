
function Section() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">
                        Título Principal
                    </h1>
                    <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                        Este es un párrafo descriptivo que explica el contenido de esta sección. 
                        Puedes agregar más información relevante aquí.
                    </p>
                    <div className="flex justify-center space-x-4">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                            Botón Primario
                        </button>
                        <button className="bg-white hover:bg-gray-100 text-gray-800 font-bold py-3 px-6 border border-gray-300 rounded-lg transition duration-300">
                            Botón Secundario
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Section;