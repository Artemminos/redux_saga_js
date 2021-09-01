export const getSW = async (pattern) => {
    const req = await fetch(`http://swapi.dev/api/${pattern}`)
    return req.json()
}
