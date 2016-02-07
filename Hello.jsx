'use strict'
var React = require('react')
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
        this.setState({ words: this.state.words.concat([""]) });
    },
    
    removeWord: function(word) {
        console.log(`Removing word ${word}`);
        this.setState({ words: this.state.words.filter(w => w !== word)});
    },
    
    onWordChange: function(i, newWord) {
        this.setState({ words: 
            this.state.words
                .slice(0,i)
                .concat([newWord])
                .concat(this.state.words.slice(i+1))});        
    },
    
    render: function(){
        return <div>
            <ul>
                {this.state.words && this.state.words.map((word, i) =>
                    <li key={i}>
                        <input type="text" onChange={(e) => this.onWordChange(i, e.value)}></input>
                        <button onClick={() => this.removeWord(word)}>X</button>
                    </li>
                )}
            </ul>
            <button onClick={() => this.addWord()}>Add word</button>
        </div>
    }
})