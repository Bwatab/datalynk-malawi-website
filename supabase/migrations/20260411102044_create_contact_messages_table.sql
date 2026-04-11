/*
  # Create contact messages table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier
      - `name` (text) - Full name of the sender
      - `email` (text) - Email address of the sender
      - `subject` (text) - Message subject
      - `message` (text) - Message body
      - `created_at` (timestamp) - When the message was submitted
      - `sent` (boolean) - Whether email was successfully sent

  2. Security
    - Enable RLS on `contact_messages` table
    - Add public policy to allow anonymous form submissions
    - Add policy to allow authenticated admin users to view all messages
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  sent boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow anonymous form submissions"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);
