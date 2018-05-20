class ProgressBar extends React.Component {
  constructor(...params) {
    super(...params);
    this.canvasProgressBar = null;
    this.ctx = null;

    this.options = {
      size: 150,
      lineWidth: 7,
      rotate: 0,
      radius1: 45,
      radius2: 52,
      color1: '#96d6f4',
      color2: '#4ca89a'
    };
  }

  componentDidMount() {
    let canvas = this.canvasProgressBar;

    this.createNewProgressBar(canvas);
    this.drawProgress(this.getProgressPersent(this.props));
  }

  componentWillReceiveProps(props) {
    let progressPercent = this.getProgressPersent(props);

    this.drawProgress(progressPercent);
  }

  getProgressPersent(props) {
    if(!props.completed && !props.total) {
      return 0;
    }

    return Math.ceil((props.completed/props.total)*100);
  }

  createNewProgressBar(canvas) {
    this.ctx = canvas.getContext('2d');
    canvas.width = canvas.height = this.options.size;
    this.ctx.translate(this.options.size / 2, this.options.size / 2); // change center
    this.ctx.rotate((-1 / 2 + this.options.rotate / 180) * Math.PI); // rotate
  }

  drawProgress(percent) {

    this.ctx.clearRect(-this.options.size/2, -this.options.size/2, this.options.size, this.options.size);

    this.drawCircle (
      this.ctx,
      this.options.radius1,
      this.options.color1,
      this.options.lineWidth,
      percent / 100
    );

    this.drawCircle (
      this.ctx,
      this.options.radius2,
      this.options.color2 ,
      this.options.lineWidth,
      100 / 100
    );
  }

  drawCircle(ctx, radius, color, lineWidth, percent) {
    percent = Math.min(Math.max(0, percent || 1), 1);
    ctx.beginPath();
		ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
    ctx.strokeStyle = color;
    ctx.lineCap = 'round';
    ctx.lineWidth = lineWidth;
    ctx.stroke();
  }

  render() {
    return (
      <div>
        <canvas
          ref={el => this.canvasProgressBar = el}
          width="100px"
          height="100px"
          id="progressCanvas"
          className="progress"
        />
        <div className="progress-percent">
          {
            this.getProgressPersent(this.props)
          }%
        </div>
      </div>
    );
  }
}
