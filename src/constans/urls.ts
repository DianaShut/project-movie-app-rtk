const baseURL = 'https://api.themoviedb.org/3'

const movie='/movie'
const genre='/genre'
const list ='/list'
const search='/search'
const discover = '/discover'


const urls = {
    movies: {
        base: `${discover}/${movie}`,
        byId: (id:number)=>`${movie}/${id}`
    },
    genres: `${genre}/${movie}/${list}`,
    search: `${search}/${movie}`

}

export {baseURL, urls}