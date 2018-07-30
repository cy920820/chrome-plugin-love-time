let past = new Date('2012, 01, 07')
let now = new Date()
let diff = now.getTime() / 1000 - past.getTime() / 1000

let clock = $('.clock').FlipClock(diff, {
  clockFace: 'DailyCounter',
  countdown: false
})
