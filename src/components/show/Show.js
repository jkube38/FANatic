import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { searchName, image, displayName, knownFor, actorId, actorImages, notActor, genres, rating, plot} from '../../globalState.js'
import './show.css'
import axios from 'axios'


function Show () {
    const [useDisplayName, setuseDisplayName] = useRecoilState(displayName)
    const [useImage, setuseImage] = useRecoilState(image)
    const [useActorImages] = useRecoilState(actorImages)
    const [useActorId] = useRecoilState(actorId)
    const [useGenres, setuseGenres] = useRecoilState(genres)
    const [useRating, setuseRating] = useRecoilState(rating)
    const [usePlot, setusePlot] = useRecoilState(plot)

    useEffect (() => {
        if(useActorId.substr(0, 2) === 'tt'){
            document.title = `FANatic - ${useDisplayName}`

            const options = {
                method: 'GET',
                url: 'https://imdb8.p.rapidapi.com/title/get-overview-details',
                params: {tconst: useActorId, currentCountry: 'US'},
                headers: {
                'x-rapidapi-key': '1ddf0a8da3msh877010e622bf74dp10873cjsnd762a292965a',
                'x-rapidapi-host': 'imdb8.p.rapidapi.com'
                }
            };
      
            axios.request(options).then(function (response) {
                console.log(response.data, 'this is the one');
                setuseImage(response.data.title.image.url)
                setuseGenres(response.data.genres)
                setuseRating(response.data.ratings.rating)
                setusePlot(response.data.plotOutline.text)
                setuseDisplayName(response.data.title.title)

            }).catch(function (error) {
                console.error(error);
            });
        }
    }, [useActorId])

    return(
        <div id='movieInfo'>
            <img id='moviePoster' alt='moviePoster' src={ useImage } />
            <div id='movieData'>
                <h1 id='movieTitle'>{ useDisplayName }</h1>
                <p id='plot'>{usePlot}</p>
            </div>
        </div>
    )
}

export default Show