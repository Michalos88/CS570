/**
 * Created by Michalos88 on 3/5/2017.
 */

var arr = [12,3223423,434,2,32,3,42,1,3,2,3232,45,7,9,876,];
console.log("Unsorted:  ",arr);

console.log("Sorted:  ",Bouncy_Bubble_Sort(arr));

function Bouncy_Bubble_Sort(array){
    var swaps;
    var pass = 1;
    var j = 0;
    while (swaps != 0){
        var swaps = 0;
        if (pass%2!=0){
            var i = -1;
            var k = array.length;

        }
        if (pass%2==0){
            var i = array.length+1;
            var k = 0;
        }


        if (k>i){
            while (i <= k-1){
                i++;
                j = i + 1;
                if (array[i]>array[j]){
                    var x = array[i];
                    var y = array[j];
                    array[j] = x;
                    array[i] = y;
                    swaps++;
                }




            }
            pass++;

        }
        else if (i>k){
            while (i >= k+1){
                i--;
                j = i - 1;
                if (array[i]<array[j]){
                    var x = array[i];
                    var y = array[j];
                    array[j] = x;
                    array[i] = y;
                    swaps++;
                }




            }
            pass++;
        }




    }
    return(array)
}
