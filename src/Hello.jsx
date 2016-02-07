'use strict'
var React = require('react')
import WordItem from './WordItem.jsx'
import wordsReducer from './wordsReducer.js'


module.exports = React.createClass({
    displayName: 'HelloReact',
    
    getInitialState: function() {
        // naming it initialX clearly indicates that the only purpose
        // of the passed down prop is to initialize something internally
        return {
            words: ["cat", "dog", "mouse"],
            
        };
    },
    
    addWord: function() {
        console.log(`Adding word`);        
        this.setState(wordsReducer(this.state, { type: "WORD_ADDED" }));
    },
    
    removeWord: function(word) {
        console.log(`Removing word ${word}`);
        this.setState(wordsReducer(this.state, { type: "WORD_REMOVED", word }));        
    },
    
    changeWord: function(i, newWord) {
        console.log(`changing word ${newWord} at index ${i}`);
        this.setState(wordsReducer(this.state, { type: "WORD_CHANGED", index: i, newWord }));        
          
    },
    
    render: function(){
        return <div>
            <ul>
                {this.state.words && this.state.words.map((word, i) =>
                    <WordItem 
                        key={i}
                        word={word}
                        changeWord={(e) => this.changeWord(i, e.target.value)}
                        removeWord={() => this.removeWord(word)} />
                )}
            </ul>
            <button onClick={() => this.addWord()}>Add word</button>
        </div>
    }
})