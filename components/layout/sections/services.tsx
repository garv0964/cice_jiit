import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}const serviceList: ServiceProps[] = [
  {
    title: "Regular Workshops🚨",
    description: "We host workshops and seminars on the latest tech trends and breakthroughs.",
    pro: 0,
  },
  {
    title: "Fun Fact😉",
    description: "CICE features the largest Student Activity Room on campus.",
    pro: 0,
  },
  {
    title: "Free Components🆓",
    description: "At CICE, unlike other hubs, we provide free components for projects.",
    pro: 0,
  },
  {
    title: "Proper Guidance✨",
    description: "Our hub provides students guidance from experienced faculty members and successful alumni.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      {/* <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2> */}

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Key Features ^_^
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        We have the
        expertise to help you achieve your goals.
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              PRO
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
