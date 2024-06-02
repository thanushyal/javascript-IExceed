async function check(age)
{
     this.age=age;
     if(age>=18)
     {
        return Promise.resolve("Eligible ");
     }
     else
     {
        return Promise.reject("Not Eligible  ");
     }
}
check(20).then((info)=>
{
    console.log("result:"+info);
}).catch((msg)=>
{
    console.log("result : "+info);
});
