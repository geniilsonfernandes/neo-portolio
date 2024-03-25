import { Paperclip } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import AnchorButton from "../AnchorButton";
import Tag from "../Tag";
type ProjectProps = {
  path: string;
  image?: string;
};

const Project = ({ path, image }: ProjectProps) => {
  return (
    <div className="p-4 bg-neutral-900/40">
      <div>
        {image && (
          <Image
            src={image}
            alt="Money Guard"
            width={600}
            height={400}
            className="w-full h-36 bg-neutral-800 object-cover mb-4"
          />
        )}
      </div>
      <div className="flex gap-2 justify-between items-end">
        <Link
          href={`project/${path}`}
          className="text-neutral-300 text-lg font-bold font-mono"
        >
          Money Guard
        </Link>
        <Tag name="Finalizado" />
      </div>
      <p className="text-neutral-400 text-sm leading-5 font-mono mt-2">
        Money Guard é um aplicativo de controle financeiro focado na gestão
        mensal, estabelecendo metas e tendo como ponto central o salário do
        usuário.
      </p>
      <div className="flex gap-4 items-end mt-4">
        <AnchorButton>Github</AnchorButton>
        <AnchorButton>Demo</AnchorButton>
        <Link href={`project/${path}`} passHref>
          <button className="border border-neutral-600 text-neutral-300 h-7  text-sm hover:text-neutral-100 px-4 py-2 flex items-center gap-2 font-mono hover:bg-neutral-900">
            ./documentação <Paperclip size={16} strokeWidth={2} />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Project;
