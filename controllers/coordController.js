//const db = '../lib/prisma';
import { prisma } from "../lib/prisma.js"

async function getCoordHome(req, res) {
    //test home server page
    res.send("Coord Home Page")
}

async function coordOne(req, res) {
    const character = await prisma.character.findMany({
        where: {
            name: "top"
        }
    }) 

    res.send(character)
}

async function coordTwo(req, res) {
    const character = await prisma.character.findMany({
        where: {
            name: "middle"
        }
    }) 

    res.send(character)
}

async function coordThree(req, res) {
    const character = await prisma.character.findMany({
        where: {
            name: "bottom"
        }
    }) 

    res.send(character)
}

async function getCoordMatchOne(req, res) {
    //matches the id parameter here
    let { id } = req.params
    id = parseInt(id)

    const { one, two } = req.query //returns the query params in fetch query
    console.log(one, "client")
    console.log(two, "client")
    console.log("It works on One")

    const character = await prisma.character.findMany({
        where: {
            name: "top"
        }
    }) 
    
    //res.send(character)
    console.log(character[0].x, "server")
    console.log(character[0].y, "server")
    
    if (Math.abs(one - character[0].x <= 125 && two - character[0].y <= 75)) {
        const updateIsFalse = await prisma.character.update({
            where: {
                id: 1,
                name: "top"
            },
            data: { isFound: true},
        });
        
        console.log("Found ", updateIsFalse)
        res.send(updateIsFalse)
    } else {
        console.log("bad pick")
    }
}

async function getCoordMatchTwo(req, res) {
    let { id } = req.params
    id = parseInt(id)
    console.log(id, " id")

    const { one, two } = req.query //returns the query params in fetch query


    console.log(one, "client")
    console.log(two, "client")
    console.log("It works on two")
    
    const character = await prisma.character.findMany({
        where: {
            name: "middle"
        }
    }) 
    
    console.log(character[0].x, "server")
    console.log(character[0].y, "server")
    
    if (Math.abs(one - character[0].x <= 125 && two - character[0].y <= 75)) {
        const updateIsFalse = await prisma.character.update({
            where: {
                id: 2,
                name: "middle"
            },
            data: { isFound: true},
        });
        
        console.log("Found ", updateIsFalse)
        res.send(updateIsFalse)
    } else {
        console.log("bad pick")
    }
}

async function getCoordMatchThree(req, res) {
    let { id } = req.params
    id = parseInt(id)

    const { one, two } = req.query //returns the query params in fetch query


    console.log(one, "client")
    console.log(two, "client")
    console.log("It works on three")
    
    const character = await prisma.character.findMany({
        where: {
            name: "bottom"
        }
    }) 
    
    
    if (Math.abs(one - character[0].x <= 125 && two - character[0].y <= 75)) {
        const updateIsFalse = await prisma.character.update({
            where: {
                id: 3,
                name: "bottom"
            },
            data: { isFound: true},
        });

        console.log(character[0].x, "server")
        console.log(character[0].y, "server")
        
        console.log("Found ", updateIsFalse)
        res.send(updateIsFalse)
    } else {
        console.log("bad pick")
    }
}

const requiredNames = ['bottom', 'middle', 'top'];
//checks if all is equal to true
async function getAll(req, res){
    const allTrue = await prisma.character.findMany({
        where: {
            name: {
                in: requiredNames,
            },
            isFound: true,
            },
            select: {
                name: true,
            }
        })
         res.send(allTrue.length === requiredNames.length)
    }

    //works turn them all back to false when I hit the url right
async function resetData(req, res) {
    if(req.method === 'GET' ) {
        try {
            //update all isFound to false
            const updateFound = await prisma.character.updateMany({
                where: { isFound: true },
                data: { isFound: false },
            });
            res.status(200).json(updateFound);
        } catch (error) {
            res.status(500).json({ error: 'Database is not updated'})
        }
    }
}


 
export { 
    getCoordHome,
    coordOne,
    coordTwo,
    coordThree,
    getCoordMatchOne,
    getCoordMatchTwo,
    getCoordMatchThree,
    getAll,
    resetData,
}
