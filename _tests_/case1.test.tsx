import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Banner from '@/components/Banner'

describe('Banner', () => {
  it('Banner contains image and text', () => {
    render(<Banner/>)
    const bannerImages = screen.queryAllByRole("img")
    const bannerText = screen.getByText("Forget Busy Work ,")
    const bannerText2 = screen.getByText("Start Next Vacation")
    expect(bannerImages).toHaveLength(1)
    expect(bannerText).toBeInTheDocument
    expect(bannerText2).toBeInTheDocument
  })
})

