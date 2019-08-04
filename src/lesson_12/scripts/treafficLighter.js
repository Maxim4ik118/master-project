import { Light } from "./light";

class TrafficLighterES6 {
  constructor (targetElement, id) {
    this.targetElement = targetElement;
    this.colors = [ 'red', 'yellow', 'green' ];
    this.lights = [];
    this.lighter = 'asdas';
    this.id = id;
    this.activeIndex = 0;
    this.render();
    this.renderLights();

    this.startAutoSwitch();
  }

  validateNextIndex() {
    return this.activeIndex + 1 < this.colors.length;
  }

  nextLight() {
    this.activeIndex = this.validateNextIndex() ? this.activeIndex + 1 : 0;
    this.enableLight();
  }

  enableLight() {
    this.toggleOff();
    this.lights[this.activeIndex].toggleOn();
  }

  stopAutoSwitch() {
    clearInterval(this.intervalId);
  }

  startAutoSwitch() {
    this.intervalId = setInterval(() => {
      this.nextLight();
    }, 1000);
  }

  render() {
    this.lighter = document.createElement( 'div' );
    this.lighter.classList.add( 'traffic-lighter' );
    this.lighter.id = 'lighter1';
    this.lighter.onmouseenter = () => {
      this.stopAutoSwitch()
    }
    this.lighter.onmouseleave = () => {
      this.startAutoSwitch()
    }
    this.targetElement.appendChild( this.lighter );
  }

  renderLights() {
    for ( let color of this.colors ) {
     const light = new Light(this.lighter, color, () => {
       this.toggleOff();
       const currentIndex = this.lights.indexOf(light);
       this.activeIndex = currentIndex;
       console.log(this.activeIndex);
     });
     this.lights.push(light);
    }
  }

  toggleOff() {
    console.log( this.id );
    for ( const light of this.lights ) {
      light.toggleOff();
    }
  }

  toggleOn() {
    this.lights[0].toggleOn();
  }
  disable() {
    this.toggleOff();
  }

}
export { TrafficLighterES6 };