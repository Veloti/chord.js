import React, {useEffect, useState} from "react";
import ReactCardFlip from "react-card-flip";

const chords = require('./json-obj/tmp/test.json')
const fs = require('fs')
const path = require('path')

console.log(chords.b.shortName)

const newObj = {}

for (let key in chords) {
    newObj[chords[key].shortName] = chords[key].url
}

console.log(newObj)

fs.writeFile(path.resolve(__dirname, "shortName-url.json"), JSON.stringify(newObj), function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});


// export const ChordPageSwap = ({ chord, title, index, setFocus, isFocused, getChordInfo}) => {
//     const [isFront, setIsFront] = useState(true)
//     // useEffect(() => {
//     //     useCallback(() => getChordInfo(chord), [chord])
//     // })
//     useEffect(() => {
//         getChordInfo(chord)
//     },[chord])
//     //useMemo(() => getChordInfo(chord), [chord])
//     return (
//         <Wrapper isFocused={isFocused}>
//             <div className='center-align'>
//
//                 {/*<div style={{display: 'inline-block'}}>
//                     <i className="medium material-icons">close</i>
//                 </div>
//                 <div onClick={() => setIsFront(!isFront)}>
//                     <a className="btn-flat disabled">Swap</a>
//                     <i className="medium material-icons">replay</i>
//                 </div>*/}
//                 <div>
//                     <i className="medium material-icons">close</i>
//                     <i className="medium material-icons" onClick={() => setIsFront(!isFront)}>replay</i>
//                 </div>
//                 <ReactCardFlip isFlipped={isFront} flipDirection="horizontal">
//                     <div
//                         className='center-align'
//                         onClick={event => {
//                             event.stopPropagation()
//                             setFocus(index)
//                         }
//                         }
//                     >
//                         <h1 className='center'>{chord}</h1>
//                         <h3>{title}</h3>
//                         <h2 className='center'>{'BACK'}</h2>
//
//                     </div>
//                     <div
//                         className='center-align'
//                         onClick={event => {
//                             event.stopPropagation()
//                             setFocus(index)
//                             console.log('from page: ', chord)
//                         }
//                         }
//                     >
//                         <h1 className='center'>{chord}</h1>
//                         <h3>{title}</h3>
//                         <h2 className='center'>{'FRONT'}</h2>
//                     </div>
//                 </ReactCardFlip>
//             </div>
//         </Wrapper>
//
//     )
// }


// export const ChordPageSwap = ({ chord, title, index, setFocus, isFocused, getChordInfo}) => {
//     const [isFront, setIsFront] = useState(true)
//     // useEffect(() => {
//     //     useCallback(() => getChordInfo(chord), [chord])
//     // })
//     useEffect(() => {
//         getChordInfo(chord)
//     },[chord])
//     //useMemo(() => getChordInfo(chord), [chord])
//     return (
//         <Wrapper isFocused={isFocused}>
//             <ReactCardFlip isFlipped={isFront} flipDirection="horizontal">
//                 <div
//                     className='center-align'
//                     onClick={event => {
//                         event.stopPropagation()
//                         setFocus(index)
//                     }
//                     }
//                 >
//                     <div onClick={() => setIsFront(!isFront)}>
//                         <a className="btn-flat disabled">Swap</a>
//                     </div>
//                     <h1 className='center'>{chord}</h1>
//                     <h3>{title}</h3>
//                     <h2 className='center'>{'BACK'}</h2>
//
//                 </div>
//                 <div
//                     className='center-align'
//                     onClick={event => {
//                         event.stopPropagation()
//                         setFocus(index)
//                         console.log('from page: ', chord)
//                     }
//                     }
//                 >
//                     <div onClick={() => setIsFront(!isFront)}>
//                         <a className="btn-flat disabled">Swap</a>
//                     </div>
//                     <h1 className='center'>{chord}</h1>
//                     <h3>{title}</h3>
//                     <h2 className='center'>{'FRONT'}</h2>
//                 </div>
//             </ReactCardFlip>
//         </Wrapper>
//
//     )
// }
