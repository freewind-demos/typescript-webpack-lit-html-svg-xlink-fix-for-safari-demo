import {directive, AttributePart} from 'lit-html';

export const xlinkNamespace = directive((value) => (part: AttributePart) => {
  part.committer.element.setAttributeNS('http://www.w3.org/1999/xlink', part.committer.name, value);
});
