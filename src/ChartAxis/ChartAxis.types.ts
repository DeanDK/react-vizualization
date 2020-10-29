import Konva from "konva";

export type Props = Konva.ShapeConfig & {
    /**
     * Represents x or y axis
     *
     * @default
     */
    orientation: 'vertical' | 'horizontal',
    /**
     * Chart axis tension
     *
     * @default 0
     */
    tension?: number;
    /**
     * Represents line shape, open or closed
     *
     * @default false
     */
    closed?: boolean;
    /**
     * Determines if line is bezier
     *
     * @default false
     */
    bezier?: boolean;
    /**
     *
     *
     * @default 0
     */
}
