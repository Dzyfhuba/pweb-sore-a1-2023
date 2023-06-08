const getBerita = async () => {
  const berita = await fetch('berita.json')
    .then(res => res.json())
    .catch(() => [])

  const beritaContainer = document.querySelector('section#berita ul')
  berita.forEach(b => {
    beritaContainer.innerHTML += `
      <li>
        <a href="#">${b.title}</a>
        <small>${b.date}</small>
      </li>
    `
  })
}



const kegiatanContainer = document.querySelector('section#kegiatan ul')
// const kegiatanContainer = document.querySelector('ul#isikegiatan')

// fetch('http://localhost:5500/kegiatan.json')

// callback
fetch('kegiatan.json')
  .then(response => response.json())
  .then(data => {
    // console.log(data)

    let isiHTML = ''
    data.forEach(element => {
      isiHTML += `
    <li>
    <a href="#">${element.title}</a>
    <small>${element.date}</small>
    </li>
    `
    })
    // console.log(isiHTML)
    kegiatanContainer.innerHTML = isiHTML
  })
  .catch(err => {
    console.log(err)
  })


// const langkah1 = () => {
//   return new Promise(( success, failed ) => {
//     setTimeout(() => {
//       success('langkah 1')
//     }, 3000)
//   })
// }

// const langkah2 = () => {
//   return new Promise(( success, failed ) => {
//     setTimeout(() => {
//       success('langkah 2')
//     }, 3000)
//   })
// }

// const langkah3 = () => {
//   console.log('langkah 3')
// }

// const jalan = async () => {
//   console.log('langkah 1 akan jalan')
//   console.log(await langkah1())
//   console.log(await langkah2())
//   langkah3()
// }
// jalan()

const getPengumuman = async () => {
  const container = document.querySelector('section#pengumuman ul')

  console.log('test 1')
  // awal loading
  container.innerHTML = 'Sedang Loading'

  // proses request hingga response
  const { data, error } = await fetch('pengumuman.json')
    .then(async (res) => {
      return {
        data: await res.json(),
      }
    })
    .catch(error => {
      console.log(error)
      return {
        error: error
      }
    })

  // loading selesai
  container.innerHTML = ''

  console.log('test 2')
  if (error) {
    container.innerHTML = error
    return
  }

  if (!data.length) {
    container.innerHTML = 'Data kosong'
    return
  }

  console.log(data)

  for (let i = 0; i < data.length; i++) {
    container.innerHTML += `
              <li>
              <a href="#">${data[i].title}</a>
              <small>${data[i].date}</small>
              </li>
              `
  }
  console.log(container.innerHTML)
}

// getBerita()
getPengumuman()