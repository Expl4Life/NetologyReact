class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Menu/>
          <div className="tabs__content">
            <Switch>
              <Route path="/" exact component={Essay} />
              <Route path="/creator" component={Creator} />
              <Route path="/fortune" component={Fortune} />
              <Route path="*" component={Page404} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}