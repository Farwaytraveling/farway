import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Emma Lindqvist",
    age: 23,
    program: "Working Holiday, Australien",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    text: "Tack vare Farway hittade jag rätt visum och det bästa programmet för mig. Året i Australien förändrade mitt liv!",
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
    <section id="testimonials" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <p className="text-sm font-medium text-primary mb-3 tracking-wide uppercase">Omdömen</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Vad säger våra resenärer?
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg mx-auto">
            Tusentals svenskar har hittat sitt drömäventyr via oss
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-7 border border-border/60 hover:shadow-lg hover:border-primary/15 transition-all duration-300 relative group"
            >
              <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/8 group-hover:text-primary/15 transition-colors" />

              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6 text-[15px]">
                "{testimonial.text}"
              </p>

              <div className="flex items-center gap-3 pt-4 border-t border-border/50">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-11 h-11 rounded-full object-cover ring-2 ring-border"
                />
                <div>
                  <h4 className="font-semibold text-sm text-foreground">
                    {testimonial.name}, {testimonial.age}
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.program}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
