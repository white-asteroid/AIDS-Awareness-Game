#include<stdio.h>  
#include<stdlib.h> 

struct node  
{  
    int data;  
    struct node *next;  
};  
struct node *head;  


void insert (int item , int loc){
        struct node *ptr = (struct node *) malloc (sizeof(struct node));  
        struct node *temp;  
        int i,loc;  
        if(ptr == NULL)  
        {  
            printf("\nOVERFLOW");  
        }  
        else  
        {              
            ptr->data = item;  
            temp=head;  
            for(i=0;i<loc;i++)  
            {  
                temp = temp->next;  
                if(temp == NULL)  
                {  
                    printf("\ncan't insert\n");  
                    return;  
                }  
              
            }  
            ptr ->next = temp ->next;   
            temp ->next = ptr;   
            printf("\nNode inserted");  
        }  
          
}

void delete()

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