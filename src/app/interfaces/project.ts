import { Category } from './category';

export interface Project {
    user_id:string,
	project_name?: string;
	categories:Category[];
}
