"use client";

export default function Card({ titulo, imagem }) {
    return (
        <div>
            <h1>{titulo}</h1>
            <div className="card"
                style={{
                    width: "20rem",
                    backgroundColor: "#f4f4f4",
                }}>
                <img src={imagem} className="card-img-top" alt="Imagem do patrocinador" />
            </div>
        </div>
        
    );
}
