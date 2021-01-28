const { atom } = require('recoil')

export const searchName = atom({
    key: 'searchName',
    default: ''
})

export const image = atom ({
    key: 'image',
    default: ''
})

export const displayName = atom ({
    key: 'displayName',
    default: ''
})

export const knownFor = atom ({
    key: 'knownFor',
    default: ''
})

export const actorId = atom ({
    key: 'actorId',
    default: ''
})

export const actorImages = atom ({
    key: 'actorImages',
    default: []
})

export const notActor = atom ({
    key: 'notActor',
    default: 'home'
})

export const actorBio = atom ({
    key: 'actorBio',
    default: ''
})

export const actorFilmography = atom ({
    key: 'actorFilmography',
    default: []
})

export const top100 = atom ({
    key: 'top100',
    default: []
})

export const upComing = atom ({
    key: 'upComing',
    default: []
})

export const responseData = atom ({
    key: 'responseData',
    default: []
})

export const genres = atom ({
    key: 'genres',
    default: []
})

export const rating = atom ({
    key: 'rating',
    default: 0
})

export const plot = atom ({
    key: 'plot',
    default: ''
})