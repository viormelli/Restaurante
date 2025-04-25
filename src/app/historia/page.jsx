import Invertido from "../../components/invertido/invertido";

export default function Historia(){
    const invertidos = fetch("");
    
    return(<>
        {invertidos.map((item, index) => {
            return(
                <div key={index}>
                    <Invertido titulo={item.titulo} texto={item.texto} imagem={item.imagem} invertido={index}></Invertido>
                </div>
            )
        })}
    </>)
}