import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Service } from "@shared/schema";
import { 
  Card, 
  CardContent, 
  CardFooter, 
  CardHeader, 
  CardTitle, 
  CardDescription 
} from "@/components/ui/card";

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <img 
          src={service.image} 
          alt={service.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-playfair font-bold text-foreground">
          {service.name}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center pt-2">
        <span className="text-accent font-bold">{service.price}</span>
        <Button 
          asChild
          size="sm"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full"
        >
          <Link href="/contact#booking">Book Now</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
