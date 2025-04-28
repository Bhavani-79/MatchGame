import './index.css'

const NavBar = props => {
  const {count, timerCount} = props
  return (
    <div className="container">
      <img
        className="logo"
        alt="website logo"
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
      />
      <li className="score-timer-container">
        <p className="score-para">
          Score: <span className="span">{count}</span>
        </p>
        <li className="timer-container">
          <img
            className="timer-image"
            alt="timer"
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
          />
          <p className="timer-para">{timerCount} sec</p>
        </li>
      </li>
    </div>
  )
}

export default NavBar
