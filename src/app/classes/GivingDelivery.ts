export class GivingDelivery{
    constructor(public GivingDeliveryID?:number,
        public OrderID?:number,
        public CityID?:number,
        public StreetID?:number,
        public BuildingNumber?:number,
        public EntranceBuilding?:string,
        public FloorNumber?:string,
        public ApartmentNumber?:number,
        public FirstName?:string,
        public LastName?:string,
        public Phone?:string,
        public AdditionalPhone?:string,
        public Email?:string,
        public PickUpTime?:number,
        public PickUpTimeUntil?:number,
        ){}
}
