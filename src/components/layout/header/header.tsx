export default function Header({ children }: { children: React.ReactNode }) {
  return (
    <header className="flex justify-between items-center">{children}</header>
  );
}
