const dias = [
    { dia: "15", titulo: "Partido de Liga", tipo: "Competicion" },
    { dia: "16", titulo: "Entrenamiento Bases", tipo: "Entrenamiento" },
    { dia: "22", titulo: "Partido de Liga", tipo: "Competicion" },
    { dia: "25", titulo: "Fisioterapia y Recuperación", tipo: "Salud" },
  ];
  
  export default function AgendaMes() {
    return (
      <section className="module w-full">
        <div className="module__header" style={{ marginBottom: "20px" }}>
          <h2>Agenda de Mayo</h2>
        </div>
        <div className="agenda-grid">
          {dias.map((d, i) => (
            <div key={i} className="agenda-dia">
              <div className="agenda-fecha-numero">{d.dia}</div>
              <div className="agenda-info">
                <h3>{d.titulo}</h3>
                <span className={`agenda-tipo tipo-${d.tipo.toLowerCase()}`}>{d.tipo}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
