import { formatDate } from "../index"

describe("helpers fn", () => {
  it("should formatted date properly", () => {
    expect(formatDate(new Date().toISOString())).toEqual(new Date().toLocaleString())
  })
})