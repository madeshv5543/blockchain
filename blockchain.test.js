const Block = require('./block');
const Blockchain = require('./blockchain');

describe('Blockchain', () => {
    let bc, bc2;

    beforeEach(() => {
        bc = new Blockchain();
        bc2 = new Blockchain();
    });

    it('first block is genesis block', () => {
        expect(bc.chain[0]).toEqual(Block.genesis())
    });

    it('add a new block', () => {
        const data = 'test data';
        bc.addBlock(data);
        expect(bc.chain[bc.chain.length - 1].data).toEqual(data)
    })

    it('validates a valid chain', () => {
        bc2.addBlock('second chain');
        expect(bc.isValidChain(bc2.chain)).toBe(true);
    })

    it('validates a bad genesis block', ()=> {
        bc2.chain[0].data = 'test corrupt';
        expect(bc.isValidChain(bc2.chain)).toBe(false)
    })

    it('validate a corrupt block other than genesis block', ()=> {
        bc2.addBlock('foo');
        bc2.chain[1].data ="Not fair";
        expect(bc.isValidChain(bc2.chain)).toBe(false)
    })

    it('replaces the chain with valid chain', () => {
        bc2.addBlock('goo');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).toEqual(bc2.chain)
    })

    it('reject the chain length less than or equal',() => {
        bc.addBlock('great');
        bc.replaceChain(bc2.chain);

        expect(bc.chain).not.toEqual(bc2.chain);
    })

})