import lizardIcon from '../assets/images/lizard.svg'
import rockIcon from '../assets/images/rock.svg'
import spockIcon from '../assets/images/spock.svg'
import scissorsIcon from '../assets/images/scissors.svg'
import paperIcon from '../assets/images/paper.svg'

export const ELEMENTS = [
  { id: 0, name: 'Rock', icon: rockIcon, win: [1, 2] },
  { id: 1, name: 'Lizard', icon: lizardIcon, win: [4, 2] },
  { id: 2, name: 'Spock', icon: spockIcon, win: [3, 0] },
  { id: 3, name: 'Scissors', icon: scissorsIcon, win: [4, 1] },
  { id: 4, name: 'Paper', icon: paperIcon, win: [0, 2] }
]
