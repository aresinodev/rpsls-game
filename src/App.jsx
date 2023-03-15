import { useState } from 'react'

import './App.css'

import lizardIcon from './assets/images/lizard.svg'
import rockIcon from './assets/images/rock.svg'
import spockIcon from './assets/images/spock.svg'
import scissorsIcon from './assets/images/scissors.svg'
import paperIcon from './assets/images/paper.svg'

import Counters from './components/Counters'
import { useEffect } from 'react'

const ELEMENTS = [
  { id: 0, name: 'Rock', icon: rockIcon, win: [2, 3] },
  { id: 1, name: 'Lizard', icon: lizardIcon, win: [5, 3] },
  { id: 2, name: 'Spock', icon: spockIcon, win: [4, 1] },
  { id: 3, name: 'Scissors', icon: scissorsIcon, win: [5, 2] },
  { id: 4, name: 'Paper', icon: paperIcon, win: [1, 3] }
]

function App() {
  const [player, setPlayer] = useState(null)
  const [playerCounter, setPlayerCounter] = useState(0)
  const [computer, setComputer] = useState(null)
  const [computerCounter, setComputerCounter] = useState(0)
  const [winner, setWinner] = useState(false)


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
    setWinner(false)
  }

  const resetGame = () => {
    setPlayer(null)
    setComputer(null)
    setPlayerCounter(0)
    setComputerCounter(0)
    setWinner(false)
  }

  const getWinner = (computerValue) => {
    console.log(player)
    console.log(computerValue)

    if (player.id !== computerValue?.id) {
      const playerWinner = player.win.includes(computerValue?.id)
      // TODO: De alguna forma mostramos el ganador

      if (playerWinner) {
        setPlayerCounter(prev => prev + 1)
      } else {
        setComputerCounter(prev => prev + 1)
      }

      setWinner(true)
    } else {
      // TODO: Empate
      console.log('EMPATE')
    }
  }

  return (
    <main>
      <h1>RPLS game</h1>
      <Counters player={playerCounter} computer={computerCounter} />

      <section className='selected-options'>
        <div className='player-option'>
          {player && <img src={player.icon} alt={player.name} style={{ width: '10rem' }} />}
        </div>

        <div className='computer-option'>
          {computer && <img src={computer.icon} alt={computer.name} style={{ width: '10rem' }} />}
        </div>
      </section>

      <ul className='options'>
        {
          ELEMENTS.map(element => {
            return <li className='option' key={element.id} onClick={() => selectPlayer(element)}>
              <img src={element.icon} alt={element.name} />
            </li>
          })
        }
      </ul>

      <footer>
        <button onClick={newGame}>Nueva partida</button>
        <button onClick={resetGame}>Reiniciar</button>
      </footer>
    </main>
  )
}

export default App
