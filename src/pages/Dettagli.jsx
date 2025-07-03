import { useParams } from "react-router-dom"
import persone from "../persone.js"
import viaggiInItalia from "../DataViaggi.js"

const Dettagli = () => {

    const { id } = useParams()
    console.log(id)

    console.log(viaggiInItalia)
    const viaggio = viaggiInItalia.find((curViaggio) => curViaggio.id === Number(id))



    return (
        <main>
            <div className="w-100" >
                <img className="banner" src={viaggio.image} alt={viaggio.destinazione} />
            </div>

            <h1>Vedo i dettagli del viaggio con id {id}</h1>

            <div className="accordion accordion-flush" id="accordionFlushExample">
                {persone.map((curPersone) => {
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
                                    {curPersone.nome} {curPersone.cognome}
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
                                    <p><strong>Telefono:</strong> {curPersone.telefono}</p>
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