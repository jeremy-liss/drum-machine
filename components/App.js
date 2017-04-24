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
      {props.pads.map(function(row, i){
        return (
          <div id="pads" key={i}>
            <img src={props.images.labels[i]} />
            {row.map(function(pad){
              var src = getImageSrc(pad, props)
              return (
                <div id="pad" key={pad.id}>
                  <img src={src} data-id={pad.id} onClick={getId} />
                  {pad.isRunning && pad.isOn && <Sound url={props.sounds[i]} playStatus={Sound.status.PLAYING} />}
                </div>
              )
            })}
          </div>
        )
      })}

      <div id="pads">
        <div id="pad"><img src={props.images.tempo} /></div>
        <div id="pad"><img src={props.images.slow} data-speed={600} onClick={getSpeed}/></div>
        <div id="pad"><img src={props.images.medium} data-speed={450} onClick={getSpeed}/></div>
        <div id="pad"><img src={props.images.fast} data-speed={200} onClick={getSpeed}/></div>
      </div>
      
  </div>
  )
}
