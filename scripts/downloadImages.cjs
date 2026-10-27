const fs = require('fs');
const path = require('path');
const https = require('https');

const outDir = path.join(__dirname, '..', 'public', 'images', 'species');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const items = [
  { id: 'anfioxo', file: 'Branchiostoma_lanceolatum.jpg' },
  { id: 'ascidia', file: 'Cionaintestinalis.jpg' },
  { id: 'lampreia-marinha', file: 'Petromyzon_marinus.001_-_Aquarium_Finisterrae.jpg' },
  { id: 'tubarao-branco', file: 'White_shark.jpg' },
  { id: 'peixe-palhaco', file: 'Clown_fish_in_the_Andaman_Coral_Reef.jpg' },
  { id: 'pirarucu', file: 'Arapaima_gigas_at_Beijing_aquarium.JPG' },
  { id: 'sapo-cururu', file: 'Canetoadmale.jpg' },
  { id: 'axolote', file: 'Axolotl_ganz.jpg' },
  { id: 'ra-dardo-dourada', file: 'Schrecklicherpfeilgiftfrosch-01.jpg' },
  { id: 'tartaruga-verde', file: 'Green_sea_turtle_(Chelonia_mydas)_Moorea.jpg' },
  { id: 'jiboia', file: 'Red-tailed_boa_(Boa_constrictor_constrictor)_Rio_Napo.jpg' },
  { id: 'jacare-do-pantanal', file: 'Yacare_Caiman_(Caiman_Yacare)_-_Flickr_-_berniedup.jpg' },
  { id: 'arara-azul-grande', file: '008_Hyacinth_macaw_couple_kissing_under_Pink_Ipê_tree_in_Encontro_das_Águas_State_Park_Photo_by_Giles_Laurent.jpg' },
  { id: 'tucano-toco', file: '006_Toco_toucan_in_Encontro_das_Águas_State_Park_Photo_by_Giles_Laurent.jpg' },
  { id: 'pinguim-imperador', file: 'Aptenodytes_forsteri_-Snow_Hill_Island,_Antarctica_-adults_and_juvenile-8.jpg' },
  { id: 'onca-pintada', file: 'Standing_jaguar.jpg' },
  { id: 'capivara', file: 'Capybaracropped.jpg' },
  { id: 'baleia-azul', file: 'Anim1754_-_Flickr_-_NOAA_Photo_Library.jpg' },
  { id: 'morcego-vampiro', file: 'Desmo-Flug-01.jpg' },
  { id: 'surucucu', file: 'Lachesis_muta_muta.jpg' }
];

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'ChordataEducationBot/1.0 (https://chordata.org; educational)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        // Follow redirect
        downloadFile(res.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (res.statusCode !== 200) {
        reject(new Error(`Failed with status code: ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(dest);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(dest, () => {});
        reject(err);
      });
    }).on('error', reject);
  });
}

async function run() {
  console.log(`Starting download of ${items.length} verified authentic species images...`);
  for (const item of items) {
    const dest = path.join(outDir, `${item.id}.jpg`);
    const encodedFile = encodeURIComponent(item.file);
    const url = `https://commons.wikimedia.org/wiki/Special:FilePath/${encodedFile}`;
    console.log(`Downloading ${item.id} from ${item.file}...`);
    try {
      await downloadFile(url, dest);
      const size = fs.statSync(dest).size;
      console.log(`✓ Downloaded ${item.id}.jpg (${(size / 1024).toFixed(1)} KB)`);
    } catch (err) {
      console.error(`✗ Error downloading ${item.id}:`, err.message);
    }
    // Respect Wikimedia rate limiting
    await new Promise(r => setTimeout(r, 600));
  }
  console.log('All image downloads complete!');
}

run();
