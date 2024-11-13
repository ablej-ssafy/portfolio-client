export interface Basic {
    name: string;
    profileImage: string;
    job: string;
    title: string;
    introduce: string;
    email?: string;
    phoneNumber?: string;
    github?: string;
    website?: string;
  }
  
  export interface Activity {
    experienceType: string
    title: string
    affiliation: string
    startAt: string
    endAt: string
    description: string
    referenceUrl: string
    experienceId: number
  }
  
  export interface Qualification {
    name: string;
    organization: string;
    credential?: string;
    acquisitionAt: string;
    grade?: string;
    certificationType: string;
    certificationId: number;
  }

  export enum GradeType {
    FOUR_POINT_FIVE
  }
  
  export interface Education {
    educationalId: number;
    name: string;
    major: string;
    category: string;
    grade?: string;
    gradeType?: GradeType;
    description: string;
    startAt: string;
    endAt: string;
  }