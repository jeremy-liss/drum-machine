var React = require('react')
var Sound = require('react-sound')

function getImageSrc (pad, props){
  if (pad.isOn) {
    return props.images.on
  }
  else if (pad.isRunning) {
    return props.images.red
  } else {
    return props.images.black
  }
}

module.exports = function (props){

  function getId(ev){
    props.switchOn(ev.target.dataset.id);
  }

  return (
    <div>
      <div id="pads">
        Kick
        {props.pads[0].map(function(pad) {
          var src = getImageSrc(pad, props)
          return (
            <div id="pad" key={pad.id}>
              <img src={src} data-id={pad.id} onClick={getId} />
              {pad.isRunning && pad.isOn && <Sound url='../sounds/kick.wav' playStatus={Sound.status.PLAYING} />}
            </div>
          )
        })}
      </div>

      <div id="pads">
        Snare
        {props.pads[1].map(function(pad) {
          var src = getImageSrc(pad, props)
          return (
            <div id="pad" key={pad.id}>
              <img src={src} data-id={pad.id} onClick={getId} />
              {pad.isRunning && pad.isOn && <Sound url='../sounds/clp.wav' playStatus={Sound.status.PLAYING} />}
            </div>
          )
        })}
      </div>

      <div id="pads">
        Hi-Hat
        {props.pads[2].map(function(pad) {
          var src = getImageSrc(pad, props)
          return (
            <div id="pad" key={pad.id}>
              <img src={src} data-id={pad.id} onClick={getId} />
            </div>
          )
        })}
      </div>

  </div>
  )
}
