import styled from "styled-components";

export const Box = styled.div`
  width: 400px;
  height: 400px;
  background-color: #fbffe4;
  margin-top: 40px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  -moz-box-shadow: 3px 3px 16px 4px rgba(92,92,92,1);
  box-shadow: 3px 3px 16px 4px #585858be;
`

export const PhotoUser = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: blue;
  margin-top: 20px;
`

export const WrapInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`

export const Label = styled.div`
  color: grey;
  font-size: 11px;
`

export const InfoLabel = styled.p`
  font-size: 12px;
  margin-top: 5px;
`
