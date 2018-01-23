export class Pomodoro {
  constructor({ worktime, breaktime }) {
    this.worktime = worktime
    this.breaktime = breaktime
    this.status = 'stopped'
    this.starttime = Date.now()
  }

  start() {
    this.starttime = Date.now()
    this.process()
    this.timer = setInterval(this.process.bind(this), 100)
  }

  stop() {
    clearInterval(this.timer)
  }

  process() {
    const diff = Date.now() - this.starttime

    if (this.worktime < diff) this.stop()
    const timeleft = this.worktime - diff

    const seconds = parseInt(timeleft / 1000, 10)
    const minutes = parseInt(seconds / 60, 10)

    function pad(num) {
      if (num < 10) return '0' + num
      else return num.toString()
    }

    const time = pad(minutes) + ':' + pad(seconds - minutes * 60)

    console.log(time)
  }
}

const defaults = { worktime: 5 * 1000, breaktime: 1 * 60 * 1000 }
const pomodoro = new Pomodoro(defaults)
pomodoro.start()