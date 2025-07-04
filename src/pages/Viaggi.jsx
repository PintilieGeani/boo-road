import { Link } from "react-router-dom";
import viaggiInItalia from "../data/DataViaggi.js";

const Viaggi = () => {
    return (
        <>
            <div className="container">
                <h1>I nostri viaggi</h1>
                <div className="row row-cols-1 row-cols-md-2 g-3">
                    {viaggiInItalia.map((curViaggio, id) => (
                        <div key={id} className="col">
                            <div className="card h-100">
                                <img src={curViaggio.image} className="card-img-top" width="100" height="250" alt={curViaggio.destinazione} />
                                <div className="card-body">
                                    <h5 className="card-title">{curViaggio.destinazione}</h5>
                                    <p className="card-text altezza-paragrafo" >{curViaggio.itinerario}.</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Durata: {curViaggio.durata}</li>
                                    <li className="list-group-item">Tipo di viaggio: {curViaggio.tipo}</li>
                                    <li className="list-group-item">Costo del pachetto: {curViaggio.costo}</li>
                                </ul>
                                <div className="card-body d-flex justify-content-center">
                                    <Link to={`/viaggi/${curViaggio.id}`} type="button" class="btn btn-primary w-100">Vedi dettagli del viaggio e partecipanti</Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Viaggi;






{/* <div className="card">
                            <img src="..." className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">An item</li>
                                <li className="list-group-item">A second item</li>
                                <li className="list-group-item">A third item</li>
                            </ul>
                        </div> */}