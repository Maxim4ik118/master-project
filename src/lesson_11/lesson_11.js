import './lesson_11.scss';
import { Button } from './scripts/button';
import { TrafficLight } from './scripts/trafficLight';

const test = [];
function showModal () {
  const str = prompt('Enter text');
  test.push(str);
}
const btn1 = new Button('Hello ', showModal);