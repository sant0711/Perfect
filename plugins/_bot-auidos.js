//Creditos a Sisked// 
let handler = async (m, { conn }) => {
  let chat = global.db.data.chats[m.chat]
  try {
    let text = m.text.toLowerCase();
    
    if (chat.audios){
    switch (text) {
        
        case 'bueno master':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/xynz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'poco de gente':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://f.uguu.se/YxAfrAnj.opus', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tarado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/CoOd.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'donde esta':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/kCWg.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'q onda':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/YpsR.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'bebesita':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Ouwp.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tka':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/jakw.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'takataka':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/rxvq.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'hey':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/AaBt.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'joder':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/lSgD.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'siuuu':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/bfC.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'amongos':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Mnrz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'teamo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/rGdn.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'estoy triste':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/QSyP.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'un pato':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/pmOm.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'fiesta viernes':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/wqXs.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'wtf':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/aPtM.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'yokese':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/PWgf.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'vete a la vrg':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/pXts.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'se pubrio':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/keKg.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'temazo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/SWYV.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case ':v':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/cxDg.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'freefire':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Dwqp.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'es viernes':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/LcdD.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'feriado':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/mFCT.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'delibery':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/WGzN.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'aguanta':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Qmz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'moshi moshi':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/JAyd.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'nadie te pregunto':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/MrGg.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'feliz navidad':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/XYyY.m4a', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'niconico':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/YdVq.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no chupala':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/iCRk.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no me hables':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/xxtz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no me hagas usar esto':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/bzDa.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no digas eso papus':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/jsb.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'noche de paz':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/SgrV.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'omg':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/PfuN.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'onichan':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/sEFj.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'orale':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Epen.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'pasa pack':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/KjHR.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'contexto':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/YBzh.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'pero esto':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/javz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'pikachu':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/wbAf.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'pokemon':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/kWLh.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'quien es tu botsito':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/uyqQ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'rawr':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/YnoG.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'hablame':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/uQqA.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'cagaste':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/FAVP.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'yoshi':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/ZgKT.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'verdad que te engañe':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/yTid.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'vivan los novios':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/vHX.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'yamete':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/thgS.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'usted está detenido':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/UWqX.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'una pregunta':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/NHOM.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'chiste':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/MSiQ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'gaspi y la minita':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/wYil.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'gaspi frase':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/gNwU.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'hermoso negro':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/ExSQ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'ara ara':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/PPgt.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'bienvenido wey':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/cUYg.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break; 

        case 'buen dia grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/GoKq.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'calla fan de bts':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/oqNf.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'cambiate a movistar':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/RxJC.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'corte corte':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/hRuU.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'el toxico':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/WzBd.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'elmo sabe donde vives':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/YsLt.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'en caso de una investigación':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/Syg.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'FBI':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/wFbD.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no estes tite':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/VrjA.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'eres fuerte':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/lhzq.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'zzzz':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/KkSZ.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'las reglas del grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/fwek.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'me anda buscando anonymous':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/MWJz.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'momento xds':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/PitP.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'motivacion':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/MXnK.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'muchachos escucharon':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/dRVb.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'nico nico':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/OUyB.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'no rompas mas':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/ZkAp.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'potasio':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/vPoj.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'que tal grupo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/lirF.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'se estan riendo de mi':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/XBXo.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'su nivel de pendejo':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/SUHo.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'tal vez':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/QMjH.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'te gusta el pepino':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/ddrn.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'todo bien':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/EDUC.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'traiganle una falda':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat, 'https://qu.ax/fnTL.mp3', `${text}.mp3`, null, m, true, { type: 'audioMessage' });
            break;

        case 'y este quien es':
            conn.sendPresenceUpdate('recording', m.chat);
            await conn.sendFile(m.chat
