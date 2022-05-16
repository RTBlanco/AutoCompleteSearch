document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('search-bar');
  const dropSearch = document.getElementById('search');

  let timeout;
  input.addEventListener('keyup', () => {
    if (timeout) {
      clearTimeout(timeout)
    }

    timeout = setTimeout(() => {
      
    }, 5000);
  });
});

function renderData() {
  
}

const Data = {
  items: [
    'do',
    'this',
    'integra',
    'acura'
  ]
}