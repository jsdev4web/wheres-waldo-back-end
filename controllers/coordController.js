//const db = '../lib/prisma';
import { prisma } from "../lib/prisma.js"

async function getCoordHome(req, res) {
    
    res.send("Coord Home Page")
}

async function getCoordMatch(req, res) {
    let { id } = req.params
    id = parseInt(id)
    const character = await prisma.character.findMany({
        where: {
            name: "top"
        }
    })
    
    res.send(character)
}

 
export { 
    getCoordHome, 
    getCoordMatch
}
