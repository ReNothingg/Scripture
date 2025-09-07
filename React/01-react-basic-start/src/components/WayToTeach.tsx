/*
function WayToTeach(props) {
{ props.description }
*/

export default function WayToTeach({title, description}) {
  // console.log(props)
  return (
    <li>
      <p>
        <strong>{title}</strong> <br/>
        {description}
      </p>
    </li>
  )
}