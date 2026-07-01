import { Link } from "react-router-dom";

function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay">
          <div className="container text-center text-light">

            <p className="hero-label">
              Unidad de Investigaciones Especiales
            </p>

            <h1 className="hero-title">
              ARCHIVO CERO
            </h1>

            <p className="hero-text">
              Bienvenido a Archivo Cero, en donde investigacion comienza con una duda y termina con evidencia
            </p>

            <Link to="/casos" className="btn btn-danger btn-lg mt-4">
              Ingresar
            </Link>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;