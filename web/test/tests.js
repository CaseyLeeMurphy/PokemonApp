describe("getSchoolYearFromNumber(theYear)", function () {
    it("should return undefined for anything out of 1-4", function() { //spec
        expect(getSchoolYearFromNumber(99)).toBe(undefined);
    });    
    
    it("should return 'Freshman' for year 1", function() {
       expect(getSchoolYearFromNumber(1)).toBe("Freshman"); 
    });
    
    it("should return 'Sophmore' for year 2", function() {
       expect(getSchoolYearFromNumber(2)).toBe("Sophomore"); 
    });
    
    it("should return 'Junior' for year 3", function() {
       expect(getSchoolYearFromNumber(3)).toBe("Junior"); 
    });
    
    it("should return 'Senior' for year 4", function() {
       expect(getSchoolYearFromNumber(4)).toBe("Senior"); 
    });
});

describe("compareStringsAsc(stringA, stringB)", function() {
    it("should return -1 if string A is alphabetically less than string B", function() {
        expect(compareStringsAsc('hello','world')).toBe(-1);
    });
    it("should return 1 if string A is alphabetically greater than string B", function() {
        expect(compareStringsAsc('world','hello')).toBe(1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(compareStringsAsc('hello','hello')).toBe(0);
    });
});

describe("compareStringsDesc(stringA, stringB)", function() {
    it("should return 1 if string A is alphabetically less than string B", function() {
        expect(compareStringsDesc('hello','world')).toBe(1);
    });
    it("should return -1 if string A is alphabetically greater than string B", function() {
        expect(compareStringsDesc('world','hello')).toBe(-1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(compareStringsDesc('hello','hello')).toBe(0);
    });
});

describe("sortByFnameAsc(jsonObjectA, jsonObjectB)", function() {
    it("should return -1 if string A is alphabetically less than string B", function() {
        expect(sortByFnameAsc(JSON.parse('{"fname":"hello"}'),JSON.parse('{"fname":"world"}'))).toBe(-1);
    });
    it("should return 1 if string A is alphabetically greater than string B", function() {
        expect(sortByFnameAsc(JSON.parse('{"fname":"world"}'),JSON.parse('{"fname":"hello"}'))).toBe(1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByFnameAsc(JSON.parse('{"fname":"hello"}'),JSON.parse('{"fname":"hello"}'))).toBe(0);
    });
});

describe("sortByFnameDesc(jsonObjectA, jsonObjectB)", function() {
    it("should return 1 if string A is alphabetically less than string B", function() {
        expect(sortByFnameDesc(JSON.parse('{"fname":"hello"}'),JSON.parse('{"fname":"world"}'))).toBe(1);
    });
    it("should return -1 if string A is alphabetically greater than string B", function() {
        expect(sortByFnameDesc(JSON.parse('{"fname":"world"}'),JSON.parse('{"fname":"hello"}'))).toBe(-1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByFnameDesc(JSON.parse('{"fname":"hello"}'),JSON.parse('{"fname":"hello"}'))).toBe(0);
    });
});

describe("sortByLnameAsc(jsonObjectA, jsonObjectB)", function() {
    it("should return -1 if string A is alphabetically less than string B", function() {
        expect(sortByLnameAsc(JSON.parse('{"lname":"hello"}'),JSON.parse('{"lname":"world"}'))).toBe(-1);
    });
    it("should return 1 if string A is alphabetically greater than string B", function() {
        expect(sortByLnameAsc(JSON.parse('{"lname":"world"}'),JSON.parse('{"lname":"hello"}'))).toBe(1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByLnameAsc(JSON.parse('{"lname":"hello"}'),JSON.parse('{"lname":"hello"}'))).toBe(0);
    });
});

describe("sortByLnameDesc(jsonObjectA, jsonObjectB)", function() {
    it("should return 1 if string A is alphabetically less than string B", function() {
        expect(sortByLnameDesc(JSON.parse('{"lname":"hello"}'),JSON.parse('{"lname":"world"}'))).toBe(1);
    });
    it("should return -1 if string A is alphabetically greater than string B", function() {
        expect(sortByLnameDesc(JSON.parse('{"lname":"world"}'),JSON.parse('{"lname":"hello"}'))).toBe(-1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByLnameDesc(JSON.parse('{"lname":"hello"}'),JSON.parse('{"lname":"hello"}'))).toBe(0);
    });
});

describe("sortstartDateAsc(jsonObjectA, jsonObjectB)", function() {
    it("should return -1 if string A's date value is less than string B", function() {
        expect(sortstartDateAsc(JSON.parse('{"startDate":"7/13/2016"}'),JSON.parse('{"startDate":"7/14/2016"}'))).toBe(-1);
    });
    it("should return 1 if string A's date value is greater than string B", function() {
        expect(sortstartDateAsc(JSON.parse('{"startDate":"7/14/2016"}'),JSON.parse('{"startDate":"7/13/2016"}'))).toBe(1);
    });
    it("should return 0 if string A's date value is equal than string B", function() {
        expect(sortstartDateAsc(JSON.parse('{"startDate":"7/14/2016"}'),JSON.parse('{"startDate":"7/14/2016"}'))).toBe(0);
    });
});

describe("sortstartDateDesc(jsonObjectA, jsonObjectB)", function() {
    it("should return 1 if string A's date value is less than string B", function() {
        expect(sortstartDateDesc(JSON.parse('{"startDate":"7/13/2016"}'),JSON.parse('{"startDate":"7/14/2016"}'))).toBe(1);
    });
    it("should return -1 if string A's date value is greater than string B", function() {
        expect(sortstartDateDesc(JSON.parse('{"startDate":"7/14/2016"}'),JSON.parse('{"startDate":"7/13/2016"}'))).toBe(-1);
    });
    it("should return 0 if string A's date value is equal than string B", function() {
        expect(sortstartDateDesc(JSON.parse('{"startDate":"7/14/2016"}'),JSON.parse('{"startDate":"7/14/2016"}'))).toBe(0);
    });
});

describe("sortByStreetAsc(jsonObjectA, jsonObjectB)", function() {
    it("should return -1 if string A is alphabetically less than string B", function() {
        expect(sortByStreetAsc(JSON.parse('{"street":"hello"}'),JSON.parse('{"street":"world"}'))).toBe(-1);
    });
    it("should return 1 if string A is alphabetically greater than string B", function() {
        expect(sortByStreetAsc(JSON.parse('{"street":"world"}'),JSON.parse('{"street":"hello"}'))).toBe(1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByStreetAsc(JSON.parse('{"street":"hello"}'),JSON.parse('{"street":"hello"}'))).toBe(0);
    });
});

describe("sortByStreetDesc(jsonObjectA, jsonObjectB)", function() {
    it("should return 1 if string A is alphabetically less than string B", function() {
        expect(sortByStreetDesc(JSON.parse('{"street":"hello"}'),JSON.parse('{"street":"world"}'))).toBe(1);
    });
    it("should return -1 if string A is alphabetically greater than string B", function() {
        expect(sortByStreetDesc(JSON.parse('{"street":"world"}'),JSON.parse('{"street":"hello"}'))).toBe(-1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByStreetDesc(JSON.parse('{"street":"hello"}'),JSON.parse('{"street":"hello"}'))).toBe(0);
    });
});

describe("sortByCityAsc(jsonObjectA, jsonObjectB)", function() {
    it("should return -1 if string A is alphabetically less than string B", function() {
        expect(sortByCityAsc(JSON.parse('{"city":"hello"}'),JSON.parse('{"city":"world"}'))).toBe(-1);
    });
    it("should return 1 if string A is alphabetically greater than string B", function() {
        expect(sortByCityAsc(JSON.parse('{"city":"world"}'),JSON.parse('{"city":"hello"}'))).toBe(1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByCityAsc(JSON.parse('{"city":"hello"}'),JSON.parse('{"city":"hello"}'))).toBe(0);
    });
});

describe("sortByCityDesc(jsonObjectA, jsonObjectB)", function() {
    it("should return 1 if string A is alphabetically less than string B", function() {
        expect(sortByCityDesc(JSON.parse('{"city":"hello"}'),JSON.parse('{"city":"world"}'))).toBe(1);
    });
    it("should return -1 if string A is alphabetically greater than string B", function() {
        expect(sortByCityDesc(JSON.parse('{"city":"world"}'),JSON.parse('{"city":"hello"}'))).toBe(-1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByCityDesc(JSON.parse('{"city":"hello"}'),JSON.parse('{"city":"hello"}'))).toBe(0);
    });
});

describe("sortByStateAsc(jsonObjectA, jsonObjectB)", function() {
    it("should return -1 if string A is alphabetically less than string B", function() {
        expect(sortByStateAsc(JSON.parse('{"state":"hello"}'),JSON.parse('{"state":"world"}'))).toBe(-1);
    });
    it("should return 1 if string A is alphabetically greater than string B", function() {
        expect(sortByStateAsc(JSON.parse('{"state":"world"}'),JSON.parse('{"state":"hello"}'))).toBe(1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByStateAsc(JSON.parse('{"state":"hello"}'),JSON.parse('{"state":"hello"}'))).toBe(0);
    });
});

describe("sortByStateDesc(jsonObjectA, jsonObjectB)", function() {
    it("should return 1 if string A is alphabetically less than string B", function() {
        expect(sortByStateDesc(JSON.parse('{"state":"hello"}'),JSON.parse('{"state":"world"}'))).toBe(1);
    });
    it("should return -1 if string A is alphabetically greater than string B", function() {
        expect(sortByStateDesc(JSON.parse('{"state":"world"}'),JSON.parse('{"state":"hello"}'))).toBe(-1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByStateDesc(JSON.parse('{"state":"hello"}'),JSON.parse('{"state":"hello"}'))).toBe(0);
    });
});

describe("sortByPhoneAsc(jsonObjectA, jsonObjectB)", function() {
    it("should return -1 if string A is alphabetically less than string B", function() {
        expect(sortByPhoneAsc(JSON.parse('{"phone":"123-4567"}'),JSON.parse('{"phone":"765-4321"}'))).toBe(-1);
    });
    it("should return 1 if string A is alphabetically greater than string B", function() {
        expect(sortByPhoneAsc(JSON.parse('{"phone":"765-4321"}'),JSON.parse('{"phone":"123-4567"}'))).toBe(1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByPhoneAsc(JSON.parse('{"phone":"123-4567"}'),JSON.parse('{"phone":"123-4567"}'))).toBe(0);
    });
});

describe("sortByPhoneDesc(jsonObjectA, jsonObjectB)", function() {
    it("should return 1 if string A is alphabetically less than string B", function() {
        expect(sortByPhoneDesc(JSON.parse('{"phone":"123-4567"}'),JSON.parse('{"phone":"765-4321"}'))).toBe(1);
    });
    it("should return -1 if string A is alphabetically greater than string B", function() {
        expect(sortByPhoneDesc(JSON.parse('{"phone":"765-4321"}'),JSON.parse('{"phone":"123-4567"}'))).toBe(-1);
    });
    it("should return 0 if string A is alphabetically equal than string B", function() {
        expect(sortByPhoneDesc(JSON.parse('{"phone":"123-4567"}'),JSON.parse('{"phone":"123-4567"}'))).toBe(0);
    });
});