// Converts from degrees to radians.
Number.prototype.toRadians = function() {
  return this * Math.PI / 180;
};


// Calculates the distance between Grenoble and the given city
function distanceFromGrenoble(city)
{
  var GrenobleLat = 45.166667;
  var GrenobleLong = 5.716667;

  var cityLat = parseFloat(city.latitude);
  var cityLong = parseFloat(city.longitude);

  var distance = 6371 * Math.acos(Math.cos(GrenobleLat.toRadians()) * Math.cos(cityLat.toRadians()) * Math.cos(cityLong.toRadians() - GrenobleLong.toRadians()) + Math.sin(GrenobleLat.toRadians()) * Math.sin(cityLat.toRadians()));
  
  
  return distance;
}

// Swap 2 values in array csvData
// i is the index of the first city
// j is the index of the second city
function swap(i, j) {

  displayBuffer.push(['swap', i, j]); // Do not delete this line (for display)
  
  const temp = csvData[i];
  csvData[i] = csvData[j];
  csvData[j] = temp;

  console.log(`Swapped cities at indices ${i} and ${j}`);
}


// Returns true if city with index i in csvData is closer to Grenoble than city with index j
// i is the index of the first city
// j is the index of the second city
function isLess(i, j)
{
  const cityI = csvData[i];
  const cityJ = csvData[j];

  const distanceI = distanceFromGrenoble(cityI);
  const distanceJ = distanceFromGrenoble(cityJ);
  
  displayBuffer.push(['compare', i, j]); 

  return distanceI < distanceJ;
}


function insertsort()
{
  let n = 0;
  for (let i = 1; i < csvData.length; i++) {
    let j = i;
    while (j > 0 && isLess(j, j - 1)) {
      swap(j, j - 1);
      n++;
      j--;
    }
  }
  console.log(n);
}

function selectionsort() {
  for (let m = 0; m < csvData.length - 1; m++) {
    let St = m;
    for (let i = m + 1; i < csvData.length; i++) { 
      if (isLess(i, St)) {
        St = i;
      }
    }
    swap(m, St);
  }
}



function bubblesort() {
  let n = csvData.length;
  let swapped;

  do {
      swapped = false;  
      for (let i = 0; i < n - 1; i++) {
          if (isLess(i + 1, i)) {
              swap(i, i + 1);
              swapped = true;
          }
      }
      n--;
  } while (swapped); 
}


function shellsort() {
  let n = csvData.length;
  
  let gap = Math.floor(n / 2);

  while (gap > 0) {
    for (let i = gap; i < n; i++) {
      let j = i;

      while (j >= gap && isLess(j, j - gap)) {
        swap(j, j - gap); 
        j -= gap; 
      }
    }

    gap = Math.floor(gap / 2);
  }

  console.log("Tri Shell terminé !");
}



function merge(start, mid, end) {
    const left = [];
    const right = [];

    for (let i = start; i <= mid; i++) {
        left.push(csvData[i]);
    }
    for (let j = mid + 1; j <= end; j++) {
        right.push(csvData[j]);
    }

    let i = 0;
    let j = 0; 
    let k = start; 

    while (i < left.length && j < right.length) {
        if (isLess(start + i, mid + 1 + j)) {
            k++;
            i++;
        } else {
            swap(k, mid + 1 + j); 
            k++;
            j++;
        }
    }

    while (i < left.length) {
        csvData[k++] = left[i++];
    }

    while (j < right.length) {
        csvData[k++] = right[j++];
    }
}

function mergesort(start = 0, end = csvData.length - 1) {
    if (start < end) {
        const mid = Math.floor((start + end) / 2);

        mergesort(start, mid);
        mergesort(mid + 1, end);

        merge(start, mid, end);
    }
}

function heapsort()
{
  console.log("heapsort - implement me !");
}

function quicksort(start = 0, end = csvData.length - 1) {
  if (start < end) {
    let pivotIndex = partition(start, end);
    // chercher le plus petit élément à gauche
    quicksort(start, pivotIndex - 1); 
    // chercher le plus grand élément à droite
    quicksort(pivotIndex + 1, end); 
  }
}

function partition(start, end) {
  let pivot = end; 
  let i = start - 1; 

  for (let j = start; j < end; j++) {
    if (isLess(j, pivot)) {
      i++;
      swap(i, j); 
    }
  }

  swap(i + 1, end);
  
  return i + 1;
}

function sort(algo)
{
  switch (algo)
  {
    case 'insert': insertsort();break;
    case 'select': selectionsort();break;
    case 'bubble': bubblesort();break;
    case 'shell': shellsort();break;
    case 'merge': mergesort();break;
    case 'heap': heapsort();break;
    case 'quick': quicksort();break;
    case 'quick3': quick3sort();break;
    default: throw 'Invalid algorithm ' + algo;
  }
}