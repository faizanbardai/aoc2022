import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

function getCaloriesCount(input: string): Map<number, number> {
  const elves = new Map(<[number, number][]>[[1, 0]]);
  let elfCount = 1;
  return input
    .split("\n")
    .map((line) => line.trim())
    .reduce((elfCalories, line) => {
      const calories = parseInt(line);
      if (calories) {
        const current = elfCalories.get(elfCount) || 0;
        elfCalories.set(elfCount, current + calories);
      } else {
        elfCount++;
        elfCalories.set(elfCount, 0);
      }

      return elfCalories;
    }, elves);
}

const part1 = (rawInput: string): string => {
  const input = parseInput(rawInput);
  const caloriesCount = getCaloriesCount(input);
  const mostCalories = Math.max(...caloriesCount.values());

  return mostCalories.toString();
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  const caloriesCount = getCaloriesCount(input);
  const sumOfMaxThree = [...caloriesCount.values()]
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((a, b) => a + b, 0);

  return sumOfMaxThree.toString();
};

run({
  part1: {
    tests: [
      {
        input: `1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`,
        expected: "24000",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `1000
        2000
        3000
        
        4000
        
        5000
        6000
        
        7000
        8000
        9000
        
        10000`,
        expected: "45000",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
