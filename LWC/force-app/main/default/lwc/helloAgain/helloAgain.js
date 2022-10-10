import { LightningElement, wire} from 'lwc';
import getContactList from '@salesforce/apex/ApexHours.getContactList';

export default class HelloAgain extends LightningElement {
greeting="Fuck this shit!!!!";
Message ="";
result;
error;


@wire(getContactList)
wiredData({ error, data }) {
  if (data) {
    this.result= data;
    this.error= undefined;
    console.log('Data', data);
  } else if (error) {
    this.result= undefined;;
    this.error= error;
    console.error('Error:', error);
  }
}


handleClick(e) {
this.Message= e.target.value;
}

handleSubmit(){
    alert('Button Working !!')
}

}