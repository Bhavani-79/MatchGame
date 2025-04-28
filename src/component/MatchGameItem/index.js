import './index.css'

const MatchGameItem = props => {
  const {imagedetails, onClickMatchGameItem} = props
  const {thumbnailUrl} = imagedetails

  const onClick = () => {
    onClickMatchGameItem(thumbnailUrl)
  }

  return (
    <li className="image-item-container">
      <button className="image-button" type="button" onClick={onClick}>
        <img src={thumbnailUrl} className="image" alt="thumbnail" />
      </button>
    </li>
  )
}

export default MatchGameItem
