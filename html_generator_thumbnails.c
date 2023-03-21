#include <stdio.h>

int main(void) {
	// name of image folder
	char name[] = "reportages";
	//maximal image number
	int maxNum = 28;
	
	for(int i = 1; i <= maxNum; i++){
		if(i>=10){
			printf("<a class=\"gallery-image\" href=\"../img/%s/0%d.JPG\" data-lightbox=\"%s\"><img class=\"gallery-image\" src=\"../img/%s/thumbnails/0%d.JPG\" alt=\"image-%d\"/></a>\n", name, i, name, name, i, i);
		} else{
			printf("<a class=\"gallery-image\" href=\"../img/%s/00%d.JPG\" data-lightbox=\"%s\"><img class=\"gallery-image\" src=\"../img/%s/thumbnails/00%d.JPG\" alt=\"image-%d\"/></a>\n", name, i, name, name, i, i);
		}
	}
	return 0;
}
