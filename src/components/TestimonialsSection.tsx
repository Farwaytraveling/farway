import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emma Lindqvist",
    age: 23,
    program: "Working Holiday, Australien",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "Tack vare UtlandGuide hittade jag rätt visum och det bästa programmet för mig. Året i Australien förändrade mitt liv!",
    rating: 5,
  },
  {
    name: "Oscar Bergström",
    age: 21,
    program: "Au Pair, USA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    text: "Smidigt att jämföra olika au pair-organisationer. Fick bra koll på vad som ingick i priset innan jag bestämde mig.",
    rating: 5,
  },
  {
    name: "Maja Karlsson",
    age: 25,
    program: "Volontär, Thailand",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    text: "Super att kunna läsa omdömen från andra svenskar. Kände mig trygg med mitt val och upplevelsen överträffade alla förväntningar.",
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Vad säger våra resenärer?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Tusentals svenskar har hittat sitt drömäventyr via oss
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all relative"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10" />
              
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div>
                  <h4 className="font-display font-semibold text-foreground">
                    {testimonial.name}, {testimonial.age}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.program}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
