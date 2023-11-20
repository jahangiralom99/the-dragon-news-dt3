import PropTypes from 'prop-types';
import { BsStarFill, BsEyeFill } from "react-icons/bs";
import { Link } from 'react-router-dom';


const NewsCard = ({ news }) => {
  const { title, image_url, details,rating,total_view, _id} = news;
  console.log(news);
  return (
      <div className='p-3 space-y-4 border mb-4'>
          <div>
              <div>
                  <img src="" alt="" />
              </div>
        </div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <div className="card bg-base-100">
        <figure>
          <img
            src={image_url}
            alt="Shoes"
          />
        </figure>
        <div className="mt-8 space-y-4">
          {
            details.length > 200 ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className='font-bold text-[#FF8C47]'>See More</Link></p> : <p>{details}</p>
          }
                  <hr />
                  <div className='flex justify-between items-center'>
                  <div className='flex gap-2 text-[#FF8C47] items-center'>
                      <BsStarFill></BsStarFill>
                      <BsStarFill></BsStarFill>
                      <BsStarFill></BsStarFill>
                      <BsStarFill></BsStarFill>
                      <BsStarFill></BsStarFill>
                      <p className='text-black font-bold'>{rating.number}</p>
                      </div>
                      <div className='flex items-center gap-2'>
                          <BsEyeFill></BsEyeFill>
                          <p>{total_view}</p>
                      </div>
                  </div>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
    news: PropTypes.object.isRequired,
}

export default NewsCard;
