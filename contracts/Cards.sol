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
    uint256 date;
    string description;
    Rareness rareness;
    bool isForSelling;
    string nationality;
    // string league;
    string team;
    uint256 amountMinted;
    uint256 price;
    uint tokenId;
  }


    mapping(address => bool) public admins;
    mapping(address => mapping(uint256 => Card)) public accountCollection;
    mapping(uint256 => Card) market;

    event evento( string );

    function getyMyCards(uint256 i) external view returns (Card memory) {
        return accountCollection[msg.sender][i];
    }

    function getCardMarket(uint256 i) external view returns (Card memory) {
        return market[i];
    }
    
    function mint(string memory name, 
        string memory urlPic,
        string memory description,
        Rareness rareness,
        string memory nationality,
        // string memory league,
        string memory team,
        uint amountMinted,
        uint price
        ) external {
        require(msg.sender == admin || admins[msg.sender], 'msg sender not allowed!');
        //safeMint is not working, fix it later?
        // _safeMint(address(this), nextTokenId);
        _mint(address(this), nextTokenId);

        Card memory card = Card({
            owner: address(this),
            name: name,
            urlPic: urlPic,
            date: block.timestamp,
            description: description,
            rareness: rareness,

            isForSelling: true,
            nationality: nationality,
            // league: league,
            team: team,
            amountMinted: amountMinted,
            price: price,
            tokenId: nextTokenId
        });
        
        accountCollection[address(this)][nextTokenId] = card;
        market[nextTokenId] = card;
        nextTokenId++;
        emit evento("evento criado");
     }

     function setIsForSelling(uint i, bool isForSelling) external {
         accountCollection[msg.sender][i].isForSelling = isForSelling;
         market[i].isForSelling = isForSelling;
     }

    // buy any card from market
     function buyCard(uint cardId) external payable{
         require(msg.sender != market[cardId].owner, 'you are the owner of this card');
         require(market[cardId].isForSelling, 'card is not for sale');
         require(msg.value >= market[cardId].price, 'your payment is not enough');
    
        address payable seller_address = payable(address(ownerOf(cardId)));
        seller_address.transfer(msg.value);
        //copying card from seller account to new owne
         accountCollection[msg.sender][cardId] = accountCollection[ownerOf(cardId)][cardId];
         accountCollection[msg.sender][cardId].isForSelling = false;
         accountCollection[msg.sender][cardId].owner = msg.sender;
        //now deleting the card from the previous owner and also from the market
         delete accountCollection[ownerOf(cardId)][cardId];
         delete market[cardId];
        //  add some event of buying here
     }

    // function _baseURI() internal pure override returns (string memory) {
    //     return "";
    // }
}
