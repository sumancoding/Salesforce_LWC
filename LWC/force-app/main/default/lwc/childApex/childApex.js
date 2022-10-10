import {LightningElement, api} from 'lwc';

export default class ChildApex extends LightningElement {
    @api message;


    handleClick() {

        //Create an object CustomEvent

        //for Single Value,   details: '001HSGHSGD'
        //use lwc-event-details snipppets


    const event = new CustomEvent('btnclick', {
        detail: {
key: '001HSGHSGD',
value: 'ApexHours'

          },
          bubbles: true,
          compose: true
    });
    this.dispatchEvent(event);
    }
}