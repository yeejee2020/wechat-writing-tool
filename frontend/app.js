const WORKER_URL = "https://wechat-writing-worker.myljyjso.workers.dev";

async function generate(type) {
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");

  output.textContent = "生成中…";

  const res = await fetch(WORKER_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      type,
      userInput: input
    })
  });

  const data = await res.json();
  output.textContent = data.result;
}
