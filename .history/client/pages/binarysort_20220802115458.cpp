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
        int i;  
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
                    printf("\ncan't insert node \n");  
                    return;  
                }  
              
            }  
            ptr ->next = temp ->next;   
            temp ->next = ptr;   
            printf("\nNode inserted");  
        }  
          
}

void deleteEnd(){
    struct node *temp=head;
	struct node *temp1;
	while(temp->next != NULL)
	{ 
		temp1 = temp;
		temp = temp->next;
	}
	temp1->next = NULL;
	free(temp);
}

void display(){
	struct node *ptr;
	ptr = head;
	while(ptr->next != NULL)
	{
		printf("%d -> ", ptr->data);
		ptr = ptr->next;
	}
	printf("%d",ptr->data);
	printf("\n");
}


void main ()  
{  
    insert(10);
    insert(50);
    insert(70);
    insert(80);
    display();  
}  