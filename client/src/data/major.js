export default ['C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#','Ab','A','A#','Bb','B']

export const list2 = [
    {name: 'C', url: 'c-major'},
    {name: 'C#', url: 'c-sharp'},
    {name: 'Db', url: 'd-flat'},
    {name: 'D', url: 'd-major'},
    {name: 'D#', url: 'd-sharp'},
    {name: 'Eb', url: 'e-flat'},
    {name: 'E', url: 'e-major'},
    {name: 'F', url: 'f-major'},
    {name: 'F#', url: 'd-flat'},
]

export const postfixes = [
    'm', '7', 'm7', 'maj7', 'mM7', '6', 'm6', '6/9', '5', '9', 'm9', 'maj9',
    '11', 'm11', '13', 'm13', 'maj13', 'add', '7-5', '7+5', 'sus', 'dim',
    'dim7', 'm7b5', 'aug', 'aug7'
]

//TODO: возможно вынести в хук useChord и передавать больше инфы
export const getChordString = chord => {
    switch (chord[1]) {
        case '#':
            return `${chord[0].toLowerCase()}-sharp`
        case 'b':
            return `${chord[0].toLowerCase()}-flat`
        default:
            return `${chord[0].toLowerCase()}-major`
    }
}

export const getSubChordString = chord => {
    const stringChord = getChordString(chord)
    switch (chord[2]) {
        case '/':
            return chord[0] + chord[1] + '-' + chord[3]
    }
}
