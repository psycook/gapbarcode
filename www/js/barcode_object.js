BAT
{"Account__c":"0015800000CiVU6AAN","Description__c":"Segal News Order - Mixed Cartons","Notes__c":"Picked on iOS"}

Distribtor.cdo
{"Account__c":"0015800000BCEyeAAH","Description__c":"Segal News Order - Mixed Cartons","Notes__c":"Picked on iOS"}

{
"ProductCode":"LS-RD-KG20"
}
{
"ProductCode":"LS-RD-KG20"
}
{
"ProductCode":"LS-RD-KG20"
}
{"ProductCode":"LS-RD-KG20"}

SELECT PricebookEntryId FROM OrderItem WHERE OrderId = '80158000000v4RrAAI'

if(scan.ProductCode === item.PricebookEntry.Product2.ProductCode) {
  console.log("WE HAVE A MATCH");
  $scope.items[i].PricebookEntry.Product2.ProductCode += " [SELECTED]";
  break;
}
