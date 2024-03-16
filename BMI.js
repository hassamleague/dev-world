let weight = document.getElementById('weight')
let height = document.getElementById('height')
let text2 = document.getElementById('text2')
let button = document.getElementById('btn1')
let para1 = document.getElementById('para1')


button.addEventListener('click',()=>{
    let total = Math.floor(weight.value/(height.value*height.value))

    if(total>0 && total<=17){
        text2.innerHTML = total + ' ' + ':' + 'under weight'
  }
    
    if(total>=18 && total<=24){
          text2.innerHTML = total + ' ' + ':' + 'healthy'
          text2.style.color='rgb(3, 235, 3)'
    }

    if(total>24 && total<=29){
        text2.innerHTML = total + ' ' + ':' + 'over weight'
        text2.style.color='blue'
    }

    if(total>29 && total<=39){
        text2.innerHTML = total + ' ' + ':' + 'obesity'
        text2.style.color='orange'
    }

    if(total>39 && total<=43){
        text2.innerHTML = total + ' ' + ':' + 'extra obesity'
        text2.style.color='red'

    }

    if(total>43 && total<=100){
        text2.innerHTML = total + ':' + 'omg😒'
    }
})