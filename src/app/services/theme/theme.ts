export interface Theme {
    name: string;
    properties: any;
  }
  
  export const light: Theme = {
    name: "light",
    properties: {
      "--main-background": "#fafafa",
      "--main-primary": "#c0c0c0",
      "--main-accent": "#015051",
      "--main-warning": "#ff5733",
      "--main-error": "#c70039",
      "--main-info": "#00adb5",
      "--main-success": "#17b978",
      "--main-font": "rgb(0, 0, 0)",
      "--main-font-fade": "rgba(0, 0, 0, 0.2)",
      "--component-background": "#ffffff"
    }
  };
  
  export const dark: Theme = {
    name: "dark",
    properties: {
      "--main-background": "#303030",
      "--main-primary": "#c0c0c0",
      "--main-accent": "#015051",
      "--main-warning": "#ff5733",
      "--main-error": "#c70039",
      "--main-info": "#00adb5",
      "--main-success": "#17b978",    
      "--main-font": "rgb(255, 255, 255)",
      "--main-font-fade": "rgba(255, 255, 255, 0.2)",    
      "--component-background": "#424242"
    }
  };
  