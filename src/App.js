import React, { Component } from "react";
import "./App.css";

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

class App extends Component {

  state = {

      color: "black",
      bold: false,
      italic: false,
      underline: false

    };


    // this.selectColor = this.selectColor.bind(this);
    // this.selectStyle = this.selectStyle.bind(this);


 

  selectColor(Color) {
    this.setState({ color: Color });
  }

  selectStyle(style) {
    this.setState({ [style]: !this.state[style] });
  }
  render() {
    let styleName = ["bold", "italic", "underline"];
    let colors = ["yellow", "blue", "red", "black", "purple"];

    let stylingBoxes = styleName.map(style => {
      return (

      
        <button
          className={this.state[style]}
          style={styles[style]}
          key={style}
          onClick={() => this.selectStyle(style)}
        >
          {style}
        </button>
      );
    });

    let colorBoxes = colors.map(color => {
      return (
        <button
          style={{ backgroundColor: color, height: 30, width: 30 }}
          key={color}
          onClick={() => this.selectColor(color)}
        />
      );
    });

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea 
          style={{
            color: this.state.color,
            fontStyle: this.state.italic ? "italic" : "",
            fontWeight: this.state.bold ? "bold" : "",
            textDecorationLine: this.state.underline ? "underline" : "",
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;