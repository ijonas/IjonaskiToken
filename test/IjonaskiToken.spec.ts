const IjonaskiToken = artifacts.require('IjonaskiToken');

contract('IjonaskiToken', (accounts) => {
  const _name = "Ijonaski";
  const _symbol = "ii";
  const _decimals = 18  ;
  let token: any;

  beforeEach(async () => {
    token = await IjonaskiToken.new(_name, _symbol, _decimals)
  })

  describe('token attrs', () => {
    it('has the correct name', async () => {
      const name = await token.name();
      expect(name).to.equal(_name)
    })
    it('has the correct symbol', async () => {
      const symbol = await token.symbol();
      expect(symbol).to.equal(_symbol)
    })
    it('has the correct decimals', async () => {
      const dec = await token.decimals();
      expect(dec.toNumber()).to.equal(_decimals)
    })
  })
})