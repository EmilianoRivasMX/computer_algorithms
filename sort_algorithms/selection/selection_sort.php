<?php

/**
 * This function sorts an array using the selection sort algorithm
 * 
 * @param array $array The array to sort
 * @return array The sorted array
 */
function selection_sort(array $array): array {
    $array_length = count($array) - 1;

    for ($i = 0; $i < $array_length; $i++) {
        $min_element_index = $i;

        // Looks for the index of the minimum element in the array
        for ($j = $i + 1; $j < $array_length; $j++) {
            if ($array[$j] < $array[$min_element_index]) {
                $min_element_index = $j;
            }
        }

        // Swap positions of the minimum element with the current element
        $temp = $array[$i];
        $array[$i] = $array[$min_element_index];
        $array[$min_element_index] = $temp;
    } 

    return $array;
}

$numbers = [5, 3, 1, 2, 4];
echo "Original numbers: [" . implode(', ', $numbers) . "]\n";
echo "Sorted numbers:   [" . implode(', ', selection_sort($numbers)) . "]\n\n";

$words = ["Amor", "Cama", "Dado", "Bola", "Programacion", "Algoritmo", "Pena", "Sentimental"];
echo "Original words: [" . implode(', ', $words) . "]\n";
echo "Sorted words:   [" . implode(', ', selection_sort($words)) . "]";
