import MainScreen from "./layouts/MainScreen"
import SubScreen from "./layouts/SubScreen"
import { Provider } from "react-redux"
import { store } from "./store/store"
import { Toaster } from "sonner"
import Header from "./layouts/Header"
import Footer from "./layouts/Footer"

export default function App() {
  return (
    <Provider store={store}>
      <Header />
      <div className="flex items-center gap-4 px-4 h-calc pt-16">
        <MainScreen />
        <SubScreen />
      </div>
      <Footer />
      <Toaster richColors />
    </Provider>
  )
}
