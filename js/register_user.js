let name = document.getElementById('name');
let pass = document.getElementById('password');


function register(event) {
  event.preventDefault();
  
  if (name.value == '' && pass.value == ''){
    return console.log('Поля ввода не должны быть пустые!');
    
  }

  else if (name.value == ''){
    return console.log('Пустой логин!')
  }

  else if (pass.value == '') {
    return console.log('Не введен пароль!')
  }

  // else console.log('Не введен пароль!');
  

  let users = {
    'name': name.value,
    'pass': pass.value,


  }

  fetch('https://goncharov-server.herokuapp.com/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(users)
  })
    .then(res => res.json())
    .then(result => {
      console.log(result)
    })

  console.log(users)
  console.log('Вы зарегистрировались успешно!');
  // setTimeout(() => document.location.href = "login.html", 1000)
 


}

