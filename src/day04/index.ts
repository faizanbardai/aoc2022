import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split("\n").filter(fullyContains);

  return input.length.toString();
};

const fullyContains = (elfRanges: string): boolean => {
  const [elf1Range, elf2Range] = elfRanges.split(",");
  const [elf1Min, elf1Max] = elf1Range.split("-").map(Number); // 2 - 4
  const [elf2Min, elf2Max] = elf2Range.split("-").map(Number); // 1 - 5
  return (
    (elf1Min <= elf2Min && elf1Max >= elf2Max) ||
    (elf2Min <= elf1Min && elf2Max >= elf1Max)
  );
};

const partiallyContains = (elfRanges: string): boolean => {
  const [elf1Range, elf2Range] = elfRanges.split(",");
  const [elf1Min, elf1Max] = elf1Range.split("-").map(Number); // 2 - 4
  const [elf2Min, elf2Max] = elf2Range.split("-").map(Number); // 4 - 5
  return (
    (elf1Min >= elf2Min && elf1Min <= elf2Max) ||
    (elf2Min >= elf1Min && elf2Min <= elf1Max) ||
    (elf1Max >= elf2Min && elf1Max <= elf2Max) ||
    (elf2Max >= elf1Min && elf2Max <= elf1Max)
  );
};
const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split("\n").filter(partiallyContains);

  return input.length.toString();
};

const input = `2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`;

run({
  part1: {
    tests: [
      {
        input,
        expected: "2",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input,
        expected: "4",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
