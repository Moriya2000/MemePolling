import { Time } from "@angular/common";

export class DeliveryRoutes{
    constructor(DeliveryRoutesID?:number,
        public SendingCompanyID?:number,
        public CarTypeID?:number,
        public Date?:Time,
        ){}
}