// function submitData(name, email) {
//     const formData = {
//       name: name,
//       email: email
//     }
// };
// fetch(`http://localhost:3000/users`)
//     .then((response) =>response.json())
//     .then((data) => {
//         console.log(data)
//     }) 
// fetch(`http://localhost:3000/users`,{
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// })
// .then((response) => response.json())
// .then((json) => console.log(json));

// fetch("http://localhost:3000/", configurationObject);


// const url = ('http://localhost:3000/users')


function submitData(name, email) {

    const body = {
      name: name,
      email: email
    };
  
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type":"application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(body),

    };
    return fetch('http://localhost:3000/users', configurationObject)
      .then(response => response.json())
      .then(data => {
        const bodyElement = document.querySelector('body')
        const idElement  = document.createElement ('p')
        idElement.innerHTML = data.id;
        bodyElement.append(idElement)
       
      })
      .catch(error => {
        const bodyElement = document.querySelector('body')
        const errorElement =document.createElement('p')
        errorElement.innerHTML = 'Unauthorized Access '
        bodyElement.append(errorElement)
    
        // document.body.innerHTML += `<p>${error.message}</p>`;
      });
  }

