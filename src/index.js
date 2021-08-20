import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {

    // Constructor is one way to initialize state. but it is not mandatory. alternative is discussed on line 15.
    // constructor(props) {
    //     Throws an error if there is no super(props) call. Must be defined as the first line.
    //     super(props);
    //     This is the only time the state is directly initialized. And direct initialization SHOULD ALWAYS be done inside a constructor.
    //     this.state = { lat: null, errorMessage: "" };
    // }

    // This is alternate way to initialize state. 
    state = { lat: null, errorMessage: "" };

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
            // Using props pass the data (lat) to the SeasonDisplay component. parent -> child.
            return <SeasonDisplay lat={this.state.lat} />;
        }
        return <div>Loading...</div>;
    }
}

ReactDOM.render(<App />, document.querySelector("#root"));
