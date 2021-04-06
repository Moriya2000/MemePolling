export class AllOrder{
    constructor(public TakingDeliveryID?:number,
        public TDOrderID?:number,
        public TDCityID?:number,
        public TDStreetID?:number,
        public TDBuildingNumber?:number,
        public TDEntranceBuilding?:number,
        public TDFloorNumber?:number,
        public TDApartmentNumber?:number,
        public TDFirstName?:string,
        public TDLastName?:string,
        public TDPhone?:string,
        public TDAdditionalPhone?:string,
        public TDEmail?:string,
        public TDPickUpTime?:number,
        public TDPickUpTimeUntil?:number,
        public TDlatAddress?:number,
        public TDlngaddress?:number,
        public TDNameAddress?:string,



        public GivingDeliveryID?:number,
        public GDOrderID?:number,
        public GDCityID?:number,
        public GDStreetID?:number,
        public GDBuildingNumber?:number,
        public GDEntranceBuilding?:string,
        public GDFloorNumber?:string,
        public GDApartmentNumber?:number,
        public GDFirstName?:string,
        public GDLastName?:string,
        public GDPhone?:string,
        public GDAdditionalPhone?:string,
        public GDEmail?:string,
        public GDPickUpTime?:number,
        public GDPickUpTimeUntil?:number,
        public GDlatAddress?:number,
        public GDlngaddress?:number,
        public GDNameAddress?:string,
        
        public OrderID?:number,
        public ClientID?:number,
        public OrderDate?:Date,
        public DeliveryTypeID?:number,
        public Amount?:number,
        public Volume?:number,
        public DeliveryUrgencyID?:number,
        public FinalPay?:number,
        public Note?:string,


        ){}
}