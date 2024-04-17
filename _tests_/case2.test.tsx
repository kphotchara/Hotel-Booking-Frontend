import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Card from '@/components/Card'

describe('Card', () => {
  it('Card contains correct image', () => {
    const hotelName = "Test Hotel"
    const imgSrc = "/img/hoteltest.jpg"
    const district = "Pathumwan"
    const province = "Bangkok"
    const rating = 5
    const price = 200
    render(<Card hotelName={hotelName}  imgSrc={imgSrc} 
        district={district} province={province} 
        rating={rating} price={price}/>)
    const cardImages = screen.queryAllByRole("img")
    expect(cardImages).toHaveLength(2)
    const cardText = screen.getByText(new RegExp(hotelName, "i"))
    expect(cardText).toBeInTheDocument
    const cardText2 = screen.getByText(new RegExp(province, "i"))
    expect(cardText2).toBeInTheDocument
    const cardText3 = screen.getByText(new RegExp(district, "i"))
    expect(cardText3).toBeInTheDocument
  })
})
