import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props) {
        // Throws an error if there is no super(props) call. Must be defined as the first line.
        super(props);
        this.state = { lat: null, long: null, errorMessage: "" };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            (position) => this.setState({ lat: position.coords.latitude }),
            (error) => this.setState({ errorMessage: error.message })
        );
    }

    // React says me must compulsorily have a render method. And it will run multiple times. it should only be used for returning JSX.
    render() {
        if (!this.state.lat && this.state.errorMessage) {
            return <div>Error: {this.state.errorMessage}</div>;
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Longitude: {this.state.long}</div>;
        }
        return <div>Loading...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
