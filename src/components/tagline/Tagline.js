import { useParallax } from "react-scroll-parallax";
import styled from 'styled-components'

const Taglines = styled.section`
h2{font-family: 'Kelson Sans';
font-weight: 600;
font-size: 9.6rem;
line-height: 11.2rem;
white-space: nowrap;
text-transform: uppercase;
color: #000;

@media(max-width: 480px){
  font-size: 5rem;
  line-height: 6rem;
  margin-bottom: 10rem;
}
}

:nth-child(1){
  margin-bottom: 0px;
}

> * {
  &:nth-child(1) {
    margin-bottom: 0px;
  }

  &:nth-child(2){
  margin-top: 0px;
}}
`
const Tagline = () => {
  const text =
    "You dream it. We plan it. — You dream it. We plan it. — You dream it. We plan it.";

    const textToLeft = useParallax({
     translateX: ['-50px', '-200px'],
    })
    const textToRight = useParallax({
      translateX: ['-700px', '-200px'],
     })

  return (
      <Taglines>
                    <h2 ref={textToLeft.ref}>{text}</h2>
                    <h2 ref={textToRight.ref}>{text}</h2>

      </Taglines>

  );
};

export default Tagline;
