const hikaru = "https://upload.wikimedia.org/wikipedia/commons/7/73/Nakamura_Hikaru_%2829290269410%29_%28cropped%29.jpg"
const magnus = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Magnus_Carlsen_in_2023.jpg/1200px-Magnus_Carlsen_in_2023.jpg"
const fabi = "https://upload.wikimedia.org/wikipedia/commons/6/67/Fabiano_Caruana_2%2C_Candidates_Tournament_2018.jpg"
const placeholder = "https://github.com/DK-Kim4312/images/blob/main/placeholder%20chess.png?raw=true"

export default function getImage(username) {
    if (username==="MagnusCarlsen") return magnus
    if (username==="Hikaru") return hikaru
    else return placeholder
}
