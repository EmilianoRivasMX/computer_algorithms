/**
 * This function sort an array of elements using the selection sort algorithm
 * 
 * @param {*} array 
 * @returns The array sorted
 */

function selectionSort(array) {
    let array_length = array.length;

    for (let i = 0; i < array_length; i++) {
        let min_element_index = i;
        
        // Looks for the index of the minimum element in the array
        for (let j = i + 1; j < array_length; j++) {
            if (array[j] < array[min_element_index]) {
                min_element_index = j;
            }
        }

        // Swap positions of the minimum element with the current element
        let temp = array[i];
        array[i] = array[min_element_index];
        array[min_element_index] = temp;
    }

    return array;
}

numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log("Original numbers: [" + numbers.join(", ") + "]");

sortedNumbers = selectionSort(numbers);
console.log("Sorted numbers:   [" + sortedNumbers.join(", ") + "]\n");


words = ["Manzana", "Naranja", "Hola", "Mundo", "Emiliano", "UPIICSA", "Aura", "Cielo", "Oscar"]
console.log("Original words: [" + words.join(", ") + "]");

sortedWords = selectionSort(words);
console.log("Sorted words:   [" + sortedWords.join(", ") + "]");

