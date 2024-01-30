import PersonaInfo from '@/app/ui/persona/persona-info';
import persona from "../../../../public/persona.json";

export default async function Page({ params }: { params: { id: string } }) {
    const id = params.id;

    return (
      <main>
        <PersonaInfo persona={persona} />
      </main>
    );
  }