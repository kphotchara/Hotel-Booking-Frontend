export interface HotelItem {
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

  export interface HotelinBooking {
    _id : string,
    name : string,
    tel : string
  }

  export interface BookingItem {
    _id:string,
    apptDate: string,
    user:userInBooking,
    hotel:HotelinBooking,
    createdAt:string,
    __v: number
  }
  export interface userInBooking{
    name:string
  }

  export interface BookingJson {
    success: boolean,
    count: number,
    data: BookingItem[]
  }


  