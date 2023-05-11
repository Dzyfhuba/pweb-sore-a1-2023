// DOM: Document Object Manipulation
const menu_trigger = document.querySelector('#menu_trigger')
let show = false
menu_trigger.addEventListener('click', () => {
  const menu = document.querySelector('.menu-list')

  if (show) {
    menu.setAttribute('style', 'display: none')
  } else {
    menu.setAttribute('style', 'display: block')
  }
  show = !show
  console.log('click')
})

// dasar
const bilanganA = 10
const bilanganB = NaN

// fungsi
function fungsi1() {
  console.log('fungsi 1')
}

const fungsi2 = () => {
  console.log('fungsi 2')
}

fungsi1()
fungsi2()


// Object Manipulation
const kambing = {
  kaki: 4,
  makan: 'herbivora',
  berlari: () => {
    console.log('kambing berlari')
  }
}

console.log(kambing)

kambing.makan = 'rumput'
console.log(kambing)

kambing.berlari()

const berlari = kambing.berlari
berlari()