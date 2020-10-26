// @ts-ignore
import styled from 'styled-components';
import {Props} from "./Chart.types";

const ChartRoot = styled.div.attrs(props => ({
    height: props.height,
    width: props.width
}))<Props>`
   margin-top: ${({marginTop}) => marginTop}px
   margin-bottom: ${({marginBottom}) => marginBottom}px
   margin-right: ${(marginRight) => marginRight}px
   margin-left: ${(marginLeft) => marginLeft}px
   cursor: move;
   position: relative;
`;

export { ChartRoot }