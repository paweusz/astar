function createPathFromMap(nextToPrevMap, entryPoint) {
    let current = entryPoint;
    const path = [current];
    while (nextToPrevMap.get(current)) {
        let previous = nextToPrevMap.get(current);
        path.unshift(previous);
        current = previous;
    }

    return path;
}

module.exports = createPathFromMap;
