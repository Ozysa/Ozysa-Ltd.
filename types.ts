
import React from 'react';

export interface BusinessWing {
  title: string;
  description: string;
  icon: React.ReactNode;
  category: string;
}

export type ContactCategory = 'IT' | 'Manufacturing' | 'Trade' | 'Consultancy' | 'General Inquiry';

export interface ContactFormData {
  name: string;
  email: string;
  category: ContactCategory;
  message: string;
}
