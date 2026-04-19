import { useAuth } from "@/contexts/AuthContext";
import Login from "./Login";
import Dashboard from "./Dashboard";

const Index = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="font-serif text-3xl text-primary">HairVision</h1>
          <div className="h-1 w-24 mx-auto rounded-full bg-gradient-to-r from-primary/0 via-primary to-primary/0 animate-shimmer bg-[length:200%_100%]" />
        </div>
      </div>
    );
  }

  return user ? <Dashboard /> : <Login />;
};

export default Index;
