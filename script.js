document.addEventListener('click', fn, true)

class Queue {
    constructor () {
        this.elements = []
    }

    enqueue(item) {
        this.elements.push(item)
    }

    dequeue() {
        return this.elements.shift()
    }

    isEmpty() {
        return this.elements.length === 0
    }

    peek() {
        return !this.isEmpty() ? this.elements[0] : undefined
    }

    get(){
        return this.elements
    }
}

const clicks = new Queue()
const notesPositions = [0, 2, 3, 4, 6, 10, 12] // posição de cada nota nas estrofes (iniciando de zero)
const totalNotes = 16 // duas estrofes 4/4 em colcheia = 16 notas
const errorMarginMs = 50 // margem de erro em millisegundos


function fn() {
    let click = new Date().getTime()
    updateClicks(click)

    if (isShaveAndHaircut(clicks)) {
        alert('Shave and Haircut')
    } 

    console.log('click')
}

function updateClicks(click) {
    const notes = clicks.elements

    if (notes.length < 7) {
       clicks.enqueue(click)
    } else {
        clicks.dequeue()
        clicks.enqueue(click)
    }
}

function isShaveAndHaircut() {
    const notes = clicks.elements
    const firstNote = notes[0]
    const notesDistanceTime = getNotesDistanceTime()

    // caso ainda não haja cliques suficientes
    if (notes.length !== notesPositions.length) {
        return false
    }

    // verificando se cada nota está dentro do tempo, considerando a margem de erro
    for (let i = 0; i < notes.length; i++) {
        const isInTime = checkNoteTime(notes[i], notesPositions[i], firstNote, notesDistanceTime, errorMarginMs)
        if (!isInTime) return false
    }

    return true

}


// Tira a média dos intervalos entre cada nota, considerando suas posições nas estrofes
function getNotesDistanceTime() {
    totalDistances = 0
    for (let i = 1; i < notesPositions.length; i++) {
        totalDistances += (clicks.elements[i] - clicks.elements[0]) / (notesPositions[i])
    }
    return totalDistances / (notesPositions.length -1)
}

// Verifica se uma nota está dentro do tempo
function checkNoteTime(note, notePosition, firstNoteTime, distanceTime, errorMargin) {
    const expectedTime = firstNoteTime + (distanceTime * notePosition)
    return note >= expectedTime - errorMargin && note <= expectedTime + errorMargin
}