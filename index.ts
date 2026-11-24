export function merge (collection1: number[], collection2: number[], collection3: number[]): number[] {
    let mergedCollection: number[] = [];
    let i = 0;
    let j = 0;
    let k = collection3.length - 1;
    while (i < collection1.length || j < collection2.length || k >= 0) {
        let num1 = collection1[i] ?? Infinity;
        let num2 = collection2[j] ?? Infinity;
        let num3 = collection3[k] ?? Infinity;

        let min = Math.min(num1, num2, num3);
        if (min === num1) {
            mergedCollection.push(num1);
            i++;
        } else if (min === num2) {
            mergedCollection.push(num2);
            j++;
        } else {
            mergedCollection.push(num3);
            k--;
        }
    }

    return mergedCollection;
}

console.log(merge([1,3,5], [2,4,6], [10,8,7]));