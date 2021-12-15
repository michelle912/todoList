import api from "./api"

export const getTodos = () => {
    return api.get("/todos");
}

export const addTodo = (item) => {
    return api.post("/todos", item);
}

export const updateTodo = (item) => {
    return api.put("/todos/"+item.id, item);
}

export const deleteTodo = (itemId) => {
    return api.delete("/todos/"+itemId);
}