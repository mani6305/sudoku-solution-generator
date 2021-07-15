//submit button activated
var array1=[];
/*$("input").click(function(){
    this.value="";
})*/
$("button").click(function(){
	for(var i=0;i<9;i++)
	{

	  var array2=[]
	  for(var j=0;j<9;j++)
	  {
	  	array2.push(Number($(".input"+(i+1)+(j+1)).val()));
	  }
	  array1.push(array2);
	}
    var row=[];
    var column=[];
    var grid=[];
    for(var i=0;i<9;i++)
    {
    	var temp1=[];
    	var temp2=[];
    	var temp3=[];
      for(var j=0;j<9;j++)
      {
      	if(array1[i][j]!=0)
      	{
          temp1.push(array1[i][j]);
         }
         if(array1[j][i]!=0)
         {
      		temp2.push(array1[j][i]);
      	}
      	var x=Math.floor(j/3)+3*Math.floor(i/3);
      	var y=(j%3)+3*(i%3);
      	if(array1[x][y]!=0)
      	{
      		temp3.push(array1[x][y]);
      	}
      }
      row.push(temp1);
      column.push(temp2);
      grid.push(temp3);
    }
    sudoku=[];
    for(var i=0;i<9;i++)
    {
    	temp1=[]
    	for(var j=0;j<9;j++)
    	{
    		temp2=[]
    		if(array1[i][j]===0)
    		{
    			for(var k=1;k<=9;k++)
    			{
    				var t=0;
                   for(var x1=0;x1<row[i].length;x1++)
                   {
                   	if(row[i][x1]===k){
                   		t=1;
                   		break;
                   	}

                   }
                   if(t===1){
                   	continue
                   }
                   for(var x1=0;x1<column[j].length;x1++)
                   {
                   	if(column[j][x1]===k)
                   	{
                   		t=1;
                   		break;
                   	}
                   }
                   if(t===1){
                   	continue
                   }
                   var xx=Math.floor(j/3)+3*Math.floor(i/3);
                   for(var x1=0;x1<grid[xx].length;x1++)
                   {
                   	if(grid[xx][x1]===k)
                   	{
                   		t=1;
                   		break;
                   	}
                   }
                   if(t===1)
                   {
                   	continue;
                   }
                   temp2.push(k);

    			}
    		}
    		temp1.push(temp2)
    	}
    	sudoku.push(temp1)
    }
  var count=0;
    var count1;
    for(var i=0;i<9;i++)
    {
    	for(var j=0;j<9;j++)
    	{
    		if(array1[i][j]===0)
    		{
    			count++;
    		}
    	}
    }
    var count2;
while(true)
{
    var man=0;
   while(true)
   {
   	count2=count;
   	while(true)
    {
    	count1=count;
    	for(var i=0;i<9;i++)
    	{
    		for(var j=0;j<9;j++)
    		{
    			if(array1[i][j]===0 && sudoku[i][j].length===1)
    			{
    				var value=sudoku[i][j].pop();
    				$(".input"+(i+1)+(j+1)).val(value);
    				array1[i][j]=value;
                    sudoku[i][j]=[];
    				row[i].push(value);
    				for(var k1=0;k1<9;k1++)
    				{
    					for(var x1=0;x1<sudoku[i][k1].length;x1++)
    					{
    						if(sudoku[i][k1][x1]===value)
    						{
    							sudoku[i][k1].splice(x1,1);
    						}
    		
    					}
    				}
    				column[j].push(value);
    				for(var k1=0;k1<9;k1++)
    				{
    					for(var x1=0;x1<sudoku[k1][j].length;x1++)
    					{
    						if(sudoku[k1][j][x1]===value)
    						{
    							sudoku[k1][j].splice(x1,1);
    						}
    					}
    				}
    				grid[Math.floor(j/3)+3*Math.floor(i/3)].push(value);
    				for(var k2=3*Math.floor(i/3);k2<(3*Math.floor(i/3))+3;k2++)
    				{
    				for(var k1=3*Math.floor(j/3);k1<(3*Math.floor(j/3))+3;k1++)
    				{
    					for(var x1=0;x1<sudoku[k2][k1].length;x1++)
    					{
    						if(sudoku[k2][k1][x1]===value)
    						{
    							sudoku[k2][k1].splice(x1,1);
    						}
    					}
    				}
    			    }
    				count--;
    			}
    		}

    	}
    	if(count===0 || count===count1)
    	{
    		break;
    	}
    }
    if(count===0)
    {
    	break;
    }

    while(true)
    {
    	count1=count;
    	for(var i=0;i<9;i++)
    	{
    		var co1=[0,0,0,0,0,0,0,0];
    		var po1=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
            var po2=[[],[],[],[],[],[],[],[],[]];
    		for(var j=0;j<9;j++)
    		{
    			for(var x1=0;x1<sudoku[i][j].length;x1++)
    			{
    				if(co1[sudoku[i][j][x1]-1]===0)
    				{
    					po1[sudoku[i][j][x1]-1]=j;
    				}
                    po2[sudoku[i][j][x1]-1].push(j);
    				co1[sudoku[i][j][x1]-1]++;
    			}
    		}
    		for(var j=0;j<9;j++)
    		{
    			if(co1[j]===1)
    			{
    				$(".input"+(i+1)+(po1[j]+1)).val(j+1);
    				array1[i][po1[j]]=j+1;
                    sudoku[i][po1[j]]=[];
    				row[i].push(j+1);
    				column[po1[j]].push(j+1);
    				for(var k1=0;k1<9;k1++)
    				{
    					for(var x1=0;x1<sudoku[k1][po1[j]].length;x1++)
    					{
    						if(sudoku[k1][po1[j]][x1]===(j+1))
    						{
    							sudoku[k1][po1[j]].splice(x1,1);
    						}
    					}
    				}
    				grid[Math.floor(po1[j]/3)+3*Math.floor(i/3)].push(j+1);
    				for(var k2=3*Math.floor(i/3);k2<(3*Math.floor(i/3))+3;k2++)
    				{
    				for(var k1=3*Math.floor(po1[j]/3);k1<(3*Math.floor(po1[j]/3))+3;k1++)
    				{
    					for(var x1=0;x1<sudoku[k2][k1].length;x1++)
    					{
    						if(sudoku[k2][k1][x1]===(j+1))
    						{
    							sudoku[k2][k1].splice(x1,1);
    						}
    					}
    				}
    			    }
    				count--;

    			}
    		}
            co1=[0,0,0,0,0,0,0,0];
            for(var j=0;j<9;j++)
            {
                for(var x1=0;x1<sudoku[i][j].length;x1++)
                {
                    po2[sudoku[i][j][x1]-1].push(j);
                    co1[sudoku[i][j][x1]-1]++;
                }
            }

            co1=[0,0,0,0,0,0,0,0];
    		po1=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
    		for(var j=0;j<9;j++)
    		{
    			for(var x1=0;x1<sudoku[j][i].length;x1++)
    			{
    				if(co1[sudoku[j][i][x1]-1]===0)
    				{
    					po1[sudoku[j][i][x1]-1]=j;
    				}
    				co1[sudoku[j][i][x1]-1]++;
    			}
    		}
    		for(var j=0;j<9;j++)
    		{
    			if(co1[j]===1)
    			{
    				$(".input"+(po1[j]+1)+(i+1)).val(j+1);
    				array1[po1[j]][i]=j+1;
                    sudoku[po1[j]][i]=[];
    				row[po1[j]].push(j+1);
    				for(var k1=0;k1<9;k1++)
    				{
    					for(var x1=0;x1<sudoku[po1[j]][k1].length;x1++)
    					{
    						if(sudoku[po1[j]][k1][x1]===(j+1))
    						{
    							sudoku[po1[j]][k1].splice(x1,1);
    						}
    		
    					}
    				}
    				grid[Math.floor(i/3)+3*Math.floor(po1[j]/3)].push(j+1);
    				for(var k2=3*Math.floor(po1[j]/3);k2<(3*Math.floor(po1[j]/3))+3;k2++)
    				{
    				for(var k1=3*Math.floor(i/3);k1<(3*Math.floor(i/3))+3;k1++)
    				{
    					for(var x1=0;x1<sudoku[k2][k1].length;x1++)
    					{
    						if(sudoku[k2][k1][x1]===(j+1))
    						{
    							sudoku[k2][k1].splice(x1,1);
    						}
    					}
    				}
    			    }
    				count--;

    			}
    		}

           co1=[0,0,0,0,0,0,0,0];
    		po1=[[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
    		for(var j=0;j<9;j++)
    		{
    			var x=Math.floor(j/3)+3*Math.floor(i/3);
      	        var y=(j%3)+3*(i%3); 
    			for(var x1=0;x1<sudoku[x][y].length;x1++)
    			{
    				if(co1[sudoku[x][y][x1]-1]===0)
    				{
    					po1[sudoku[x][y][x1]-1][0]=x;
    					po1[sudoku[x][y][x1]-1][1]=y;
    				}
    				co1[sudoku[x][y][x1]-1]++;
    			}
    		}
    		for(var j=0;j<9;j++)
    		{
    			if(co1[j]===1)
    			{
    				$(".input"+(po1[j][0]+1)+(po1[j][1]+1)).val(j+1);
    				array1[po1[j][0]][po1[j][1]]=j+1;
                    sudoku[po1[j][0]][po1[j][1]]=[];
    				row[po1[j][0]].push(j+1);
    				for(var k1=0;k1<9;k1++)
    				{
    					for(var x1=0;x1<sudoku[po1[j][0]][k1].length;x1++)
    					{
    						if(sudoku[po1[j][0]][k1][x1]===(j+1))
    						{
    							sudoku[po1[j][0]][k1].splice(x1,1);
    						}
    		
    					}
    				}
    				column[po1[j][1]].push(j+1);
    				for(var k1=0;k1<9;k1++)
    				{
    					for(var x1=0;x1<sudoku[k1][po1[j][1]].length;x1++)
    					{
    						if(sudoku[k1][po1[j][1]][x1]===(j+1))
    						{
    							sudoku[k1][po1[j][1]].splice(x1,1);
    						}
    					}
    				}
    				count--;

    			}
    		}
        


    	}
    	if(count===0 || count===count1)
    	{
    		break;
    	}
    }

    if(count===0 || count2===count)
    {
        break;
    }
 }

 for(var i=0;i<9;i++)
        {
            for(var coo=2;coo<=9-row[i].length;coo++)
            {
                for(var j=0;j<9;j++)
                {  
                    if(sudoku[i][j].length===coo)
                    {
                        var temp2=1;
                        var list=[j]
                        for(var x1=j+1;x1<9;x1++)
                        {
                          if(sudoku[i][x1].length===coo)
                          {
                        
                            var temp1=0
                            for (var z=0;z<coo;z++)
                            {
                                if(sudoku[i][j][z]!=sudoku[i][x1][z])
                                {
                                    temp1=1;
                                    break;
                                }
                            }
                            if(temp1===0)
                            {
                               
                                temp2++;
                                list.push(x1);
                                if(temp2===coo)
                                {
                                    temp3=0;
                                    for(var z=0;z<9;z++)
                                    {
                                        if(temp3<coo && z===list[temp3])
                                        {
                                            temp3++;
                                        }
                                        else if(sudoku[i][z].length>1)
                                        {
                                            for(var z2=0;z2<sudoku[i][j].length;z2++)
                                            {
                                                for(var z1=0;z1<sudoku[i][z].length;z1++)
                                                {
                                                    
                                                    if(sudoku[i][z][z1]===sudoku[i][j][z2])
                                                    {
                                                        sudoku[i][z].splice(z1,1);
                                                        man=1;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                 break;
                                }
                            }
                          }
                        }
                    }
                    if(sudoku[j][i].length===coo)
                    {
                        var temp2=1;
                        var list=[j]
                        for(var x1=j+1;x1<9;x1++)
                        {
                          if(sudoku[x1][i].length===coo)
                          {
                        
                            var temp1=0
                            for (var z=0;z<coo;z++)
                            {
                                if(sudoku[j][i][z]!=sudoku[x1][i][z])
                                {
                                    temp1=1;
                                    break;
                                }
                            }
                            if(temp1===0)
                            {
                               
                                temp2++;
                                list.push(x1);
                                if(temp2===coo)
                                {
                                    temp3=0;
                                    for(var z=0;z<9;z++)
                                    {
                                        if(temp3<coo && z===list[temp3])
                                        {
                                            temp3++;
                                        }
                                        else if(sudoku[z][i].length>1)
                                        {
                                            for(var z2=0;z2<sudoku[j][i].length;z2++)
                                            {
                                                for(var z1=0;z1<sudoku[z][i].length;z1++)
                                                {
                                                    
                                                    if(sudoku[z][i][z1]===sudoku[j][i][z2])
                                                    {
                                                        sudoku[z][i].splice(z1,1);
                                                        man=1;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                 break;
                                }
                            }
                          }
                        }
                    }
                    var x=Math.floor(j/3)+3*Math.floor(i/3);
                    var y=(j%3)+3*(i%3);
                   /* if(sudoku[x][y].length===coo)
                    {
                        var temp2=1;
                        var list=[j]
                        for(var x1=j+1;x1<9;x1++)
                        {
                          if(sudoku[x1][i].length===coo)
                          {
                        
                            var temp1=0
                            for (var z=0;z<coo;z++)
                            {
                                if(sudoku[j][i][z]!=sudoku[x1][i][z])
                                {
                                    temp1=1;
                                    break;
                                }
                            }
                            if(temp1===0)
                            {
                               
                                temp2++;
                                list.push(x1);
                                if(temp2===coo)
                                {
                                    temp3=0;
                                    for(var z=0;z<9;z++)
                                    {
                                        if(temp3<coo && z===list[temp3])
                                        {
                                            temp3++;
                                        }
                                        else if(sudoku[z][i].length>1)
                                        {
                                            for(var z2=0;z2<sudoku[j][i].length;z2++)
                                            {
                                                for(var z1=0;z1<sudoku[z][i].length;z1++)
                                                {
                                                    
                                                    if(sudoku[z][i][z1]===sudoku[j][i][z2])
                                                    {
                                                        sudoku[z][i].splice(z1,1);
                                                        man=1;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                 break;
                                }
                            }
                          }
                        }
                    }*/
                }

            }}

  if(man===0)
  {
    break;
  }
    
}






});