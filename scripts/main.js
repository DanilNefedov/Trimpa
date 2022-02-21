let cityArrFrom = ['SFO', 'ATL', 'LAX', 'STL', 'PVG', 'MSP', 'NRT', 'JFK'];
let cityArrWhere = ['SFO', 'ATL', 'LAX', 'STL', 'PVG', 'MSP', 'NRT', 'JFK'];



const search = document.getElementById('search');



search.onclick = function(event){
    let inp = event.target.closest('input');
    let arrValue = [];
    

    if(!inp) return;

    if(!search.contains(inp)) return;

    inp.value = '';

    if(from.childNodes.length > 1){
       return
    }else{
        cityArrFrom.forEach(elem => {
            let opt = document.createElement('option');
            opt.value = elem;
            from.append(opt);
        });
    }

    if(to.childNodes.length > 1){
        return;
    }else{
        cityArrWhere.forEach(elem => {
            let opt = document.createElement('option');
            opt.value = elem;
            to.append(opt);
        });
    }
}



function find() {
    console.log('w')
}








const calendar = new dhx.Calendar("calendar-show__container", {
    thisMonthOnly: false,
    css: "dhx_widget--bordered"
});
const calendar2 = new dhx.Calendar("calendar-show__container", {
    thisMonthOnly: false,
    css: "dhx_widget--bordered"
});



calendar.events.on("change", function (date) {
    document.querySelector("#calendar-show__resultFrom").innerHTML = 
        "Date from: " + calendar.getValue() + "</br>";
});

calendar2.events.on("change", function (date) {
    document.querySelector("#calendar-show__resultTo").innerHTML = 
        "Date to: " + calendar2.getValue() + "</br>";
});
