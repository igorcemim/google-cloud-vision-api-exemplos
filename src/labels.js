// Carrega variável de ambiente com o caminho das credenciais
require('dotenv').config()

async function quickstart() {
  // Importando a biblioteca do client oficial da Google
  const vision = require('@google-cloud/vision');

  // Criação de uma instância do client
  const client = new vision.ImageAnnotatorClient();

  const images = [
    './resources/cat1.jpg',
    './resources/cat2.jpg',
    './resources/cat3.jpg',
    './resources/dog1.jpg',
    './resources/dog2.jpg',
    './resources/dog3.jpg',
  ];

  // Caminho da imagem
  for (const imageLocation of images) {

    // O caminho da imagem pode ser uma URL também (não recomendado para ambiente de produção). Exemplo:
    // const imageLocation = 'https://http.cat/207'

    // Realiza o reconhecimento de labels na imagem
    const [result] = await client.labelDetection(imageLocation);

    // Exibe no console os labels para a imagem
    const labels = result.labelAnnotations;
    console.log('-------------------------')
    console.log('Imagem: ' + imageLocation);
    console.log("\nLabels:");
    labels.forEach(label => {
      console.log('-> Descrição => ' + label.description)
      console.log('   Score => ' + label.score + "\n")
    });
  }
}

quickstart();
