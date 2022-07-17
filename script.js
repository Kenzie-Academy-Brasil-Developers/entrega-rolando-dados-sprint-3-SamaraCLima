let count = [];
  for(i = 1; i<=1000;i++){
      let somaDosDados = 0
      somaDosDados = getRandomArbitrary()+ getRandomArbitrary()
      if(count[somaDosDados]===undefined){
        count[somaDosDados] = []
    }
    count[somaDosDados]++
  }
  console.log (count)
function getRandomArbitrary() {
    return Math.floor(Math.random() * (6 - 0) + 1)
  }
  let body = document.querySelector('body')
  let div1 = document.createElement('div')
  let ul = document.createElement('ul')

  for(let i = 2 ; i<=12;i++){
    let li = document.createElement('li')
    li.innerText =  `${i} = ${count[i]} `
    div1.appendChild(li)
  }
  body.appendChild(div1)
  div1.appendChild(ul)

  let result = document.createElement('div')
  result.id = 'barragrafica'
  body.style.minWidth = "360px"
  body.style.minHeight = "500px"
  
  for(let i =2;i<=12;i++){
    let div = document.createElement('div')
    div.id = i
    div.style.width = "45px"
    div.style.height = ""+count[i]+"px"
    div.style.display = "inline-block"
    div.style.border = "5px solid"
    div.style.background = "pink"

    result.appendChild(div)
  }
  body.appendChild(result)