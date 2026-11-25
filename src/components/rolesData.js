const rolesByTeam = {
    Villaggio: [
        {
            name: "Anziano del Villaggio",
            team: "Villaggio",
            amount: 0,
            order: -1,
            max: 1,
            power: "Non può essere ucciso dai lupi ma muore automaticamente dopo alcune notti a discrezione del narratore"
        },
        {
            name: "Appestato",
            team: "Villaggio",
            amount: 0,
            order: -1,
            max: 1,
            power: "Quando vieni ucciso dai lupi, la notte seguente non potranno uccidere nessuno, in modo simile se vieni linciato, il giorno dopo non ci sarà un linciaggio"
        },
        {
            name: "Bambina",
            team: "Villaggio",
            amount: 0,
            order: 8,
            max: 1,
            power: "Di notte quando i lupi si svegliano puoi cercare di spiare ma se vieni scoperta muori in aggiunta al giocatore scelto dai lupi"
        },
        {
            name: "Cacciatore",
            team: "Villaggio",
            amount: 0,
            order: -1,
            max: 1,
            power: "Quando muori, durante il linciaggio o ucciso dai lupi, scegli un altro giocatore da uccidere immediatamente"
        },
        {
            name: "Capro Espiatorio",
            team: "Villaggio",
            amount: 0,
            order: -1,
            max: 1,
            power: "Durante il giorno, quando il narratore annuncia i morti, puoi sacrificarti  per far tornare in vita uno dei giocatori morti quella notte"
        },
        {
            name: "Confessore",
            team: "Villaggio",
            amount: 0,
            order: 12,
            max: 1,
            power: "Una volta per partita, di notte, scegli un giocatore, il giocatore scelto dopo essersi svegliato dovrà mostrare la sua carta ad un altro giocatore a sua scelta"
        },
        {
            name: "Consigliere",
            team: "Villaggio",
            amount: 0,
            order: 12,
            max: 1,
            power: "Ogni notte puoi scegliere un giocatore a parte te stesso e decidere il voto di quel giocatore varrà doppio o sarà nullo per quel giorno"
        },
        {
            name: "Contadino",
            team: "Villaggio",
            amount: 0,
            order: -1,
            max: 99,
            power: "Ruolo di base della squadra del villaggio"
        },
        {
            name: "Cortigiana",
            team: "Villaggio",
            amount: 0,
            order: 6,
            max: 1,
            power: "Ogni notte puoi scegliere un giocatore, quel giocatore è immune a qualsiasi potere per quella notte, se muori però, anche il giocatore scelto morirà con te"
        },
        {
            name: "Gemelli",
            team: "Villaggio",
            amount: 0,
            order: 1,
            max: 2,
            power: "Entrambi sanno chi è l'altro gemello, se uno dei due muore anche l'altro subisce la stessa sorte"
        },
        {
            name: "Guardiano",
            team: "Villaggio",
            amount: 0,
            order: 6,
            max: 1,
            power: "Ogni notte puoi scegliere un giocatore da proteggere per quella notte"
        },
        {
            name: "Guardone",
            team: "Villaggio",
            amount: 0,
            order: 3,
            max: 1,
            power: "Ogni notte scegli un giocatore e se si sveglia di notte, ti svegli insieme a lui, se appartiene alla squadra dei lupi, tu muori"
        },
        {
            name: "Investigatore",
            team: "Villaggio",
            amount: 0,
            order: 5,
            max: 1,
            power: "Ogni notte scegli due giocatori escluso te stesso per scoprire se appartengono alla stessa squadra"
        },
        {
            name: "Licantropo",
            team: "Villaggio",
            amount: 0,
            order: 14,
            max: 99,
            power: "Fai parte della squadra del villaggio ma la prima volta che vieni ucciso dai lupi ti unisci alla loro squadra al posto di morire"
        },
        {
            name: "Massoni",
            team: "Villaggio",
            amount: 0,
            order: 14,
            max: 99,
            power: "I massoni sanno chi sono gli altri massoni, nessun giocatore può parlare direttamente o indirettamente dei massoni, chi lo fa verrà ucciso quella notte dalla società segreta. I massoni si svegliano ogni notte per ultimi e vengono informati di quale giocatore ha usato un potere su uno di loro, non sanno né di che potere si tratta né su che membro del gruppo"
        },
        {
            name: "Oracolo",
            team: "Villaggio",
            amount: 0,
            order: 5,
            max: 1,
            power: "Ogni notte puoi vedere uno dei ruoli di uno dei giocatori morti la notte precedente"
        },
        {
            name: "Paranoico",
            team: "Villaggio",
            amount: 0,
            order: 5,
            max: 1,
            power: "Ogni notte sai se ci sono dei giocatori della squadra dei lupi nelle tue vicinanze"
        },
        {
            name: "Postino",
            team: "Villaggio",
            amount: 0,
            order: 2,
            max: 1,
            power: "Durante la prima notte, ti svegli e puoi scegliere uno dei tuoi due vicini di posto e rivelargli la tua carta"
        },
        {
            name: "Principe",
            team: "Villaggio",
            amount: 0,
            order: -1,
            max: 1,
            power: "Se verresti ucciso di notte, l'attacco viene invece deviato su uno dei tuoi due vicini di posto originali"
        },
        {
            name: "Sacerdote",
            team: "Villaggio",
            amount: 0,
            order: 5,
            max: 1,
            power: "Ogni notte se uno o più giocatori sono stati uccisi la notte precedente, puoi guardare il ruolo di uno di essi"
        },
        {
            name: "Sfigato",
            team: "Villaggio",
            amount: 0,
            order: -1,
            max: 1,
            power: "Appari nella squadra dei lupi se ispezionato ma appartieni alla squadra del villaggio"
        },
        {
            name: "Sindaco",
            team: "Villaggio",
            amount: 0,
            order: -1,
            max: 1,
            power: "La prima volta che vieni linciato, puoi rivelare il tuo ruolo e salvarti, da quel momento il tuo voto per il linciaggio vale doppio e in caso di parità scegli tu chi viene linciato"
        },
        {
            name: "Veggente",
            team: "Villaggio",
            amount: 0,
            order: 5,
            max: 1,
            power: "Ogni notte puoi scoprire se un giocatore appartiene alla squadra dei lupi o no"
        },
    ],
    Lupi: [
        {
            name: "Assassino",
            team: "Lupi",
            amount: 0,
            order: 7,
            max: 1,
            power: "Non ti svegli coi lupi e appari come buono se ispezionato. Ogni notte puoi decidere se svegliarti con i lupi, se lo fai d’ora in poi dovrai svegliarti sempre con loro e perdi l’abilità di apparire come buono se ispezionato"
        },
        {
            name: "Burattinaio",
            team: "Lupi",
            amount: 0,
            order: 8,
            max: 1,
            power: "Se durante il linciaggio voti per il giocatore con il secondo maggior numero di voti, verrà ucciso al posto di quello più votato"
        },
        {
            name: "Carceriere",
            team: "Lupi",
            amount: 0,
            order: 9,
            max: 1,
            power: "Ogni due notti scegli un giocatore che non potrà svegliarsi quel giorno"
        },
        {
            name: "Cucciolo di Lupo",
            team: "Lupi",
            amount: 0,
            order: 8,
            max: 1,
            power: "Se vieni eliminato, la notte successiva i lupi potranno eliminare due giocatori"
        },
        {
            name: "Cultisti",
            team: "Lupi",
            amount: 0,
            order: 1,
            max: 99,
            power: "Sai chi sono i lupi e vinci con loro ma i lupi non sanno chi sono i cultisti, non ti svegli insieme ai lupi per uccidere. Appaiono come buoni se ispezionati ma sono nella squadra dei lupi"
        },
        {
            name: "Fattucchiera",
            team: "Lupi",
            amount: 0,
            order: 4,
            max: 1,
            power: "Ogni notte scegli un giocatore, se il suo ruolo viene ispezionato, apparirà della squadra opposta per quel turno"
        },
        {
            name: "Lupo",
            team: "Lupi",
            amount: 0,
            order: 8,
            max: 99,
            power: "Ruolo di base della squadra dei lupi, di notte si svegliano tutti insieme e decidono chi uccidere"
        },
        {
            name: "Lupo Grasso",
            team: "Lupi",
            amount: 0,
            order: 8,
            max: 1,
            power: "Finché sei vivo i due giocatori vicini a te appariranno nella squadra dei lupi se esaminati"
        },
        {
            name: "Lupo Non-Morto",
            team: "Lupi",
            amount: 0,
            order: 8,
            max: 1,
            power: "Puoi segretamente votare per il linciaggio durante il giorno anche da morto"
        },
        {
            name: "Matriarca",
            team: "Lupi",
            amount: 0,
            order: 9,
            max: 1,
            power: "Una sola volta per partita, scegli se il giocatore ucciso dai lupi, al posto di morire, si trasformerà in un lupo, anche se difeso"
        },
        {
            name: "Stregone",
            team: "Lupi",
            amount: 0,
            order: 9,
            max: 1,
            power: "Una volta per partita puoi scambiare il ruolo di due giocatori, se uno dei due era un lupo, dopo aver ricevuto il nuovo ruolo, muore"
        },
    ],
    Neutrale: [
        {
            name: "Becchino",
            team: "Neutrale",
            amount: 0,
            order: 15,
            max: 1,
            power: "Una sola volta per partita, quando un giocatore muore di notte, puoi scambiare il tuo ruolo con il suo, da adesso in poi avrai il suo potere e farai parte di quella squadra"
        },
        {
            name: "Criceto Mannaro",
            team: "Neutrale",
            amount: 0,
            order: 10,
            max: 1,
            power: "Ti svegli insieme ai lupi ma non sanno che sei il criceto, ti svegli di nuovo dopo di loro e puoi uccidere un altro giocatore (anche lupi), non sei immune all'eliminazione dei lupi, se resti l'unico vivo vinci"
        },
        {
            name: "Innamorati",
            team: "Neutrale",
            amount: 0,
            order: 1,
            max: 2,
            power: "Se alla fine del giorno sono seduti vicini, vincono. Se uno muore anche l’altro muore"
        },
        {
            name: "Maledetto",
            team: "Neutrale",
            amount: 0,
            order: 16,
            max: 1,
            power: "Ogni notte scegli un giocatore e dagli questa carta, a fine partita chi ha il ruolo del maledetto perde"
        },
        {
            name: "Pifferaio",
            team: "Neutrale",
            amount: 0,
            order: 13,
            max: 1,
            power: "Ogni notte i giocatori incantati si svegliano insieme al pifferaio e scelgono che giocatore incantare, se tutti i giocatori vivi sono incantati vincono"
        },
        {
            name: "Piromane",
            team: "Neutrale",
            amount: 0,
            order: -1,
            max: 1,
            power: "A inizio partita i giocatori vengono divisi in due secondo un criterio deciso dal narratore (altezza, colore capelli, sesso...), vinci se tutti i giocatori del gruppo a cui non appartieni muoiono"
        },
        {
            name: "Scemo del Villaggio",
            team: "Neutrale",
            amount: 0,
            order: -1,
            max: 1,
            power: "Vinci se riesci a farti linciare dal villaggio"
        },
        {
            name: "Sicario",
            team: "Neutrale",
            amount: 0,
            order: -1,
            max: 1,
            power: "Se verresti ucciso di notte, uccidi invece una persona casuale scelta dal narratore appartenente alla squadra opposta di quella che ti avrebbe ucciso. Se a fine partita è ancora vivo, vince al posto della squadra che avrebbe vinto normalmente"
        },
        {
            name: "Sosia",
            team: "Neutrale",
            amount: 0,
            order: 2,
            max: 1,
            power: "A inizio partita scegli uno dei giocatori seduti vicino a te, d'ora in poi vinci con lui, se muore, anche tu muori"
        },
        {
            name: "Ubriacone",
            team: "Neutrale",
            amount: 0,
            order: 15,
            max: 1,
            power: "Scopri il tuo ruolo solo dopo alcuni turni a discrezione del narratore"
        },
    ],
};

const englishRoleTranslations = {
    "Anziano del Villaggio": {
        name: "Village Elder",
        power: "The wolves cannot kill you, but you die automatically after a number of nights, at the narrator's discretion."
    },
    "Appestato": {
        name: "Plague Victim",
        power: "If the wolves kill you, they cannot kill anyone the following night. Likewise, if you are lynched, there will be no lynching the following day."
    },
    "Bambina": {
        name: "Little Girl",
        power: "At night, while the wolves are awake, you may try to spy on them. If discovered, you die in addition to the player chosen by the wolves."
    },
    "Cacciatore": {
        name: "Hunter",
        power: "When you die, whether by lynching or by the wolves, choose another player to be killed immediately."
    },
    "Capro Espiatorio": {
        name: "Scapegoat",
        power: "During the day, when the narrator announces the dead, you may sacrifice yourself to bring back one of the players who died that night."
    },
    "Confessore": {
        name: "Confessor",
        power: "Once per game, at night, choose a player. After waking, that player must show their card to another player of their choice."
    },
    "Consigliere": {
        name: "Councillor",
        power: "Each night, choose a player other than yourself and decide whether their vote counts double or is void for that day."
    },
    "Contadino": {
        name: "Villager",
        power: "The basic role on the village team."
    },
    "Cortigiana": {
        name: "Courtesan",
        power: "Each night, choose a player who will be immune to all powers that night. If you die, the chosen player dies with you."
    },
    "Gemelli": {
        name: "Twins",
        power: "Each twin knows who the other is. If one dies, the other suffers the same fate."
    },
    "Guardiano": {
        name: "Guardian",
        power: "Each night, choose a player to protect for that night."
    },
    "Guardone": {
        name: "Peeping Tom",
        power: "Each night, choose a player. If they wake during the night, you wake with them. If they are on the wolves' team, you die."
    },
    "Investigatore": {
        name: "Investigator",
        power: "Each night, choose two players other than yourself to discover whether they belong to the same team."
    },
    "Licantropo": {
        name: "Lycanthrope",
        power: "You belong to the village team, but the first time the wolves kill you, you join their team instead of dying."
    },
    "Massoni": {
        name: "Freemasons",
        power: "The Freemasons know who the other Freemasons are. No player may speak directly or indirectly about them; anyone who does will be killed that night by the secret society. The Freemasons wake last each night and are told which player used a power on one of them, but not which power or which member was targeted."
    },
    "Oracolo": {
        name: "Oracle",
        power: "Each night, you may see the role of one of the players who died the previous night."
    },
    "Paranoico": {
        name: "Paranoid",
        power: "Each night, you learn whether any players on the wolves' team are sitting near you."
    },
    "Postino": {
        name: "Postman",
        power: "On the first night, you wake and may choose one of your two neighbors to reveal your card to."
    },
    "Principe": {
        name: "Prince",
        power: "If you would be killed at night, the attack is instead redirected to one of your two original neighbors."
    },
    "Sacerdote": {
        name: "Priest",
        power: "Each night, if one or more players were killed the previous night, you may look at the role of one of them."
    },
    "Sfigato": {
        name: "Unlucky Villager",
        power: "You appear to be on the wolves' team when investigated, but you belong to the village team."
    },
    "Sindaco": {
        name: "Mayor",
        power: "The first time you are lynched, you may reveal your role and survive. From then on, your lynching vote counts double, and you decide who is lynched in case of a tie."
    },
    "Veggente": {
        name: "Seer",
        power: "Each night, you may discover whether a player belongs to the wolves' team."
    },
    "Assassino": {
        name: "Assassin",
        power: "You do not wake with the wolves and appear to be good when investigated. Each night, you may choose whether to wake with the wolves. If you do, you must always wake with them from then on and lose the ability to appear good when investigated."
    },
    "Burattinaio": {
        name: "Puppeteer",
        power: "During the lynching vote, if you vote for the player with the second-highest number of votes, that player is killed instead of the player with the most votes."
    },
    "Carceriere": {
        name: "Jailer",
        power: "Every other night, choose a player who will not be able to wake that day."
    },
    "Cucciolo di Lupo": {
        name: "Wolf Cub",
        power: "If you are eliminated, the wolves may eliminate two players the following night."
    },
    "Cultisti": {
        name: "Cultists",
        power: "You know who the wolves are and win with them, but the wolves do not know who the Cultists are. You do not wake with the wolves to kill. You appear to be good when investigated, but belong to the wolves' team."
    },
    "Fattucchiera": {
        name: "Witch",
        power: "Each night, choose a player. If their role is investigated, they appear to belong to the opposite team for that turn."
    },
    "Lupo": {
        name: "Werewolf",
        power: "The basic role on the wolves' team. At night, the wolves all wake together and decide whom to kill."
    },
    "Lupo Grasso": {
        name: "Big Bad Wolf",
        power: "As long as you are alive, the two players sitting next to you appear to be on the wolves' team when investigated."
    },
    "Lupo Non-Morto": {
        name: "Undead Wolf",
        power: "You may secretly vote in the daytime lynching even after you are dead."
    },
    "Matriarca": {
        name: "Matriarch",
        power: "Once per game, choose whether a player killed by the wolves transforms into a wolf instead of dying, even if they were protected."
    },
    "Stregone": {
        name: "Warlock",
        power: "Once per game, you may swap the roles of two players. If either of them was a wolf, they die after receiving their new role."
    },
    "Becchino": {
        name: "Gravedigger",
        power: "Once per game, when a player dies at night, you may swap roles with them. From then on, you have their power and belong to their team."
    },
    "Criceto Mannaro": {
        name: "Werehamster",
        power: "You wake with the wolves, but they do not know you are the hamster. You wake again after them and may kill another player, including a wolf. You are not immune to the wolves' elimination; if you are the only player left alive, you win."
    },
    "Innamorati": {
        name: "Lovers",
        power: "If you are sitting next to each other at the end of the day, you win. If one of you dies, the other dies too."
    },
    "Maledetto": {
        name: "Cursed",
        power: "Each night, choose a player and give them this card. At the end of the game, whoever has the Cursed role loses."
    },
    "Pifferaio": {
        name: "Pied Piper",
        power: "Each night, charmed players wake with the Pied Piper and choose another player to charm. If all living players are charmed, you win."
    },
    "Piromane": {
        name: "Arsonist",
        power: "At the start of the game, players are divided into two groups using a criterion chosen by the narrator, such as height, hair color, or sex. You win if every player in the group you do not belong to dies."
    },
    "Scemo del Villaggio": {
        name: "Village Idiot",
        power: "You win if you manage to get yourself lynched by the village."
    },
    "Sicario": {
        name: "Hitman",
        power: "If you would be killed at night, the narrator instead chooses a random player from the opposing team to be killed. If you are still alive at the end of the game, you win instead of the team that would otherwise have won."
    },
    "Sosia": {
        name: "Doppelganger",
        power: "At the start of the game, choose one of the players sitting next to you. From then on, you win with them. If they die, you die too."
    },
    "Ubriacone": {
        name: "Drunk",
        power: "You discover your role only after a few turns, at the narrator's discretion."
    }
};

export const rolesList = Object.values(rolesByTeam).flat().map(role => ({
    ...role,
    translations: { en: englishRoleTranslations[role.name] }
}));