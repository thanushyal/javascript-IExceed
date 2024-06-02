async function check(num)
{
     this.num=num;
     if(num%2==0)
     {
        return Promise.resolve(num+" divisible by 2 ");
     }
     else
     {
        return Promise.reject(num+" is not divisible by 2 ");
     }
}
check(25).then((info)=>
{
    console.log("result:"+info);
}).catch((info)=>
{
    console.log("result : "+info);
});
