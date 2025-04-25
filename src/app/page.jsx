import Card from "@/components/Card/card";

export default async function Page() {
  const res = await fetch("http://10.189.87.39:8080/restaurante", { cache: "no-store" });
  const data = await res.json();

  console.log("DADOS DA API:", data);

  // Certifique-se de acessar diretamente as chaves que você quer exibir
  const Patrocinadores = data[0].Patrocinadores || [];  // Acessando diretamente o campo patrocinadores na primeira entrada
  const Terra = data[0].Terra || [];
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="banner.svg" className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="banner.svg" className="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Renderizando os patrocinadores */}
      {Array.isArray(Patrocinadores) && Patrocinadores.length > 0 ? (
        Patrocinadores.map((item, index) => (
          <div key={index}>
            <Card titulo={id.Patrocinadores.Titulo} imagem={id.Patrocinadores.ImagemUm} /> {/* Use a imagem correta conforme o patrocinador */}
          </div>
        ))
      ) : (
        <p>Nenhum patrocinador encontrado.</p>
      )}

      {Array.isArray(Terra) && Terra.length > 0 ? (
        Patrocinadores.map((item, index) => (
          <div key={index}>
            <historia titulo={Terra & Essencia.Imagem} imagem={Terra & Essencia.Texto} /> {/* Use a imagem correta conforme o patrocinador */}
          </div>
        ))
      ) : (
        <p>Nenhum patrocinador encontrado.</p>
      )}
    </>
  );
}
