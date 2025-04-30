export default function Invertido({ titulo, texto, imagem, invertido }) {

    if (invertido % 2 == 0) {
        //para a direita
        return <>
            <div className={`flex flex-col md:flex-row ${isPar ? '' : 'md:flex-row-reverse'} items-center gap-8 py-8`}>
                <div className="w-full md:w-1/2">
                    <img src='banner.svg' className="w-full h-auto rounded-lg shadow" />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-2xl font-bold mb-4">TERRA E ESSENCIA</h2>
                    <p className="text-gray-700">bla bla bla bla bla bla</p>
                </div>
            </div>

        </>
    } else {
        //para a esquerda
        return <>

        </>
    }

}