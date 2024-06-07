export interface Company {
  id: string;
  name: string;
  logo_url: string;
}

export type ButtonType = 'primary' | 'install'

export interface Quest {
  id: string;
  user_id: string;
  type: string;
  status: string;
  experience_points: number;
  due_date: string;
  company: Company;
  contact: object;
  job: object;
  created_at: string;
  title: string;
  description: string;
  image: string;
  button_type: ButtonType;
}
