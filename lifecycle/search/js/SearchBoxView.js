const SearchBoxView = ({fixed, getElement}) => {

  return (
    <section className="container">
      <div className="row">
        <div className="col-sm-12">
          <input
            ref={element => getElement(element)}
            className={`search-box ${fixed ? 'search-box_fixed' : null}`}
            placeholder="Поиск"
          >
          </input>
        </div>
      </div>
    </section>
  )
};
