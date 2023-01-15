import { IsEnum, IsNotEmpty, IsOptional, IsUrl, Length, validateOrReject } from "class-validator";

import { AccessType, Category } from "../models/category.model";

export interface ICreateCategoryDto extends Omit<Category, 'id' | 'creationAt' | 'updatedAt' > { }
export class CreateCategoryDto implements ICreateCategoryDto {
    @IsNotEmpty()
    @Length(5, 140)
    name!: string;

    @IsUrl()
    @IsNotEmpty()
    image!: string;
    
    @IsOptional()
    @IsEnum(AccessType)
    access?: AccessType | undefined;
}

(async () => {
    try {
        const dto = new CreateCategoryDto();
        dto.name = 'arst';
        dto.image = 'https://images.unsplash.com/photo-1622547748225-3fc4abd2cca0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80'
        await validateOrReject(dto);
    } catch (error) {
        console.error('ERROR: ', error)
    }
})();