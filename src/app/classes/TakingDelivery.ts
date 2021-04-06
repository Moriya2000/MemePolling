export class TakingDelivery{
    constructor(public TakingDeliveryID?:number,
        public OrderID?:number,
        public CityID?:number,
        public StreetID?:string,
        public BuildingNumber?:number,
        public EntranceBuilding?:number,
        public FloorNumber?:number,
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