export class CompanyBankDetails{
    constructor(CompanyBankDetailsID ?:number,
        public SendingCompanyID?:number,
        public BeneficiaryName?:string,
        public Bank?:string,
        public Branch?:string,
        public AccountNumber?:string,
        ){}
}