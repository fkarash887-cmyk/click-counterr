const predictions = await model.detect(video);

const people = predictions.filter(
  p => p.class === "person" && p.score > 0.5
);

console.log("Людей:", people.length);
