var openButton = document.querySelector('.open'),
  closeButton = document.querySelector('.close'),
  navigation = document.querySelector('nav');

// Open Navigation Function
openButton.addEventListener('click', function () {
  navigation.classList.add('nav-active')
}); 

// Close Navigation Function
closeButton.addEventListener('click', function () {
  navigation.classList.remove('nav-active')
}); 