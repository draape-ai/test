import { Measurements } from "@/lib/types";

// Define the pattern type with attributes being of type Attribute
type Pattern = {
    patternid: number;
    name: string;
    file: string;
    waist: String[];
    shoulderWidth: String[];
    hip: String[];
    height: String[];
    attributes: Attribute[];  // Array of attributes for each pattern
    defaultMeasurements: Measurements;
  };
  
  // Define an attribute which has an id, an attribute type, and any additional data needed for the type
  type Attribute = {
    id: string;
    type: AttributeType;      // The type of the attribute, e.g., line, rect, path, etc.
    properties: SVGProperties;  // Custom properties for that particular SVG element type
  };
  
  // Define a union type for possible SVG element types like line, rect, path, etc.
  type AttributeType = 'line' | 'rect' | 'circle' | 'path' | 'polygon' | 'polyline' | 'ellipse';
  
  // Define a type for general SVG properties that could be common across elements
  type SVGProperties = {
    fill?: string;
    stroke?: string;
    strokeWidth?: number;
    transform?: string;
  };
  
  // Extend this type to include specific properties for different SVG element types
  type LineProperties = SVGProperties & {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
  };
  
  type RectProperties = SVGProperties & {
    width: number;
    height: number;
    x: number;
    y: number;
    rx?: number;
    ry?: number;
  };
  
  type CircleProperties = SVGProperties & {
    cx: number;
    cy: number;
    r: number;
  };
  
  type PathProperties = SVGProperties & {
    d: string; // Path data
  };
  
  // Example usage
  const patterns: Pattern[] = [
    {
        patternid: 1,
        name: "square",
        file: "/patterns/example_square.svg",
        waist: ["line-0", "path-1", "path-2"],
        height: [],
        hip: [],
        shoulderWidth: [],
        attributes: [
          {
            id: "line-0",
            type: "line",
            properties: {
              x1: 210.68,
              y1: 0.5,
              x2: 210.68,
              y2: 420,
              stroke: "#231f20",
              className: "cls-1"
            } as LineProperties
          },
          {
            id: "line-2",
            type: "line",
            properties: {
              x1: 0.5,
              y1: 132.26,
              x2: 420,
              y2: 132.26,
              stroke: "#231f20",
              className: "cls-1"
            } as LineProperties
          },
          {
            id: "line-1",
            type: "line",
            properties: {
              x1: 100.5,
              y1: 284.03,
              x2: 320.5,
              y2: 284.03,
              stroke: "#231f20",
              className: "cls-1"
            } as LineProperties
          },
          {
            id: "line-3",
            type: "line",
            properties: {
              x1: 0.5,
              y1: 132.26,
              x2: 210.68,
              y2: 0.5,
              stroke: "#231f20",
              className: "cls-1"
            } as LineProperties
          },
          {
            id: "line-4",
            type: "line",
            properties: {
              x1: 210.68,
              y1: 0.5,
              x2: 420,
              y2: 132.26,
              stroke: "#231f20",
              className: "cls-1"
            } as LineProperties
          },
          {
            id: "path-left-arc",
            type: "path",
            properties: {
              d: "M 0.5 132.26 Q 201 284.03 0.5 420",
              stroke: "black",
              fill: "transparent"
            } as PathProperties
          },
          {
            id: "path-right-arc",
            type: "path",
            properties: {
              d: "M 420 132.26 Q 220 284.03 420 420",
              stroke: "black",
              fill: "transparent"
            } as PathProperties
          }
        ],
        defaultMeasurements: {
          height: 60,
          shoulder_width: 40,
          waist: 30,
          hip: 35,
        }
    },
    {
      patternid: 2,
      name: "rect-pattern",
      file: "rect.svg",
      waist: [],
      height: [],
      hip: [],
      shoulderWidth: [],
      attributes: [
        {
          id: "rect1",
          type: "rect",
          properties: {
            fill: "#00ff00",
            width: 100,
            height: 50,
            x: 10,
            y: 10,
            rx: 5,
            ry: 5
          } as RectProperties,
        },
      ],
      defaultMeasurements: {
        height: 60,
        shoulder_width: 40,
        waist: 30,
        hip: 35,
      }
    },
  ];
  
  export default patterns;
  