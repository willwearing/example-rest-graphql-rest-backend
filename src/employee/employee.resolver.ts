import { Resolver, Query, Mutation, Args, ResolveField, Parent } from '@nestjs/graphql';
import { Project } from 'src/project/entities/project.entity';
import { EmployeeCreateDTO } from './dto/create-employee-input';
import { EmployeeService } from './employee.service';
import { Employee } from './entities/employee.entity';

@Resolver(()=>Employee)
export class EmployeeResolver {

    constructor(private employeeService:EmployeeService) {}
    @Query(()=> [Employee], { name:'getAllEmployees' })
    findAll(){
        return this.employeeService.findAll();
    }
    
    @Mutation(()=> Employee, {name:'createEmployee'})
    create(@Args('employee') employee:EmployeeCreateDTO){
        return this.employeeService.create(employee)
    }

    @ResolveField(() => Project)
    project(@Parent() employee: Employee) {
       return this.employeeService.getProject(employee.projectId)
    }
}
