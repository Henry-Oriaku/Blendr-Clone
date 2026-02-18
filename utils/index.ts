/**
 * Generates a list
 * @param stop 
 * @returns 
 */
function range(stop: number) {
    let result = [];
    for (let i = 0; i < stop; i++) {
        result.push(i)
    }
    return result
}

export { range }