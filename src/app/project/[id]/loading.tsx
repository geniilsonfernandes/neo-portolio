import { IconLoader } from "@tabler/icons-react";

function loading() {
  return (
    <div className="container mx-auto mt-24 min-h-screen flex justify-center items-center">
      <IconLoader className="animate-spin" />
    </div>
  );
}

export default loading;
