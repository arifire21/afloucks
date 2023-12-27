import Image, { StaticImageData } from 'next/image';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

interface CardProps {
    logo: StaticImageData;
    position: string;
    company: string;
    jobType: string;
    duration: string;
    blurb: string;
}

export default function GlimpseCard({logo, position, company, jobType, duration, blurb} : CardProps) {
  return (
    <Card sx={{ width: 350 }} size='lg'>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <Image src={logo} alt='card-img' fill={true} style={{objectFit:'contain'}}/>
      </AspectRatio>
      <CardContent>
        <div>
            <Typography level="title-lg">{position}</Typography>
            <Typography level='body-md'>{company}</Typography>
            <Typography level="body-sm">{jobType} | {duration}</Typography>
            <Typography>{blurb}</Typography>
        </div>
        <Button 
          variant="solid"
          size="md"
          color="primary"
          aria-label="View Silvi Details"
          sx={{ ml: 'auto', fontWeight: 600 }}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
}