import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { partidosApi } from "../../api/partidosApi";

import { CLUB } from "../../config/club";

import { mapApiMatch, enrichMatch } from "../../data/matchDetail";



export default function Cartelera() {

  const [partido, setPartido] = useState(() =>

    enrichMatch({

      local: `${CLUB.shortName} FC`,

      visitante: "Rival",

      fecha: "Próximo partido",

      lugar: CLUB.stadium,

    }, 0),

  );



  useEffect(() => {

    partidosApi.stored()

      .then((data) => {

        const list = data.partidos ?? [];

        if (list.length > 0) {

          setPartido(mapApiMatch(list[0]) ?? enrichMatch(list[0], 0));

        }

      })

      .catch(() => {});

  }, []);



  return (

    <section className="cartelera-partido module">

      <div className="cartelera-content">

        <span className="cartelera-tag">Próximo partido</span>

        <h2 className="cartelera-title">{partido.local} vs {partido.visitante}</h2>

        <p className="cartelera-info">{partido.fecha} | {partido.lugar}</p>

        <div className="cartelera-actions">

          <Link to={`/partidos/${partido.id}`} className="btn-primary cartelera-btn">

            Ver ficha del partido

          </Link>

          <Link to="/en-directo" className="cartelera-btn cartelera-btn--ghost">

            Ver en directo

          </Link>

        </div>

      </div>

    </section>

  );

}

