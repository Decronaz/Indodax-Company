import { Header } from "./Components/Header";
import { Starter } from "./Components/Starter";
import { Video } from "./Components/Video";
import { CoinTable } from "./Components/CoinTable";
import { Description } from "./Components/Description";
import { News } from "./Components/News";
import { Contacts } from "./Components/Contacts.tsx";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <div className="flex w-full flex-col items-center overflow-x-hidden bg-neutral-50">
        <Header />
        <div className="flex w-screen max-w-7xl flex-col items-center">
          <Starter />
          <Video />
          <CoinTable />
          <Description />
          <News />
          <Contacts />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
