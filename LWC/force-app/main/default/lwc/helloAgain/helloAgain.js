import { LightningElement, wire} from 'lwc';
import getContactList from '@salesforce/apex/ApexHours.getContactList';
import getAccountDetails from '@salesforce/apex/ApexHours.getAccountDetails'; //calling imperative method

export default class HelloAgain extends LightningElement {
greeting="Fuck this shit!!!!";
Message ="";
result;
error;


/*
Get a class
Create an AuraEnabled Method
import the method in LWC
use @wire to call the method // data, error
*/

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
    alert('Button Working !!');
    getAccountDetails()
      .then(result => {
        console.log('Result', result);
      })
      .catch(error => {
        console.error('Error:', error);
    });

}

}