import styled from "styled-components";

const NavigationWrapper = styled.section`
  margin-top: 100px;
`;

const Title = styled.span`
  font-family: "Barlow";
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  user-select: none;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  font-family: "Barlow";
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;

  a {
    text-decoration: none;
    color: #fff;
  }

  a:hover{
    color:rgba(255, 255, 255, 0.75)

  }
`;
const Navigation = (props) => {
  const title = props.title;

  return (
    <NavigationWrapper>
      <Title>{title}</Title>
      <List>
        {props.links.map((item) => (
          <ListItem key={item.id}>
            <a href="/">{item.link}</a>
          </ListItem>
        ))}
      </List>
    </NavigationWrapper>
  );
};

export default Navigation;
