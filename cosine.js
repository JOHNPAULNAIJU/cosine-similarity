const arr1 = ["web developer", "app developer", "machine learning", "automotive"];
const arr2 = ["health and fitness", "web developer", "app developer", "yoga"];

const calculateVector = (interests) => {
  const vector = {};
  interests.forEach((interest) => {
    vector[interest] = (vector[interest] || 0) + 1;
  });
  const total = Object.keys(vector).length;
  Object.keys(vector).forEach((interest) => {
    vector[interest] = vector[interest] / total;
  });
  return vector;
};

const cosineSimilarity = (vector1, vector2) => {
  const keys = new Set([...Object.keys(vector1), ...Object.keys(vector2)]);
  let dotProduct = 0;
  let norm1 = 0;
  let norm2 = 0;
  keys.forEach((key) => {
    dotProduct += (vector1[key] || 0) * (vector2[key] || 0);
    norm1 += (vector1[key] || 0) ** 2;
    norm2 += (vector2[key] || 0) ** 2;
  });
  return dotProduct / (Math.sqrt(norm1) * Math.sqrt(norm2));
};

const userVector1 = calculateVector(arr1);
const userVector2 = calculateVector(arr2);
const similarity = cosineSimilarity(userVector1, userVector2);
console.log(similarity);
