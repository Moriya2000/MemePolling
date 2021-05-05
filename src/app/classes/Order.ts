export class Order{
    constructor(public OrderID?:number,
        public ClientID?:number,
        public OrderDate?:string,
        public DeliveryTypeID?:number,
        public Amount?:number,
        public Volume?:number,
        public DeliveryUrgencyID?:number,
        public FinalPay?:number,
        public Note?:string,
        ){}
}
