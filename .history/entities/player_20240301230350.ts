import { Genome } from "./genome";
import { NeuralNetwork } from "./neuralNetwork";

export class Player extends Genome {
  evaluateFitness(): number {
    throw new Error("Method not implemented.");
  }
  private score: number;

  constructor(brain: NeuralNetwork) {
    super(brain);
    this.score = 0;
  }
}
