export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto py-8 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Tienda UCN. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  );
};
