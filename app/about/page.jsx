export default (About) => {
    return <div className="bg-white h-screen justify-start pl-8 pt-10 flex-col">
        <h1 className=" text-4xl tracking-wide leading-none text-[#2176FF]"> Acerca de </h1>
        <p className=" text-lg">Este es una pagina acerca del dashboard</p>
        <div className="pt-10 max-w-sm rounded overflow-hidden shadow-lg">
            <img src="https://www.ensenada.tecnm.mx/wp-content/themes/tecnm/images/logo-ensenada.png" className="rounded-lg h-60 w-60"></img>
            <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2 text-[#33A1FD]">Instituto Tecnologico de Ensenada</div>
                    <p class="text-gray-700 text-base text-justify">
                        El Instituto Tecnológico de Ensenada (ITE) es una institución educativa mexicana dedicada a la formación en áreas tecnológicas y científicas. Está ubicado en la ciudad de Ensenada, Baja California, México. Fue fundado en 1967 y desde entonces ha jugado un papel importante en la educación superior y en la promoción de la investigación en la región.
                    </p>
                </div>
            </div>
        </div>;
};