"use client";

export default function historia ({ titulo, imagem, texto }) {
    return (
        <div className="card mb-3" style={{ maxWidth: 540 }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={imagem} className="img-fluid rounded-start" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <p className="card-text">{texto}</p>
              <p className="card-text">
              </p>
            </div>
          </div>
        </div>
      </div>
      
        
    );
}
