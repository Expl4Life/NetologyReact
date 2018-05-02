class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.data = this.props.data;
  }

  render() {
    let listItems = data.items.map((item, index) => {
      let status = false;

      if(!index) {
        status = true;
      }

      return <Item
        key={index}
        info={item}
        status={status}
      />
    });

    return (
      <main className="main">
        <h2 className="title">{this.data.title}</h2>
        {listItems}
      </main>
    )
  }
}