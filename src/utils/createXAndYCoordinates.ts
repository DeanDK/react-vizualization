export const createXAndYCoordinates = (arr1: number[], arr2: number[]) => {
    let mergedArray = [];

    if (arr1.length !== arr2.length) {
        throw new Error('Arrays must be of the same length')
    }

    for (let i = 0; i < arr1.length; i++) {
        mergedArray.push(arr1[i])
        mergedArray.push(arr2[i]);
    }

    return mergedArray;
}