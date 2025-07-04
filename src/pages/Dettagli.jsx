import { useState } from "react";
import { useParams } from "react-router-dom"
import persone from "../data/persone.js"
import viaggiInItalia from "../data/DataViaggi.js"


const Dettagli = () => {

  const { id } = useParams()
  console.log(id)

  console.log(viaggiInItalia)
  const viaggio = viaggiInItalia.find((curViaggio) => curViaggio.id === Number(id))

  const [partecipanti, setPartecipanti] = useState(persone)
  const [search, setSearch] = useState("")


  const handleSubmit = (event) => {
    event.preventDefault()
    findPartecipanti();


  };


  const findPartecipanti = () => {

    if (search.length > 0) {

      const searched = persone.filter((curPart) => curPart.nome.toLowerCase().includes(search.toLowerCase()) || curPart.cognome.toLowerCase().includes(search.toLowerCase()))
      setPartecipanti(searched)
      // setPartecipanti([...searched])
    } else {
      setPartecipanti(persone)
    }
  }



  return (
    <main>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-auto">
            <div className="circle-window m-4">
              <img className="circle-image" src={viaggio.image} alt={viaggio.destinazione} />
            </div>
          </div>
          <div className="col">
            <h1 className="text-center">Viaggio a {viaggio.destinazione}</h1>
            <div className="card">
              <div className="card-header">
                <h2>Dettagli Viaggio</h2>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{viaggio.durata}</li>
                <li className="list-group-item">{viaggio.attrazioni.join(", ")}</li>
                <li className="list-group-item">{viaggio.itinerario}</li>
                <li className="list-group-item">Partecipanti: {persone.length}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <form className="mb-4 d-flex justify-content-center" onSubmit={handleSubmit}>
        <input
          className="form-control w-50"
          type="search"
          placeholder="Cerca Partecipante"
          aria-label="Cerca Partecipante"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button className="btn btn-primary" type="submit">CERCA</button>
      </form>
      <div className="accordion accordion-flush" id="accordionFlushExample">
        {partecipanti.map((curPersone) => {
          const collapseId = `flush-collapse-${curPersone.id}`;
          const headingId = `flush-heading-${curPersone.id}`;

          return (
            <div className="accordion-item" key={curPersone.id}>
              <h2 className="accordion-header" id={headingId}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#${collapseId}`}
                  aria-expanded="false"
                  aria-controls={collapseId}
                >
                  {curPersone.nome} {curPersone.cognome}  {curPersone.telefono}
                </button>
              </h2>
              <div
                id={collapseId}
                className="accordion-collapse collapse"
                aria-labelledby={headingId}
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  <p><strong>Nome:</strong> {curPersone.nome}</p>
                  <p><strong>Cognome:</strong> {curPersone.cognome}</p>
                  <p><strong>Codice fiscale:</strong> {curPersone.codiceFiscale}</p>
                  <p><strong>Telefono:</strong> <a href={`tel:${curPersone.telefono}`}>
                    Chiama {curPersone.telefono}</a></p>
                  <p><strong>Email:</strong> {curPersone.email}</p>
                  <p><strong>Contatto di emergenza:</strong> {curPersone.emergenza}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </main>

  )

}

export default Dettagli;