import { Category } from './category';

export interface Project {
	_id:string;
    user_id:string;
	project_name?: string;
	categories?:Category[];
}
