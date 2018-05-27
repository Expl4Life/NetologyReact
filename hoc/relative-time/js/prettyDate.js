function getNoun(number, titles) {
  let cases = [2, 0, 1, 1, 1, 2];
  return number + ' ' + titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

function prettyDate(Component) {
    return class extends React.Component {

        formatDate() {
            let formattedDate = {
                date: 'обновлено сейчас'
            };

            if (!this.props.date) {
                return formattedDate;
            }

            let date = new Date(this.props.date);
            let time = date.getTime();

            if (isNaN(time)) {
                return formattedDate;
            }

            let now = new Date().getTime();
            let distance = now - time;

            if(distance < 0) {
                return formattedDate;
            }

            let minutes = Math.floor(distance/(1000*60));

            if (minutes < 60) {
                formattedDate.date = `${getNoun(minutes, ['минуту', 'минуты', 'минут'])} назад`;
            } else if (minutes < 1440) {
                let hours =  Math.floor(distance/(1000*60*60));
                formattedDate.date = `${getNoun(hours, ['час', 'часа', 'часов'])} назад`;
            } else {
                let days =  Math.floor(distance/(1000*60*60*24));
                formattedDate.date = `${getNoun(days, ['день', 'дня', 'дней'])} назад`;
            }

            return formattedDate;
        }

        render() {
            const newProps = this.formatDate();
            return <Component {...this.props} {...newProps}/>;
        }
    }
}