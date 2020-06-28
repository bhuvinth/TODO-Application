/* eslint-disable class-methods-use-this */
import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Authorized,
  QueryParams,
} from 'routing-controllers';
import TaskApplicationService from '@main/core/application-service/taskService';

import TaskDTO from '../dto/taskDTO';
import TaskPageQuery from '../dto/taskPageQuery';
import UnableToDeleteTaskError from '../../errors/unableToDeleteTaskError';

@JsonController('/tasks')
@Authorized()
export default class TasksController {
  private taskApplicationService: TaskApplicationService = new TaskApplicationService();

  @Get('')
  async getAll(@QueryParams() query: TaskPageQuery) {
    return this.taskApplicationService.getAllTasks(query);
  }

  @Get('/search')
  async search(@QueryParams() query: TaskPageQuery) {
    return this.taskApplicationService.searchTaskByCriteria(query);
  }

  @Get('/:id')
  async getOne(@Param('id') id: number) {
    return this.taskApplicationService.getTaskById(id);
  }

  @Post('')
  post(@Body() taskDtoObj: TaskDTO) {
    return this.taskApplicationService.addTask(taskDtoObj);
  }

  @Put('/:id')
  put(@Param('id') id: number, @Body() task: TaskDTO) {
    return this.taskApplicationService.updateTask(id, task);
  }

  @Delete('/:id')
  remove(@Param('id') id: number) {
    const isDeleted = this.taskApplicationService.deleteTaskById(id);
    if (isDeleted) return {};

    throw new UnableToDeleteTaskError();
  }
}
