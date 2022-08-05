#include <stdio.h>

int recBinarySearch(int arr[], int l, int r , int t){
    int m = l - (r-l)/2;
    int size  = sizeof(arr)/sizeof(arr[0]);
    if(m>size)
        return -1;
    if(arr[m] == t)
        return m;
    else if(arr[m]>t)
        return recBinarySearch(arr,l,m-1,t);
    else if(arr[m]<t)
        return recBinarySearch(arr,m+1,r,t);
    
    return -1;

}
int main() {
    // Write C code here
    printf("Hello world");

    return 0;
}