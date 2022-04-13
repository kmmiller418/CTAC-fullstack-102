const filterByTerm = require("../src/filterByTerm");

describe("Filter function", () => {
    test("it should filter by a search term (link)", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev"},
            { id: 2, url: "https://www.url2.dev"},
            { id: 3, url: "https://www.link3.dev"}
        ];

        const output = [{ id: 3, url: "https://www.link3.dev"}];
        const output2 = [{ id: 1, url: "https://www.url1.dev"}, { id: 2, url: "https://www.url2.dev"}];
        const output3 = [];

        expect(filterByTerm(input, "link")).toEqual(output);
        expect(filterByTerm(input, "LINK")).toEqual(output);
        expect(filterByTerm(input, "uRl")).toEqual(output2);
        expect(filterByTerm(input, " ")).toEqual(output3);

    });
    
    test("it should throw an error if search term is empty", () => {
        const input = [
            { id: 1, url: "https://www.url1.dev"},
        ];
        
        expect(() => filterByTerm(input, '').toThrow('searchTerm cannot be empty'));        
    })

    test("it should throw an error if inputArr is empty", () => {
        const input = [];

        expect(() => filterByTerm(input, 'findme').toThrow('inputArr cannot be empty'));
    })
});
