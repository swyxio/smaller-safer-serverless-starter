declare namespace JSX {
  // // if you need to consume web components
  // // https://wespeter.com/posts/consuming-web-component-react-typescript/
  // interface IntrinsicElements {
  //   "half-circle-spinner": any;
  // }
}

declare namespace React {
  // Preact supports using "class" instead of "classname"
  // need to teach typescript
  // https://stackoverflow.com/questions/40093655/how-do-i-add-attributes-to-existing-html-elements-in-typescript-jsx
  interface HTMLAttributes<T> {
    class?: string;
  }
  interface SVGAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    class?: string;
  }
}
