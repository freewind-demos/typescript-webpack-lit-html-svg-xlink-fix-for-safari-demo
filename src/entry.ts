import {html, render} from 'lit-html';
import {xlinkNamespace} from "./xlinkNamespace";

const goodSvgInSafari = html`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use href="${xlinkNamespace('sample.svg#Layer_1')}"/>
</svg>`

const badSvgInSafari = html`<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <use href="sample.svg#Layer_1"/>
</svg>`

render(goodSvgInSafari, document.getElementById('main1')!);
render(badSvgInSafari, document.getElementById('main2')!);
