const todoList = []

while (true) {
    let input = prompt("What would you like to do?").toLowerCase()
    if (input === "new") {
        newTodo = prompt("Enter new todo")
        todoList.push(newTodo)
        console.log(`${newTodo} added to list`)
    } else if (input === "list") {
        if (todoList.length !== 0) {
            console.log("**********")
            for (let item of todoList) {
                console.log(`${todoList.indexOf(item)}: ${item}`)
            }
            console.log("**********")
        } else {
            console.log("Empty list!")
        }
    } else if (input === 'delete') {
        const ind = parseInt(prompt("Enter index of todo to delete"))
        if (!Number.isNaN(ind)) {
            const deleted = todoList.splice(ind, 1)
            console.log(`Ok, deleted ${deleted[0]}`)
        } else {
            console.log("Unknown index")
        }
    } else if (input === 'quit') {
        console.log("Ok, you quit the app")
        break
    }
}