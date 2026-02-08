export default function Footer() {
  return (
    <footer className="py-8 bg-muted text-center text-sm text-muted-foreground mt-auto">
      <div className="container mx-auto px-4">
        <p>© {new Date().getFullYear()} RT Mobility. All rights reserved.</p>
      </div>
    </footer>
  );
}
