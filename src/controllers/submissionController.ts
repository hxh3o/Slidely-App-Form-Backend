import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { Submission } from '../types/submission';

const dbPath = path.resolve(__dirname, '../db/db.json');

export const submitForm = (req: Request, res: Response) => {
  try {
    const { name, email, phone, github_link, stopwatch_time } = req.body;
    
    // Read current data
    const submissions = JSON.parse(fs.readFileSync(dbPath, 'utf-8')) as Submission[];

    // Create new submission
    const newSubmission: Submission = {
      name,
      email,
      phone,
      github_link,
      stopwatch_time,
      timestamp: new Date().toISOString(),
    };

    // Add to submissions array
    submissions.push(newSubmission);

    // Write to file
    fs.writeFileSync(dbPath, JSON.stringify(submissions, null, 2));

    res.status(201).json({ message: 'Submission successful', submission: newSubmission });
  } catch (error) {
    console.error('Error submitting form:', error);
    res.status(500).json({ message: 'Error submitting form' });
  }
};

export const readForm = (req: Request, res: Response) => {
  try {
    const index = Number(req.query.index) || 0;

    // Read current data
    const submissions = JSON.parse(fs.readFileSync(dbPath, 'utf-8')) as Submission[];

    if (index < 0 || index >= submissions.length) {
      res.status(404).json({ message: 'Submission not found' });
    } else {
      res.status(200).json(submissions[index]);
    }
  } catch (error) {
    console.error('Error reading form:', error);
    res.status(500).json({ message: 'Error reading form' });
  }
};
