class HelloWorld extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
            display: block;
            padding: 10px;
            background-color: #eee;
        }
      </style>
      <h1>Hello World!</h1>
    `;
  };

  connectedCallback() {
    console.log('自定义元素首次被渲染到文档的时候被调用');
  }

  disconnectedCallback() {
    console.log('自定义元素在文档中被移除时调用');
  }

  adoptedCallback() {
    console.log('自定义元素被移动到新的文档时被调用');
  }

  attributeChangedCallback() {
    console.log('自定义元素的属性修改时调用');
  }
}

window.customElements.define('hello-world', HelloWorld);