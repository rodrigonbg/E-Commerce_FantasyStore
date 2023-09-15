import './NewsletterForm.scss'

const NewsletterForm = () => {
  return (
    <form className="newsletterForm">
        <input type="email" name="email" id="email" placeholder=' Ejemplo@gmail.com'/>
        <button type="submit" value="Enviar">Enviar</button>
    </form>
  )
}

export default NewsletterForm