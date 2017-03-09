// document.getElementById('one').addEventListener('click', function() {
//   var audio = document.getElementById('kick')
//   audio.play()
// })

kick()


function kick () {

  kick = document.getElementById('one')

  kick.addEventListener('click', function() {
    var audio = document.getElementById('kick')
    audio.play()
  })

}

document.getElementById('two').addEventListener('click', function() {
  var audio = document.getElementById('clp')
  audio.play()
  .src = './images/red.jpg'
})
