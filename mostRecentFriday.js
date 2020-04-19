function mostRecentFriday() {
    var now = new Date();
    var output = {
        "year": now.getUTCFullYear(),
        "month": now.getUTCMonth() + 1,
        "date": now.getUTCDate()
    };
    // output.year is the year
    // output.month is month (jan = 1)
    // output.date is date 1-31
    var day = (now.getUTCDay() + 2) % 7;
    // day is the number of days we need to subtract
    // to get to the most recent Friday
    // Friday -> 0
    // Thursday -> 6
    output.date -= day;
    if (output.date > 0) {
        return output;
    }
    // the most recent Friday is in the previous month
    output.month--;
    if (output.month < 1) {
        output.month = 12;
        output.year--;
    }
    // figure out how many days were in the previous month
    var daysInMonth = mostRecentFriday.months[output.month-1];
    if (output.month == 2) {
        if (mostRecentFriday.leap(output.year)) {
            daysInMonth = 29;
        }
    }
    // add that many days
    output.date += daysInMonth;
    // return
    return output;
}

mostRecentFriday.leap = function(year) {
    if (year % 4 != 0) {return false}
    if (year % 100 != 0) {return true}
    if (year % 400 != 0) {return false}
    else {return true}
}

mostRecentFriday.months = [31,28,31,30,31,30,31,31,30,31,30,31];