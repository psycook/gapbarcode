
var items = [];

items.push({"Description__c":"My iOS Description1","Packing_Id__c":"DLP0001","Shipping_origin__c":"Brighton","Shipping_destination__c":"London"});
items.push({"Description__c":"My iOS Description2","Packing_Id__c":"DLP0001","Shipping_origin__c":"Brighton","Shipping_destination__c":"London"});
items.push({"Description__c":"My iOS Description3","Packing_Id__c":"DLP0001","Shipping_origin__c":"Brighton","Shipping_destination__c":"London"});
items.push({"Description__c":"My iOS Description4","Packing_Id__c":"DLP0001","Shipping_origin__c":"Brighton","Shipping_destination__c":"London"});

for(var i = 0; i < items.length; i++) {
  var item = items[i];
  console.log("Item is " + JSON.stringify(item));
}
