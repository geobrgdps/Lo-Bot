import { LRUCache } from 'lru-cache'
import { cpus } from 'os'

const CPU_COUNT = cpus().length

Object.assign(globalThis, {
   // Nome do Dono
   ownerName: 'LZ',

   // Seu número do WhatsApp (Dono / Administrador)
   ownerNumber: '5516991994983',

   // Nome Oficial do Bot
   botName: 'Los Friends Bot',

   // Rodapé das mensagens
   footer: '✦ Los Friends',

   // Número do seu amigo (Bot) para gerar o código de 8 dígitos
   botNumber: '5516993297555',

   // Pareamento por código ativado
   pairingCode: true,

   // Limite diário para novos usuários
   defaultLimit: 15,

   // Nome do pacote de figurinhas
   stickerPackName: '📦 Los Friends Pack',

   // Criador das figurinhas
   stickerPackPublisher: 'Los Friends',

   // ********** API KEYS ********** //
   googleApiKey: '',
   apiUser: '',
   apiSecret: '',

   // ********** ADVANCED SETTINGS ********** //
   // Fuso horário do Brasil (Horário de Brasília)
   localTimezone: 'America/Sao_Paulo',

   botThumbnail: './media/Image/thumbnail.jpg',
   botMenuMusic: './media/Audio/menu-music.mp3',
   temporaryFolder: 'temp',
   pluginsFolder: 'plugins',
   authFolder: 'session',
   storeFilename: 'store.json',
   databaseFilename: 'database.json',
   temporaryFileInterval: 30 * 60 * 1_000,
   dataInterval: 10 * 60 * 1_000,
   gcInterval: 1 * 60 * 60 * 1_000,
   requestTimeout: 1.5 * 60 * 1_000,
   ffmpegTimeout: 1 * 60 * 1_000,
   minDelay: 100,
   maxDelay: 3 * 1_000,
   ignoreOldMessageTS: 30,
   rssLimit: 384 * 1_024 * 1_024,
   ffmpegConcurrency: Math.max(4, Math.floor(CPU_COUNT * 1.3)),
   maxNSFWScore: 0.75,
   maxHistoryChatSize: 20,
   ExploreSession: new LRUCache({
      max: 256,
      ttl: 1.5 * 60 * 1_000,
      updateAgeOnGet: false,
      updateAgeOnHas: false,
      ttlAutopurge: true
   })
})
