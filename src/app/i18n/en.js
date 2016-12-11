export const formats = {
  decimal: '.',
  thousands: ',',
  grouping: [3],
  currency: ['$', ''],
  dateTime: '%a %b %e %X %Y',
  date: '%m/%d/%Y',
  time: '%H:%M:%S',
  periods: ['AM', 'PM'],
  days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  shortMonths: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
};

export const terms = {
  PHRASE_ALT_ALL: 'Alt + Click to fill all slots',
  PHRASE_BACKUP_DESC: 'Backup of all Coriolis data to save or transfer to another browser/device',
  PHRASE_CONFIRMATION: 'Are you sure?',
  PHRASE_EXPORT_DESC: 'A detailed JSON export of your build for use in other sites and tools',
  PHRASE_FASTEST_RANGE: 'Consecutive max range jumps',
  PHRASE_IMPORT: 'Paste JSON or import here',
  PHRASE_LADEN: 'Ship mass + fuel + cargo',
  PHRASE_NO_BUILDS: 'No builds added to comparison!',
  PHRASE_NO_RETROCH: 'No Retrofitting changes',
  PHRASE_SELECT_BUILDS: 'Select builds to compare',
  PHRASE_SG_RECHARGE: 'Time from 50% to 100% charge',
  PHRASE_SG_RECOVER: 'Recovery (to 50%) after collapse',
  PHRASE_UNLADEN: 'Ship mass excluding fuel and cargo',
  PHRASE_UPDATE_RDY: 'Update Available! Click to refresh',

  HELP_MODIFICATIONS_MENU: 'Click on a number to enter a new value, or drag along the bar for small changes',

  // Other languages fallback to these  values
  // Only Translate to other languages if the name is different in-game
  am: 'Auto Field-Maintenance Unit',
  bh: 'Bulkheads',
  bl: 'Beam Laser',
  bsg: 'Bi-Weave Shield Generator',
  c: 'Cannon',
  cc: 'Collector Limpet Controller',
  ch: 'Chaff Launcher',
  cr: 'Cargo Rack',
  cs: 'Manifest Scanner',
  dc: 'Docking Computer',
  ec: 'Electronic Countermeasure',
  fc: 'Fragment Cannon',
  fh: 'Fighter Hangar',
  fi: 'FSD Interdictor',
  fs: 'Fuel Scoop',
  fsd: 'Frame Shift Drive',
  ft: 'Fuel Tank',
  fx: 'Fuel Transfer Limpet Controller',
  hb: 'Hatch Breaker Limpet Controller',
  hr: 'Hull Reinforcement Package',
  hs: 'Heat Sink Launcher',
  kw: 'Kill Warrant Scanner',
  ls: 'Life Support',
  mc: 'Multi-cannon',
  ml: 'Mining Laser',
  mr: 'Missile Rack',
  nl: 'Mine Launcher',
  pa: 'Plasma Accelerator',
  pas: 'Planetary Approach Suite',
  pc: 'Prospector Limpet Controller',
  pce: 'Economy Class Passenger Cabin',
  pci: 'Business Class Passenger Cabin',
  pcm: 'First Class Passenger Cabin',
  pcq: 'Luxury Passenger Cabin',
  pd: 'power distributor',
  pl: 'Pulse Laser',
  po: 'Point Defence',
  pp: 'Power Plant',
  psg: 'Prismatic Shield Generator',
  pv: 'Planetary Vehicle Hangar',
  rf: 'Refinery',
  rg: 'Rail Gun',
  s: 'Sensors',
  sb: 'Shield Booster',
  sc: 'Scanner',
  scb: 'Shield Cell Bank',
  sg: 'Shield Generator',
  t: 'thrusters',
  tp: 'Torpedo Pylon',
  ul: 'Burst Laser',
  ws: 'Frame Shift Wake Scanner',

  // Items on the outfitting page
  // Notification of restricted slot for Orca/Beluga
  emptyrestricted: 'empty (restricted)',
  // 'ammo' was overloaded for outfitting page and modul info, so changed to ammunition for outfitting page
  ammunition: 'Ammo',

  // Unit for seconds
  secs: 's',

  // Weapon, offence, defence and movement
  dpe: 'Damage per MJ of energy',
  dps: 'Damage per second',
  sdps: 'Sustained damage per second',
  dpssdps: 'Damage per second (sustained damage per second)',
  eps: 'Energy per second',
  epsseps: 'Energy per second (sustained energy per second)',
  hps: 'Heat per second',
  hpsshps: 'Heat per second (sustained heat per second)',
  'damage by': 'Damage by',
  'damage from': 'Damage from',
  'shield cells': 'Shield cells',
  'recovery': 'Recovery',
  'recharge': 'Recharge',
  'engine pips': 'Engine Pips',
  'speed': 'Speed',
  'pitch': 'Pitch',
  'roll': 'Roll',
  'yaw': 'Yaw',

  // Modifications
  ammo: 'Ammunition maximum',
  boot: 'Boot time',
  brokenregen: 'Broken regeneration rate',
  burst: 'Burst',
  clip: 'Ammunition clip',
  damage: 'Damage',
  distdraw: 'Distributor draw',
  duration: 'Duration',
  eff: 'Efficiency',
  engcap: 'Engines capacity',
  engrate: 'Engines recharge rate',
  explres: 'Explosive resistance',
  facinglimit: 'Facing limit',
  hullboost: 'Hull boost',
  hullreinforcement: 'Hull reinforcement',
  integrity: 'Integrity',
  jitter: 'Jitter',
  kinres: 'Kinetic resistance',
  maxfuel: 'Maximum fuel per jump',
  mass: 'Mass',
  optmass: 'Optimal mass',
  optmul: 'Optimal multiplier',
  pgen: 'Power generation',
  piercing: 'Piercing',
  power: 'Power draw',
  range: 'Range',
  ranget: 'Range', // Range in time (for FSD interdictor)
  regen: 'Regeneration rate',
  reload: 'Reload time',
  rof: 'Rate of fire',
  shield: 'Shield',
  shieldboost: 'Shield boost',
  shieldreinforcement: 'Shield reinforcement',
  spinup: 'Spin up time',
  syscap: 'Systems capacity',
  sysrate: 'Systems recharge rate',
  thermload: 'Thermal load',
  thermres: 'Thermal resistance',
  wepcap: 'Weapons capacity',
  weprate: 'Weapons recharge rate',
};
