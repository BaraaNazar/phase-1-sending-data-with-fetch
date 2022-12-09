// Add your code here
function submitData(name,email){
    const formData = {
        name: `${name}`,
        email: `${email}`,
    };
    fetch(`http://localhost:3000/users`,
    {method: "Post",  headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },body: JSON.stringify(formData)
    })
    
    .then(response=>response.json())

    .then((data)=>{document.body.innerHTML= data.id})

    .catch(err=>document.body.innerHTML = err.message
)}