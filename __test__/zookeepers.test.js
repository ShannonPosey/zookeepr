const fs = require("fs");
const {filterByQuery, findById, createNewZookeeper, validateZookeeper} = require("../lib/zookeepers");
const {zookeepers} = require("../data/zookeepers.json");

jest.mock("fs");

test("creates an zookeeper", () => {
    const zookeeper = createNewZookeeper({
        name: "Darlene", id: "jhgdja3ng"},
        zookeepers
        );

        expect(zookeeper.name).toBe("Darlene");
        expect(zookeeper.id).toBe("jhgdja3ng");
});

test("filters by query", () => {
    const startingZookeeper = [
        {
            id: "2",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin",
        },
        {
            id: "3",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
        },
    ];

    const updateZookeeper = filterByQuery({age: 31},
    startingZookeeper);

    expect(updateZookeeper.length).toEqual(1);
    
});

test("finds by id", () => {
    const startingZookeeper = [
        {
            id: "2",
            name: "Raksha",
            age: 31,
            favoriteAnimal: "penguin",
        },
        {
            id: "3",
            name: "Isabella",
            age: 67,
            favoriteAnimal: "bear",
        },
    ];

    const result = findById("3", startingZookeeper);

    expect(result.name).toBe("Isabella");
});

test("validates age", () => {
    const zookeeper = {
        id: "2",
        name: "Raksha",
        age: 31,
        favoriteAnimal: "penguin",
    };
    
    const invalidZookeeper = {
        id: "3",
        name: "Isabella",
        age: "67",
        favoriteAnimal: "bear",
    };

    const result = validateZookeeper(zookeeper);
    const result2 = validateZookeeper(invalidZookeeper);

    expect(result).toBe(true);
    expect(result2).toBe(false);
});