const Mustache = require('mustache')

const view = {
  title: "Joe",
  calc: function () {
    return 2 + 4
  }
}

const output = Mustache.render('{{title}} spends {{calc}}', view)

console.log(output)