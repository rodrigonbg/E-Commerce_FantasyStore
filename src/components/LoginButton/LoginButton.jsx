import "./LoginButton.scss"

const LoginButton = (props) => {
  return (
    <button  className={props.className} type="button">LOGIN</button>
    /* paso las calses por argumentos dependiendo del lugar donde se use. */
  )
}

export default LoginButton