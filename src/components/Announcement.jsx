import styled from "styled-components";

const Container = styled.div`
  height: 90px;
  background-color: #E91E63;
  color: white;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 90px;
  font-weight: 500;
  padding:10px;
  border:3px solid black;
`;

const Announcement = () => {
  return <Container>WeebKing</Container>;
};

export default Announcement;