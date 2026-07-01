function Equipo() {
  return (
    <main className="container py-5">
      <div className="text-center mb-5">
        <h1 className="text-danger fw-bold">Nuestro Equipo</h1>

        <p className="text-light">
          Nuestro equipo está compuesto por profesionales altamente capacitados
          en el campo de la investigación y el periodismo. Cada miembro aporta
          su experiencia y habilidades únicas para garantizar que cada caso sea
          investigado a fondo y presentado de manera clara y precisa. Trabajamos
          juntos para descubrir la verdad.
        </p>
        <p className="fs-4 fw-bold text-danger mt-4">
          "Solo la verdad nos hará libres"
        </p>
      </div>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card bg-dark border-danger h-100">
            <div className="card-header text-center bg-dark border-danger">
              <h3 className="text-white fw-bold m-0">Director</h3>
            </div>

            <img
              src="/images/director.png"
              className="card-img-top"
              alt="Director"
            />

            <div className="card-body text-center">
              <p className="text-secondary">
                Coordina las investigaciones, supervisa el contenido y valida la
                información antes de su publicación.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark border-danger h-100">
            <div className="card-header text-center bg-dark border-danger">
              <h3 className="text-white fw-bold m-0">
                Equipo de Investigación
              </h3>
            </div>

            <img
              src="/images/equipo.png"
              className="card-img-top"
              alt="Equipo"
            />

            <div className="card-body text-center">
              <p className="text-secondary">
                Realiza la investigación de los casos, recopila pruebas y
                entrevistas, y elabora informes detallados para su análisis.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-dark border-danger h-100">
            <div className="card-header text-center bg-dark border-danger">
              <h3 className="text-white fw-bold m-0">Logística</h3>
            </div>

            <img
              src="/images/logistica.png"
              className="card-img-top"
              alt="Logística"
            />

            <div className="card-body text-center">
              <p className="text-secondary">
                Son los elementos que se utilizan en la investigación, desde el
                equipo de grabación hasta los vehículos y otros recursos
                necesarios para llevar a cabo las investigaciones de manera
                efectiva.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Equipo;
