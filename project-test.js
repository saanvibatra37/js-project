// Creating an array to store multiple NFTs.
const NFTs =[];
function mintnft(Name ,Price ,Creator,Token_ID,Description)
{
   const metadata={
        name:Name,
        price:Price,
        creator:Creator,
        description:Description,
        token_ID:Token_ID
    };
    NFTs.push(metadata);
    console.log("Minted "+ Name+" Sucessfully \n");
}
// ListNFTs function will print all the metadata.
function listNFTs()
{
    for(let i =0;i<NFTs.length;i++)
    {
        console.log("Name:   "+NFTs[i].name);
        console.log("Price:   "+NFTs[i].price);
        console.log("Creator:   "+NFTs[i].creator);
        console.log("Description:   "+NFTs[i].description);
        console.log("Token ID:   "+NFTs[i].token_ID);
    }
}
function getTotalSupply() 
{
    console.log("\nTotal Number of NFTs minted: "+NFTs.length);
}
mintnft("Saanvi",1050,"K1x9c",1001,"Audio Based");
listNFTs();
getTotalSupply();
