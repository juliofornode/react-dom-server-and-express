import React, {Component, PropTypes} from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';
//import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'Naming Contest',
      contests: this.props.initialData
    };
  }
  componentDidMount() {
    //the component has been mounted in the DOM...
    //ajax calls, event listeners, timers...

    //see notes in serverRender.js:
    // axios.get('/api/contests')
    //   .then(response => {
    //     this.setState({
    //       contests: response.data.data
    //     });
    //   })
    //   .catch(console.error);

  }
  componentWillUpdate() {
    //before updating the component...
  }
  componentWillUnmout() {
    //before removing the component from the DOM...
    //clean listeners, timers...
  }

  render() {
    if(!this.state.contests) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <Header message={this.state.pageTitle}/>
        <div>
          {this.state.contests.map(contest => {
            return (
              <div key={contest.id}>
                <ContestPreview contest={contest} />
              </div>
            );

          })}
        </div>
      </div>
    );
  }
}


App.propTypes = {
  initialData: PropTypes.object
};

export default App;
