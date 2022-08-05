#include <stdio.h>


struct node  
{  
    int data;  
    struct node *next;  
};  
struct node *head;  



void main ()  
{  
    int c,item,pos;  
    do   
    {  
        printf("\nEnter the item which you want to insert?\n");  
        scanf("%d",&item);  
        if(head == NULL)  
        {  
               struct node *ptr = (struct node *)malloc(sizeof(struct node *));  
        if(ptr == NULL)  
        {  
            printf("\nOVERFLOW\n");  
        }  
        else  
        {  
            ptr->data = item;  
            ptr->next = head;  
            head = ptr;  
            printf("\nNode inserted\n");  
        }  
 
        }  
        else  
        {  
            insert(item);  
        }  
        printf("\nPress 0 to insert more ?\n");  
        scanf("%d",&c);  
    }while(c == 0);  
}  