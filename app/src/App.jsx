
import { useEffect, useState } from "react";
import styled from "styled-components"
import SearchResult from "./components/SearchResult/SearchResult";


export const BASE_URL = 'http://localhost:9000';

const App = () => {
const [data, setData]=useState(null);
const [filteredData, setFilteredData]= useState(null);
const[loading, setLoading]=useState(false);
const[error, setError]=useState(null);
const [selectedButton, setSelectedButton]= useState("all");


useEffect(()=>{
const fetchFoodData=async()=>{
  setLoading(true)
 try{
   const response = await fetch(BASE_URL);
  const json=await response.json()
  console.log(json)
  setData(json)
  setFilteredData(json)
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



// Filter data start from search
const searchFood=(e)=>{
  const searchValue=e.target.value;
  console.log(searchValue);
  if(searchValue == ""){
    setFilteredData(null)
  }
  const filter = data?.filter((food)=>
    food.name.toLowerCase().includes(searchValue.toLowerCase()));
  setFilteredData(filter)
};
// Filter data end from search
// Filter by BUtton start
const filterFood=(type)=>{
if(type == "all"){
  setFilteredData(data);
  setSelectedButton("all");
  return;
}
const filter = data?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase()));
setFilteredData(filter)
setSelectedButton(type)
}
//  Filter by BUtton end

const filterBtns=[
  {
    name:"all",
    type:"all"
  },
  {
    name:"Breakfast",
    type:"breakfast"
  },
  {
    name:"Lunch",
    type:"lunch"
  },
  {
    name:"Dinner",
    type:"dinner"
  }
]

if(error) return <div>{error}</div>
if(loading) return <div>Loading...</div>
  return (
   <>
    <Conatiner>
      <TopConatiner>
        <div className="logo">
          <img src="/logo.svg" alt="logo" />
        </div>
        <div className="search">
          <input type="text" onChange={searchFood} placeholder="Search Food.." />
        </div>

      </TopConatiner>

      {/* button show using map */}
      <FilterContainer>
        {
          filterBtns.map((value)=>(
        <Button key={value.name} onClick={() => filterFood(value.type)}>
          {value.name}</Button>
          ))
        }               
      </FilterContainer>

    </Conatiner>
      <SearchResult data={filteredData}/>
      </>

  );
};

export default App;
export const Conatiner = styled.div`
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
  cursor: pointer;
&:hover{
 background: #ff0b0b;
}
`;

