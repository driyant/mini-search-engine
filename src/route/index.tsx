import { createBrowserRouter } from "react-router-dom"
import Homepage from "../pages/Homepage"
import Search from "../pages/SearchResult"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: `/search`,
    element: <Search />
  },
  // {
  //   path: "/mybookmarks",
  //   element: <MyBookmarks />
  // }
])

export default router