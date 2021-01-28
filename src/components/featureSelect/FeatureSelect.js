import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { responseData } from '../../globalState'
import './featureSelect.css'
import noPoster from '../../images/no_poster.png'
import Show from '../show/Show'
import { searchName, image, displayName, knownFor, actorId, actorImages, actorBio, actorFilmography, notActor} from '../../globalState.js'


function FeatureSelect () {
    const [useResponseData] = useRecoilState(responseData)
    const [useActorId, setuseActorId] = useRecoilState(actorId)
    const [useNotActor, setuseNotActor] = useRecoilState(notActor)

    const QueryCards = () => {
        let dataList = useResponseData.d
        let queryList = []
        for(let query = 0; query < dataList.length; query++){
            let poster
            if(dataList[query].i){
                poster = dataList[query].i.imageUrl
            } else {
                poster = noPoster
            }
            if(dataList[query].s){
                let title = dataList[query].l
                let year = dataList[query].y
                let starring1 = dataList[query].s.split(',')[0]
                let starring2 = dataList[query].s.split(',')[1]
                let id = dataList[query].id
            queryList.push(
                <div className='queryItem'>
                    <img key={ id } alt='search image' className='poster' src={ poster } id={ id }/>
                    <div className='resultsInfo'>
                        <h2 className='title2' key={ title }>{ title }</h2>
                        <h2 className='year' key={ year }>{ year }</h2>
                        <h2 className='starring' key={ query }>STARRING</h2>
                        <h2 className='starring1' key={ starring1 }>{ starring1 }</h2>
                        <h2 className='starring2' key={ starring2 }>{ starring2 }</h2>
                    </div>
                </div>
            )
            } else {
                let title = dataList[query].l
                let year = dataList[query].y
                let id = dataList[query].id
                queryList.push(
                    <div className='queryItem'>
                        <img key={ id } alt='search image' className='poster' src={ poster } />
                        <div className='resultsInfo'>
                            <h2 className='title2' key={ title }>{ title }</h2>
                            <h2 className='year' key={ year }>{ year }</h2>
                        </div>
                    </div>
                )
            }
        }
        return queryList
    }

    window.onclick = e => {
        console.log(e.target.id)
        setuseActorId(e.target.id)
        setuseNotActor('selectedMovie')
    }

    

    return (
        <div id='selectionHolder'>
            <h1 id='searchResults'>Search Results</h1>
            <QueryCards />
        </div>
    )
}

export default FeatureSelect