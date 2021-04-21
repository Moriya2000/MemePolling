import { Component, OnInit } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { AllOrder } from './classes/AllOrder';
import { OrderService } from './services/order.service';
import { TakingDeliveryService } from './services/taking-delivery.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listOrderToSort: AllOrder[] = new Array()
  listOrderToMaslul: OrderToMaslul[] = new Array()
constructor(private ser:TakingDeliveryService){}
  ngOnInit(): void {
// this.ser.GetAllOrder1().subscribe(myData=>
//   {
//     debugger
//     this.listOrderToSort=myData;
//     this.createListToMishloach();
//     console.log(this.listOrderToMaslul)
//   })
  }
  title = 'QuicklyClient';
  handleAddressChange(event: any) {
    console.log(event);

  }

  createListToMishloach() {
    debugger
    this.listOrderToSort.forEach(o=>{o.TDaddToList=false;o.GDaddToList=false})
    // for (let i = 0; i < this.listOrderToSort.length; i++) {
      let i=0;
      while(i<this.listOrderToSort.length*2-1){
        this.listPlaceses=new Array()
        debugger
      // if (this.listOrderToSort[i].TDaddToList != true) {
        if (i == 0) {
          this.listOrderToMaslul.push(new OrderToMaslul(this.listOrderToSort[i], 1))
          this.listOrderToSort[i].TDaddToList = true;
        }
        let arr = this.listOrderToSort.filter(o => o.TDaddToList == false)
        arr.forEach(a => this.listPlaceses.push(new addressToSort(a.OrderID, 1, a.TDlatAddress, a.TDlngaddress)))
        arr = this.listOrderToSort.filter(o => o.TDaddToList == true && o.GDaddToList == false)
        arr.forEach(a => this.listPlaceses.push(new addressToSort(a.OrderID, 2, a.GDlatAddress, a.GDlngAddress)))
        let maxInList = this.listOrderToMaslul[this.listOrderToMaslul.length - 1]
        if (maxInList.tOrG == 1)
          this.sortAddress(maxInList.order.TDlatAddress, maxInList.order.TDlngaddress)
        else
          this.sortAddress(maxInList.order.GDlatAddress, maxInList.order.GDlngAddress)

        let orderTop = this.listPlaceses[0];//אולי צריך לשים את המקס
        this.listOrderToMaslul.push(new OrderToMaslul(this.listOrderToSort.find(o => o.OrderID == orderTop.idOrder)!, orderTop.tOrG!))
        if (orderTop.tOrG == 1)
          this.listOrderToSort.find(o => o.OrderID == orderTop.idOrder)!.TDaddToList = true;
        else
          this.listOrderToSort.find(o => o.OrderID == orderTop.idOrder)!.GDaddToList = true;
          i++;
      }
     
        // if (this.listOrderToSort[i].GDaddToList != true) {

        //   let arr = this.listOrderToSort.filter(o => o.TDaddToList == false)
        //   arr.forEach(a => this.listPlaceses.push(new addressToSort(a.OrderID, 1, a.TDlatAddress, a.TDlngaddress)))
        //   arr = this.listOrderToSort.filter(o => o.TDaddToList == true && o.GDaddToList == false)
        //   arr.forEach(a => this.listPlaceses.push(new addressToSort(a.OrderID, 2, a.GDlatAddress, a.GDlngaddress)))
        //   let maxInList = this.listOrderToMaslul[this.listOrderToMaslul.length - 1]
        //   if (maxInList.tOrG == 1)
        //     this.sortAddress(maxInList.order.TDlatAddress, maxInList.order.TDlngaddress)
        //   else
        //     this.sortAddress(maxInList.order.GDlatAddress, maxInList.order.GDlngaddress)

        //   let orderTop = this.listPlaceses[0];//אולי צריך לשים את המקס
        //   this.listOrderToMaslul.push(new OrderToMaslul(this.listOrderToSort.find(o => o.OrderID == orderTop.idOrder)!, orderTop.tOrG!))
        //   if (orderTop.tOrG == 1)
        //     this.listOrderToSort.find(o => o.OrderID == orderTop.idOrder)!.TDaddToList = true;
        //   else
        //     this.listOrderToSort.find(o => o.OrderID == orderTop.idOrder)!.GDaddToList = true;
        // }
      
    // }
  }

  // listPlaceses:places[]=new Array();
  // initAddress()
  // {
  //   this.listPlaceses.push(new places(new myAddress(1,1),))
  //   this.listPlaceses.push(new places(new myAddress(6,2)))
  //   this.listPlaceses.push(new places(new myAddress(3,2)))
  //   this.listPlaceses.push(new places(new myAddress(5,1)))
  // }
  listPlaceses: addressToSort[] = new Array()
  sortAddress(origLat: number = 0, origLong: number = 0) {
    
    this.listPlaceses = this.listPlaceses.sort((a: addressToSort, b: addressToSort) => {


      return this.distance(origLat, origLong, a.lat, a.lng) - this.distance(origLat, origLong, b.lat, b.lng);
    })

  }



  distance(lat1: number = 0, lon1: number = 0, lat2: number = 0, lon2: number = 0) {
    var radlat1 = Math.PI * lat1 / 180;
    var radlat2 = Math.PI * lat2 / 180;
    var theta = lon1 - lon2;
    var radtheta = Math.PI * theta / 180;
    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    dist = Math.acos(dist);
    dist = dist * 180 / Math.PI;
    dist = dist * 60 * 1.1515;
    dist = dist * 1.609344;

    return dist;
  };





}
export class OrderToMaslul {
  constructor(public order: AllOrder, public tOrG: number) { }
}

export class addressToSort {
  constructor(public idOrder?: number, public tOrG?: number, public lat?: number, public lng?: number) { }
}

