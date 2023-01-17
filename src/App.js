
import './App.css';
import FullName from './Profile/Profile Component/FullName';
import Photo from './img.jpg'
import Bio from './Profile/Profile Component/Bio';
import Profession from './Profile/Profile Component/Profession';

function App() {
  return (
    <div className='App'>
      <div>
      <FullName
      FullName="Anes Masmoudi" alertMe={alertMe}>
        <div className='image'>
          <img src={Photo}/>
        </div>
        </FullName>
      </div>


      <div>
        <Bio Bio="bio"
             Date="02/07/2000 Batna"
             Adress="EL-Boustan Batna"
             Mobil="0666944668"
             Mail="ani02mas@gmail.com"
             Biog="I'm superior technician in Automation,full stack devlopper "
        >
        </Bio>
      </div>

      <div>
        <Profession Profession="Profession"
        Experrience1="2018-2022: Stage pratique au niveau de ETS MANSOURI KAMEL
        (Vente en gros équipements d'électricité industriel)"
        Experrience2="2022-à ce jour : Technicien d'installation à ETS MANSOURI KAMEL"
        >
        </Profession>      
      </div>

    </div>
  );
}

export default App;
