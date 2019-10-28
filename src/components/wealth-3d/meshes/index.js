import * as money from '../money-generator';

import Group10k from './group10k';
import Group1M from './group1M';
import Group100M from './group100M';

export const allMeshes = [
  Group10k,
  Group1M,
  Group100M
]

export function setState(newState) {
  function showChildrenUntil(g, showUntil) {
    console.log("showChildrenUntil", { g, name: g.name, showUntil });
    g.children.map((c, index) => (c.visible = index < showUntil));
  }

  function hideAll() {
    allMeshes.map(g => showChildrenUntil(g, 0));
  }

  hideAll();
  if (newState > money._1B){
  } else if (newState > money._1M) {
    const showCount = Math.round(newState / money._1M);
    showChildrenUntil(Group100M, showCount);
  } else if (newState > money._10k) {
    const showCount = Math.round(newState / money._10k);
    showChildrenUntil(Group1M, showCount);
  } else if (newState >= money._100) {
    const showCount = Math.round(newState / money._100);
    showChildrenUntil(Group10k, showCount);
  }
}
