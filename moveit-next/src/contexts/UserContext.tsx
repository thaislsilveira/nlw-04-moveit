import {
  createContext,
  FormEvent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
import Cookies from 'js-cookie'
import axios from 'axios'

interface UserContextData {
  username: string
  isAuthenticated: boolean
  name?: string
  avatar?: string
  login?: (username: string) => Promise<void>
}

interface UserProviderProps {
  children: ReactNode
  username: string
  name: string
  avatar: string
}

export const UserContext = createContext({} as UserContextData)

export function UserProvider({ children, ...rest }: UserProviderProps) {
  const [isAuthenticated, setAuthenticated] = useState(false)
  const [username, setUsername] = useState(rest.username ?? '')
  const [name, setName] = useState(rest.name ?? '')
  const [avatar, setAvatar] = useState(rest.avatar ?? '')

  useEffect(() => {
    console.log(avatar)
  }, [])

  useEffect(() => {
    Cookies.set('username', String(username))
    Cookies.set('name', String(name))
    Cookies.set('avatar', String(avatar))
  }, [username, name, avatar])

  async function login(username: string) {
    const { data } = await axios.get(`https://api.github.com/users/${username}`)

    console.log(data)

    setAuthenticated(true)
    setUsername(data.login)
    setName(data.name)
    setAvatar(data.avatar_url)
  }

  return (
    <UserContext.Provider
      value={{
        username,
        isAuthenticated,
        name,
        avatar,
        login,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export function useUserContext() {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUserContext must be used within an AuthProvider')
  }
  return context
}

export function useIsAuthenticated() {
  const context = useUserContext()
  return context.isAuthenticated
}
