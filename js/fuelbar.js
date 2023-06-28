class FuelBar {
    constructor(element, initialValue = 0) {
        this.valueElement = element.getElementById('fuel-bar-value');
        this.fillElement = element.getElementById('fuel-bar-fill');

        this.setValue(initialValue);

        console.log(valueElement);
        console.log(fillElement);
    }

    setValue(newValue) {
        if (newValue < 0) {
            newValue = 0
        }
        if (newValue > 100) {
            newValue = 100
        }

        this.fuelvalue = newValue;
        this.update();
    }

    update() {
        const percentage = this.value + '%';
        this.fillElement.style.width = percentage;
        this.valueElement.innerText = percentage;
    }

    
}