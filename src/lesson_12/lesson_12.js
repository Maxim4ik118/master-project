import './lesson_12.scss';
import { TrafficLighter } from './scripts/treafficLighter';

const test = [];
const lighter = new TrafficLighter(document.querySelector('.container'));
const lighter2 = new TrafficLighter(document.querySelector('.container'));
console.log(lighter);
window.lighter = lighter;