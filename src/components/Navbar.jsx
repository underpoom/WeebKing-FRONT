import { Badge } from "@material-ui/core";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  font-size:25px;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
 
  flex: 1;
  font-size:10px;
  text-align: center;
  width: 200px;
`;

const Logo = styled.h1`
  font-weight: bold;
  height:30px;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  
  font-size: 30px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px"})}
  
`;



const Navbar = (type) => {
  const quantity = useSelector(state=>state.cart.quantity)
  const user = useSelector((state) => state.user.currentUser);
  
 
 
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 30 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>{user!==null?'Welcome : '+user.email:'Please register or login.'}</Logo>
        </Center>
        <Right>
          {user==null?'':<MenuItem onClick= {()=>localStorage.clear()}>Log out</MenuItem>}

          {user==null?<Link to="/register" style={{textDecoration:"none"}} ><MenuItem > REGISTER </MenuItem></Link>:''}
          {user==null?<Link to="/login" style={{textDecoration:"none"}}><MenuItem >LOGIN</MenuItem></Link>:''}
          
          
          <Link to="/cart">
          <MenuItem>
            <Badge badgeContent={quantity} color="primary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
          </Link>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;