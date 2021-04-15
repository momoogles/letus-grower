import { customElement, LitElement, css, html, property } from 'lit-element'

@customElement('lg-sample')
export class LgSample extends LitElement {
  @property()
  render() {
    return html`<div>Hello World!</div>`
  }

  static get styles() {
    return css`
      :host {
        display: flex;
      }
    `
  }
}
