import { Genome } from "./genome";
import { NeuralNetwork } from "./neuralNetwork";

export class Player extends Genome {
  constructor(brain: NeuralNetwork) {
    super(brain);
    this.score = 0;
  }
  evaluateFitness(): number {
    throw new Error("Method not implemented.");
  }
}