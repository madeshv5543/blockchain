const Block = require('./block');

describe('Block', () => {
    let data, lastBlock, block;
    beforeEach(() => {
         data = "block data",
         lastBlock = Block.genesis(),
         block = Block.mineBlock(lastBlock, data)
    })
    it('sets the `data` to math the input', () => {
        expect(block.data).toEqual(data)
    })

    it('sets the `lastHash` to math lastblock hash', () => {
        expect(block.lastHash).toEqual(lastBlock.hash)
    })
})