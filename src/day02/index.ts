import run from "aocrunner";

const parseInput = (rawInput: string) => rawInput;

const getPoint = (choice: string): string => {
  switch (choice) {
    case "X":
    case "A":
      return "Rock";
    case "Y":
    case "B":
      return "Paper";
    case "Z":
    case "C":
      return "Scissors";
    default:
      throw new Error("Invalid choice");
  }
};

const translateChoice = (choice: string): string => {
  switch (choice) {
    case "X":
      return "lose";
    case "Y":
      return "draw";
    case "Z":
      return "win";
    default:
      throw new Error("Invalid choice");
  }
};

const RPC = new Map<string, string>([
  ["Rock Rock", "draw"],
  ["Paper Paper", "draw"],
  ["Scissors Scissors", "draw"],
  ["Rock Paper", "win"],
  ["Paper Scissors", "win"],
  ["Scissors Rock", "win"],
  ["Rock Scissors", "lose"],
  ["Paper Rock", "lose"],
  ["Scissors Paper", "lose"],
]);

const RPCFromChoice = new Map<string, string>([
  ["Rock win", "Paper"],
  ["Paper win", "Scissors"],
  ["Scissors win", "Rock"],
  ["Rock lose", "Scissors"],
  ["Paper lose", "Rock"],
  ["Scissors lose", "Paper"],
  ["Rock draw", "Rock"],
  ["Paper draw", "Paper"],
  ["Scissors draw", "Scissors"],
]);

const choiceToScore = (choice: string): number => {
  switch (choice) {
    case "Rock":
      return 1;
    case "Paper":
      return 2;
    case "Scissors":
      return 3;
    default:
      throw new Error("Invalid choice");
  }
};

const resultToScore = (result: string): number => {
  switch (result) {
    case "win":
      return 6;
    case "draw":
      return 3;
    case "lose":
      return 0;
    default:
      throw new Error("Invalid result");
  }
};

const getResult = (opponentPoint: string, yourPoint: string): string => {
  return RPC.get(`${opponentPoint} ${yourPoint}`)!;
};

const part1 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let totalScore = 0;
  const RoundMap = new Map(<[string, number][]>[]);
  input.split("\n").forEach((round) => {
    if (RoundMap.has(round)) {
      totalScore += RoundMap.get(round)!;
      return;
    }
    RoundMap.set(round, 0);
    const [opponentChoice, yourChoice] = round.split(" ");
    const [opponentPoint, yourPoint] = [
      getPoint(opponentChoice),
      getPoint(yourChoice),
    ];
    const result = getResult(opponentPoint, yourPoint);
    const roundScore = choiceToScore(yourPoint) + resultToScore(result);

    RoundMap.set(round, roundScore);
    totalScore += roundScore;
  });

  return totalScore.toString();
};

const part2 = (rawInput: string) => {
  const input = parseInput(rawInput);
  let totalScore = 0;
  const RoundMap = new Map(<[string, number][]>[]);
  input.split("\n").forEach((round) => {
    if (RoundMap.has(round)) {
      totalScore += RoundMap.get(round)!;
      return;
    }
    RoundMap.set(round, 0);
    const [opponentChoice, toDo] = round.split(" ");
    const opponentPoint = getPoint(opponentChoice);
    const toDoTranslated = translateChoice(toDo);
    const yourPoint = RPCFromChoice.get(`${opponentPoint} ${toDoTranslated}`)!;
    const result = getResult(opponentPoint, yourPoint);
    const roundScore = choiceToScore(yourPoint) + resultToScore(result);

    RoundMap.set(round, roundScore);
    totalScore += roundScore;
  });

  return totalScore.toString();
};

run({
  part1: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z
        `,
        expected: "15",
      },
    ],
    solution: part1,
  },
  part2: {
    tests: [
      {
        input: `
        A Y
        B X
        C Z
        `,
        expected: "12",
      },
    ],
    solution: part2,
  },
  trimTestInputs: true,
  onlyTests: false,
});
