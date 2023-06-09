import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [id, setId] = useState()
    const navigate = useNavigate()

    const handleSubmit = () => {
        async function Submit() {
            const { data } = await axios.post('http://localhost:4000/api/login', {
                email,
                password
            })
            setId(data.userId)

            console.log(data.userId)
            console.log(id)
        }


        Submit()

        id && navigate(`/profile/compte?id=${id}`)
    }



    return (
        <>
            <section>
                <div className="signin">

                    <div className="content">

                        <h2>S'identifier</h2>

                        <div className="form">

                            <div className="inputBx">

                                <input type="text" required onChange={(e) => { setEmail(e.target.value) }} />

                                <i>Nom d'utilisateur</i>

                            </div>

                            <div className="inputBx">

                                <input type="password" required onChange={(e) => { setPassword(e.target.value) }} />

                                <i>Mot de Passe</i>

                            </div>

                            <div className="links">

                                {/* <Link to={}>Mot de passe oublié</Link> */}
                                <Link to="/">S'incrire</Link>

                            </div>

                            <div className="inputBx">

                                <Link onClick={handleSubmit} >Connexion</Link>

                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </>
    )
}

export default Login