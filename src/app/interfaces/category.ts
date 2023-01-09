import { Task } from './task';

export interface Category {
	category_name?: string;
	task?:Task[];
}
