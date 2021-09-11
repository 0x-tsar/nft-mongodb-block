// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract Cards is ERC721Enumerable{
    uint256 public nextTokenId;
    address public admin;

    constructor() ERC721("Cards", "CRD"){
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
        string league;
        string team;
        uint amountMinted;
        uint price;
    }

    mapping(address => bool) public admins;
    mapping(address => mapping(uint=>Card)) public myRepository;
    mapping(uint => Card) market;
//     // mapping(address => mapping(string=>bool)) public adminsForClub;

    function getyMyCards(uint256 i)
        external
        view
        returns (Card memory)
    {
        return myRepository[msg.sender][i];
    }

    function getCardMarket(uint256 i) external view returns (Card memory) {
        return market[i];
    }

    function allowAdmin(address addr) external {
      require(msg.sender == admin, 'only admin');
      admins[addr] = true;
    }

    function removeAdmin(address addr) external{
      require(msg.sender == admin, 'only admin');
      admins[addr] = false;
    }
    

  function mint(
        address to,
        string memory name,
        string memory imageUrl,
        Rareness rareness,
        string memory description,
        string memory nationality,
        string memory league,
        string memory team,
        uint amountMinted,
        uint price

    ) external  returns(Card memory){
        require(msg.sender == admin || admins[msg.sender], "only admin");
        _safeMint(to, nextTokenId);

        Card memory card = Card({
            owner: address(this), 
            name: name,
            urlPic: imageUrl,
            date: block.timestamp,
            description: description,
            rareness: rareness,
            isForSelling: true,
            nationality: nationality,
            league: league,
            team: team,
            amountMinted: amountMinted,
            price: price
        });

        myRepository[address(this)][nextTokenId] = card;
        market[nextTokenId] = card;
        nextTokenId++;

        return card;
    }



//     function setCardForSelling(uint cardId) external {
//         //check if owns card, 
//         //check if quantity is >= 1
//         //check if is selling
//         require(market[cardId].owner == msg.sender, "you are not the owner of this card");
//         require(myRepository[msg.sender][cardId].isForSelling, 'Card is already for selling!');
//         require(!myRepository[msg.sender][cardId].isForSelling, 'Card is already for selling!');

//     }








// function _baseURI() internal pure override returns (string memory) {
//     return "";
// }







}
