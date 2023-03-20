export function WinnerModal ({ win, winner, resetGame, newGame }) {
  if (winner === null) return null

  const winnerText = win === false ? 'Empate' : 'Ganó: '

  return (
    <section className='winner'>
      <div className='text'>
        <h2 style={{ margin: 0 }}>{winnerText}</h2>

        <header className='win'>
          {winner}
        </header>

        <footer>
          <button onClick={newGame}>Nueva partida</button>
          <button onClick={resetGame}>Reiniciar</button>
        </footer>
      </div>
    </section>
  )
}
