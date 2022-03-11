import styled from "styled-components";
import PropTypes from "prop-types";

const NavigationWrapper = styled.section`
  margin-top: 10rem;

  @media(max-width: 480px){
    margin-top: 2rem;
    width: 40%;
  }
`;

const Title = styled.span`
  font-family: "Barlow";
  font-weight: 600;
  font-size: 1.4rem;
  line-height: 1.7rem;
  user-select: none;
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;



`;

const ListItem = styled.li`
  font-family: "Barlow";
  font-weight: 500;
  font-size: 2rem;
  line-height: 3.2rem;
  
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

Navigation.propTypes = {
  title: PropTypes.string,
  
  links: PropTypes.arrayOf(PropTypes.object)
};
export default Navigation;
