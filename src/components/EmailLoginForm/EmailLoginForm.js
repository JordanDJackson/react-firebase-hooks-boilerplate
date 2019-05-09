import React, { useState } from "react"
import { auth } from "../../firebase"
import { Link } from "react-router-dom"
import * as ROUTES from '../../constants/routes'
//ToDo: convert to real form
export const EmailLoginForm = () => {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")

  const login = () => auth.signInWithEmailAndPassword(email, pass)

  return (
    <div>
      <input value={email} onChange={e => setEmail(e.target.value)} />
      <input
        type="password"
        value={pass}
        onChange={e => setPass(e.target.value)}
      />
      <button onClick={login}>Log in</button>
      <Link to={ROUTES.FORGOT_PASSWORD}>Forgot Password</Link>
    </div>
  )
}
