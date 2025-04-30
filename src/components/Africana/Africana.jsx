"use client";

export default function AfricanasSection() {
    const pratos = [
      {
        nome: "Moqueca",
        descricao: "kajsjdjsnka\\kakizjxjncncm",
        imagem: "/Jollof.svg",
        preco: "R$ 45,00"
      },
      {
        nome: "Beiju",
        descricao: "kajsjdjsnka\\kakizjxjncncm",
        imagem: "/Bunny.svg",
        preco: "R$ 45,00"
      },
      {
        nome: "Tacaca",
        descricao: "kajsjdjsnka\\kakizjxjncncm",
        imagem: "/Piri.svg",
        preco: "R$ 45,00"
      }
    ];
  
    return (
      <div className="d-flex flex-wrap gap-5 py-10 px-6" style={{backgroundColor: '#c2a589', alignItems: 'center', justifyContent: 'center'}}>
      {pratos.map((prato, index) => (
        <div key={index} className="bg-orange-400 rounded-lg overflow-hidden shadow-lg w-80 transform transition duration-300 hover:scale-105" style={{margin:'30px'}}>
          <div className="card" style={{ width: "18rem", backgroundColor: '#902e00', border: 'transparent', borderRadius:'20px' }}>
            <img src={prato.imagem} alt={prato.nome} className="card-img-top" style={{borderRadius:'20px'}} />
            <div className="card-body">
            <h5 className="card-title">{prato.nome}</h5>
              <p className="card-text">
                {prato.descricao}
              </p>
            </div>
            <div className="d-flex mt-2 m-4 d-grid gap-1" style={{justifyContent: 'center', alignItems:'center' }}>
              <button className="text-white rounded-full px-4 py-2 text-sm" style={{backgroundColor: '#c2a589', border:'none', borderRadius:'20px' }}>
                Veja mais
              </button>
              <button className="text-white rounded-full px-4 py-2 text-sm" style={{backgroundColor: '#c2a589', border:'none', borderRadius:'20px' }}>
                {prato.preco}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
    );
  }
  
