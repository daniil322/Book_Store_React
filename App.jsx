import Books from "./pages/MissBook.jsx";
class App extends React.Component {
  render() {
    return (
      <div>
        <Books />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
