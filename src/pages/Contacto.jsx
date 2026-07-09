import { useState } from "react";

function Contacto() {
  const [enviado, setEnviado] = useState(false);

  const manejarEnvio = (event) => {
    event.preventDefault();
    setEnviado(true);
  };

  return (
    <main className="contact-page">
      <section className="container py-5">
        <div className="text-center mb-5">
          <h1 className="text-danger fw-bold">Contacto</h1>
          <p className="text-light">
            Si tenés información, consultas o querés comunicarte con el equipo
            de Investigaciones Complejas, completá el siguiente formulario.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-7">
            <div className="contact-card">
              <h2 className="text-white mb-4">Enviar mensaje</h2>

              <form onSubmit={manejarEnvio}>
                <div className="mb-3">
                  <label className="form-label">Nombre completo</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Ingresá tu nombre"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="ejemplo@email.com"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Asunto</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Motivo del contacto"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Mensaje</label>
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Escribí tu mensaje..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-danger w-100">
                  Enviar información
                </button>

                {enviado && (
                  <div className="contact-alert mt-4" role="status">
                    Mensaje recibido. El equipo revisará la información y se
                    comunicará si necesita más datos.
                  </div>
                )}
              </form>
            </div>
          </div>

          <div className="col-md-5">
            <div className="contact-card h-100">
              <h2 className="text-white mb-4">Información</h2>

              <p className="text-secondary">
                <strong className="text-danger">Correo:</strong>{" "}
                dalequedale@investigaciones.com
              </p>

              <p className="text-secondary">
                <strong className="text-danger">Ubicación:</strong> Córdoba,
                Argentina
              </p>

              <p className="text-secondary">
                <strong className="text-danger">Horario:</strong> Lunes a
                viernes de 09:00 a 18:00 hs.
              </p>

              <p className="text-secondary">
                <strong className="text-danger">Confidencialidad:</strong> Toda
                la información recibida será tratada con absoluta reserva.
              </p>

              <div className="contact-alert mt-4">
                Podés escribir con tranquilidad: los datos enviados se tratan de
                forma reservada.
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Contacto;
