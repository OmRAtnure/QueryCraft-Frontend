import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen, FlaskConical, ArrowRight, Zap, Database, Code2, CheckCircle2 } from "@/components/icons";

const features = [
  {
    icon: BookOpen,
    title: "English to SQL",
    description: "Type natural English and watch it transform into perfect SQL queries instantly.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: FlaskConical,
    title: "Test & Practice",
    description: "Hone your skills with interactive challenges, from SELECT to complex JOINs.",
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    icon: Zap,
    title: "Instant Results",
    description: "See query results in real-time with formatted tables and helpful error messages.",
    color: "text-accent",
    bg: "bg-accent/10",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative gradient-hero pt-32 pb-20 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary text-sm font-medium animate-fade-in">
              <Zap className="w-4 h-4" />
              Learn SQL the fun way
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-extrabold text-foreground leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Learn SQL the easy way —{" "}
              <span className="bg-clip-text  text-transparent bg-gradient-to-r from-primary to-secondary">
                from English to query results!
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Type what you want in plain English, see the SQL, run it, and learn by doing. 
              Perfect for beginners and pros alike.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="hero" size="xl" asChild>
                <Link to="/Register" className="flex items-center gap-2">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-1" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="xl" asChild>
                <Link to="/learn">Try Demo</Link>
              </Button>
            </div>
          </div>

          {/* Floating decorative elements */}
          <div className="absolute top-20 left-10 w-20 h-20 rounded-2xl bg-primary/5 animate-float" />
          <div className="absolute top-40 right-16 w-14 h-14 rounded-xl bg-accent/10 animate-float" style={{ animationDelay: "1s" }} />
          <div className="absolute bottom-10 left-1/4 w-10 h-10 rounded-lg bg-secondary/10 animate-float" style={{ animationDelay: "1.5s" }} />
        </div>
      </section>

      {/* Mode Cards */}
      <section className="py-20 container mx-auto px-4">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Two ways to master SQL</h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Choose your path — learn interactively or test your knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Learn Mode Card */}
          <Link to="/learn" className="group">
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 gradient-primary" />
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <BookOpen className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">Learn Mode</h3>
              <p className="text-muted-foreground mb-4">
                Type English sentences and see them converted to SQL queries with instant results.
              </p>
              <span className="inline-flex items-center gap-1 text-primary font-medium text-sm group-hover:gap-2 transition-all">
                Start Learning <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>

          {/* Test Mode Card */}
          <Link to="/test" className="group">
            <div className="relative rounded-2xl border border-border bg-card p-8 shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 gradient-accent" />
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                <FlaskConical className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-2">Test Mode</h3>
              <p className="text-muted-foreground mb-4">
                Write SQL queries directly, run them, and validate your skills with instant feedback.
              </p>
              <span className="inline-flex items-center gap-1 text-secondary font-medium text-sm group-hover:gap-2 transition-all">
                Take a Test <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">Everything you need</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              A complete toolkit to go from SQL beginner to confident querier.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl bg-card border border-border p-7 shadow-card animate-fade-in"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`w-12 h-12 rounded-xl ${f.bg} flex items-center justify-center mb-4`}>
                  <f.icon className={`w-6 h-6 ${f.color}`} />
                </div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-2">{f.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-6 h-6 rounded-md gradient-primary flex items-center justify-center">
              <Database className="w-3 h-3 text-primary-foreground" />
            </div>
            <span className="font-heading font-bold text-foreground">Query<span className="text-primary">Craft</span></span>
          </div>
          <p className="text-sm text-muted-foreground">© 2026 QueryCraft. Learn SQL with confidence.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
