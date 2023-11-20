// Доступ к элементам
let imgBox = document.getElementById('imgBox')
let qrImage = document.getElementById('qrImage')
let qrText = document.getElementById('qrText')

// Функция генерации QR-кода
function generateQR() {
  // Проверка вводимого значения на пустоту
  if (qrText.value.length > 0) {
    // Добавление введенного значения в API для формирования картинки кода
    qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText.value}`
    imgBox.classList.add('show-img')
  } else {
    qrText.classList.add('error')
    setTimeout(() => {
      qrText.classList.remove('error')
    }, 500)
  }
}