let imgBox = document.getElementById('imgBox')
let qrImage = document.getElementById('qrImage')
let qrText = document.getElementById('qrText')

function generateQR() {
  if (qrText.value.length > 0) {
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`
    qrImage.onload = () => console.log(`Изображение загружено`)
    qrImage.onerror = () => {
      const errorMessage = 'Ошибка во время загрузки изображения'
      const errorDiv = document.createElement('div')
      errorDiv.innerText = errorMessage
      imgBox.appendChild(errorDiv)
      console.log('Ошибка во время загрузки изображения')
    }
    imgBox.classList.add('show-img')
  } else {
    qrText.classList.add('error')
    setTimeout(() => {
      qrText.classList.remove('error')
    }, 500)
  }
}
