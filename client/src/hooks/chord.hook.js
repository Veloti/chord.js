const postfixes = [
    'm', '7', 'm7', 'maj7', 'mM7', '6', 'm6', '6/9', '5', '9', 'm9', 'maj9',
    '11', 'm11', '13', 'm13', 'maj13', 'add', '7-5', '7+5', 'sus', 'dim',
    'dim7', 'm7b5', 'aug', 'aug7'
]

//TODO: функцию либо убрать, либо конст убрать, чтобы каждый раз не
// пересчитывало (оставить что-то одно)

export const useChord = chord => {
    const getChordString = chord => {
        if (chord) {
            switch (chord[1]) {
                case '#':
                    return `${chord[0].toLowerCase()}-sharp`
                case 'b':
                    return `${chord[0].toLowerCase()}-flat`
                default:
                    return `${chord[0].toLowerCase()}-major`
            }
        }
    }

    const chordString = getChordString(chord)
    const subChordStringList = postfixes.map(prefix => [chord, prefix])
    const getSubChordString = item => {
        if (item) {
            let [chord, prefix] = item
            chord = getChordString(chord)
            if (prefix[1] === '/') {
                prefix = prefix[0] + '-' + prefix[2]
            }
            return chord + '-' + prefix
        }
    }

    return {chord, chordString, getChordString, getSubChordString, postfixes, subChordStringList}
}
