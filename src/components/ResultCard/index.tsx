import Foto from 'assets/images/63682766.png';
import './styles.css';

type Props = {
  foto: string;
  perfil: string;
  seguidores: string;
  localidade: string;
  nome: string;
};

const ResultCard = ({foto, perfil, seguidores, localidade, nome }: Props) => {
  return (
    <div className="result-card-container">
        <div className='img-container'>
            <img src={foto} alt="fotografia"/>
        </div>

      <div className="info-container">
        <p className='title'>Informações:</p>
        <p className="info-item"><em className='field-caption'>Perfil: </em> <em className='perfil'>{perfil}</em></p>
        <p className="info-item"><em className='field-caption'>Seguidores: </em>{seguidores}</p>
        <p className="info-item"><em className='field-caption'>Localidade: </em>{localidade}</p>
        <p className="info-item"><em className='field-caption'>Nome: </em>{nome}</p>
      </div>

    </div>
  );
};

export default ResultCard;
