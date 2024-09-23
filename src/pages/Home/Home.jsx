import ProfileInfo from "../../components/Cards/ProfileInfo";
import Footer from "../../components/Footer/Footer";
import Sidebar from "../../components/Sidebar/Sidebar";

function Home() {
  return (
    <>
      <section className="flex">
        <div className="hidden w-64 lg:block">
          <Sidebar />
        </div>

        <div className="min-h-[calc(100dvh-237.6px)] flex-grow flex justify-center items-center">
          <ProfileInfo />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
