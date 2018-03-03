module.exports = function getZerosCount(number, base) {  
  var primeFactor, power, countOfprimeFactors, numberOfzeros, k;         
  numberOfzeros = number;        
 
  for (primeFactor = 2; primeFactor <= base; primeFactor++)
  {
     if (base % primeFactor == 0)
     {   
        power = 0;  
        while (base % primeFactor== 0)
        {
           power++;
           base /= primeFactor;
        }
        countOfprimeFactors = 0;
        
        k = number;                     
        while (k / primeFactor > 0)
        {
           countOfprimeFactors += Math.floor(k / primeFactor);
           k /= primeFactor;
        }
        numberOfzeros = Math.floor(Math.min(numberOfzeros, countOfprimeFactors / power));
     }
  }
  return numberOfzeros;
}
