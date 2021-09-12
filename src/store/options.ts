export interface SVGElement {
  id: string;
  type: string; // 铅笔 钢笔
  path?: string;
  fill: string;
  stroke: string;
  strokeWidth: number;
}

export interface Style {
  fill: string;
  strokeWidth: number;
  stroke: string;
}
