const todo = [

];

module.exports = {
    create,
    getOne,
    getAll,
    deleteOne,
    update
};

function update(id, todo) {
    todos[id] = todo;
}

function deleteOne(id) {
    todos.splice(id, 1);
}

function getAll() {
    return todos;
}

function getOne(id) {
    return todos[id];
}

function create(todo) {
    todos.push(todo);
}