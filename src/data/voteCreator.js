// Padrao criacional / Creator
// Esse padrao garante tem a responsabilidade de criar instâncias de outra classe Vote

export function createVote({
  nome = "Não declardo",
  gender = null,
  vote = null,
  age = "Não declarado",
  longitude = null,
  latitude = null,
}) {
  const voteOptions = ["lula", "bolsonaro", "outro", "nulo", "branco"];
  const genderOptions = ["M", "F", "O"];
  let longOff = Math.random() < 0.5 ? -1 : 1;
  let latOff = Math.random() < 0.5 ? -1 : 1;
  return {
    nome: nome,
    gender: gender
      ? gender
      : genderOptions[Math.floor(Math.random() * genderOptions.length)],
    vote: vote
      ? vote
      : voteOptions[Math.floor(Math.random() * voteOptions.length)],
    age: age,
    longitude: longitude ? longitude : -47.8919 + Math.random() * 10 * longOff,
    latitude: latitude ? latitude : -15.7975 + Math.random() * 5 * latOff,
  };
}
