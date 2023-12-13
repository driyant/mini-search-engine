import Homepage from "../Homepage"
import { fireEvent, render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import { MemoryRouter } from "react-router-dom"

// Mock the useNavigate hook
const mockedUsedNavigate = jest.fn()
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate
}))


describe("Render Hompage", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    )
  })
  it("text mini bar should be rendered", () => {
    const textMiniSeachEngine = screen.getByText("Mini Search Engine", { exact: false })
    expect(textMiniSeachEngine).toBeInTheDocument()
  })
  it("input form box should be rendered", () => {
    const inputSearchBox = screen.getByRole('textbox')
    expect(inputSearchBox).toBeInTheDocument()
  })
  it("footer element should be rendered", () => {
    const getYear = new Date().getFullYear()
    const footerCopyright = screen.getByText(new RegExp(`© driyant - ${getYear}`, 'i'))
    expect(footerCopyright).toBeInTheDocument()
  })
  it("search form should be rendered and value updated when submit", () => {
    const inputSearchBox = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(inputSearchBox, { target: { value: "soccer" } })
    expect(inputSearchBox.value).toBe("soccer")
    expect(inputSearchBox).toBeInTheDocument()
  })
})