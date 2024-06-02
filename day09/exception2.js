
function cash(amount,bank_bal)
{
    try
        {
            if(amount>bank_bal)
            {
                throw("amount insufficient");   
            }
            else{
                console.log(`${amount}  withdraw successfully`);
            }
        }
            catch(e)
            {
                 console.log(e);
            }
            finally
            {
             bal=bank_bal-amount;
             console.log(`you bankbalance is ${bal}`);
            }
}
 cash(50000,35000);
cash(5000,35000)

