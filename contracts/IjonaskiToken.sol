pragma solidity 0.5.8;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/token/ERC20/ERC20Detailed.sol";

contract IjonaskiToken is ERC20, ERC20Detailed {
  
  constructor (string memory name, string memory symbol, uint8 decimals) 
    ERC20Detailed(name, symbol, decimals) 
    public 
  {
    
  }

}