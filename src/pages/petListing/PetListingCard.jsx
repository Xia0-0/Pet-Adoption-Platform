/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const PetListingCard = ({card}) => {
    const {_id,image,name,age ,location ,category,addedDate}=card;
    // console.log('petlisting',name,image);
    return (
        <div className="mx-5">
            <div className="card  h-96 bg-base-100 shadow-xl ">
  <figure><img src={image} className="w-6/12" alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">宠物名称：{name}</h2>
    <p>年龄：{age}</p>
    <p>地点：{location}</p>
    <p>{category}</p>
    <p>添加时间：{addedDate}</p>
    <div className="card-actions justify-end">
    <Link to={`../adoptpet/${_id}`}> <button className="btn btn-primary">查看详情</button></Link> 
    </div>
  </div>
</div>
        </div>
    );
};

export default PetListingCard;