import * as React from 'react';
import Avatar from './components/Avatar';

class App extends React.Component {
  render() {
    return (
      <div>
       <Avatar name="Flavio" age={5} />
      </div>
    );
  }
}

export default App;
