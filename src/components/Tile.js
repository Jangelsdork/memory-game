import { shuffle } from 'lodash'

export default function Tile({color, tileColor, setColor}) {

// logic - 9 colours in an array. assign each array item randomly as a value to a square, remove from array as assigned. 
// onClick logic reports colour of the clicked square to a handleGame function. HandleGame adds it to an array, and looks if it has previously been added to array.      



//Shuffle colors
function shuffleColors(){
let newColors = shuffle(color.slice())
console.log(newColors)
setColor(newColors)
}


return (
    <div 
    className="tile" 
    style={{backgroundColor: tileColor}}
    onClick={() => shuffleColors()}
    ></div>
    )
}