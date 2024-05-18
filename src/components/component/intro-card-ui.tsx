import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../shadcn/ui/card_f_intro'

interface ICardProps {
    title: string;
    description: string;
    content: string;
    footer: string;
  }

  const ICard: React.FC<ICardProps> = ({ title, description, content, footer }) => {
  return (
    <Card className='bg-white'>
  <CardHeader>
    <CardTitle>{title}</CardTitle>
    <CardDescription>{description}</CardDescription>
  </CardHeader>
  <CardContent>
    <p>{content}</p>
  </CardContent>
  <CardFooter>
    <p>{footer}</p>
  </CardFooter>
</Card>

  )
}

export default ICard