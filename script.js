document.addEventListener('DOMContentLoaded', () => {
  const button = document.querySelector('.button')

  button.addEventListener('click', () => {
    // const elem = event.target
    button.classList.add('click')

    setTimeout(function () {
      button.classList.remove('click')
    }, 400)
  })
})
