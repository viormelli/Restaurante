import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import PatrocinadoresCarousel from "@/components/Patrocinadores/Patrocinadores";
import IndigenasSection from "@/components/Indigenos/Indigenos";
import AfricanasSection from "@/components/Africana/Africana";
import AsiaticasSection from "@/components/Asiaticas/Asiaticas";
import DepoimentosSection from "@/components/Depoimentos/Depoimentos";
import { Historia } from "@/components/Historia/Historia";


export default function Home() {
  return (
    <>
      {/* Banner principal */}
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

     <div style={{marginTop:'20px'}}>
       <PatrocinadoresCarousel />
     </div>
     
      
    <div>
      <Historia/>
    </div>
    <div>
      <IndigenasSection/>
    </div>
    <div>
      <AfricanasSection/>
    </div>
    <div>
      <AsiaticasSection/>
    </div>

    <div style={{marginTop: '20px'}}>
      <DepoimentosSection/>
    </div>
    </>
    
  );
}

