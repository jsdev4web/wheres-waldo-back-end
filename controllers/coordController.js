const db = '../lib/prisma';

async function getCoord(req, res) {
    res.send("Testing the route")
}

async function main() {
    const character = await db.character.findMany()
    res.send(character)
}


module.exports = {
    getCoord
}