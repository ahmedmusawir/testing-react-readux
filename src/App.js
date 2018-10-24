import React, { Component } from 'react';
import Header from './components/Header';
import CommentBox from './components/CommentBox';
import CommentList from './components/CommentList';
import Root from './Root';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      branding: 'React Redux Testing',
    };
  }

  render() {
    const { branding } = this.state;
    return (
      <Root>
        <div className="App">
          <Header branding={branding} />
          <div className="container mt-5">
            <CommentBox />
            <CommentList />
          </div>
        </div>
      </Root>
    );
  }
}

export default App;
