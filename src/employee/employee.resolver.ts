import { Resolver, Query } from '@nestjs/graphql';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(()=>Employee)
export class EmployeeResolver {

    constructor(private employeeService:EmployeeService) {}
    @Query(()=> [Employee], { name:'getAllEmployees' })
    findAll(){
        return this.employeeService.findAll();
    }
}
