const enum Type {
  CLASSIC = "CLASSIC",
  SERVER_SIDE = "SERVER_SIDE",
  MVT = "MVT"
}

const enum Status {
  DRAFT = "DRAFT",
  ONLINE = "ONLINE",
  PAUSED = "PAUSED",
  STOPPED = "STOPPED",
}

const enum Paths {
  DASHBOARD = "/dashboard",
  RESULTS = "/results",
  FINALIZE = "/finalize",
}

export { Type, Status, Paths };
