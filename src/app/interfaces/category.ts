import { Task } from './task';

export interface Category {
	_id?:string;
	category_name?: string;
	task?:Task[];
}
