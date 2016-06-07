
function collect_same_elements(collection_a, object_b) {
var arry=new Array();
var k=0;
var i,j;
for (i = 0; i<collection_a.length; i++) 
{
	for (j = 0;j<object_b.value.length; j++) 
	{
		if(collection_a[i].key==object_b.value[j])
		{
			arry[k]=object_b.value[j];
			k++;
			break;
		}
	}
}
return arry;
}
module.exports = collect_same_elements;
