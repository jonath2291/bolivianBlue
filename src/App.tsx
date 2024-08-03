import { Button } from "@/components/ui/button";

export const App = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      <Button variant={"default"}>Shacnd</Button>
      <Button variant={"destructive"}>Shacnd</Button>
      <Button variant={"ghost"}>Shacnd</Button>
      <Button variant={"link"}>Shacnd</Button>
    </div>
  );
};
