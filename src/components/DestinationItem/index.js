// Write your code here
import './index.css'
const DestinationItem = props => {
  const {name, imgUrl} = props
  return (
    <div>
      <img src={imgUrl} alt={name} className="image" />
      <p className="heading">{name}</p>
    </div>
  )
}
export default DestinationItem
