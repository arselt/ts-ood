// function getValue(value: number) {
//     return value;
// }

function getValue<MyType>(value: MyType) {
    return value;
}

getValue<number>(23.43).toFixed();
getValue<string>('63').length;
getValue<number[]>([23, 32]).pop();