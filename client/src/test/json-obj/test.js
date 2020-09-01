const fs = require('fs');
const path = require('path')
const chordStringList = ['C','C#','Db','D','D#','Eb','E','F','F#','Gb','G','G#','Ab','A','A#','Bb','B']
//TODO: исправить -flat- -sharp-
const chordStringListUrl = chordStringList.map(chord => {
    switch (chord[1]) {
        case '#':
            return `${chord[0].toLowerCase()}-sharp-`
        case 'b':
            return `${chord[0].toLowerCase()}-flat-`
        default:
            return `${chord[0].toLowerCase()}`
    }
})

const postfixes = ['',
    'm', '7', 'm7', 'maj7', 'mM7', '6', 'm6', '6/9', '5', '9', 'm9', 'maj9',
    '11', 'm11', '13', 'm13', 'maj13', 'add', '7-5', '7+5', 'sus', 'dim',
    'dim7', 'm7b5', 'aug', 'aug7'
]

const postfixToTitle = item => {
    switch (item) {
        case '':
            return ' major'
        case 'm':
            return ' minor'
        case 'm6':
        case 'm7':
        case 'm9':
        case 'm11':
        case 'm13':
            return ` minor ${item.slice(1)}th`
        case 'maj7':
        case 'maj9':
        case 'maj13':
            return ` major ${item[3]}th`
        case 'mM7':
            return ' minor major 7th'
        case '5':
        case '9':
        case '6':
        case '11':
        case '13':
            return ` ${item}th`
        case '6/9':
        case 'add':
        case 'sus':
        case 'dim':
        case 'dim7':
        case 'aug':
        case 'aug7':
            return ` ${item}`
        case '7-5':
        case '7+5':
            return `${item} altered`
        case 'm7b5':
            return `m7(b5)`

    }
}

const titleFromArr = ([chord, postfix]) => {
    const title = `${chord}${postfixToTitle(postfix)} chord`
}


const getChordString = chord => {
    if (chord) {
        switch (chord[1]) {
            case '#':
                return `${chord[0].toLowerCase()}-sharp`
            case 'b':
                return `${chord[0].toLowerCase()}-flat`
            default:
                return `${chord[0].toLowerCase()}`
        }
    }
}

const getSubChordString = item => {
    if (item) {
        let [chord, postfix] = item
        chord = getChordString(chord)
        if (postfix[1] === '/') {
            postfix = postfix[0] + '-' + postfix[2]
        }
        return chord + '-' + postfix
    }
}

const getSubChordString2 = postfix => {
    if (postfix[1] === '/') {
        postfix = postfix[0] + '-' + postfix[2]
    }
    return postfix
}



const data = {}

const postfixesUrl = postfixes.map(item => getSubChordString2(item))

const test2 = chordStringListUrl.map((chord, chordIndex) => {
    //data[chord] = {url: chord}
    postfixesUrl.map((postfix, postfixIndex) => {
        if (chord.length-1) {
            const newChord = chord.slice(0,-1)
            data[`${newChord}-${getSubChordString2(postfix)}`] = {
                url: `${newChord}-${getSubChordString2(postfix)}`,
                shortName: `${chordStringList[chordIndex]}${postfix}`,
                arr: [chordStringList[chordIndex],postfix],
                title: `${chordStringList[chordIndex]}${postfixToTitle(postfix)} chord`
            }

        } else {
            data[`${chord}${getSubChordString2(postfix)}`] = {
                url: `${chord}${getSubChordString2(postfix)}`,
                shortName: `${chordStringList[chordIndex]}${postfix}`,
                arr: [chordStringList[chordIndex],postfix],
                title: `${chordStringList[chordIndex]}${postfixToTitle(postfix)} chord`
            }
        }
    })
})


console.log(data)

fs.writeFile(path.resolve(__dirname, "tmp/test.json"), JSON.stringify(data), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

