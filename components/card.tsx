// import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
// import AspectRatio from '@mui/joy/AspectRatio';
import { Button, Card, CardContent, CardActions, Typography, Chip } from '@mui/joy';

type variantOptions = 'solid' | 'outlined'
type linkOptions = 'github' | 'site' | 'figma' | 'details'

interface ButtonInterface {
  text:string,
  variant: variantOptions,
  link:string,
  linkTo: linkOptions, //kind of like an id, to be part of key
}

interface WorkProps {
    // logo: StaticImageData;
    position: string;
    company: string;
    jobType: string;
    duration: string;
    blurb: string;
    // link: string;
    tools: string[];
    buttons?: ButtonInterface[];
}

interface ProjectProps {
  blurb: string;
  // link: string;
  projectTitle: string;
  subtitle?: string;
  date: string;
  tools: string[];
  buttons?: ButtonInterface[];
}

export function WorkCard({position, company, jobType, duration, blurb, tools, buttons} : WorkProps) {
  return (
    <Card sx={{ width: 350, overflow: 'auto' }} size='lg' invertedColors>
      {/* <AspectRatio minHeight="120px" maxHeight="200px">
        <Image src={logo} alt='card-img' fill={true} style={{objectFit:'contain'}}/>
      </AspectRatio> */}
      <CardContent>
        <Typography level="title-lg">{position}</Typography>
        <Typography level='body-md'>{company}</Typography>
        <Typography level="body-sm">{jobType} | {duration}</Typography>
        <Typography>{blurb}</Typography>

        <div className='chip-container'>
        {tools.map((tool) => (
          <Chip variant='outlined' color='primary' key={`${company}-${tool}`}>{tool}</Chip>
        ))}
        </div>

        <CardActions>
        {buttons?.map((button) => (
          <Button 
            key={`${company}-${button.linkTo}`}
            variant={button.variant}
            size="md"
            color="primary"
            aria-label={`${company}-${button.linkTo} button`}
            sx={{ ml: 'auto', fontWeight: 500 }}
          >
            <Link href={button.link}>{button.text}</Link>
          </Button>
        ))}
        </CardActions>
      </CardContent>
    </Card>
  );
}

export function ProjectCard({projectTitle, subtitle, date, blurb, tools, buttons} : ProjectProps) {
  return (
    <Card sx={{ width: 350, overflow: 'auto' }} size='lg' invertedColors>
      <CardContent>
        <Typography level="title-lg">{projectTitle}</Typography>
        <Typography level='body-md'>{subtitle}</Typography>
        <Typography level="body-sm">{date}</Typography>
        <Typography>{blurb}</Typography>

        <div className='chip-container'>
        {tools.map((tool) => (
          <Chip variant='outlined' color='primary' key={`${projectTitle}-${tool}`}>{tool}</Chip>
        ))}
        </div>

        <CardActions>
        {buttons?.map((button) => (
          <Button 
            key={`${projectTitle}-${button.linkTo}`}
            variant={button.variant}
            size="md"
            color="primary"
            aria-label={`${projectTitle}-${button.linkTo} button`}
            sx={{ ml:'auto', fontWeight: 500 }}
          >
            <Link href={button.link}>{button.text}</Link>
          </Button>
        ))}
        </CardActions>

      </CardContent>
    </Card>
  );
}