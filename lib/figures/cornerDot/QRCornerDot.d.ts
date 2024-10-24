import { CornerDotType, RotateFigureArgs, BasicFigureDrawArgs, DrawArgs, Window } from "../../types";
export default class QRCornerDot {
    _element?: SVGElement;
    _svg: SVGElement;
    _type: CornerDotType;
    _window: Window;
    constructor({ svg, type, window }: {
        svg: SVGElement;
        type: CornerDotType;
        window: Window;
    });
    draw(x: number, y: number, size: number, rotation: number): void;
    _rotateFigure({ x, y, size, rotation, draw }: RotateFigureArgs): void;
    _basicDot(args: BasicFigureDrawArgs): void;
    _basicSquare(args: BasicFigureDrawArgs): void;
    _basicRoundedSquare(args: BasicFigureDrawArgs): void;
    _basicRoundedSquareRightBottomEdge(args: BasicFigureDrawArgs): void;
    _basicLeaf(args: BasicFigureDrawArgs): void;
    _basicCircleLeftTopEdge(args: BasicFigureDrawArgs): void;
    _basicCircleRightBottomEdge(args: BasicFigureDrawArgs): void;
    _basicDiamond(args: BasicFigureDrawArgs): void;
    _basicStar(args: BasicFigureDrawArgs): void;
    _basicPlus(args: BasicFigureDrawArgs): void;
    _basicCross(args: BasicFigureDrawArgs): void;
    _basicRhombus(args: BasicFigureDrawArgs): void;
    _drawDot({ x, y, size, rotation }: DrawArgs): void;
    _drawSquare({ x, y, size, rotation }: DrawArgs): void;
    _drawStar({ x, y, size, rotation }: DrawArgs): void;
    _drawPlus({ x, y, size, rotation }: DrawArgs): void;
    _drawSquareRounded({ x, y, size, rotation }: DrawArgs): void;
    _drawSquareRoundedRightBottomEdge({ x, y, size, rotation }: DrawArgs): void;
    _drawLead({ x, y, size, rotation }: DrawArgs): void;
    _drawCircleLeftTopEdge({ x, y, size, rotation }: DrawArgs): void;
    _drawCircleRightBottomEdge({ x, y, size, rotation }: DrawArgs): void;
    _drawDiamond({ x, y, size, rotation }: DrawArgs): void;
    _drawCross({ x, y, size, rotation }: DrawArgs): void;
    _drawRhombus({ x, y, size, rotation }: DrawArgs): void;
}
