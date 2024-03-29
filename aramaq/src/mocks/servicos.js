import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import pneumatica from '../../assets/pneumatica.jpg';
import eletrica from '../../assets/eletrica.jpg';
import mecanica from '../../assets/mecanica.jpg';
import tornearia from '../../assets/tornearia.jpg';

const servico = {
  top: {
    titulo: "Nossos serviços"
  },
  details: {
    tituloConheca: "Conheça nossas especialidades",
    icone: <MaterialCommunityIcons name='tools' size='20'/>,
    nomeEmpresa: "Aramaq Serviços Industriais",
    descricao: "A melhor solução com os melhores especialistas",
    titulo: "Serviços",
  },
  bottom: {
    botao: 'Whatsapp'
  },
  itens: {
    lista: [
      {
        nome: "Pneumatica",
        imagem: pneumatica,
      },
      {
        nome: "Eletrica",
        imagem: eletrica,
      },
      {
        nome: "Mecanica",
        imagem: mecanica,
      },
      {
        nome: "Tornearia",
        imagem: tornearia,
      },
    ]
  }
}

export default servico;