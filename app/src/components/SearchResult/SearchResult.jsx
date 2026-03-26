import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from "../../App"
import { Button } from '../../App'
import { Conatiner } from '../../App'

const SearchResult = ({ data }) => {
    return (
        <FoodCardConatiner>
           <Conatiner>
             <FoodCards>
                {
                    data?.map(({ name, image, text, price }) => (
                        <FoodCard key={name}>
                            <div className="food_img">
                                <img src={BASE_URL + image} alt="" />
                            </div>
                            <div className="food_info">
                                <div className="info">
                                    <h3>{name}</h3>
                                    <p>{text}</p>
                                </div>
                                <Button>${price.toFixed(2)}</Button>
                            </div>
                        </FoodCard>
                    ))
                }
            </FoodCards>
           </Conatiner>
        </FoodCardConatiner>
    )
}

export default SearchResult


const FoodCardConatiner = styled.section`
    background-image: url("/bg.png");
      background-size: cover;
      min-height: calc(100vh - 210px);

`;

const FoodCards = styled.div`
            display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    flex-basis: unset;
    gap: 16px;
    padding: 100px 0;
`;
const FoodCard = styled.div`
     display: flex;
    width: 28%;
    align-items: center;
    justify-content: center;
    border: 1px solid #fff;
    border-radius: 12px;
    padding:10px 15px;
   background: linear-gradient(to left, #d9d9d9, #d9d9d9);
   box-shadow: 0px 5.7px 9.5px 0px rgba(0, 0, 0, 0.25);
    background: radial-gradient(
    closest-side,
    rgba(165, 239, 255, 0.2) 0%,
    rgba(110, 191, 244, 0.04) 77.08333134651184%,
    rgba(70, 144, 212, 0) 100%
  );

.food_img img {
   width: 133px;
  height: 133px;
}
.food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: end;
    gap: 16px;
    }
    .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    h3{
    font-size: 16px;
    font-weight: 600;
    }
    p{
      font-size: 12px;
  font-weight: 400;
    }
}
      @media (max-width: 576px) {
      width: 100%;
      }
`;
