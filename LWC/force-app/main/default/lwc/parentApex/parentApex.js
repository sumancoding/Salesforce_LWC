import { LightningElement } from 'lwc';

export default class ParentApex extends LightningElement {
    message='I am from Parent';

    handleClick () {
        this.message = 'This message is changed';
    }

    handleEvent(event){
let key= event.detail.key;
let value= event.detail.value;

this.message= key +''+value;
windows.console.log('', this.message)
    }
}