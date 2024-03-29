// Online C compiler to run C program online
#include <stdio.h>
int recBinarySearch(int arr[], int l, int r , int t,int size){
    int m = l + (r-l)/2;
    if(m>=size)
        return -1;
    if(arr[m] == t)
        return m;
    else if(arr[m]>t)
        return recBinarySearch(arr,l,m-1,t,size);
    else if(arr[m]<t)
        return recBinarySearch(arr,m+1,r,t,size);
    
    return -1;

}
int main() {
    // Write C code here
    // printf("Hello world");
  
    int arr[] ={1,2,3,4,5,6};
    int size  = sizeof(arr)/sizeof(arr[0]);
    int c = recBinarySearch(arr,0,5,4,size);
    if(c!=-1)
        printf("Element is at pos : %d", c);
    else
         printf("Element not present");

    return 0;
}