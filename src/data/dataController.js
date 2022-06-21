// Padrao comportamental 
// Padrão é responsável por atribuir eventos do sistema a classes que que não 
// estão relacionadas com interface com o usuário. Mais especificamente esse padrao
// cuida dos dados que estao armazenados e de fazer processamento dos dados que o 
// usuario insere

import { createVote } from "./voteCreator";

export function cadastrarEleitor(formData) {
  let users = localStorage.getItem("votes");

  if (!users) users = [];
  else users = JSON.parse(users);

  users.push(createVote({
    nome: formData.get("nome"),
    gender: formData.get("gender"),
    vote: formData.get("vote"),
    age: formData.get("age"),
    longitude: formData.get("longitude"),
    latitude: formData.get("latitude"),
  }));

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

export function getGeoMarkers() {
  const users = JSON.parse(localStorage.getItem("votes"));
  const markers = users.map((e) => {
    return {
      markerOffset: 15,
      name: e.vote,
      coordinates: [e.longitude, e.latitude],
    };
  });
  return markers;
}

export function createDB() {
  let users = localStorage.getItem("votes");

  if (!users) {
    const data = [];
    for (let i = 0; i < 20; i++) {
      data.push(createVote({}));
    }
    localStorage.setItem("votes", JSON.stringify(data));
  }
}
