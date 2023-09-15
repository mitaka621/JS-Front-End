function attachEvents() {
  document.querySelector("#submit").addEventListener("click", Send);
  document.querySelector("#refresh").addEventListener("click", GetMesseges);
}
async function Send() {
  const response = await fetch("http://localhost:3030/jsonstore/messenger", {
    method: "POST",
    body: JSON.stringify({
      author: document.querySelector("input[name=author]").value,
      content: document.querySelector("input[name=content]").value,
    }),
  });
  console.log(response.status);
}
async function GetMesseges() {
  const messages = await (
    await fetch("http://localhost:3030/jsonstore/messenger")
  ).json();
  console.log(messages);
  let messagesArr = Object.values(messages).reduce((acc, curr) => {
    acc.push(`${curr.author}: ${curr.content}`);
    return acc;
  }, []);
  document.querySelector("#messages").value = messagesArr.join("\n");
}
attachEvents();
