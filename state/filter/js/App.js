'use strict';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All',
      projects: this.props.projects
    };

    this.onSelectFilter = this.onSelectFilter.bind(this);

    this.projects = this.props.projects.slice(0, 4);
  }

  onSelectFilter(filter) {
    let projects;

    if (filter !== 'All') {
      projects = this.props.projects.filter(project => project.category === filter);
    } else {
      projects = this.props.projects;
    }

    this.setState({filter, projects});
  }

  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.filter}
          onSelectFilter={this.onSelectFilter}/>
        <Portfolio projects={this.state.projects}/>
      </div>
    )
  }
}