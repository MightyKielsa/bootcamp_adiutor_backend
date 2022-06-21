import pool from '../index.js';

await pool.query(
  'Create table if not exists profile (userID int primary key generated always as identity, email text, slackUsername text)'
);

await pool.query(
  'Create table if not exists notes (notesID int primary key generated always as identity,userID int, week int, day int,tags text[], note text)'
);

await pool.query(
  'Create table if not exists help (helpID int primary key generated always as identity,userID int, topicID int)'
);

await pool.query(
  'Create table if not exists resource (resourceID int primary key generated always as identity,userID int, topicID int, tags text [], link text, rating numeric)'
);

await pool.query(
  'Create table if not exists topic (topicID int primary key generated always as identity,week int,day int, topic text, tags text [], happyToHelp int [])'
);
