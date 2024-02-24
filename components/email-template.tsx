import * as React from 'react';

interface EmailTemplateProps {
  name: string;
  comment: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, comment
}) => (
  <div>
    <h1>Hi, {name}!</h1>
    <p>Thank you for reaching out! I'll get back to you soon.</p>
    <p>Here's what you wrote:</p>
    <p>{comment}</p>
  </div>
);
