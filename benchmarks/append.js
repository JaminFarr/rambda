const R = require("../rambda")
const Ramda = require("ramda")
const _ = require("lodash")
const Benchmark = require("benchmark")

const suite = new Benchmark.Suite();

suite.add("Rambda.append", () => {
  R.append(0)([ 1, 2, 3, 4 ])
})
.add("Ramda", () => {
  Ramda.append(0)([ 1, 2, 3, 4 ])
})

module.exports = suite;