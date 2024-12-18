export interface IProject {
  id: string;
  title: string;
  description: string;
  cover: string;
  status: string;
  type?: string;
  technologies?: string[];
  storybook?: string;
  github?: string;
  youtube?: string;
  demo?: string;
}
