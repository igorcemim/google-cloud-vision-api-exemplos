// Carrega variável de ambiente com o caminho das credenciais
require('dotenv').config()

async function quickstart() {
  // Importando a biblioteca do client oficial da Google
  const vision = require('@google-cloud/vision');

  // Criação de uma instância do client
  const client = new vision.ImageAnnotatorClient();

  // Caminho da imagem
  const imageLocation = './resources/cat1.jpg'

  // O caminho da imagem pode ser uma URL também (não recomendado para ambiente de produção). Exemplo:
  // const imageLocation = 'https://http.cat/207'

  // Realiza o reconhecimento de labels na imagem
  const [result] = await client.labelDetection(imageLocation);

  // Exibe no console os labels para a imagem
  const labels = result.labelAnnotations;
  console.log('Labels:');
  labels.forEach(label => {
    console.log(label.description);
  });
}

quickstart();
