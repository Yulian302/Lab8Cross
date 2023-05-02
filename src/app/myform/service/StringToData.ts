// function that convert string dd.mm.yyyy -> date
function stringToDate(date:string) {
    let dateArr:string[] = date.split(/[.-/]/);
    let dateArrNum:number[]=[];
    dateArr.forEach((val)=>{
        dateArrNum.push(parseInt(val));
    });
    dateArrNum[1] -= 1;
    return new Date(dateArrNum[2],dateArrNum[1],dateArrNum[0]);
}

export default stringToDate;