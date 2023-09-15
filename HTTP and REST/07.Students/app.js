function attachEvents() {
  document.querySelector("#submit").addEventListener("click", submitStud);

  // new
  async function loadStudents() {
    const response = await (
      await fetch("http://localhost:3030/jsonstore/collections/students")
    ).json();
    console.log(response);
    const tbody = document.querySelector("tbody");
    Object.values(response).forEach((student) => {
      tbody.appendChild(CreateTR(student));
    });
  }

  loadStudents();

  async function submitStud() {
    let students = {
      firstName: document.querySelector("input[name=firstName]").value,
      lastName: document.querySelector("input[name=lastName]").value,
      facultyNumber: document.querySelector("input[name=facultyNumber]").value,
      grade: document.querySelector("input[name=grade]").value,
    };

    await fetch("http://localhost:3030/jsonstore/collections/students", {
      method: "POST",
      body: JSON.stringify(students),
    });

    loadStudents();

    // const response = await (
    //   await fetch("http://localhost:3030/jsonstore/collections/students")
    // ).json();
    // console.log(response);
    // const tbody = document.querySelector("tbody");
    // Object.values(response).forEach((student) => {
    //   tbody.appendChild(CreateTR(student));
    // });
  }
  function CreateTR(student) {
    const tr = document.createElement("tr");
    tr.appendChild(CreateTD(student.firstName));
    tr.appendChild(CreateTD(student.lastName));
    tr.appendChild(CreateTD(student.facultyNumber));
    tr.appendChild(CreateTD(student.grade));
    return tr;
  }
  function CreateTD(text) {
    const td = document.createElement("td");
    td.textContent = text;
    return td;
  }
}
attachEvents();
