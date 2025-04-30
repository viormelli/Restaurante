import Image from "next/image";


export function Historia() {
    return (
        <section className="py-5" style={{ backgroundColor: '#FDF6ec' }}>
            <div className="container px-2 mx-auto">

                <div className="row">

                    <div className=" col-4 relative" >
                        <div className="imagem">
                            <img
                                src={"/Local.svg"}
                                width={350}
                                height={300}
                            />
                        </div>
                    </div>

                    <div className=" col-8  mt-10" >
                        <h2 className=" font-bold">SOBRE</h2>

                        <p>
                            No nosso restaurante,  cada prato conta uma história. Mais do que sabor,  oferecemos significado. Acreditamos que a comida tem o poder de transformar ,  não só a quem saboreia, mas também o mundo ao redor.
                            Por isso,  criamos o Terra & Essência,  um espaço onde prazer e propósito se encontram à mesa. Aqui, cada escolha alimenta uma causa. Um prato pode colaborar com projetos de reflorestamento. Outro ajuda a garantir educação a comunidades indígenas. E aquele que te faz lembrar a infância? Está contribuindo com uma ONG que cuida de crianças em situação de vulnerabilidade.
                            Nossa missão é alimentar pessoas e causas ao mesmo tempo. No cardápio,  você verá não só os ingredientes, mas também o impacto de cada refeição,  para que seu apetite seja também uma atitude.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    )
}