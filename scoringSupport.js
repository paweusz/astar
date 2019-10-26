function itemWithLowestScore(items, itemToScoreMap) {
    return items.reduce((prev, current) => itemToScoreMap.get(current) < itemToScoreMap.get(prev) ? current : prev);
}

module.exports = itemWithLowestScore;
