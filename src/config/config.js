require('dotenv').config();


module.exports = {
    token: '',
    clientId: '1273230302822797312',
    guildId: '1106591466651922502',
    youtubeApiKey: AIzaSyDekrJzUSrL1QLmhjsd9MyLgh6ofvf8UXU,
    mongoUri: mongodb+srv.//z36o6:Aa_123456@z36o6.ha7kd.mongodb.net/?retryWrites=true&w=majority&appName=z36o6,
   spotify: {
        clientId: dcdf5fe8bd084f59acc72e939b8abc75,
        clientSecret: 89480622a0604925b3d2813c864b5c12,
    },

    cookies:{
        domain: ".youtube.com",
        expirationDate: 1757764090.235338,
        hostOnly: false,
        httpOnly: false,
        name: "__Secure-1PAPISID",
        path: "/",
        sameSite: "unspecified",
        secure: true,
        session: false,
        storeId: "0",
        value: "1WEHRrYUBttCn9ih/ACbOwdBzceu9lwe-x",
        id: 1
    },
    
    distubeOptions: {
        emitAddListWhenCreatingQueue: true,
        emitAddSongWhenCreatingQueue: false,
        emitNewSongOnly: true,
        joinNewVoiceChannel: true,
        nsfw: true,
        savePreviousSongs: true,
    }
};
