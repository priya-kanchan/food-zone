import React from 'react'
import styled from 'styled-components'
import { BASE_URL } from "../../App"
import { Button } from '../../App'

const SearchResult = ({ data }) => {
    return (
        <FoodCardConatiner>
            <FoodCards>
                {
                    data?.map(({name, image, text, price}) => (
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
        </FoodCardConatiner>
    )
}

export default SearchResult


const FoodCardConatiner = styled.section`
    background-image: url("/bg.png");
      background-size: cover;
    height: calc(100vh - 210px);
`;

const FoodCards = styled.div`

`;
const FoodCard = styled.div`

.food_img img {
  width: 200px;
}
`;
