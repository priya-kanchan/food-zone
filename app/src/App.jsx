
import { useState } from "react";
import styled from "styled-components"


const BASE_URL = 'http://localhost:9000/';
const App = () => {
const [data, setData]=useState(null);


  return (
    <Conatiner>
      <TopConatiner>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input type="text" placeholder="Search Food.." />
        </div>

      </TopConatiner>
      <FilterContainer>
        <Button>All</Button>
        <Button>Breakfast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>

      <FoodCardConatiner>
        <FoodCards>

        </FoodCards>
      </FoodCardConatiner>
    </Conatiner>
  );
};

export default App;
const Conatiner = styled.div`
max-width:1200px;
margin:0 auto;
`;
const TopConatiner = styled.section`
min-height:140px;
display:flex;
justify-content: space-between;
padding:16px;
align-items: center;
.search{
input{
background: transparent;
    border: 1px solid red;
    color: #fff;
    border-radius: 5px;
    height: 40px;
    font-size: 16px;
    padding: 0 10px
}

}
`;
const FilterContainer = styled.section`
display:flex;
justify-content:center;
gap:25px;
padding-bottom:40px;
`;

const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px 6px 12px;
  border:none;
  color:#fff;

`;

const FoodCardConatiner = styled.section`
    background-image: url("/bg.png");
      background-size: cover;
    height: calc(100vh - 210px);
`;

const FoodCards = styled.div`
background:transparent;
width:25%;
height: 50px;
`;
