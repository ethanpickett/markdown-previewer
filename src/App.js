import logo from './logo.svg';
import './App.css';
import React from 'react';
import { marked } from 'marked';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: `# Welcome to my React Markdown Previewer!
## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\\\`\`\`' && lastLine == '\\\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
    - With different indentation levels.
      - That look like this.


      1. And there are numbered lists too.
      1. Use just 1s if you want!
      1. And last but not least, let's not forget embedded images:

![Reach](/logo192.png)`,
      output: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.setState({
      output: marked(this.state.input, { breaks: true })
    })
  }


  handleChange(event) {
    this.setState({
      input: event.target.value,
      output: marked(event.target.value, { breaks: true })
    });
  }


  render() {

    return (
      <div id="wrapper">
        <h2>HTML PREVIEWER</h2>
        <div>
          <h3>Enter HTML:</h3>
          <textarea id="editor" onChange={this.handleChange} value={this.state.input} />
        </div>
        <div>
          <h3>Preview:</h3>
          <div id="preview" dangerouslySetInnerHTML={{__html: this.state.output}} />
        </div>
      </div>
    );
  }
}

export default App;