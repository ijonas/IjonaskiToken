const IjonaskiToken = artifacts.require('IjonaskiToken');

import * as chai from "chai";
const expect = chai.expect;

contract('IjonaskiToken', accounts => {
  const _name = "Ijonaski";
  const _symbol = "ii";
  const _decimals = 18  ;

  beforeEach(async () => {
    this.token = await IjonaskiToken.new(_name, _symbol, _decimals)
  })

  describe('token attrs', () => {
    it('has the correct name', async () => {
      const name = await this.token.name();
      name.should.equal(_name);
    })
    it('has the correct symbol', async () => {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol)      
    })
    it('has the correct decimals', async () => {
      const dec = await this.token.decimals();
      dec.toNumber().should.equal(_decimals)            
    })
  })
})