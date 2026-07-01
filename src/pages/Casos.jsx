function Casos() {
  const base = import.meta.env.BASE_URL;

  return (
    <main className="blog-page">
      <section className="container py-5">
        <div className="text-center mb-5">
          <h1 className="section-title">Blog de Investigaciones</h1>
          <p className="text-secondary">
            Bienvenido al blog de investigaciones, donde compartimos casos
          </p>
        </div>

        <div className="row g-4">
          <article className="col-md-8">
            <div className="blog-main-card">
              <img
                src={`${base}images/pasamano.png`}
                alt="Intercambio de dinero"
                className="img-fluid"
              />

              <div className="p-4">
                <span className="blog-category">Investigación central</span>
                <h2>Dolares Fantasmas</h2>
                <p>
                  En esta investigación se analiza una red de transacciones
                  financieras con billetes de moneda extranjera que se tratan de
                  ingresar al mercado local de manera ilegal. Se busca descubrir
                  la fuente de estos billetes y los posibles implicados en la
                  operación.
                </p>
                <p>
                  El caso se presenta como una crónica de investigación, donde
                  se combinan testimonios, registros digitales y análisis de
                  información para reconstruir la historia detrás de los
                  "Dolares Fantasmas"
                </p>
              </div>
            </div>
          </article>

          <aside className="col-md-4">
            <div className="side-card mb-4">
              <h4>Últimos informes</h4>
              <ul>
                <li>Dolares Fantasmas</li>
                <li>Encomiendas Sucias</li>
                <li>Operacion Libertad</li>
                <li>Los Edenes</li>
              </ul>
            </div>

            <div className="side-card">
              <h4>Categorías</h4>
              <p>Casos digitales</p>
              <p>Crónicas urbanas</p>
              <p>Misterios tecnológicos</p>
            </div>
          </aside>
        </div>

        <div className="row g-4 mt-4">
          <article className="col-md-4">
            <div className="case-card">
              <img
                src={`${base}images/encomienda.png`}
                alt="Encomiendas Sucias"
                className="img-fluid"
              />
              <div className="case-content">
                <span>Caso </span>
                <h3>Encomiendas Sucias</h3>
                <p>
                  Una serie de paquetes sospechosos son enviados a diferentes
                  direcciones, conteniendo objetos que no deberían estar en
                  circulación. Por otro lado se investiga la red de personas que
                  se encargan de enviar estos paquetes, y se busca descubrir el
                  modus operandi de la organización, podra la policía
                  desmantelar la red y evitar que más paquetes peligrosos lleguen
                  a su destino?
                </p>
              </div>
            </div>
          </article>

          <article className="col-md-4">
            <div className="case-card">
              <img
                src={`${base}images/trata.png`}
                alt="Operacion Libertad"
                className="img-fluid"
              />
              <div className="case-content">
                <span>Caso </span>
                <h3>Operacion Libertad</h3>
                <p>
                  Una investigación sobre una red de trata de personas que opera
                  bajo la oportunidad de obtener trabajo en bares y boliches de
                  la ciudad, pero que en realidad es una fachada para la
                  explotación de personas. La investigación busca desmantelar la
                  red y rescatar a las víctimas, mientras se recopilan pruebas
                  para llevar a los responsables ante la justicia.
                </p>
              </div>
            </div>
          </article>

          <article className="col-md-4">
            <div className="case-card">
              <img
                src={`${base}images/investigacion.png`}
                alt="Investigación"
                className="img-fluid"
              />
              <div className="case-content">
                <span>Caso</span>
                <h3>Los Edenes</h3>
                <p>
                  Una denuncia que llega a la unidad de investigaciones la cual
                  indica la existencia de una banda inernacional asentada en la
                  ciudad la cual se podria dedicar a el trafico de
                  estupefacientes en la capital y sus alrededores, podra la
                  unidad de investigaciones recopilar informacion suficiente para
                  desmantelar la banda y llevar a los responsables ante la
                  justicia?
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Casos;