import CartBtn from "../components/cart/CartBtn"
import SearchBar from "../components/search/SearchBar"

export default function Header() {
  return (
    <>
      <header className="fixed w-full px-4 py-2 bg-background z-50 flex justify-between items-center left-0 top-0">
        <h1 className="text-lg font-semibold">POS - Fashion</h1>
        <SearchBar />
        <CartBtn />
      </header>
    </>
  )
}
