function saveToLocal(data) {
  // @params: data object
  // @output: id
  console.log("Saving data...");
  const id = generateId();
  data.id = id;

  if (id === 1) {
    localStorage.setItem("tasks", JSON.stringify([data]));
  } else {
    let prev = JSON.parse(localStorage.getItem("tasks"));
    prev.push(data);
    localStorage.setItem("tasks", JSON.stringify(prev));
  }
  return id;
}

function generateId() {
  let data = JSON.parse(localStorage.getItem("tasks"));
  if (data !== null) {
    return data.slice(-1)[0].id + 1;
  }
  return 1;
}

function loadFromLocal() {
  const data = JSON.parse(localStorage.getItem("tasks"));
  if (data !== null || data !== undefined) {
    return data;
  }
}

function removeFromLocal(id) {
  const data = JSON.parse(localStorage.getItem("tasks"));
  if (data !== null || data !== undefined) {
    const newData = data.filter((item) => item.id != id);
    // console.log(newData);
    localStorage.setItem("tasks", JSON.stringify(newData));
  }
}

export { saveToLocal, loadFromLocal, removeFromLocal };
