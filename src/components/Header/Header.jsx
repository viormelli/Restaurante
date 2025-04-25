import Link from "next/link";


export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg " style={{
        backgroundColor: "#faefd9"
      }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="logo.svg"
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={70}
              height={400}
              loading="lazy"
            />

          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-4">

              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "#902e00", fontWeight: "bold" }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "#902e00", fontWeight: "bold" }}>
                  Cardápio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "#902e00", fontWeight: "bold" }}>
                  História
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#" style={{ color: "#902e00", fontWeight: "bold" }}>
                  ONG's
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div class="container-fluid text-center" >
        <div class="row" >
          <div class="col" style={{ background: "#ce5016" }}> <p></p> </div>
          <div class="col" style={{ background: "#f4a421" }}> <p></p> </div>
          <div class="col" style={{ background: "#9a4015" }}> <p></p> </div>
        </div></div>

    </>
  )

}