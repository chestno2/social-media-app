import Feed from "../Components/Feed";
import Header from "../Components/Header";
import Modal from "../Components/Modal";



export default function Home() {
  return (
    <div className=" bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Modal />
      <Header />
      <Feed />
    </div>
  )
}
