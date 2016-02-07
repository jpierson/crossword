

function wordAddedReducer(words = [], action) {
    return words.concat([action.word || ""]);
}
    
function wordRemovedReducer(words = [], action) {
    return words.filter(w => w !== action.word);
    // return words.filter((_, index) => index !== action.index);     
}

function wordChangeReducer(words = [], action) {
    return words.map((word, index) => 
        index === action.index ? action.newWord : word);     
}
    
export default function wordsReducer(state, action) {
    switch(action.type) {
        case "WORD_ADDED":
            return { ...state, words: wordAddedReducer(state.words, action) };
        case "WORD_REMOVED":
            return { ...state, words: wordRemovedReducer(state.words, action) };
        case "WORD_CHANGED":
            return { ...state, words: wordChangeReducer(state.words, action) };
        default:
            return state;
    }
}