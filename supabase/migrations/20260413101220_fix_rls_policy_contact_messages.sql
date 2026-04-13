/*
  # Fix RLS Policy - Remove Unrestricted Access
  
  1. RLS Policy Fix for contact_messages table
    - Replace the overly permissive INSERT policy that uses WITH CHECK (true)
    - New policy validates:
      - Email field contains valid email format using regex
      - Name, email, subject, and message are not empty
      - Prevents spam and ensures basic data integrity at the database level
*/

DROP POLICY IF EXISTS "Allow anonymous form submissions" ON contact_messages;

CREATE POLICY "Anonymous users can submit contact messages"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (
    email ~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$'
    AND length(trim(name)) > 0
    AND length(trim(email)) > 0
    AND length(trim(subject)) > 0
    AND length(trim(message)) > 0
  );
