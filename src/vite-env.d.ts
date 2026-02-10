/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

declare module "*.svg?react" {
  import React from "react";
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.gif";
declare module "*.webp";
