import './lesson_11.scss';
import { Button } from './scripts/button';
import { TrafficLight } from './scripts/TrafficLighter';
import { Paragraph } from './scripts/paragraph';


function showModal() {
  const input = prompt('Enter any text!');
  new Paragraph(input);
}

const btn1 = new Button('Hello ', showModal);




