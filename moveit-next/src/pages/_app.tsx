import '../styles/global.css'

import { UserProvider } from '../contexts/UserContext'
import { GetServerSideProps } from 'next'

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider
      username={pageProps.username}
      name={pageProps.name}
      avatar={pageProps.avatar}
    >
      <Component {...pageProps} />
    </UserProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { username, name, avatar } = ctx.req.cookies
  return {
    props: {
      username: String(username),
      name: String(name),
      avatar: String(avatar),
    },
  }
}
