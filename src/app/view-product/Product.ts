export class Product {
    constructor(
        
        public id:number,
        public name:String,
        public price: DoubleRange, 
        public category: string,
        public type:string, 
        public expiry_date:Date
        ){
    }
}


