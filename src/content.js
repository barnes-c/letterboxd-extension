document.addEventListener('DOMContentLoaded', function () {
  const element = document.createElement('div');
  element.id = 'custom-letterboxd-enhancement';
  element.style.position = 'fixed';
  element.style.bottom = '10px';
  element.style.right = '10px';
  element.style.padding = '10px';
  element.style.backgroundColor = 'rgba(0,0,0,0.8)';
  element.style.color = 'white';
  element.style.borderRadius = '5px';
  element.innerText = 'Letterboxd Enhancer Active';
  document.body.appendChild(element);

  console.log('Letterboxd Enhancer: Custom UI element injected.');
});
