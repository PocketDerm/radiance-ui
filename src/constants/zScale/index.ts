const Z_SCALE = {
  e0: 0,
  e2: 2,
  e3: 3,
  e6: 6,
  e11: 11,
  e20: 20,
  e2000: 2000,

  /*
   * Aliases
   */
  // Todo this should use one of the above declarations, but hacking for now
  modal: 999999,
} as const;

export default Z_SCALE;
