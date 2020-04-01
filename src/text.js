// Carrega variável de ambiente com o caminho das credenciais
require('dotenv').config()

async function quickstart() {
  // Importando a biblioteca do client oficial da Google
  const vision = require('@google-cloud/vision');

  // Criação de uma instância do client
  const client = new vision.ImageAnnotatorClient();

  // Caminho da imagem
  const imageLocation = './resources/placa1.jpeg';

  // O caminho da imagem pode ser uma URL também (não recomendado para ambiente de produção). Exemplo:
  // const imageLocation = 'https://http.cat/207'

  // Realiza o reconhecimento de texto na imagem
  const [result] = await client.textDetection(imageLocation);
  const [firstDetection] = result.textAnnotations;
  const detections = result.textAnnotations;

  // Exibe no console as ocorrências encontradas na imagem
  console.log('Primeira ocorrência:');
  console.log(firstDetection.description)
  console.log('Todas as ocorrências:');
  detections.forEach(text => console.log(text));
}

quickstart();
