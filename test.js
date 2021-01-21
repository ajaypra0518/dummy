
    var arr1=[], myarr,val2, i, len,arr,ob={};
    let Product=[];
    fetch('https://ajaypra0518.github.io/data/myfile.txt')
        .then(e => e.text())
        .then(arr => {
            arr=arr.split('\n');
            arr.splice(0,1);
           
            for(i=0;i<(arr.length-1);i++)
            {
                myarr=arr[i].split(/[>]+/);
                len=myarr.length;
                if(len===1)
                {
                    val2=myarr[0];
                    val2=val2.split('-');
                    ob[val2[1]]={};
                    loc=val2[1];
                }     
                else if(len==2)
                    {
                        data2=myarr.pop();
                        data2=data2.trim();
                        ob[loc][data2]={};
                        var loc1=data2;
                    }
                    else
                    if(len==3)
                    {
                        data2=myarr.pop();
                        data2=data2.trim();
                        ob[loc][loc1][data2]={};
                        var loc2=data2;
                    }
                    else
                    if(len==4)
                    {
                        data2=myarr.pop();
                        data2=data2.trim();
                        ob[loc][loc1][loc2][data2]={};
                        var loc3=data2;
                    }
                    else
                    if(len==5)
                    {
                        data2=myarr.pop();
                        data2=data2.trim();
                        ob[loc][loc1][loc2][loc3][data2]={};
                        var loc4=data2;
                    }
                    else
                    if(len==6)
                    {
                        data2=myarr.pop();
                        data2=data2.trim();
                        ob[loc][loc1][loc2][loc3][loc4][data2]={};
                        var loc5=data2;
                    }
                    else
                    if(len==7)
                    {
                        data2=myarr.pop();
                        data2=data2.trim();
                        ob[loc][loc1][loc2][loc3][loc4][loc5][data2]={};
                   
                    }
                }
          
            })
           
             console.log(ob);
            
            

