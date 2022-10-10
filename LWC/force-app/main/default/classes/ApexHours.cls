public with sharing class ApexHours {
    public ApexHours() {

    }


    @AuraEnabled(cacheable= true)
    public static List<Contact> getContactList(){
      return [Select Id, Name, Email from Contact Limit 20];
    }
}
