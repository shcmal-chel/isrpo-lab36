const API_URL = "http://localhost:5182/api/tasks";

async function getAllTasks() {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Не удалось загрузить задачи");
  }
  return response.json();
}

async function deleteTask(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Не удалось удалить задачу");
  }
}

async function createTask(title, description) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Constent-Type": "application/json" },
    body: JSON.stringify({
      title,
      description,
    }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Не удалось добавить задачу");
  }
  return response.json();
}

async function updateTake(id, title, description, isCompleted) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Constent-Type": "application/json" },
    body: JSON.stringify({
      title,
      description,
      isCompleted,
    }),
  });
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Не удалось добавить задачу");
  }
  return response.json();
}
