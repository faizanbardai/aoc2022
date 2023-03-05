import run from "aocrunner";
import { getPriorityForCharacter } from "./getPriorityForCharacter.js";

const parseInput = (rawInput: string) => rawInput;

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput).split("\n");
  let sum = 0;
  input.forEach((line) => {
    line = line.trim();
    const compartment1 = line.substring(0, line.length / 2);
    const compartment2 = line.substring(line.length / 2);
    for (const char of compartment1) {
      if (compartment2.includes(char)) {
        const priority = getPriorityForCharacter(char);
        sum += priority;
        break;
      }
    }
  });
  return sum;
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput).split("\n");
  let sum = 0;
  const groups: string[][] = [];
  let newGroup: string[] = [];
  input.forEach((line) => {
    line = line.trim();
    newGroup.push(line);
    if (newGroup.length === 3) {
      groups.push([...newGroup]);
      newGroup = [];
    }
  });

  groups.forEach((group) => {
    const [com1, com2, com3] = group;
    for (const char of com1) {
      if (com2.includes(char) && com3.includes(char)) {
        const priority = getPriorityForCharacter(char);
        sum += priority;
        break;
      }
    }
  });

  return sum;
};

const input = `
vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw
`;

run({
  part1: {
    tests: [
      {
        input,
        expected: "157",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input,
        expected: "70",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
