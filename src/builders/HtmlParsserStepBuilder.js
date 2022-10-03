const StepBuilder = require('./StepBuilder')

class HtmlParserStepBuilder extends StepBuilder {

  build () {
    const instance = super.build()
    instance.resultVarName = this._mxObject.$.resultVarName
    instance.url = this._mxObject.$.url
    return instance
  }
}

module.exports = HtmlParserStepBuilder
