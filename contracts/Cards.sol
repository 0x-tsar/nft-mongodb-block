// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;

// import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Cards is ERC721Enumerable{
    uint256 public nextTokenId;
    address public admin;

    constructor() ERC721("Pixel Art", "PAR") {
        admin = msg.sender;
    }

    enum Rareness {
        Normal,
        Rare,
        Festive,
        Relic
    }

  struct Card {
    address owner;
    string name;
    string urlPic;
    // uint256 date;
    string description;
    // Rareness rareness;
    // bool isForSelling;
    // string nationality;
    // string league;
    // string team;
    // uint256 amountMinted;
    // uint256 price;
  }


    mapping(address => bool) public admins;
    mapping(address => mapping(uint256 => Card)) public myRepository;
    mapping(uint256 => Card) market;

    event evento( string );

    function getyMyCards(uint256 i) external view returns (Card memory) {
        return myRepository[msg.sender][i];
    }

    function getCardMarket(uint256 i) external view returns (Card memory) {
        return market[i];
    }
    
    function mint() external  {
        // _safeMint(address(this), nextTokenId);
        //safeMint is not working, fix it later?
        _mint(address(this), nextTokenId);

        Card memory card = Card({
            owner: address(this),
            name: "Botafogo x Sao Paulo",
            urlPic: "../card2.png",
            // date: block.timestamp,
            description: "Hernanes nos 2 gols na virada que salvou o Tricolor do rebaixamento de 2017"
            // rareness: Rareness.Festive
            // isForSelling: true,
            // nationality: nationality,
            // league: league,
            // team: team,
            // amountMinted: amountMinted,
            // price: price
        });
        
        myRepository[address(this)][nextTokenId] = card;
        market[nextTokenId] = card;
        nextTokenId++;
        emit evento("evento criado");
     }

    // function _baseURI() internal pure override returns (string memory) {
    //     return "";
    // }
}
