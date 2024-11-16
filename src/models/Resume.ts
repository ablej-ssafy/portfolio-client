import { Activity, Basic, Education, Qualification, TemplateType } from '@/types/resume';
import mongoose, { Schema } from 'mongoose';

export interface IResume {
  memberId: number;
  isPrivate: boolean;
  hashKey: string;
  templateType: TemplateType;
  basic: Basic;
  projects: Activity[];
  companies: Activity[];
  activities: Activity[];
  educationals: Education[];
  qualifications: Qualification[];
}

const resumeSchema: Schema = new Schema(
  {
    memberId: { type: Number, required: true, unique: true, immutable: true },
    isPrivate: { type: Boolean, required: true },
    hashKey: { type: String, required: true },
    templateType: { type: String, required: true },
    basic: {
      type: {
        name: { type: String, required: true },
        profileImage: { type: String },
        job: { type: String, required: true },
        title: { type: String, required: true },
        introduce: { type: String, required: true },
        email: { type: String },
        phoneNumber: { type: String },
        github: { type: String },
        website: { type: String },
      },
      required: true,
    },
    projects: [
      {
        type: {
          experienceType: { type: String, required: true },
          title: { type: String, required: true },
          affiliation: { type: String, required: true },
          startAt: { type: Date, required: true },
          endAt: { type: Date, required: true },
          description: { type: String, required: true },
          referenceUrl: { type: String },
          experienceId: { type: Number, required: true },
        },
        required: true,
      },
    ],
    companies: [
      {
        type: {
          experienceType: { type: String, required: true },
          title: { type: String, required: true },
          affiliation: { type: String, required: true },
          startAt: { type: Date, required: true },
          endAt: { type: Date, required: true },
          description: { type: String, required: true },
          referenceUrl: { type: String, required: true },
          experienceId: { type: Number, required: true },
        },
        required: true,
      },
    ],
    activities: [
      {
        type: {
          experienceType: { type: String, required: true },
          title: { type: String, required: true },
          affiliation: { type: String, required: true },
          startAt: { type: Date, required: true },
          endAt: { type: Date, required: true },
          description: { type: String, required: true },
          referenceUrl: { type: String, required: true },
          experienceId: { type: Number, required: true },
        },
        required: true,
      },
    ],
    educationals: [
      {
        type: {
          educationalId: { type: Number, required: true },
          name: { type: String, required: true },
          major: { type: String, required: true },
          category: { type: String, required: true },
          grade: { type: String },
          gradeType: { type: String },
          description: { type: String, required: true },
          startAt: { type: Date, required: true },
          endAt: { type: Date, required: true },
        },
        required: true,
      },
    ],
    qualifications: [
      {
        type: {
          name: { type: String, required: true },
          organization: { type: String, required: true },
          credential: { type: String },
          acquisitionAt: { type: Date, required: true },
          grade: { type: String },
          certificationType: { type: String, required: true },
          certificationId: { type: Number, required: true },
        },
        required: true,
      },
    ],
  },
  {
    collection: 'resume',
  },
);

const Resume = mongoose.models.resume || mongoose.model<IResume>('resume', resumeSchema);

export default Resume;
