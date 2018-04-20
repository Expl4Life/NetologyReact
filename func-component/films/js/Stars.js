'use strict';

function Stars({count}) {

  if(count < 1 || count > 5) {
    return null;
  }

  let starList = new Array(count).fill(0);

  //shortid will be best for key
  starList = starList.map((el, index) => <li key={index}><Star/></li> );

  return (
    <ul className="card-body-stars u-clearfix">
      {starList}
    </ul>
  )
}
