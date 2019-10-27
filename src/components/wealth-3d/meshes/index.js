import * as money from '../money-generator';

import Group10k from './group10k';
import Group1M from './group1M';

export const allMeshes = [
  Group10k,
  Group1M
]

export function setState(newState) {
  function showChildrenUntil(g, showUntil) {
    console.log("showChildrenUntil", { g, name: g.name, showUntil });
    g.children.map((c, index) => (c.visible = index < showUntil));
  }

  if (newState > money._1B){
  } else if (newState > money._10k) {
    showChildrenUntil(Group10k, 0);
    const newMcount = Math.round(newState / money._10k);
    showChildrenUntil(Group1M, newMcount);
  } else if (newState >= money._100) {
    showChildrenUntil(Group1M, 0);
    const newMcount = Math.round(newState / money._100);
    showChildrenUntil(Group10k, newMcount);
  }
}
