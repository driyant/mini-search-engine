import Homepage from "../pages/Homepage";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom'
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("Render Hompage", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Homepage />
      </MemoryRouter>
    )
  })
  it("Text Mini Search Should Display", () => {
    const textMiniSeachEngine = screen.getByText("Mini Search Engin", { exact: false })
    expect(textMiniSeachEngine).toBeInTheDocument()
  })
  it("Input Form Box Should Display", () => {
    const inputSearchBox = screen.getByRole('textbox')
    expect(inputSearchBox).toBeInTheDocument()
  })
  it("Footer Element Should Display", () => {
    const getYear = new Date().getFullYear()
    const footerCopyright = screen.getByText(new RegExp(`© driyant - ${getYear}`, 'i'))
    expect(footerCopyright).toBeInTheDocument()
  })
  it("SearchHandler Function Should Navigates Correctly", async () => {
    // const mockNavigate = jest.fn()
    // jest.mock("react-router-dom", () => ({
    //   ...jest.requireActual("react-router-dom"),
    //   useNavigate: () => mockNavigate,
    // }))
    // render(
    //   <MemoryRouter>
    //     <Homepage />
    //   </MemoryRouter>
    // );
  
    const inputSearchBox = screen.getByRole('textbox')
    userEvent.clear(inputSearchBox)
    await userEvent.type(inputSearchBox, 'soccer')
    const formSearchBox = screen.getByTestId("search-box")
    fireEvent.submit(formSearchBox)
    await waitFor(() => {
      // const searchQuery = new URLSearchParams(window.location.search).get("q")
      expect(window.location.href).toBe(`${window.origin}/search?q=soccer&cat=web`);
      // expect(searchQuery).toBe('soccer')
      // expect(mockNavigate).toHaveBeenCalledWith("/search?q=soccer&cat=web");
    })
  })
})