import styled from 'styled-components';

export const Wrapper = styled.div`
margin:0 auto; 
display:grid;
grid-template-columns:60% 30%;
grid-template-rows: 60px auto 90px;
grid-template-areas: "hd hd"
                      "image detail"
                      "info info";
gap: 20px;
`;

export const Header = styled.div`
grid-area:hd;
justify-self: start;
display:grid;
grid-template-columns:5fr 1fr 1fr;
width:100%;
margin-left:9%;
height:auto;
`;

// other components
export const Image = styled.div`
grid-area:image;
justify-self: center;
`;

export const Detail = styled.div`
grid-area:detail;
align-self: center;
justify-self: start;
`;

export const Info = styled.div`
grid-area:info;
justify-self: center;
`;
