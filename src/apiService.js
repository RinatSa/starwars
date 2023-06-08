class ApiService {

    async getAllPlanets() {
        const res = await fetch(`https://swapi.dev/api/planets/`)
        const data = await res.json()
        return await data.results
    }

    async getPlanet(id) {
        const res = await fetch(`https://swapi.dev/api/planets/${id}`)
        return await res.json()
    }

    async getAllPersons() {
        const res = await fetch(`https://swapi.dev/api/people/`)
        const data = await res.json()
        return await data.results
    }

    async getPerson(id) {
        const res = await fetch(`https://swapi.dev/api/people/${id}`)
        return await res.json()
    }

    async getAllStarships() {
        const res = await fetch(`https://swapi.dev/api/starships/`)
        const data = await res.json()
        return await data.results
    }

    async getStarship(id) {
        const res = await fetch(`https://swapi.dev/api/starships/${id}`)
        return await res.json()
    }

    getPersonImageUrl = (id) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }

    getStarshipImageUrl = (id) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    }

    getPlanetImageUrl = (id) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }
}

export default ApiService