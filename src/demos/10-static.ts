console.log(Math.PI);
console.log(Math.max(1, 2, 4, 1,2, 3245, 7432, 231, 2312, 123, 124));

class MyMath {
    static readonly PI = 3.14;
    // there's no need to create an instance with static and readonly prohibits modifying it

    static max(...numbers: number[]) {
        return numbers.reduce((max, item) => max >= item ? max: item);
    }
}

// const math = new MyMath();
// console.log(math.PI)

console.log('Own PI ', MyMath.PI);
console.log('Own Max ', MyMath.max(23, 6434, 1, 2, 3, 4, 523, 81));

const numbers = [1, 2, 4, 1,2, 3245, 7432, 231, 2312, 89623];
console.log('Own Max w/Array ', MyMath.max(...numbers));

const negatives = [-2, -4, -56, -3]
console.log('Own Max w/Array negatives ', MyMath.max(...negatives));