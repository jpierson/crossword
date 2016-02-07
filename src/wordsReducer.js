

function wordAddedReducer(state, action) {
    return state.words.concat([action.word || ""]);
}
    
function wordRemovedReducer(state, action) {
    state.words.filter(w => w !== action.word);
}

function wordChangeReducer(state, action) {
    this.state.words
        .slice(0,action.index)
        .concat([action.newWord])
        .concat(this.state.words.slice(action.index + 1));        
}
    
function wordsReducer(state, action) {
    switch(action.type) {
        case "WORD_ADDED":
            return { ...state, words: wordAddedReducer(state, action) };
        case "WORD_REMOVED":
            return { ...state, words: wordRemovedReducer(state, action) };
        case "WORD_CHANGED":
            return { ...state, words: wordChangeReducer(state, action) };
        default:
            return state;
    }
}