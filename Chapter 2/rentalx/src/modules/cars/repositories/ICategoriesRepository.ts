import { Category } from "../model/Category";

// DTO => Data transfer object
interface ICreateCategoryDTO {
    name: string;
    description: string;
}

// CategoriesRepository e PostgresCategoriesRepository são subtipos dessa classe

interface ICategoriesRepository {
    findByName(name: string): Category;
    list(): Category[];
    create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
