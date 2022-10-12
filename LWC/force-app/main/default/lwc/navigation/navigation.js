import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class Navigation extends NavigationMixin(LightningElement) {
 //type nav-object

navigateToRecordDetailPage() {
    this[NavigationMixin.Navigate]({
        type: 'standard__objectPage',
        attributes: {
            actionName: "home",
            objectApiName: "Account"
        }
    });
}
}