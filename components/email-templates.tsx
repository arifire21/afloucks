import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  email?:string;
  comment: string;
}

export const VisitorEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, comment
}) => (
  <>
    <div>
      <p>Hi, {name}!</p>
      <p>Thank you for reaching out! I&apos;ll get back to you soon.</p>
      <p>Here&apos;s what you wrote:</p>
      <p>{comment}</p>
    </div>

    <div>
      <p style={{marginBottom: 0}}>Arianna L.</p>
      <a href='https://www.ariannaloucks.com/'>www.ariannaloucks.com</a>
    </div>
  </>
);

export const DevEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, email, comment
}) => (
  <>
    <div>
      <p>New Email</p>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Comment: {comment}</p>
    </div>
  </>
);