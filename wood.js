/* 
    * chair --> 3ft 
    * table --> 10cft
    * bed --> 50 cft
    * 
*/


function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50; 

    const allChairWood = chairQuantity * perChairWood;
    const allTableWood = tableQuantity * perTableWood;
    const allBedWood = bedQuantity *  perBedWood ; 


    const totalWood = allChairWood + allTableWood + allBedWood;

    return totalWood;


}


const woodNeeded = woodCalculator(0, 1, 0);
console.log("wood needed : ", woodNeeded);
