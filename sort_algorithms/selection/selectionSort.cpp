#include <iostream>
#include <vector>

using namespace std;

/**
 * This functions prints the vector it receive.
 * 
 * @param array The array to print.
*/
void printVector(vector<int> array) {
    cout << "[";
    for (int number : array) {
        cout << " " << number << " ";
    }
    cout << "]" << endl;
}


/**
* This function implements the selecting sort algorithm to sort a vector of integers
*
* @param array The vector of integers to sort.
* @return The sorted vector of integers.
*/
vector<int> selection_sort(vector<int> array) {
    int array_length = array.size();

    for (int i = 0; i < array_length; i++) {
        int min_element_index = i;

        // Looks for the index of the minimum element
        for (int j = i+1; j < array_length; j++) {
            if (array[j] < array[min_element_index]) {
                min_element_index = j;
            }
        }

        // Swap positions using multiple assignment
        swap(array[i], array[min_element_index]);
    }
    return array;
}


int main() {
    vector<int> numbers {23, 5, 9, 10, 1, 3, 7};
    vector<int> sorted_numbers = selection_sort(numbers);

    cout << "Original vector: ";
    printVector(numbers);

    cout << "Sorted vector:   ";
    printVector(sorted_numbers);

    return 0;
}
