let imgBox = document.getElementById('imgBox')
let qrImage = document.getElementById('qrImage')
let qrText = document.getElementById('qrText')

async function generateQR() {
  if (qrText.value.length > 0) {
    let response = await fetch(
      `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`,
    )
    if (response.ok) {
      qrImage.src = response.url
      imgBox.classList.add('show-img')
    } else {
      alert('Ошибка HTTP: ' + response.status)
    }
  } else {
    qrText.classList.add('error')
    setTimeout(() => {
      qrText.classList.remove('error')
    }, 500)
  }
}
