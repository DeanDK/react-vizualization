import Konva from "konva";

export type Props = Konva.ShapeConfig & {
    orientation: 'vertical' | 'horizontal',
    tension?: number;
    closed?: boolean;
    bezier?: boolean;
    labelOffset?: number;
    labelText?: string;
    labelFontSize?: string;
}
