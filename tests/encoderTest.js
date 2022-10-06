import { test, assertEq } from './test.js';
import { Instruction } from '../core/Instruction.js';

// OP
test('enc - OP - add', function () {
    let inst = new Instruction('add x5, x6, x7');
    let abiInst = new Instruction('add t0, t1, t2');
    assertEq(abiInst.bin, '00000000011100110000001010110011');
    assertEq(inst.bin, '00000000011100110000001010110011');
})

// JALR
test('enc - JALR - jalr', function () {
    let inst = new Instruction('jalr x16, x5, 24');
    let abiInst = new Instruction('jalr a6, t0, 24');
    assertEq(abiInst.bin, '00000001100000101000100001100111');
    assertEq(inst.bin, '00000001100000101000100001100111');
})

// LOAD
test('enc - LOAD - lw', function () {
    let inst = new Instruction('lw x10, 12(x8)');
    let abiInst = new Instruction('lw a0, 12(fp)');
    assertEq(abiInst.bin, '00000000110001000010010100000011');
    assertEq(inst.bin, '00000000110001000010010100000011');
})

// OP-IMM
test('enc - OP-IMM - addi', function () {
    let inst = new Instruction('addi x15, x1, -50');
    let abiInst = new Instruction('addi a5, ra, -50');
    assertEq(abiInst.hex, 'fce08793');
    assertEq(inst.hex, 'fce08793');
})

// MISC-MEM
test('enc - MISC-MEM - fence', function () {
    let inst = new Instruction('fence iorw, rw');
    assertEq(inst.hex, '0f30000f');
})

// MISC-MEM (Zifencei)
test('enc - MISC-MEM (Zifencei) - fence.i', function () {
    let inst = new Instruction('fence.i');
    assertEq(inst.hex, '0000100f');
})

// SYSTEM (trap)
test('enc - SYSTEM (trap) - ecall', function () {
    let inst = new Instruction('ecall');
    assertEq(inst.hex, '00000073');
})

// STORE
test('enc - STORE - sb', function () {
    let inst = new Instruction('sb x14, 8(x2)');
    let abiInst = new Instruction('sb a4, 8(sp)');
    assertEq(abiInst.bin, '00000000111000010000010000100011');
    assertEq(inst.bin, '00000000111000010000010000100011');
})

// BRANCH
test('enc - BRANCH - bne', function () {
    let inst = new Instruction('bne x19, x11, 16');
    let abiInst = new Instruction('bne s3, a1, 16');
    assertEq(abiInst.bin, '00000000101110011001100001100011');
    assertEq(inst.bin, '00000000101110011001100001100011');
})

// LUI
test('enc - LUI - lui', function () {
    let inst = new Instruction('lui x17, 4892');
    let abiInst = new Instruction('lui a7, 4892');
    assertEq(abiInst.hex, '0131c8b7');
    assertEq(inst.hex, '0131c8b7');
})

// AUIPC
test('enc - AUIPC - auipc', function () {
    let inst = new Instruction('auipc x3, 30');
    let abiInst = new Instruction('auipc gp, 30');
    assertEq(abiInst.bin, '00000000000000011110000110010111');
    assertEq(inst.bin, '00000000000000011110000110010111');
})

// JAL
test('enc - JAL - jal', function () {
    let inst = new Instruction('jal x5, 132');
    let abiInst = new Instruction('jal t0, 132');
    assertEq(abiInst.bin, '00001000010000000000001011101111');
    assertEq(inst.bin, '00001000010000000000001011101111');
})
