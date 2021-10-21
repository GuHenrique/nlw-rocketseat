import styles from './styles.module.scss'
import {VscGithubInverted} from 'react-icons/vsc'
import { useEffect } from 'react'
import { api } from '../../services/api'

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export function LoginBox(){

  const singInUrl = `https://github.com/login/oauth/authorize?socpe=user&client_id=e36cd618d141dd7f0454`

  async function signIn(githubCode:string){
    const response = await api.post<AuthResponse>('authenticate', {
      code: githubCode
    })

    const {token, user} = response.data;

    localStorage.setItem('@dowhile:token', token)

  }

  useEffect(() => {
    
    const url = window.location.href;
    const hasGithubCode = url.includes('?code=');

    if(hasGithubCode){
      const [urlWithoutCode, githubCode] = url.split('?code=')
      window.history.pushState({}, '', urlWithoutCode)
      signIn(githubCode)
    }

  },[])
  return (
   <div className={styles.loginBoxWrapper}>
     <strong>Entre e compartilhe sua mensagem</strong>
     <a href={singInUrl} className={styles.signWithGithubButton}>
       <VscGithubInverted size="24" />
       Entrar com Github
     </a>
   </div>
  )
}