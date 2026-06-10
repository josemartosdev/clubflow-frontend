import { CLUB } from "../../config/club";

const objetivos = [
  "Fomentar la participación de escolares en actividades deportivas regladas.",
  "Facilitar la práctica del fútbol a cualquier persona del municipio.",
  "Perfeccionar el desarrollo físico, técnico y táctico de los jugadores.",
  "Reforzar la convivencia a través del deporte de equipo.",
  "Llenar nuestros eventos de público y convertir el fútbol en espectáculo.",
  "Consolidar una estructura de club sólida para seguir creciendo.",
  "Participar activamente en la vida deportiva y social de la localidad.",
  "Promocionar al club en todas las actividades y competiciones.",
];

export default function Cronologia() {
  return (
    <section className="historia-module-pro">
      <div className="historia-module-pro__header">
        <p className="module__eyebrow">Actualidad</p>
        <h2>{CLUB.name} en la actualidad</h2>
      </div>

      <div className="historia-section historia-section--glass historia-section--full">
        <p>
          El club vive una etapa de plena madurez deportiva y social. Sus actividades ya forman
          parte del calendario habitual del municipio, con gradas llenas, ambiente familiar y una masa
          social que convierte cada jornada en una cita reconocible.
        </p>
        <p>
          El Torneo de Verano Ciudad se ha consolidado como un gran escaparate del club,
          reuniendo a cientos de jugadores y a miles de visitantes en días de convivencia,
          deporte y proyección para la localidad.
        </p>
        <p>
          La actividad no se detiene durante el verano, cuando los campus de fútbol mantienen vivo
          el proyecto. A ello se suma un cuerpo técnico en continua formación, con reciclaje
          permanente y nuevos entrenadores que nacen desde la propia cantera del club.
        </p>
        <p>
          El club mantiene su apuesta por la formación integral: no solo se busca el resultado
          deportivo, sino también valores, educación y un vínculo duradero con las familias.
        </p>
      </div>

      <div className="historia-objectives-pro">
        <h3>Objetivos institucionales</h3>
        <ul className="historia-objectives-pro__list">
          {objetivos.map((obj) => (
            <li key={obj}>{obj}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
