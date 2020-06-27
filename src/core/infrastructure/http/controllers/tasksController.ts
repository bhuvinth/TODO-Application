/* eslint-disable class-methods-use-this */
import { JsonController, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';
import TaskDTO from '../dto/taskDTO';

@JsonController('/tasks')
export default class TasksController {
  @Get('')
  async getAll() {
    return { tasks: [] };
  }

  @Get('/:id')
  async getOne(@Param('id') id: number) {
    console.log(id);
    return { dummyResponse: true };
  }

  @Post('')
  post(@Body() tasks: TaskDTO) {
    return tasks;
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() task: TaskDTO) {
    console.log(id, task);
    return {
      dummyResponse: true,
    };
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    console.log(id);
    return {
      dummyResponse: true,
    };
  }
}
