import styled from 'styled-components'

export const HomeContainer = styled.div`
  background-color: #f5faf0;
  width: 60%;
  height: 70%;
  margin: 0 auto;
  border-radius: 10px;
  -webkit-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  -moz-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  box-shadow: 3px 3px 16px 4px #585858be;

  @media screen and (max-width: 768px) {
    width: 85%;
  }
`
