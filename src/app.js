import './style.scss'
window.addEventListener('DOMContentLoaded', (event) => {
  const canvas = document.getElementById('canvas')
  const ctx = canvas.getContext('2d')
  ctx.lineWidth = 3
  ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, .5)`
  ctx.lineCap = 'round'
  let x = random(0, 750)
  let y = random(0, 500)
  var nextX = x+=random(-5, 5)
  var nextY = y+=random(-5, 5)

  function random(min, max) {
    return Math.random() * (max - min) + min
  }

  function init() {
    window.requestAnimationFrame(draw)
    console.log('init')
  }

  function draw() {



    ctx.beginPath()
    ctx.moveTo(nextX, nextY)
    nextX = x+=random(-50, 50)
    nextY = y+=random(-50, 50)
    if(nextX > 0 && nextX < 750 && nextY >0 && nextY < 650){
      console.log(ctx.getImageData(nextX, nextY, 1, 1).data)


      ctx.quadraticCurveTo(nextX + Math.random() * 50, nextY + Math.random() * 50, nextX, nextY)
      ctx.stroke()
      x = nextX
      y = nextY
    }else{
      x = random(0, 750)
      y = random(0, 500)
      nextX = x+=random(-5, 5)
      nextY = y+=random(-5, 5)
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, .5)`
    }

    window.requestAnimationFrame(draw)
  }

  init()




  console.log('DOM fully loaded and parsed')
})
