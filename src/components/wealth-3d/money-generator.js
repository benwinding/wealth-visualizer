import * as THREE from "three";

export const _100  = 100; 
export const _1k   = 1000;
export const _10k  = 10000;
export const _100k = 100000;
export const _1M   = 1000000;
export const _10M  = 10000000;
export const _100M = 100000000;
export const _1B   = 1000000000;
export const _10B  = 10000000000;
export const _100B = 100000000000;
export const _1T   = 1000000000000;

export const note100 = {
  length: 120 * 0.9,
  width: 50 * 0.9,
  height: 0.0007
}

export const bundle10k = {
  length: note100.length,
  width: note100.width,
  height: note100.height * 10 * 1000,
}

/*

100 - 10k : cash bundle
10k - 1M : piles of bundles

*/