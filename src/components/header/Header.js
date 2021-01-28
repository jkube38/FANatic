import React, { Fragment, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { searchName, image, displayName, knownFor, actorId, actorImages, notActor, actorBio, actorFilmography, responseData} from '../../globalState.js'
import axios from 'axios'
import './header.css'
import purpleLogo from '../../images/fanatic-logo-2.png'
import { KUBESKEY } from '../../rapidApiKey.js'


function Header () {

    const [useSearchName, setuseSearchName] = useRecoilState(searchName)
    const [useImage, setuseImage] = useRecoilState(image)
    const [useDisplayName, setuseDisplayname] = useRecoilState(displayName)
    const [useKnownFor, setuseKnownFor] = useRecoilState(knownFor)
    const [useActorId, setuseActorId] = useRecoilState(actorId)
    const [useActorImages, setuseActorImages] = useRecoilState(actorImages)
    const [isNotActor, setisNotActor] = useRecoilState(notActor)
    const [useActorbio, setuseActorBio] = useRecoilState(actorBio)
    const [useActorFilmography, setuseActorFilmography] = useRecoilState(actorFilmography)
    const [useResponseData, setuseResponseData] = useRecoilState(responseData)

    // Initial call from user search
    const fakeImdbSearch = () => {
        const options = {
            method: 'GET',
            url: 'https://imdb8.p.rapidapi.com/title/auto-complete',
            params: {q: useSearchName},
            headers: {
             'x-rapidapi-key': KUBESKEY,
             'x-rapidapi-host': 'imdb8.p.rapidapi.com'
            }
        };
  
        axios.request(options).then(function (response) {
            console.log(response.data)
            setuseSearchName(response.data.d[0].l)
            setuseImage(response.data.d[0].i.imageUrl)
            setuseDisplayname(response.data.d[0].l)
            setuseKnownFor(response.data.d[0].s)
            setuseActorId(response.data.d[0].id)
            setuseResponseData(response.data)

            let movieOrShow = response.data.d[0].q
            if (movieOrShow) {
                console.log('movie or show')
                setisNotActor(movieOrShow)
            } else {
                setisNotActor('actor')
                console.log('actor')
            }

            }).catch(function (error) {
            console.error(error)
            });
          
        clearSearch()
    }
  
    const handleChange = event => {
      setuseSearchName(event.target.value)
    }

    const clearSearch = () => {
      document.getElementById('search').value = ''
    }
    
    return(
    <Fragment>
    <header>
      <a href='/'>
        <img src={purpleLogo} id='fanLogo' alt='Fanatic Logo'/>
      </a>
        <div id='searchBB'>
          <input id='search' type='text' placeholder='search movie, actor' onChange = {handleChange}></input>
          <button id='searchButton' onClick={fakeImdbSearch}>SEARCH</button>
        </div>
    </header>
      <h1>SEARCH TV, MOVIES AND ACTORS</h1>
    </Fragment>
    )

}
export default Header