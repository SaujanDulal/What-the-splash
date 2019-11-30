import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Header from './components/HEADER/HEADER';
import ImageGrid from './components/IMAGEGRID/ImageGrid';

import configureStore from './store';

const store = configureStore();

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<React.Fragment>
					<Header />
					<ImageGrid />
				</React.Fragment>
			</Provider>
		);
	}
}

export default App;
