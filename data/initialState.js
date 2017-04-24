module.exports = {
  count: 0,
  pads: [
    [
      { id: 1, col: 0, row: 0, isRunning: false, isOn: false },
      { id: 2, col: 1, row: 0, isRunning: false, isOn: false },
      { id: 3, col: 2, row: 0, isRunning: false, isOn: false },
      { id: 4, col: 3, row: 0, isRunning: false, isOn: false }
    ],
    [
      { id: 5, col: 0, row: 1, isRunning: false, isOn: false },
      { id: 6, col: 1, row: 1, isRunning: false, isOn: false },
      { id: 7, col: 2, row: 1, isRunning: false, isOn: false },
      { id: 8, col: 3, row: 1, isRunning: false, isOn: false }
    ],
    [
      { id: 9, col: 0, row: 2, isRunning: false, isOn: false },
      { id: 10, col: 1, row: 2, isRunning: false, isOn: false },
      { id: 11, col: 2, row: 2, isRunning: false, isOn: false },
      { id: 12, col: 3, row: 2, isRunning: false, isOn: false }
    ]
  ],
  images: {
    black: '../images/black.jpg',
    red: '../images/red.jpg',
    on: '../images/on.jpg',
    runningOn: '../images/runningOn.jpg',
    tempo: '../images/tempo.jpg',
    fast: '../images/fast.jpg',
    medium: '../images/medium.jpg',
    slow: '../images/slow.jpg',
    labels: ['../images/kick.jpg', '../images/snare2.jpg', '../images/hat.jpg']
  },

  sounds: ['../sounds/kick.wav', '../sounds/clp.wav', '../sounds/hat.wav'],

  speed: 450
}
