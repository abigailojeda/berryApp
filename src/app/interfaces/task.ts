import { TaskObjectives } from "./taskObjective";
import { TaskTag } from './taskTag';

export interface Task {
	task_title?: string;
	task_description?: string;
	objectives:TaskObjectives[];
    tags:TaskTag[];
}
