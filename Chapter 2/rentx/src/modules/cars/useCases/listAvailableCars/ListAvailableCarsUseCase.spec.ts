import { CarsRepositoryInMemory } from "@modules/cars/repositories/in-memory/CarsRepositoryInMemory";

import { ListAvailableCarsUseCase } from "./ListAvailableCarsUseCase";

let listAvailableCarsUseCase: ListAvailableCarsUseCase;
let carsRepositoryInMemory: CarsRepositoryInMemory;

describe("List Cars", () => {
    beforeEach(() => {
        carsRepositoryInMemory = new CarsRepositoryInMemory();
        listAvailableCarsUseCase = new ListAvailableCarsUseCase(
            carsRepositoryInMemory
        );
    });

    it("should be able to list all available cars", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car1",
            description: "Carro description",
            daily_rate: 100.0,
            license_plate: "DEF-1234",
            fine_amount: 20,
            brand: "Brand",
            category_id: "id category",
        });

        const cars = await listAvailableCarsUseCase.execute({});

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by brand", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car2",
            description: "Carro description",
            daily_rate: 100.0,
            license_plate: "DEF-1234",
            fine_amount: 20,
            brand: "Brand_test",
            category_id: "id category",
        });

        const cars = await listAvailableCarsUseCase.execute({
            brand: "Brand_test",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by name", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car3",
            description: "Carro description",
            daily_rate: 100.0,
            license_plate: "DEF-1111",
            fine_amount: 20,
            brand: "Brand_test",
            category_id: "id category",
        });

        const cars = await listAvailableCarsUseCase.execute({
            name: "Car3",
        });

        expect(cars).toEqual([car]);
    });

    it("should be able to list all available cars by category", async () => {
        const car = await carsRepositoryInMemory.create({
            name: "Car4",
            description: "Carro description",
            daily_rate: 100.0,
            license_plate: "DEF-2222",
            fine_amount: 20,
            brand: "Brand_test",
            category_id: "id_test",
        });

        const cars = await listAvailableCarsUseCase.execute({
            category_id: "id_test",
        });

        expect(cars).toEqual([car]);
    });
});
