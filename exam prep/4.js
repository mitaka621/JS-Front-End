function solve(arr) {
  const database = [];
  let i = 1;
  for (i; i <= arr[0]; i++) {
    const info = arr[i].split(":");
    database.push({
      assignee: info[0],
      taskID: info[1],
      title: info[2],
      status: info[3],
      points: info[4],
    });
  }

  for (i; i < arr.length; i++) {
    const cmdArgs = arr[i].split(":");
    switch (cmdArgs[0]) {
      case "Add New":
        if (!database.find((x) => x.assignee === cmdArgs[1])) {
          console.log(`Assignee ${cmdArgs[1]} does not exist on the board!`);
          break;
        }
        database.push({
          assignee: cmdArgs[1],
          taskID: cmdArgs[2],
          title: cmdArgs[3],
          status: cmdArgs[4],
          points: cmdArgs[5],
        });
        break;

      case "Change Status":
        if (
          database.find(
            (x) => x.assignee === cmdArgs[1] && x.taskID === cmdArgs[2]
          )
        ) {
          database.find(
            (x) => x.assignee === cmdArgs[1] && x.taskID === cmdArgs[2]
          ).status = cmdArgs[3];
        } else {
          if (!database.find((x) => x.assignee === cmdArgs[1])) {
            console.log(`Assignee ${cmdArgs[1]} does not exist on the board!`);
            break;
          }
          if (!database.find((x) => x.taskID === cmdArgs[2])) {
            console.log(
              `Task with ID ${cmdArgs[2]} does not exist for ${cmdArgs[1]}!`
            );
            break;
          }
        }
        break;

      case "Remove Task":
        if (!database.find((x) => x.assignee === cmdArgs[1])) {
          console.log(`Assignee ${cmdArgs[1]} does not exist on the board!`);
          break;
        }
        database.filter((x) => x.assignee === cmdArgs[1]).length > cmdArgs[2] &&
        cmdArgs[2] >= 0
          ? database.splice(cmdArgs[2], 1)
          : console.log("Index is out of range!");
        break;
      default:
        console.log("error command");
        break;
    }
  }
  console.log(
    `ToDo: ${database
      .filter((x) => x.status === "ToDo")
      .reduce((acc, curr) => {
        acc += Number(curr.points);
        return acc;
      }, 0)}pts`
  );
  console.log(
    `ToDo: ${database
      .filter((x) => x.status === "In Progress")
      .reduce((acc, curr) => {
        acc += Number(curr.points);
        return acc;
      }, 0)}pts`
  );
  console.log(
    `ToDo: ${database
      .filter((x) => x.status === "Code Review")
      .reduce((acc, curr) => {
        acc += Number(curr.points);
        return acc;
      }, 0)}pts`
  );
  console.log(
    `ToDo: ${database
      .filter((x) => x.status === "Done")
      .reduce((acc, curr) => {
        acc += Number(curr.points);
        return acc;
      }, 0)}pts`
  );
  console.log(JSON.stringify(database));
}

solve([
  "5",
  "Kiril:BOP-1209:Fix Minor Bug:ToDo:3",
  "Mariya:BOP-1210:Fix Major Bug:In Progress:3",
  "Peter:BOP-1211:POC:Code Review:5",
  "Georgi:BOP-1212:Investigation Task:Done:2",
  "Mariya:BOP-1213:New Account Page:In Progress:13",
  "Add New:Kiril:BOP-1217:Add Info Page:In Progress:5",
  "Change Status:Peter:BOP-1290:ToDo",
  "Remove Task:Mariya:1",
  "Remove Task:Joro:1",
]);
