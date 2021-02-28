import { useState, FormEvent, useContext } from 'react'
import { UserContext } from '../contexts/UserContext'

export function LoginForm() {
  const { login, avatar } = useContext(UserContext)
  const [username, setUsername] = useState('')

  const handleLogin = (event: FormEvent) => {
    event.preventDefault()
    login(username)
  }

  return (
    <form>
      <input
        placeholder="Login"
        type="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button type="submit" onClick={handleLogin}>
        <img src="icons/Vector.svg" alt="próximo" />
      </button>
    </form>
  )
}
