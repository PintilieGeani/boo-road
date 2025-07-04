import { useState } from "react";

const FilterBar = ({persone}) =>{

    const [partecipanti, setPartecipanti] = useState([persone])
    const [search, setSearch] = useState("")


    const handleSubmit = (event) => {
        event.preventDefault()
        findPartecipanti();
        

    };


     const findPartecipanti = () =>{

        if(search.length >0){
            
            const searched = partecipanti.filter((curPart) => curPart.nome == search || curPart.cognome == search  )
            
            setPartecipanti([...searched])
        }
     }


    return (

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

    )
    

}


export default FilterBar ;



