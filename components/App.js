var React = require('react')
var Sound = require('react-sound')

function getImageSrc (pad, props){
   if (pad.isOn && pad.isRunning){
    return props.images.runningOn
  }
  else if (pad.isOn && !pad.isRunning) {
    return props.images.on
  }
  else if (pad.isRunning) {
    return props.images.red
  }
  else {
    return props.images.black
  }
}

module.exports = function (props){

  function getId(ev){
    props.switchOn(ev.target.dataset.id);
  }

  function getSpeed(ev){
    var speed = Number(ev.target.dataset.speed)
    props.changeSpeed(speed)
  }

  return (
    <div>
      <div id="pads">
        <img src={props.images.kick} />
        {props.pads[0].map(function(pad) {
          var src = getImageSrc(pad, props)
          return (
            <div id="pad" key={pad.id}>
              <img src={src} data-id={pad.id} onClick={getId} />
              {pad.isRunning && pad.isOn && <Sound url={props.sounds.kick} playStatus={Sound.status.PLAYING} />}
            </div>
          )
        })}
      </div>

      <div id="pads">
        <img src={props.images.snare} />
        {props.pads[1].map(function(pad) {
          var src = getImageSrc(pad, props)
          return (
            <div id="pad" key={pad.id}>
              <img src={src} data-id={pad.id} onClick={getId} />
              {pad.isRunning && pad.isOn && <Sound url={props.sounds.snare} playStatus={Sound.status.PLAYING} />}
            </div>
          )
        })}
      </div>

      <div id="pads">
        <img src={props.images.hat} />
        {props.pads[2].map(function(pad) {
          var src = getImageSrc(pad, props)
          return (
            <div id="pad" key={pad.id}>
              <img src={src} data-id={pad.id} onClick={getId} />
              {pad.isRunning && pad.isOn && <Sound url={props.sounds.hat} playStatus={Sound.status.PLAYING} />}
            </div>
          )
        })}
      </div>
      <div id="pads">
        <div id="pad"><img src={props.images.tempo} /></div>
        <div id="pad"><img src={props.images.slow} data-speed={900} onClick={getSpeed}/></div>
        <div id="pad"><img src={props.images.medium} data-speed={500} onClick={getSpeed}/></div>
        <div id="pad"><img src={props.images.fast} data-speed={200} onClick={getSpeed}/></div>
      </div>

  </div>
  )
}
