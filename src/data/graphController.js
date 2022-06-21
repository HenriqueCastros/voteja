export const pieData = (votes) => {
  const data = {
    lula: 0,
    bolsonaro: 0,
    branco: 0,
    nulo: 0,
    outro: 0,
  };
  votes.forEach((element) => {
    data[element.vote]++;
  });
  return {
    labels: ["Lula", "Bolsonaro", "Outro", "Nulo", "Branco"],
    datasets: [
      {
        label: "# of Votes",
        data: [data.lula, data.bolsonaro, data.outro, data.nulo, data.branco],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
};

export const barData = (votes) => {
  const labels = ["lula", "bolsonaro", "outro", "nulo", "branco"];
  return {
    labels,
    datasets: [
      {
        label: "Homens",
        data: labels.map(
          (lbl) =>
            votes.filter((e) => e.vote === lbl && e.gender === "M").length
        ),
        backgroundColor: "rgb(255, 99, 132)",
      },
      {
        label: "Mulheres",
        data: labels.map(
          (lbl) =>
            votes.filter((e) => e.vote === lbl && e.gender === "F").length
        ),
        backgroundColor: "rgb(75, 192, 192)",
      },
      {
        label: "Outro",
        data: labels.map(
          (lbl) =>
            votes.filter((e) => e.vote === lbl && e.gender === "O").length
        ),
        backgroundColor: "rgb(53, 162, 235)",
      },
    ],
  };
};
