const Calendar = ({date}) => {

  // basic info
  let daysInWeek = 7;
  let today = date.getDate();
  let year = date.getFullYear();
  let month = date.getMonth();
  let lastDayOfMonth = new Date(year, month + 1, 0).getDate();
  let lastDayOfPrevMonth = new Date(year, month, 0).getDate();
  let firstDay = new Date(year, month, 1);
  let firstWeekDay = firstDay.getDay();
  let lastWeekDay = new Date(year, month + 1, 0).getDay();

  firstWeekDay === 0 ? firstWeekDay = 7 : firstWeekDay; // если sunday = 0, то Вс=7 (Вс в конце списка дней недели)
  lastWeekDay === 0 ? firstWeekDay = 7 : lastWeekDay;

  let prevDaysCountInRow = firstWeekDay - 1; // количество предыдущих дней в первой строке календаря
  let nextDaysCountInRow = daysInWeek - lastWeekDay;

  let rowsCount = Math.ceil((lastDayOfMonth + firstWeekDay) / daysInWeek); // количество строк в календаре
  let totalCalendarDays = rowsCount * daysInWeek;
  //end basic info

  const createDay = (day, otherDay = false) => {
    return {day, otherDay};
  };

  const fillDays = () => {

    let datesList = [];
    let prevDays = prevDaysCountInRow; // кол-во пред дней
    let nextDays = nextDaysCountInRow; // кол-во след дней
    let totalDaysCount = totalCalendarDays; // сумма дней в календаре
    let lastDayPrevMonth = lastDayOfPrevMonth; // последний день пред месяца
    let countCurrentDays = lastDayOfMonth; // дней в месяце
    let firstNextDay = 1;

    for (let i = 0; i < totalDaysCount; i++) {

      let date;

      if (prevDays > 0) {
        date = lastDayPrevMonth - prevDays + 1;
        prevDays--;
        datesList.push(createDay(date, true));
        continue;
      }

      if (countCurrentDays > 0) {
        date = lastDayOfMonth - countCurrentDays + 1;
        datesList.push(createDay(date, false));
        countCurrentDays--;
        continue;
      }


      if (nextDays > 0) {
        date = firstNextDay++;
        nextDays--;
        datesList.push(createDay(date, true));
        continue;
      }


    }
    return datesList;

  };

  const createRow = (items) => {
    return (
      <tr>
        {items}
      </tr>
    )
  };

  //список из объектов дат
  let dateList = fillDays();

  const createRowList = (dateList, currentDay) => {
    let rowList = [];

    for (let i = 0; i < rowsCount; i++) {
      let rowItems = dateList.slice(i * daysInWeek, (i * daysInWeek + daysInWeek));

      //строка с датами
      rowItems = rowItems.map((day, index) => {

        if (day.otherDay) {
          return (
            <td key={index} className="ui-datepicker-other-month">{day.day}</td>
          )
        }

        if(day.day === currentDay) {
          return (
            <td key={index} className="ui-datepicker-today">{day.day}</td>
          )
        }

        return (
          <td key={index}>{day.day}</td>
        )
      });

      rowList.push(createRow(rowItems));
    }

    return rowList;
  };

  //список из строк с заполнеными датами
  let rowList = createRowList(dateList, today);


  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {date.toLocaleString('ru', {weekday: 'long'})}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">
            {today}
          </div>
          <div className="ui-datepicker-material-month">
            {date.toLocaleString('ru', {month: 'long', day: 'numeric'}).split(' ')[1]}
          </div>
          <div className="ui-datepicker-material-year">
            {date.getFullYear()}
          </div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{date.toLocaleString('ru', {month: 'long'})}</span>&nbsp;
          <span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col></col>
          <col className="ui-datepicker-week-end"></col>
          <col className="ui-datepicker-week-end"></col>
        </colgroup>
        <thead>
        <tr>
          <th scope="col" title="Понедельник">Пн</th>
          <th scope="col" title="Вторник">Вт</th>
          <th scope="col" title="Среда">Ср</th>
          <th scope="col" title="Четверг">Чт</th>
          <th scope="col" title="Пятница">Пт</th>
          <th scope="col" title="Суббота">Сб</th>
          <th scope="col" title="Воскресенье">Вс</th>
        </tr>
        </thead>
        <tbody>
          {rowList}
        </tbody>
      </table>
    </div>
  );
};
