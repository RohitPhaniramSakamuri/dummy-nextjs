export interface User {
  user_ID: string;
  email: string;
  googleID: string;
  forms?: Form[]; // form_ID references
  icon?: string;
  name: string;
  verified?: Date;
}

export interface Form {
  form_ID: string;
  title: string;
  description: string;
  createdAt: Date;
  createdBy: string; // user_ID reference
  publishedAt: Date;
  isActive: boolean;
  version: number;
  share_url: string;
  settings: FormSettings;
  sections: Section[];
}

export interface FormSettings {
  maxResponses?: number;
  startDate: Date;
  endDate?: Date;
  tab_switch_count?: number;
  timer?: number;
  autoSubmit?: boolean;
  cameraRequired: boolean;
}

export interface Section {
  section_ID: string;
  title: string;
  description: string;
  questions: Question[];
}

export interface Question {
  question_ID: string;
  order: number;
  section_ID: string;
  type: QuestionType;
  questionText: string;
  image?: string;
  isRequired: boolean;
  config: FieldType;
  logic?: Record<string, any>;
}

export enum QuestionType {
  TEXT = "TEXT",
  DATE = "DATE",
  MCQ = "MCQ",
  CHECKBOX = "CHECKBOX",
  DROPDOWN = "DROPDOWN",
  FILE_UPLOAD = "FILE_UPLOAD",
  EMAIL = "EMAIL",
  URL = "URL",
  RATING = "RATING",
}

export interface FormResponse {
  response_ID: string;
  form_ID: string;
  userId: string;
  startedAt: Date;
  submittedAt: Date;
  status: string;
  answers: Answer[];
  reportedFlags: ReportedFlag[];
  version: number;
}

export interface Answer {
  answer_ID: string;
  question_ID: string;
  value: string;
  isCorrect?: boolean;
  updatedAt: Date;
}

export interface ReportedFlag {
  reason: string;
  numTimesReported: number;
  flaggedBy: string;
  flaggedAt: Date;
}

export type ParamType =
  | "string"
  | "number"
  | "boolean"
  | "array[string]"
  | "file"
  | "date"
  | "checkBox";

export interface Param {
  name: string;
  type: ParamType;
  value?: string | number | boolean;
}

export interface Validation {
  name: string;
  type?: ParamType;
  params?: Param[];
  value?: string | number | boolean;
}

export interface FieldType {
  name: string;
  type: ParamType;
  params: Param[];
  validations: Validation[];
}

export const fieldtypes: FieldType[] = [
  {
    name: "text",
    type: "string",
    params: [
      { name: "placeholder", type: "string" },
      { name: "multiline", type: "boolean" },
    ],
    validations: [
      {
        name: "charlimit",
        params: [
          { name: "max", type: "number" },
          { name: "min", type: "number" },
        ],
      },
      {
        name: "keywordChecker",
        params: [
          { name: "contains", type: "string" },
          { name: "doesnotContain", type: "string" },
        ],
      },
      { name: "required", type: "boolean" },
    ],
  },
  {
    name: "mcq",
    type: "checkBox",
    params: [
      { name: "options", type: "array[string]" },
      { name: "shuffle", type: "boolean" },
      { name: "min", type: "number" },
      { name: "max", type: "number" },
    ],
    validations: [{ name: "required", type: "boolean" }],
  },
  {
    name: "dropdown",
    type: "string",
    params: [{ name: "options", type: "array[string]" }],
    validations: [{ name: "required", type: "boolean" }],
  },
  {
    name: "date",
    type: "date",
    params: [{ name: "includeTime", type: "boolean" }],
    validations: [
      {
        name: "dateRange",
        params: [
          { name: "minDate", type: "string" },
          { name: "maxDate", type: "string" },
        ],
      },
      { name: "required", type: "boolean" },
    ],
  },
  {
    name: "linear_scale",
    type: "number",
    params: [
      { name: "min", type: "number" },
      { name: "max", type: "number" },
      { name: "minLabel", type: "string" },
      { name: "maxLabel", type: "string" },
    ],
    validations: [{ name: "required", type: "boolean" }],
  },
  {
    name: "file_upload",
    type: "file",
    params: [
      { name: "allowedFileTypes", type: "array[string]" },
      { name: "maxFileSizeMB", type: "number" },
      { name: "maxFiles", type: "number" },
    ],
    validations: [{ name: "required", type: "boolean" }],
  },
  {
    name: "email",
    type: "string",
    params: [],
    validations: [
      {
        name: "format",
        params: [{ name: "type", type: "string", value: "email" }],
      },
      {
        name: "regex",
        type: "string",
        value: "^[\\w.-]+@[\\w-]+(\\.[\\w-]+)+$",
      },
      { name: "required", type: "boolean" },
    ],
  },
  {
    name: "url",
    type: "string",
    params: [],
    validations: [
      {
        name: "regex",
        type: "string",
        value: "^(https?:\\/\\/)?([\\w\\d-]+\\.)+[\\w\\d]{2,}(\\/\\S*)?$",
      },
      {
        name: "format",
        params: [{ name: "type", type: "string", value: "url" }],
      },
      { name: "required", type: "boolean" },
    ],
  },
];