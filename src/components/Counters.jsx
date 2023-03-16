import './Counters.css'

function Counters({ player, computer }) {
  return (
    <section className='scoreboard'>
      <div className='scoreboard-title'>
        <span className='player'>Player</span>
        <span className='vs'>VS</span>
        <span className='computer'>Computer</span>
      </div>
      <div className='scoreboard-counters'>
        <span>{player}</span>
        <span>{computer}</span>
      </div>
    </section>
  )
}

export default Counters
