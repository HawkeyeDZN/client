let name = document.getElementById('name');
let pass = document.getElementById('password');

function login(event) {
  event.preventDefault();

  if (name.value == '' && pass.value == '') {
    return console.log('Поля ввода не должны быть пустые!');
  }

  else if (name.value == '') {
    return console.log('Пустой логин!')
  }
  else if (pass.value == ''){
    return console.log('Не введен пароль!')
  }
  
  fetch('https://goncharov-server.herokuapp.com/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify({
      name: name.value,
      pass: pass.value,
    })
  })
    .then(res => res.json())
    .then(result => {

      console.log(result.status);
      console.log(result.message);
      setTimeout(() => document.location.href = "shop.html", 2000)
    })
    console.log('Вы авторизованы успешно!');
    name.value = '';
    pass.value = '';
    

}