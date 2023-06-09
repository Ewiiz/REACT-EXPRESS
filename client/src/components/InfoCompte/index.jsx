import React, { useEffect, useState } from 'react'
import '../../style/infocompte.css'
import axios from 'axios';
import { Link, useSearchParams } from 'react-router-dom';

function InfoCompte() {

    const [state, setState] = useState("")
    const [searchParams] = useSearchParams()
    const id = searchParams.get('id')

    useEffect(() => {
        async function Data() {
            const { data } = await axios.get(`http://localhost:4000/api/${id}`);
            setState(data.oneUser)
        }

        Data()
    }, [])

    const handleDelete = () => {

        async function Data() {
            const { data } = await axios.delete(`http://localhost:4000/api/${id}`);
            setState(data.message)
        }

        Data()
    }



    return (
        <div className='container-compte'>

            <div className='container-contenu'>

                <h1>{state.pseudo}</h1>
                <h3>mail : {state.email}</h3>
                <h3>Prénom : {state.prenom}</h3>
                <h3>Nom : {state.nom}</h3>
                <h3>description : {state.decription}</h3>

                <Link onClick={handleDelete} to={"/"}>delete</Link>

            </div>

        </div>
    )
}

export default InfoCompte