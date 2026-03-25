
import { useEffect, useState } from "react";
import styled from "styled-components"
import SearchResult from "./components/SearchResult/SearchResult";


export const BASE_URL = 'http://localhost:9000';

const App = () => {
const [data, setData]=useState(null);
const[loading, setLoading]=useState(false)
const[error, setError]=useState(null)


useEffect(()=>{
const fetchFoodData=async()=>{
  setLoading(true)
 try{
   const response = await fetch(BASE_URL);
  const json=await response.json()
  console.log(json)
  setData(json)
  setLoading(false)
 }
 catch(error) {
  setError("unable to fetch data")
 }
 finally {
      setLoading(false) // best practice
    }
};
fetchFoodData()
},[]);

console.log(data);

// const temp={ 
//   image: "/images/egg.png",
// name: "Boilded Egg",
// price: 10,
// text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// type: "breakfast",
// };

if(error) return <div>{error}</div>
if(loading) return <div>Loading...</div>
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

      <SearchResult data={data}/>
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

export const Button = styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px 6px 12px;
  border:none;
  color:#fff;

`;

