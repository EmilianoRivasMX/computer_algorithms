def selection_sort(array):
    """
    This function implements the selection sort algorithm to sort a list of integers or words.

    Args:
        array (list[]): The list of elements to sort.
    Return:
        array (list[]): The sorted list of elements.
    """

    array_length = len(array)

    for i in range(array_length):
        # Looks for the minimum element
        min_element_index = i

        for j in range(i+1, array_length):
            if array[j] < array[min_element_index]:
                min_element_index = j

        # Swap positions using multiple assignment
        array[i], array[min_element_index] = array[min_element_index], array[i]
    return array


numbers = [23, 5, 9, 10, 1, 3, 7]
words = ["Hola", "Mundo", "Adios", "Como", "Estas", "Aqui"]

print(selection_sort(numbers))
print(selection_sort(words))
