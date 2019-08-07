module.exports = (options) =>
  (options || '').split(' ').reduce(
    (optionsObj, option, index) => {
      const boolOption = option.match(/^--([a-z]+)$/)
      if (boolOption) {
        optionsObj[boolOption[1]] = true
      }

      const keyValueOption = option.match(/^--([a-z]+)=([a-z]+)/)

      if (keyValueOption) {
        optionsObj[keyValueOption[1]] = keyValueOption[2]
      }

      return optionsObj
    },
    {}
  )
