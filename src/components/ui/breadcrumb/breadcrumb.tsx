import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'stellar-breadcrumb',
  styleUrl: 'breadcrumb.css'
})

export class Breadcrumb {
  @Element() element: HTMLElement;

  @Prop() color: string;
  @Prop() href: string = "/";
  @Prop() target: string = "_self";
  @Prop({mutable: true}) label: string = "Breadcrumb link";
  @Prop() disabled: boolean = false;

  componentDidLoad() {
    this.label += ` for ${this.element.textContent}`
  }

  render() {
    return (
      <a class="button" href={this.href} target={this.target} aria-label={this.label} title={this.label} data-disabled={this.disabled}>
        <slot></slot>
      </a>
    );
  }
}
