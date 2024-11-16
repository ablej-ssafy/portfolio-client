export enum TemplateType {
  BASIC_LIGHT = 'BASIC_LIGHT',
  BASIC_DARK = 'BASIC_DARK',
  MODERN_LIGHT = 'MODERN_LIGHT',
  MODERN_DARK = 'MODERN_DARK',
}

export interface ResumeType {
  memberId: number;
  isPrivate: boolean;
  templateType: TemplateType;
  hashKey: string;
  basic: Basic;
  projects: Activity[];
  companies: Activity[];
  activities: Activity[];
  educationals: Education[];
  qualifications: Qualification[];
}

export interface Basic {
  name: string;
  profileImage?: string;
  job: string;
  title: string;
  introduce: string;
  email?: string;
  phoneNumber?: string;
  github?: string;
  website?: string;
}

export interface Activity {
  experienceType: string;
  title: string;
  affiliation: string;
  startAt: Date;
  endAt: Date;
  description: string;
  referenceUrl?: string;
  experienceId: number;
}

export interface Qualification {
  name: string;
  organization: string;
  credential?: string;
  acquisitionAt: Date;
  grade?: string;
  certificationType: string;
  certificationId: number;
}

export enum GradeType {
  FOUR_POINT_FIVE,
}

export interface Education {
  educationalId: number;
  name: string;
  major: string;
  category: string;
  grade?: string;
  gradeType?: GradeType;
  description: string;
  startAt: Date;
  endAt: Date;
}
