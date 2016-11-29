/**
 * Created by a.prystupa on 29.11.2016.
 */
"use strict"

let range = [process.argv[2], process.argv[3]];

function getSum(arr) {
    return parseInt(arr[0]) + parseInt(arr[1] ? arr[1] : 0) + parseInt((arr[2] ? arr[2] : 0));
}

let lucker = function(range) {
    if (!range instanceof Array || !range[0].length) {
        console.log("Bad parameter");
        return false;
    }

    var start, end, luckyTickets = 0;

    start = parseInt(range[0]);
    end   = range[1] ? parseInt(range[1]) : 0;

    while(start < end) {
        if(start.length < 3) {
            start++;
            continue;
        }

        let arr = [], st = start.toString();
        
        arr[0] = st.substring(0,st.length - 3);
        arr[1] = st.substring(st.length - 3, st.length - 3 + 3); // what
        
        if(getSum(arr[0]) == getSum(arr[1])) {
            luckyTickets++
        }

        start++
    }

    console.log("Tickets:" + luckyTickets)
};

lucker(range);