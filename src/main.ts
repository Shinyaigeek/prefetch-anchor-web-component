class PrefetchContainer extends HTMLElement {
    shadow: ShadowRoot;
    constructor() {
        super();

        this.shadow = this.attachShadow({mode: 'open'});
        this.shadow.innerHTML = `<slot></slot>`
    }
}