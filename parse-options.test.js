const parseOptions = require('./')

describe('parseOptions', () => {
  it('should return empty options if nothing provided', () => {
    expect(parseOptions()).toEqual({})
  })

  it('should parse options in string', () => {
    expect(parseOptions('--red=yes --old=no --what no ---thanks ---wat=ok'))
      .toEqual({ red: 'yes', old: 'no', what: true })
  })
})

