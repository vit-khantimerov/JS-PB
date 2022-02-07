function generateSystemCodeFromBaseValue({
  baseValue = 1,
  multiplier = 3,
  category = "A",
}) {
  const result = baseValue * multiplier;
  const code = `${category}-${result}`;
  return code;
}

const answer = generateSystemCodeFromBaseValue({ baseValue: 2, multiplier: 3 });
console.log(answer);
