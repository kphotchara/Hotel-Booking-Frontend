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
    image:string
    review:ReviewItem[]
  }
  
  interface ReviewItem {
    rating: number,
    description:string
  }

  interface HotelJson {
    success: boolean,
    count: number,
    pagination: Object,
    data: HotelItem[]
  }


  