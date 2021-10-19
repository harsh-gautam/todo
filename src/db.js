function saveToLocal(data) {
  // @params: data object
  // @output: id
  console.log("Saving data...");
  const id = generateId();
  data.id = id;
  console.log(data);

  if (id === 1) {
    localStorage.setItem("tasks", JSON.stringify([data]));
  } else {
    let prev = JSON.parse(localStorage.getItem("tasks"));
    prev.push(data);
    localStorage.setItem("tasks", JSON.stringify(prev));
  }
}

function generateId() {
  let data = JSON.parse(localStorage.getItem("tasks"));
  if (data !== null) {
    return data.slice(-1)[0].id + 1;
  }
  return 1;
}

export { saveToLocal };
