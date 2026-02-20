export function SectionDivider() {
  return (
    <div className="relative h-24 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="w-full h-full opacity-10"
          style={{
            backgroundImage: 'url(/assets/generated/spice-pattern.dim_1200x400.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'repeat-x'
          }}
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background" />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-border" />
          <div className="w-2 h-2 rounded-full bg-primary/40" />
          <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
          <div className="w-2 h-2 rounded-full bg-secondary/40" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>
    </div>
  );
}
