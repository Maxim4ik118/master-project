function TrafficLight() {
 
       const redLight = document.querySelector('.traffic-lighter__light_red');
       const yellowLight = document.querySelector('.traffic-lighter__light_yellow');
       const greenLight = document.querySelector('.traffic-lighter__light_green');

    function toggleOffAll() {
        for(const light of lights) {
            light.classList.remove('active');
        }
    function toggleGreen () {
        greenLight.classList.add('active');
        yellowLight.classList.remove('active');
        redLight.classList.remove('active');
    }

}