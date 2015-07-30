var play = document.getElementById('play')
var i = 0;
var fun = T('saw')

play.addEventListener('mousedown', function () {
  if (i%2===0){
    fun.set({freq: 261.6}).play()
    i++
    console.log(i)
  } else {
    fun.set({freq: 261.6*1.5}).play()
    i++
  }
  
})

play.addEventListener('mouseup', function () {
  fun.pause()
})