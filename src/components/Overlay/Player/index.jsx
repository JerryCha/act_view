import './index.less'
import cx from 'classnames'
import numeral from 'numeral'

export function Player(props) {
  const {
    job = null,
    damage = 0,
    heal = 0,
    maxHitName = '',
    maxHitValue = 0,
    maxHealName = '',
    maxHealValue = 0
  } = props
  return (
    <div className="player-wrapper">
      <div className="player-cell">
        <div className={cx(['job-indicator', job])} />
        <div className="player">
          <div className="name-cell">
            <span
              style={{
                width: 16,
                height: 16,
                // display: 'inline-block',
                backgroundColor: '#9ac8e2',
              }}
            />
            <span className="name">Hymn</span>
          </div>
          <div className="damage-cell">
            <span className="icon">D</span>
            <span className="damage">{numeral(damage).format('0.00')}</span>
          </div>
          <div className="heal-cell">
            <span className="icon">H</span>
            <span className="heal">{numeral(heal).format('0.00')}</span>
          </div>
        </div>
      </div>
      <div className="popup">
        <div>123</div>
        <div>456</div>
      </div>
    </div>
  )
}
