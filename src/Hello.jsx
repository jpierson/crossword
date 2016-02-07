'use strict'
var React = require('react')
import wordsReducer from 'wordsReducer.js'


module.exports = React.createClass({
    displayName: 'HelloReact',
    
    getInitialState: function() {
        // naming it initialX clearly indicates that the only purpose
        // of the passed down prop is to initialize something internally
        return {
            words: [],
            
        };
    },
    
    addWord: function() {
        this.setState(wordsReducer(this.state, { type: "WORD_ADDED" }));
    },
    
    removeWord: function(word) {
        console.log(`Removing word ${word}`);
        this.setState(wordsReducer(this.state, { type: "WORD_ADDED", word }));        
    },
    
    onWordChange: function(i, newWord) {
        this.setState(wordsReducer(this.state, { type: "WORD_CHANGED", index: i, newWord }));        
             
    },
    
    render: function(){
        return <div>
            <ul>
                {this.state.words && this.state.words.map((word, i) =>
                    <li key={i}>
                        <input 
                            type="text" 
                            value={word}
                            onChange={(e) => this.onWordChange(i, e.value)}></input>
                        <button onClick={() => this.removeWord(word)}>X</button>
                    </li>
                )}
            </ul>
            <button onClick={() => this.addWord()}>Add word</button>
        </div>
    }
})