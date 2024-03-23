const hikaru = "/hikaru-image.png"
const magnus = "/magnus-image.png"
const daniel = "/daniel-image.png"
const placeholder = "https://github.com/DK-Kim4312/images/blob/main/placeholder%20chess.png?raw=true"

export default function getImage(username) {
    if (username==="MagnusCarlsen") return magnus
    if (username==="Hikaru") return hikaru
    if (username==="DanielNaroditsky") return daniel
    else return placeholder
}
