import  styled  from 'styled-components'
import React from 'react'
import CategoryItem from './CategoryItem'
import { categories } from '../data';
import { mobile } from '../responsive';


const Container = styled.div`
display:flex;
padding: 20px;
justify-content:space-between;
${mobile({ padding: "0", flexDirection:"column"})}

`;

export const Categories = () => {
  return <Container>
    {categories.map(item =>(
        <CategoryItem item={item} key={item.id}/>
    ))}
    </Container>;
  
}

export default Categories;