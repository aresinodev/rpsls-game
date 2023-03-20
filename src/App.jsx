import { useState } from 'react'
import { useEffect } from 'react'

import confetti from 'canvas-confetti'

import './App.css'

import Counters from './components/Counters'
import { WinnerModal } from './components/WinnerModal'
import { ELEMENTS } from './utils/constants'

function App() {
  const [player, setPlayer] = useState(null)
  const [playerCounter, setPlayerCounter] = useState(0)
  const [computer, setComputer] = useState(null)
  const [computerCounter, setComputerCounter] = useState(0)
  const [winner, setWinner] = useState(null)
  const [win, setWin] = useState(false)


  useEffect(() => {
    let generateComputer;

    if (player) {
      generateComputer = setTimeout(() => {
        const index = Math.round(Math.random() * 5)
        const newComputer = ELEMENTS.find(element => element.id === index)
        setComputer(newComputer)

        getWinner(newComputer)
      }, 2000)
    }

    return () => clearTimeout(generateComputer)
  }, [player])

  const selectPlayer = (element) => {
    setPlayer(element)
  }

  const newGame = () => {
    setPlayer(null)
    setComputer(null)
    setWinner(null)
    setWin(false)
  }

  const resetGame = () => {
    setPlayer(null)
    setComputer(null)
    setPlayerCounter(0)
    setComputerCounter(0)
    setWinner(null)
    setWin(false)
  }

  const getWinner = (computerValue) => {
    if (player.id !== computerValue?.id) {
      const playerWinner = player.win.includes(computerValue?.id)
      setWin(true)

      if (playerWinner) {
        setPlayerCounter(prev => prev + 1)
        setWinner('Player')
      } else {
        setComputerCounter(prev => prev + 1)
        setWinner('Computer')
      }

      confetti()

    } else {
      setWin(false)
    }
  }

  return (
    <main>
      <h1>RPLS game</h1>
      <Counters player={playerCounter} computer={computerCounter} />

      {
        (player || computer) && (
          <section className={`selected-options ${player ? 'a-flip-top' : ''}`}>
            <div className='player-option'>
              {player && <img className='a-jello-vertical' src={player.icon} alt={player.name} style={{ width: '10rem' }} />}
            </div>

            <div className='computer-option'>
              {computer && <img className='a-jello-vertical' src={computer.icon} alt={computer.name} style={{ width: '10rem' }} />}
            </div>
          </section>
        )
      }

      <ul className={`options ${ player ? 'disabled' : '' }`}>
        {
          ELEMENTS.map(element => {
            return <li className='option' key={element.id} onClick={() => selectPlayer(element)}>
              <img src={element.icon} alt={element.name} />
            </li>
          })
        }
      </ul>

      <WinnerModal win={win} winner={winner} resetGame={resetGame} newGame={newGame} />
    </main>
  )
}

export default App
