interface HotelItem {
    _id: string,
    name: string,
    address: string,
    district: string,
    province: string,
    postalcode: string,
    tel: string,
    rating:number,
    __v: number,
    image:string,
    price:number,
    review:ReviewItem[]
  }
  
  export interface ReviewItem {
    rating: number,
    description:string
  }

  export interface HotelJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HotelItem[]
  }

  export interface BookingItem {
    // name: string;
    // surname : string;
    id: string;
    hotel: String;
    bookDate : string;
  }

  