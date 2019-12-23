import Books from "./pages/MissBook.jsx";
import BookDetails from "./pages/BookDetails.jsx";
import MainPage from "./pages/MainPage.jsx";
import NavBar from "./comp/nav.jsx";
import About from "./pages/About.jsx";
const Router = ReactRouterDOM.HashRouter;
const { Route, Switch } = ReactRouterDOM;
const { createBrowserHistory } = History;
const history = createBrowserHistory();

class App extends React.Component {
  render() {
    return (
      <main>
        <Router history={history}>
          <NavBar />
          <Switch>
            <Route component={MainPage} path="/" exact></Route>
            <Route component={Books} path="/books" exact></Route>
            <Route component={BookDetails} path="/books/:id" exact></Route>
            <Route component={About} path="/about" exact></Route>
          </Switch>
        </Router>
      </main>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
