export function cadastrarEleitor(formData) {
  let users = localStorage.getItem("votes");

  if (!users) users = [];
  else users = JSON.parse(users);

  users.push({
    nome: formData.get("nome"),
    gender: formData.get("gender"),
    vote: formData.get("vote"),
    age: formData.get("age"),
    longitude: formData.get("longitude"),
    latitude: formData.get("latitude"),
  });

  localStorage.setItem("votes", JSON.stringify(users));
}

export function setIsLogado(value) {
  localStorage.setItem("isLogado", value);
}

export function getIsLogado() {
  let isLogado = localStorage.getItem("isLogado");
  if (isLogado === null || isLogado === undefined) {
    localStorage.setItem("isLogado", 0);
    isLogado = 0;
  }
  if (isLogado == 0) return false;
  else return true;
}

export function getTotalVotes() {
  const users = JSON.parse(localStorage.getItem("votes"));

  return users;
}

export function createDB() {
  let users = localStorage.getItem("votes");

  if (!users) {
    const voteOptions = ["lula", "bolsonaro", "outro", "nulo", "branco"];
    const genderOptions = ['M', 'F', 'O'];
    const data = [];
    for (let i = 0; i < 100; i++) {
      data.push({
        nome: "",
        gender: genderOptions[Math.floor(Math.random() * genderOptions.length)],
        vote: voteOptions[Math.floor(Math.random() * voteOptions.length)],
        age: "jovem",
        longitude: "-43.9516541",
        latitude: "-19.9528853",
      });
    }
    localStorage.setItem("votes", JSON.stringify(data));
  }
}
