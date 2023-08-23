import "./ListItem.scss"

const ListItem = (props) => {
  return (
    <li className="navbar_item" ><a id={props.id} href={props.href}>{props.text}</a></li>
  )
}

export default ListItem