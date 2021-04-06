import { Time } from "@angular/common";
import { BusinessDays } from "./BusinessDays";
import { CarsCompany } from "./CarsCompany";
import { CitiesCompany } from "./CitiesCompany";

export class AllDetailsCompany{
    constructor(
        //פרטים אישיים
        public SendingCompanyID?:number,
        public CompanyName?:string,
        public FullAddress?:string,
        public Phone?:string,
        public Email?:string,
        public CompanyNumber?:number,
        public Password?:string,
        
        //פרטי בנק
        public CompanyBankDetailsID ?:number,
        public BeneficiaryName?:string,
        public Bank?:string,
        public Branch?:string,
        public AccountNumber?:string,

        //ימי עסקים
       public listBusinessDays:BusinessDays[]=new Array(),
        
        //ערים שהחברה עובדת בהם
        public listCitiesCompany?:CitiesCompany[],

        //סוגי רכבים
        public listCarsCompany:CarsCompany[]=new Array(),){}
}

