let cityArr = ['SFO', 'ATL', 'LAX', 'STL', 'PVG', 'MSP', 'NRT', 'JFK'];




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
        cityArr.forEach(elem => {
            let opt = document.createElement('option');
            opt.value = elem;
            from.append(opt);
            console.log(elem);
        });
    }
}



