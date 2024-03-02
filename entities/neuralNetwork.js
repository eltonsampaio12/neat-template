"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeuralNetwork = void 0;
const tf = __importStar(require("@tensorflow/tfjs"));
class NeuralNetwork {
    constructor(inputNodes, hiddenNodes, outputNodes, hiddenActivatinFunction, outputActivatinFunction) {
        this.inputNodes = inputNodes;
        this.hiddenNodes = hiddenNodes;
        this.outputNodes = outputNodes;
        this.hiddenActivatinFunction = hiddenActivatinFunction || "relu";
        this.outputActivatinFunction = outputActivatinFunction || "softmax";
        this.model = this.createModel();
    }
    createModel() {
        const model = tf.sequential();
        model.add(tf.layers.dense({
            units: this.hiddenNodes,
            activation: this.hiddenActivatinFunction,
            inputShape: [this.inputNodes],
        }));
        model.add(tf.layers.dense({
            units: this.outputNodes,
            activation: this.outputActivatinFunction,
        }));
        model.compile({ optimizer: "sgd", loss: "meanSquaredError" });
        return model;
    }
    predict(inputs) {
        return tf.tidy(() => {
            const inputTensor = tf.tensor2d([inputs]);
            const outputs = this.model.predict(inputTensor);
            return outputs.clone();
        });
    }
    getModel() {
        return this.model;
    }
    getInputNodes() {
        return this.inputNodes;
    }
    getHiddenNodes() {
        return this.hiddenNodes;
    }
    getOutputNodes() {
        return this.outputNodes;
    }
}
exports.NeuralNetwork = NeuralNetwork;
