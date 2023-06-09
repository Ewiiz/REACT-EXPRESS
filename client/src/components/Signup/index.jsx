import React, { useState } from 'react'
import '../../style/connexion.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {

    const [email, setEmail] = useState("")
    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [pseudo, setPseudo] = useState("")
    const [password, setPassword] = useState("")




    const handleSubmit = () => {
        async function Submit() {
            const { data } = await axios.post('http://localhost:4000/api/signup', {
                email,
                nom,
                prenom,
                pseudo,
                password
            })
        }

        Submit()
    }

    return (
        <section>
            <div className="signin">

                <div className="content">

                    <h2>S'incrire</h2>

                    <div className="form">

                        <div className="inputBx">

                            <input type="text" required onChange={(e) => { setEmail(e.target.value) }} />

                            <i>Nom d'utilisateur</i>

                        </div>

                        <div className="inputBx">

                            <input type="text" required onChange={(e) => { setNom(e.target.value) }} />

                            <i>Nom</i>

                        </div>

                        <div className="inputBx">

                            <input type="text" required onChange={(e) => { setPrenom(e.target.value) }} />

                            <i>Prenom</i>

                        </div>

                        <div className="inputBx">

                            <input type="text" required onChange={(e) => { setPseudo(e.target.value) }} />

                            <i>Pseudo</i>

                        </div>

                        <div className="inputBx">

                            <input type="password" required onChange={(e) => { setPassword(e.target.value) }} />

                            <i>Mot de Passe</i>

                        </div>

                        {/* <div className="inputBx">

                        <input type="password" required/>

                        <i>Confirme Mot de Passe</i>

                    </div> */}

                        <div className="links">

                            <a href='r'>Mot de passe oublié</a>
                            <Link to="login">Connexion</Link>

                        </div>

                        <div className="inputBx">

                            <Link onClick={handleSubmit} to={'login'}>Connexion</Link>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    )
}

export default Signup