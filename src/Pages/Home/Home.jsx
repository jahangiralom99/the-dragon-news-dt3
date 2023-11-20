import { useLoaderData } from "react-router-dom";
import Marque from "../Marque/Marque";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import NavBar from "../Shared/NavBar/NavBar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import NewsCard from "../NewsCard/NewsCard";

const Home = () => {

  const allNews = useLoaderData();

  return (
    <div>
      <Header></Header>
      <Marque></Marque>
      <NavBar></NavBar>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-2">
        <div className="">
          <LeftSideNav></LeftSideNav>
        </div>
        <div className="col-span-2 ">
          {
            allNews.map(news => <NewsCard
              key={news._id}
              news={news}
            ></NewsCard>)
          }
        </div>
        <div className="">
          <RightSideNav></RightSideNav>
        </div>
      </div>
    </div>
  );
};

export default Home;
