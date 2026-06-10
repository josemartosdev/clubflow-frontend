const eventos = [
    { nombre: "Campus de Verano 2026", fechas: "Del 1 de Julio al 15 de Agosto", status: "Inscripciones Abiertas" },
    { nombre: "Torneo Benéfico Municipal", fechas: "Sábado 29 de Mayo", status: "Fase de Organización" },
  ];
  
  export default function EventosEspeciales() {
    return (
      <section className="module w-full">
        <div className="module__header" style={{ marginBottom: "20px", marginTop: "40px" }}>
          <h2>Torneos y Eventos</h2>
        </div>
        <div className="eventos-cards">
          {eventos.map((e, i) => (
            <div key={i} className="evento-card">
              <h3>{e.nombre}</h3>
              <p><strong>Fechas:</strong> {e.fechas}</p>
              <p><strong>Estado:</strong> {e.status}</p>
              <button className="btn-secondary" style={{marginTop: "15px"}}>Saber más</button>
            </div>
          ))}
        </div>
      </section>
    );
  }
