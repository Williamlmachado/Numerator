import { LightningElement } from 'lwc';

export default class Controls extends LightningElement {
    
    handleAdd() {factors = [0,2,3,4,5,6];
        this.dispatchEvent(new CustomEvent('add'));
      }
      handleSubtract() {factors = [0,2,3,4,5,6];
        this.dispatchEvent(new CustomEvent('subtract'));
      }
      handleMultiply(event) {factors = [0,2,3,4,5,6];
        const factor = event.target.dataset.factor;
        this.dispatchEvent(new CustomEvent('multiply', {
          detail: factor
        }));
      }
}