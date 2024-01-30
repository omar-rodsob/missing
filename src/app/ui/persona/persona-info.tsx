import next from "next";
import Image from "next/image";


import { personaData} from '@/app/lib/definitions';


export default function PersonaInfo({
    persona
}:{
    persona:personaData
}) {
  return (
      <div>
        <div className="flex flex-row"> 
            <div className="image-container">
                <Image src={persona.picture} width={400} height={700} alt={persona.name} />
            </div>
            <div className="info-container">
                <table>
                    <tbody>
                        <tr>
                            <td>Nombre: </td>
                            <td>{persona.name}</td>
                        </tr>
                        <tr>
                            <td>Edad: </td>
                            <td>{persona.age}</td>
                        </tr>
                        <tr>
                            <td>Sexo: </td>
                            <td>{persona.gender}</td>
                        </tr>
                        <tr>
                            <td>Se identifica: </td>
                            <td>{persona.identified}</td>
                        </tr>
                        <tr>
                            <td>Estatura: </td>
                            <td>{persona.height}</td>
                        </tr>
                        <tr>
                            <td>Ojos: </td>
                            <td>{persona.eyes}</td>
                        </tr>
                        <tr>
                            <td>Piel: </td>
                            <td>{persona.skin}</td>
                        </tr>
                        <tr>
                            <td>Senias: </td>
                            <td>{persona.signals}</td>
                        </tr>
                        <tr>
                            <td>Descripcion: </td>
                            <td>{persona.description}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div className="buttons">
            <button>uno</button>
            <button>dos</button>
            <button>tres</button>
        </div>
        

      </div>
  );
}
