import { useParallax } from "react-scroll-parallax";
import styled from 'styled-components'

const Taglines = styled.section`
h2{font-family: 'Kelson Sans';
font-weight: 600;
font-size: 96px;
line-height: 112px;
white-space: nowrap;
text-transform: uppercase;
color: #000;}

:nth-child(1){
  margin-bottom: 0px;
}

> * {
  &:nth-child(1) {
    margin-bottom: 0px;
  }

  &:nth-child(2){
  margin-top: 0px;
}
}


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
