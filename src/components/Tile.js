export default function Tile({color}) {

// logic - 9 colours in an array. assign each array item randomly as a value to a square, remove from array as assigned. 
// onClick logic reports colour of the clicked square to a handleGame function. HandleGame adds it to an array, and looks if it has previously been added to array.      
    return (
    <div className="tile" style={{backgroundColor: color}}></div>
    )
}