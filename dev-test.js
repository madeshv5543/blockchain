const Block = require('./block');
const Blockchain = require('./blockchain');

const bc = new Blockchain();
const bc2 = new Blockchain();
console.log(JSON.stringify(bc.chain[0]))
console.log(JSON.stringify(bc.chain[0]) !== JSON.stringify(Block.genesis()))

const firstBlock = Block.mineBlock(Block.genesis(), "first block data");
console.log(firstBlock.toString())