import './index.css'

const Tab = props => {
  const {tabdetails, onClickTabItem, isActive} = props

  const {displayText, tabId} = tabdetails

  const className = isActive ? 'active-class' : 'displayText'

  const onClickItem = () => {
    onClickTabItem(tabId)
  }
  return (
    <li className="tab-container-item">
      <button type="button" className="tab-button" onClick={onClickItem}>
        <p className={className}>{displayText}</p>
      </button>
    </li>
  )
}

export default Tab
