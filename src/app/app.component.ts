import { Component, OnInit } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { AllOrder } from './classes/AllOrder';
import { routeToCompanyWithOrders } from './classes/routeToCompanyWithOrders';
import { OrderService } from './services/order.service';
import { TakingDeliveryService } from './services/taking-delivery.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // listOrderToSort: AllOrder[] = new Array()
  // listOrderToMaslul: OrderToMaslul[] = new Array()//הרשימה שתכיל בסופו של דבר את המסלולים
  // listOrderToMaslulChadash: OrderToMaslul[] = new Array()
  // constructor(private ser: TakingDeliveryService) { }
  // aa: Array<Array<AllOrder>> = new Array<Array<AllOrder>>();

  // list1: Array<AllOrder> = new Array<AllOrder>()
  ngOnInit(): void {
    // this.ser.GetAllOrder1(kodCompany).subscribe(
    //   myData => {
    //     debugger
    //     this.aa = myData    

    //   })
  }
  title = 'QuicklyClient';

//   createaslulByAdressfromManager(address:Address)
//   {   
    
//         let index = 0;

//         this.listPlaceses = new Array();
//         this.aa.forEach(x => {
//           x.forEach(y => this.listPlaceses.push(new addressToSort(y.OrderID, 1, y.TDlatAddress, y.TDlngaddress, index)));
//           index++;
//         })
//         this.sortAddress(address.geometry.location.lat(), address.geometry.location.lng());
//         let addressKarov = this.listPlaceses[0]
//         this.list1 = this.aa[addressKarov.index!]
//         this.listOrderToMaslulChadash.push(new OrderToMaslul(this.list1.find(x => x.OrderID == addressKarov.idOrder)!, 1))
//         this.list1.find(x => x.OrderID == addressKarov.idOrder)!.TDaddToList = true;

//         while (this.list1.length > 0) {
//           this.listPlaceses = new Array();
//           debugger
//           for (let j = 0; j < this.list1.length; j++) {
//             if (this.list1[j].TDaddToList != true) {
//               this.listPlaceses.push(new addressToSort(this.list1[j].OrderID, 1, this.list1[j].TDlatAddress, this.list1[j].TDlngaddress))
//             }
//             else
//               {
//                 this.listPlaceses.push(new addressToSort(this.list1[j].OrderID, 2, this.list1[j].GDlatAddress, this.list1[j].GDlngAddress))
//               }
//           }
//           if (this.listOrderToMaslulChadash[this.listOrderToMaslulChadash.length - 1].tOrG == 1) {
//             this.sortAddress(this.listOrderToMaslulChadash[this.listOrderToMaslulChadash.length - 1].order.TDlatAddress, this.listOrderToMaslulChadash[this.listOrderToMaslulChadash.length - 1].order.TDlngaddress);
//           }
//           else {
//             this.sortAddress(this.listOrderToMaslulChadash[this.listOrderToMaslulChadash.length - 1].order.GDlatAddress, this.listOrderToMaslulChadash[this.listOrderToMaslulChadash.length - 1].order.GDlngAddress);
//           }
//           this.listOrderToSort = new Array();
//           for (let index1 = 0; index1 < this.listOrderToMaslulChadash.length; index1++) {
//             if (this.listOrderToMaslulChadash[index1].tOrG == 1)
//               this.listOrderToSort.push(this.listOrderToMaslulChadash[index1].order)
//           }
//           if (this.listPlaceses[0].tOrG == 1) {
//             let a =Object.assign({}, this.list1.find(x => x.OrderID == this.listPlaceses[0].idOrder)!)

//             this.listOrderToSort.push(  new AllOrder(a.TakingDeliveryID,a.TDOrderID,a.TDCityID,a.TDStreetID,a.TDBuildingNumber,a.TDEntranceBuilding,a.TDFloorNumber,
//               a.TDApartmentNumber,a.TDFirstName,a.TDLastName,a.TDPhone,a.TDAdditionalPhone,a.TDEmail,a.TDPickUpTime,a.TDPickUpTimeUntil,a.TDlatAddress,a.TDlngaddress,
//               a.TDNameAddress,a.TDaddToList,a.GivingDeliveryID,a.GDOrderID,a.GDCityID,a.GDStreetID,a.GDBuildingNumber,
//               a.GDEntranceBuilding,a.GDFloorNumber,a.GDApartmentNumber,a.GDFirstName,a.GDLastName,a.GDPhone,a.GDAdditionalPhone,
              
//               a.GDEmail,a.GDPickUpTime,a.GDPickUpTimeUntil,a.GDlatAddress,a.GDlngAddress,a.GDNameAddress,a.GDaddToList,a.OrderID,
//               a.ClientID,a.OrderDate,a.DeliveryTypeID,a.Amount,a.Volume,a.DeliveryUrgencyID,a.FinalPay,a.Note)
//             )
         
//             this.createListToMishloach();
//             if (this.distance1 <= 40000) {
//               this.listOrderToMaslulChadash.push(new OrderToMaslul(this.list1.find(x => x.OrderID == this.listPlaceses[0].idOrder)!, 1))
//               this.list1.find(x => x.OrderID == this.listPlaceses[0].idOrder)!.TDaddToList = true;

//             }
//             else {
//               this.list1.splice(this.list1.findIndex(x => x.OrderID == this.listPlaceses[0].idOrder), 1)
//             }
//           }
//           else {
//             this.listOrderToMaslulChadash.push(new OrderToMaslul(this.list1.find(x => x.OrderID == this.listPlaceses[0].idOrder)!, 2))
//             this.list1.find(x => x.OrderID == this.listPlaceses[0].idOrder)!.GDaddToList = true;
//             this.list1.splice(this.list1.findIndex(x => x.OrderID == this.listPlaceses[0].idOrder), 1)
//           }

//         }
//         console.log(this.listOrderToMaslulChadash);//זה הרשימה שהמשלוחן של הכתובת שהוכנסה צריך לעושות
     
//   }
//   handleAddressChange(event: any) {
//     console.log(event);

//   }
//   distance1 = 0;
//   createListToMishloach() {

//     this.distance1 = 0;
//     this.listOrderToSort.forEach(o => { o.TDaddToList = false; o.GDaddToList = false })
//     let i = 0;
//     while (i < this.listOrderToSort.length * 2 - 1) {
//       this.listPlaceses1 = new Array()
//       if (i == 0) {
//         this.listOrderToMaslul.push(new OrderToMaslul(this.listOrderToSort[i], 1))
//         this.listOrderToSort[i].TDaddToList = true;
//       }
//       let arr = this.listOrderToSort.filter(o => o.TDaddToList == false)
//       arr.forEach(a => this.listPlaceses1.push(new addressToSort(a.OrderID, 1, a.TDlatAddress, a.TDlngaddress)))
//       arr = this.listOrderToSort.filter(o => o.TDaddToList == true && o.GDaddToList == false)
//       arr.forEach(a => this.listPlaceses1.push(new addressToSort(a.OrderID, 2, a.GDlatAddress, a.GDlngAddress)))
//       let maxInList = this.listOrderToMaslul[this.listOrderToMaslul.length - 1]
//       if (maxInList.tOrG == 1)
//         this.sortAddress1(maxInList.order.TDlatAddress, maxInList.order.TDlngaddress)
//       else
//         this.sortAddress1(maxInList.order.GDlatAddress, maxInList.order.GDlngAddress)

//       let orderTop = this.listPlaceses1[0];//אולי צריך לשים את המקס
//       this.listOrderToMaslul.push(new OrderToMaslul(this.listOrderToSort.find(o => o.OrderID == orderTop.idOrder)!, orderTop.tOrG!))
//       if (orderTop.tOrG == 1)
//         this.listOrderToSort.find(o => o.OrderID == orderTop.idOrder)!.TDaddToList = true;
//       else
//         this.listOrderToSort.find(o => o.OrderID == orderTop.idOrder)!.GDaddToList = true;
//       i++;
//     }
//     for (let j = 0; j < this.listOrderToMaslul.length - 1; j++) {
//       let before = new google.maps.LatLng(0, 0)
//       let after = new google.maps.LatLng(0, 0)
//       if (this.listOrderToMaslul[j].tOrG == 1)
//         before = new google.maps.LatLng(this.listOrderToMaslul[j].order.TDlatAddress!, this.listOrderToMaslul[j].order.TDlngaddress!)
//       else
//         before = new google.maps.LatLng(this.listOrderToMaslul[j].order.GDlatAddress!, this.listOrderToMaslul[j].order.GDlngAddress!)


//       if (this.listOrderToMaslul[j + 1].tOrG == 1)
//         after = new google.maps.LatLng(this.listOrderToMaslul[j + 1].order.TDlatAddress!, this.listOrderToMaslul[j + 1].order.TDlngaddress!)
//       else
//         after = new google.maps.LatLng(this.listOrderToMaslul[j + 1].order.GDlatAddress!, this.listOrderToMaslul[j + 1].order.GDlngAddress!)
//      let co=  google.maps.geometry.spherical.computeDistanceBetween(before, after!)
// this.distance1+=co;
//     }

//   }


//   listPlaceses: addressToSort[] = new Array()
//   sortAddress(origLat: number = 0, origLong: number = 0) {

//     this.listPlaceses = this.listPlaceses.sort((a: addressToSort, b: addressToSort) => {


//       return this.distance(origLat, origLong, a.lat, a.lng) - this.distance(origLat, origLong, b.lat, b.lng);
//     })}

//     listPlaceses1: addressToSort[] = new Array()
//   sortAddress1(origLat: number = 0, origLong: number = 0) {

//     this.listPlaceses1 = this.listPlaceses1.sort((a: addressToSort, b: addressToSort) => {


//       return this.distance(origLat, origLong, a.lat, a.lng) - this.distance(origLat, origLong, b.lat, b.lng);
//     })

//   }



//   distance(lat1: number = 0, lon1: number = 0, lat2: number = 0, lon2: number = 0) {
//     var radlat1 = Math.PI * lat1 / 180;
//     var radlat2 = Math.PI * lat2 / 180;
//     var theta = lon1 - lon2;
//     var radtheta = Math.PI * theta / 180;
//     var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
//     dist = Math.acos(dist);
//     dist = dist * 180 / Math.PI;
//     dist = dist * 60 * 1.1515;
//     dist = dist * 1.609344;

//     return dist;
//   };





}
export class OrderToMaslul {
  constructor(public order: AllOrder, public tOrG: number) { }
}

export class addressToSort {
  constructor(public idOrder?: number, public tOrG?: number, public lat?: number, public lng?: number, public index?: number) { }
}

