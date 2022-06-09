    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]

    // let 
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => {
            console.log('response', response)
            return response.json()  
        })
        .then((data) => {
            console.log('data', data)
            arrayOfTodos = data
        })
    }
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        console.log('arrayOfTodos:', arrayOfTodos)
        let toDoList = document.getElementById("todo-list")
        let text = document.createElement("li")
        text.appendChild(document.createTextNode(arrayOfTodos[0].userId))
        toDoList.appendChild(text)
        
    }

    // const arrayOfTodos1 = [
    //     {
    //     "userId": 14,
    //     "id": 1,
    //     "title": "delectus aut autem",
    //     "completed": false
    // },
    // {
    //     "userId": 20,
    //     "id": 2,
    //     "title": "delectus aut autem",
    //     "completed": false
    // }
    // ]

    // console.log(arrayOfTodos[0].userId) // => 14
    // console.log(arrayOfTodos[1].userId) // => 20

    // let arrayOfTodos = [
    //     {
    //       "userId": 14,
    //       "id": 1,
    //       "title": "delectus aut autem",
    //       "completed": false
    //     },
    //     {
    //       "userId": 20,
    //       "id": 2,
    //       "title": "delectus aut autem",
    //       "completed": false
    //     }
    // ]
    
    // const fetchTodos = () => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //     .then( (response) => {
    //       console.log('response:', response)
    //       return response.json()
    //     })
    //     .then((data) => {
    //       console.log('data:', data)
    //       arrayOfTodos = data
    //     })
    // }
    
    // const logTodos = () => {
    //     console.log(arrayOfTodos)
    // }
    
    // const populateTodos = () => {
    //   console.log('arrayOfTodos:', arrayOfTodos)
    //   let onlyTitles = arrayOfTodos.map(todo => {
    //     return todo.title
    //   })
    //   console.log('onlyTitles:', onlyTitles)
    // }