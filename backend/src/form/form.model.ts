import {Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";

@Table({tableName: 'forms'})
export class Form extends Model<Form>{
    // @Column({
    //     type: DataType.STRING,
    //     autoIncrement: true,
    //     unique: true,
    //     primaryKey: true
    // })
    // id: string;

    @ApiProperty({
        example: 'Taras',
        required: true
    })
    @Column({type: DataType.STRING})
    name: string;

    @ApiProperty({
        example: 'example@domain.com',
        required: true
    })
    @Column({
        type: DataType.STRING,
        unique: true
    })
    email: string;

    @ApiProperty({
        example: 'Some message',
        required: true
    })
    @Column({type: DataType.STRING})
    message: string;

}