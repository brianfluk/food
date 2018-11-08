import { Component, OnInit } from '@angular/core';
import * as tf from '@tensorflow/tfjs';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrls: ['./ai.component.css']
})
export class AiComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const model = tf.sequential();
    // model.add(tf.layers.dense({units: 100, activation: 'relu', inputShape: [10]}));
    // model.add(tf.layers.dense({units: 1, activation: 'linear'}));
    // model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

    // const xs = tf.randomNormal([100, 10]);
    // const ys = tf.randomNormal([100, 1]);

    // model.fit(xs, ys, {
    //   epochs: 100,
    //   callbacks: {
    //     onEpochEnd: async (epoch, log) => {
    //       console.log(`Epoch ${epoch}: loss = ${log.loss}`);
    //     }
    //   }
    // });
    const shape = [2, 3]; // 2 rows, 3 columns
    const a = tf.tensor([1.0, 2.0, 3.0, 10.0, 20.0, 30.0], shape);
    a.print(); // print Tensor values

  }

}
