import { z } from 'zod';

export const boardMemberSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  role: z.string().min(1, 'Role is required').max(50, 'Role too long'),
  bio: z.string().min(1, 'Bio is required').max(500, 'Bio too long'),
  linkedin: z.string().url('Invalid LinkedIn URL').regex(/^https:\/\/(www\.)?linkedin\.com/, 'Must be a LinkedIn URL'),
});

export const committeeMemberSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  focus: z.string().min(1, 'Focus is required').max(100, 'Focus too long'),
  linkedin: z.string().url('Invalid LinkedIn URL').regex(/^https:\/\/(www\.)?linkedin\.com/, 'Must be a LinkedIn URL'),
});

export const eventSchema = z.object({
  title: z.string().min(1, 'Title is required').max(200, 'Title too long'),
  description: z.string().min(1, 'Description is required').max(1000, 'Description too long'),
  location: z.string().min(1, 'Location is required').max(200, 'Location too long'),
  time: z.string().min(1, 'Time is required').max(100, 'Time too long'),
  type: z.enum(['Workshop', 'Speaker', 'Educational', 'Keynote'], 'Invalid event type'),
  is_upcoming: z.boolean(),
});

export const emailSchema = z.object({
  email: z.string().email('Invalid email address').max(254, 'Email too long'),
});