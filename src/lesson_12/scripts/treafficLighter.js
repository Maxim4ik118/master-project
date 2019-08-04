function TrafficLighter(targetElement) {
  this.targetElement = targetElement;
  this.colors = ['red', 'yellow', 'green'];
  this.lights = [];
  this.lighter;

  this.render();
  this.renderLights();
}

TrafficLighter.prototype.render = function render() {
  this.lighter = document.createElement('div');
  this.lighter.classList.add('traffic-lighter');
  this.lighter.id = 'lighter1';

  this.targetElement.appendChild(this.lighter);
}

TrafficLighter.prototype.renderLights = function renderLights() {
  for(let color of this.colors) {
    const light = document.createElement('button');
    light.classList.add('traffic-lighter__light', `traffic-lighter__light_${color}`);
    const otherContext = this;
    light.onclick = () => {
      console.log(this);
      this.toggleOffAll();
      light.classList.add('active');
    };
    this.lights.push(light);
    this.lighter.appendChild(light);
  }
}

TrafficLighter.prototype.toggleOffAll = function toggleOffAll() {
  for (const light of this.lights) {
    light.classList.remove('active');
  }
}

TrafficLighter.prototype.toggle = function toggle(light) {
  
}


TrafficLighter.prototype.disable = function disable() {
  this.toggleOffAll();
}

export { TrafficLighter };
