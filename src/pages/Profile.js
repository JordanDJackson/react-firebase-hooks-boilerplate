import React from 'react'
import { useAuthState } from "react-firebase-hooks/auth"
import {auth} from '../firebase'
import AuthGuard from '../components/AuthGuard'

const Profile = () => {
  const { initialising, user } = useAuthState(auth)

  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}

export default Profile