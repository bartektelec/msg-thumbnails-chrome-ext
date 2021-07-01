console.info('Messenger Thumbnail Extension on.');

// fetch('https://slackmojis.com/').then(res => res.text()).then(x => parser.parseFromString(x, 'text/html')).then(dom => {
//   twitchEmotes = [...dom.querySelectorAll('.emoji')].reduce((acc,curr) => {
//     const title = `:${curr.title}:`;
//     const img = curr.querySelector('img');

//     return [...acc,{title, img: img.src}]
//     }, [])
// })
// fetch('https://emots.yetihehe.com/').then(res => res.text()).then(x => parser.parseFromString(x, 'text/html')).then(dom => {
//   ggEmotes = [...dom.querySelectorAll('img')].reduce((acc,curr) => {
//     const reg = /(\w+)(?=\.)(?!\/)/gi;
//     const matches = curr.src.match(reg);
//     const emoteName = matches[matches.length - 1];
//     const title = `<${emoteName}>`;
//           const img = curr.src;

//           return [...acc,{title, img}]
//           }, [])
// });

const emotes = {
  ':pepedance:':
    'https://emojis.slackmojis.com/emojis/images/1519926654/3596/pepedance.gif?1519926654',
  ':catjam:':
    'https://emojis.slackmojis.com/emojis/images/1597139481/9975/catjam.gif?1597139481',
  ':party_blob:':
    'https://emojis.slackmojis.com/emojis/images/1547582922/5197/party_blob.gif?1547582922',
  ':excuseme:':
    'https://emojis.slackmojis.com/emojis/images/1589877402/9116/excuseme.gif?1589877402',
  ':rickroll:':
    'https://emojis.slackmojis.com/emojis/images/1539890226/4845/rickroll.gif?1539890226',
  ':pog:':
    'https://emojis.slackmojis.com/emojis/images/1573850349/7131/pog.png?1573850349',
  ':60fps_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1597609813/10031/60fps_parrot.gif?1597609813',
  ':meow_party:':
    'https://emojis.slackmojis.com/emojis/images/1563480763/5999/meow_party.gif?1563480763',
  ':facepalm:':
    'https://emojis.slackmojis.com/emojis/images/1471045845/815/facepalm.gif?1471045845',
  ':dababy:':
    'https://emojis.slackmojis.com/emojis/images/1579902635/7617/dababy.jpeg?1579902635',
  ':ahhhhhhhhh:':
    'https://emojis.slackmojis.com/emojis/images/1558099591/5711/ahhhhhhhhh.gif?1558099591',
  ':pop_cat:':
    'https://emojis.slackmojis.com/emojis/images/1607077101/11614/pop_cat.gif?1607077101',
  ':let_me_in:':
    'https://emojis.slackmojis.com/emojis/images/1559938261/5805/let_me_in.gif?1559938261',
  ':kekw:':
    'https://emojis.slackmojis.com/emojis/images/1571385738/6718/kekw.png?1571385738',
  ':nike:':
    'https://emojis.slackmojis.com/emojis/images/1489350043/1866/nike.png?1489350043',
  ':alert:':
    'https://emojis.slackmojis.com/emojis/images/1497901371/2453/alert.gif?1497901371',
  ':aaw_yeah:':
    'https://emojis.slackmojis.com/emojis/images/1488512507/1804/aaw_yeah.gif?1488512507',
  ':meow_code:':
    'https://emojis.slackmojis.com/emojis/images/1600706728/10521/meow_code.gif?1600706728',
  ':elmofire:':
    'https://emojis.slackmojis.com/emojis/images/1579644131/7581/elmofire.gif?1579644131',
  ':think-about-it:':
    'https://emojis.slackmojis.com/emojis/images/1580448086/7667/think-about-it.png?1580448086',
  ':pokeball:':
    'https://emojis.slackmojis.com/emojis/images/1450464069/186/pokeball.png?1450464069',
  ':this-is-fine-fire:':
    'https://emojis.slackmojis.com/emojis/images/1561763719/5906/this-is-fine-fire.gif?1561763719',
  ':crycat:':
    'https://emojis.slackmojis.com/emojis/images/1580857116/7692/crycat.png?1580857116',
  ':kek:':
    'https://emojis.slackmojis.com/emojis/images/1581521481/7799/kek.gif?1581521481',
  ':among-us-party:':
    'https://emojis.slackmojis.com/emojis/images/1605828870/11400/among-us-party.gif?1605828870',
  ':stonks:':
    'https://emojis.slackmojis.com/emojis/images/1589323974/9036/stonks.png?1589323974',
  ':wtf:':
    'https://emojis.slackmojis.com/emojis/images/1578984770/7513/wtf.jpg?1578984770',
  ':meow_double_fu:':
    'https://emojis.slackmojis.com/emojis/images/1612926961/12484/meow_double_fu.png?1612926961',
  ':sadpepe:':
    'https://emojis.slackmojis.com/emojis/images/1518684841/3547/sadpepe.png?1518684841',
  ':sus:':
    'https://emojis.slackmojis.com/emojis/images/1601417062/10676/sus.png?1601417062',
  ':maple_leafs:':
    'https://emojis.slackmojis.com/emojis/images/1490322357/1937/maple_leafs.png?1490322357',
  ':dildo:':
    'https://emojis.slackmojis.com/emojis/images/1533408970/4386/dildo.png?1533408970',
  ':joy:':
    'https://emojis.slackmojis.com/emojis/images/1625162733/46578/joy.png?1625162733',
  ':jet:':
    'https://emojis.slackmojis.com/emojis/images/1625162686/46577/jet.png?1625162686',
  ':jets:':
    'https://emojis.slackmojis.com/emojis/images/1490322292/1934/jets.png?1490322292',
  ':junior:':
    'https://emojis.slackmojis.com/emojis/images/1625162604/46575/junior.gif?1625162604',
  ':jaws:':
    'https://emojis.slackmojis.com/emojis/images/1625162552/46574/jaws.png?1625162552',
  ':juice_party:':
    'https://emojis.slackmojis.com/emojis/images/1625162477/46573/juice_party.gif?1625162477',
  ':juice:':
    'https://emojis.slackmojis.com/emojis/images/1625162400/46572/juice.png?1625162400',
  ':jolteon_dj:':
    'https://emojis.slackmojis.com/emojis/images/1625162289/46571/jolteon_dj.gif?1625162289',
  ':jolteon_butt:':
    'https://emojis.slackmojis.com/emojis/images/1625162215/46570/jolteon_butt.png?1625162215',
  ':jolteon_shiny:':
    'https://emojis.slackmojis.com/emojis/images/1625162184/46569/jolteon_shiny.png?1625162184',
  ':ily_bean:':
    'https://emojis.slackmojis.com/emojis/images/1625162082/46568/ily_bean.png?1625162082',
  ':jack-rabbit:':
    'https://emojis.slackmojis.com/emojis/images/1625161951/46567/jack-rabbit.png?1625161951',
  ':jacked:':
    'https://emojis.slackmojis.com/emojis/images/1625161900/46566/jacked.png?1625161900',
  ':jack:':
    'https://emojis.slackmojis.com/emojis/images/1625161876/46565/jack.png?1625161876',
  ':joking:':
    'https://emojis.slackmojis.com/emojis/images/1625161759/46564/joking.png?1625161759',
  ':joke:':
    'https://emojis.slackmojis.com/emojis/images/1625161718/46563/joke.png?1625161718',
  ':among_us_pet:':
    'https://emojis.slackmojis.com/emojis/images/1612404918/12349/among_us_pet.gif?1612404918',
  ':among_us_orange_dance:':
    'https://emojis.slackmojis.com/emojis/images/1605722420/11386/among_us_orange_dance.gif?1605722420',
  ':among_us:':
    'https://emojis.slackmojis.com/emojis/images/1605479290/10677/among_us.png?1605479290',
  ':among-us-dead-body:':
    'https://emojis.slackmojis.com/emojis/images/1608799594/11894/among-us-dead-body.png?1608799594',
  ':among_us_killed:':
    'https://emojis.slackmojis.com/emojis/images/1611266843/12189/among_us_killed.gif?1611266843',
  ':venting:':
    'https://emojis.slackmojis.com/emojis/images/1613270186/12725/venting.gif?1613270186',
  ':among_us_hammer:':
    'https://emojis.slackmojis.com/emojis/images/1610559490/12061/among_us_hammer.gif?1610559490',
  ':space_float:':
    'https://emojis.slackmojis.com/emojis/images/1613270271/12726/space_float.gif?1613270271',
  ':among_us_party:':
    'https://emojis.slackmojis.com/emojis/images/1605479284/10796/among_us_party.gif?1605479284',
  ':amongus:':
    'https://emojis.slackmojis.com/emojis/images/1605479317/10512/amongus.png?1605479317',
  ':among_us_voted:':
    'https://emojis.slackmojis.com/emojis/images/1605479301/11160/among_us_voted.png?1605479301',
  ':among_us_sus:':
    'https://emojis.slackmojis.com/emojis/images/1605479297/10740/among_us_sus.png?1605479297',
  ':among-us-dance:':
    'https://emojis.slackmojis.com/emojis/images/1605829592/11401/among-us-dance.gif?1605829592',
  ':among_us_dead:':
    'https://emojis.slackmojis.com/emojis/images/1605479285/10741/among_us_dead.png?1605479285',
  ':among_us_report:':
    'https://emojis.slackmojis.com/emojis/images/1613270132/12724/among_us_report.png?1613270132',
  ':meow_attention:':
    'https://emojis.slackmojis.com/emojis/images/1613285697/12806/meow_attention.png?1613285697',
  ':meow_knife:':
    'https://emojis.slackmojis.com/emojis/images/1563481438/6021/meow_knife.png?1563481438',
  ':meow_fat:':
    'https://emojis.slackmojis.com/emojis/images/1612848105/12408/meow_fat.gif?1612848105',
  ':meow-popcorn:':
    'https://emojis.slackmojis.com/emojis/images/1568064900/6383/meow-popcorn.gif?1568064900',
  ':meow_popcorn:':
    'https://emojis.slackmojis.com/emojis/images/1568570821/6412/meow_popcorn.gif?1568570821',
  ':meow_heart:':
    'https://emojis.slackmojis.com/emojis/images/1596061862/9845/meow_heart.png?1596061862',
  ':meow_cookie:':
    'https://emojis.slackmojis.com/emojis/images/1563481435/6017/meow_cookie.png?1563481435',
  ':meow_wow:':
    'https://emojis.slackmojis.com/emojis/images/1563481443/6027/meow_wow.png?1563481443',
  ':meow_coffee:':
    'https://emojis.slackmojis.com/emojis/images/1563481434/6016/meow_coffee.png?1563481434',
  ':meow_headache:':
    'https://emojis.slackmojis.com/emojis/images/1563481437/6020/meow_headache.png?1563481437',
  ':fast_meow_party:':
    'https://emojis.slackmojis.com/emojis/images/1587134085/8661/fast_meow_party.gif?1587134085',
  ':meow_melt:':
    'https://emojis.slackmojis.com/emojis/images/1563481439/6022/meow_melt.png?1563481439',
  ':meow_sip:':
    'https://emojis.slackmojis.com/emojis/images/1563481442/6026/meow_sip.png?1563481442',
  ':thinking_cat_face:':
    'https://emojis.slackmojis.com/emojis/images/1542333941/4941/thinking_cat_face.png?1542333941',
  ':flushed_cat:':
    'https://emojis.slackmojis.com/emojis/images/1542333936/4932/flushed_cat.png?1542333936',
  ':sob_cat:':
    'https://emojis.slackmojis.com/emojis/images/1542333940/4938/sob_cat.png?1542333940',
  ':cat_face_with_monocle:':
    'https://emojis.slackmojis.com/emojis/images/1542333934/4928/cat_face_with_monocle.png?1542333934',
  ':nerd_cat_face:':
    'https://emojis.slackmojis.com/emojis/images/1542333938/4936/nerd_cat_face.png?1542333938',
  ':angry_cat:':
    'https://emojis.slackmojis.com/emojis/images/1542333929/4926/angry_cat.png?1542333929',
  ':zany_cat_face:':
    'https://emojis.slackmojis.com/emojis/images/1542333943/4945/zany_cat_face.png?1542333943',
  ':sunglasses_cat:':
    'https://emojis.slackmojis.com/emojis/images/1542333940/4940/sunglasses_cat.png?1542333940',
  ':drooling_cat_face:':
    'https://emojis.slackmojis.com/emojis/images/1542333935/4930/drooling_cat_face.png?1542333935',
  ':yasss_cat:':
    'https://emojis.slackmojis.com/emojis/images/1542333942/4943/yasss_cat.png?1542333942',
  ':triumph_cat:':
    'https://emojis.slackmojis.com/emojis/images/1542333941/4942/triumph_cat.png?1542333941',
  ':expressionless_cat:':
    'https://emojis.slackmojis.com/emojis/images/1542333935/4931/expressionless_cat.png?1542333935',
  ':hugging_cat_face:':
    'https://emojis.slackmojis.com/emojis/images/1542333936/4934/hugging_cat_face.png?1542333936',
  ':anguished_cat:':
    'https://emojis.slackmojis.com/emojis/images/1542333933/4927/anguished_cat.png?1542333933',
  ':yum_cat:':
    'https://emojis.slackmojis.com/emojis/images/1542333943/4944/yum_cat.png?1542333943',
  ':grimacing_cat:':
    'https://emojis.slackmojis.com/emojis/images/1542333936/4933/grimacing_cat.png?1542333936',
  ':pensive_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478583/10905/pensive_cowboy.png?1605478583',
  ':cowboy-cool-cry-mild-panic:':
    'https://emojis.slackmojis.com/emojis/images/1618005339/29186/cowboy-cool-cry-mild-panic.png?1618005339',
  ':flushed_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478551/10882/flushed_cowboy.png?1605478551',
  ':weary_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478441/10933/weary_cowboy.png?1605478441',
  ':cool_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478401/10874/cool_cowboy.png?1605478401',
  ':smirking_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478522/10919/smirking_cowboy.png?1605478522',
  ':stuck_out_tongue_closed_eyes_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478364/10941/stuck_out_tongue_closed_eyes_cowboy.png?1605478364',
  ':cowboy-eyes:':
    'https://emojis.slackmojis.com/emojis/images/1584724679/8253/cowboy-eyes.png?1584724679',
  ':lmao_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478609/10896/lmao_cowboy.png?1605478609',
  ':zany_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478380/10937/zany_cowboy.png?1605478380',
  ':drooling_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478393/10878/drooling_cowboy.png?1605478393',
  ':heart_eyes_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478519/10890/heart_eyes_cowboy.png?1605478519',
  ':nerdy_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478435/10902/nerdy_cowboy.png?1605478435',
  ':crying_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478530/10875/crying_cowboy.png?1605478530',
  ':upside_down_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478485/10931/upside_down_cowboy.png?1605478485',
  ':gasping_cowboy:':
    'https://emojis.slackmojis.com/emojis/images/1605478537/10885/gasping_cowboy.png?1605478537',
  ':bananadance:':
    'https://emojis.slackmojis.com/emojis/images/1450694616/220/bananadance.gif?1450694616',
  ':bananadance_lsd:':
    'https://emojis.slackmojis.com/emojis/images/1614646709/16045/bananadance_lsd.gif?1614646709',
  ':mariodance_pbj:':
    'https://emojis.slackmojis.com/emojis/images/1614980223/17617/mariodance_pbj.gif?1614980223',
  ':homersimpson-pbjdance:':
    'https://emojis.slackmojis.com/emojis/images/1614902590/17468/homersimpson-pbjdance.gif?1614902590',
  ':aliendance_pbj:':
    'https://emojis.slackmojis.com/emojis/images/1614906877/17536/aliendance_pbj.gif?1614906877',
  ':carrot_dance_pbj:':
    'https://emojis.slackmojis.com/emojis/images/1615589337/20264/carrot_dance_pbj.gif?1615589337',
  ':sonicdance_pbjtime:':
    'https://emojis.slackmojis.com/emojis/images/1615778664/20648/sonicdance_pbjtime.gif?1615778664',
  ':bananadance_colors:':
    'https://emojis.slackmojis.com/emojis/images/1614637509/15954/bananadance_colors.gif?1614637509',
  ':bananadance_smile:':
    'https://emojis.slackmojis.com/emojis/images/1615846116/21096/bananadance_smile.gif?1615846116',
  ':bananadance_left:':
    'https://emojis.slackmojis.com/emojis/images/1614637310/15949/bananadance_left.gif?1614637310',
  ':bananadance_duo:':
    'https://emojis.slackmojis.com/emojis/images/1614980413/17621/bananadance_duo.gif?1614980413',
  ':canadianflag-bananadance:':
    'https://emojis.slackmojis.com/emojis/images/1614901140/17442/canadianflag-bananadance.gif?1614901140',
  ':bananadance_hair:':
    'https://emojis.slackmojis.com/emojis/images/1615591258/20297/bananadance_hair.gif?1615591258',
  ':batman_banana_dance:':
    'https://emojis.slackmojis.com/emojis/images/1536959564/4663/batman_banana_dance.gif?1536959564',
  ':bananadance_double:':
    'https://emojis.slackmojis.com/emojis/images/1614637339/15950/bananadance_double.gif?1614637339',
  ':bananadance_superman:':
    'https://emojis.slackmojis.com/emojis/images/1614904994/17508/bananadance_superman.gif?1614904994',
  ':fb-laugh:':
    'https://emojis.slackmojis.com/emojis/images/1588108680/8788/fb-laugh.png?1588108680',
  ':fbwow:':
    'https://emojis.slackmojis.com/emojis/images/1594314885/9662/fbwow.gif?1594314885',
  ':fb-pride:':
    'https://emojis.slackmojis.com/emojis/images/1588108737/8790/fb-pride.png?1588108737',
  ':angry:':
    'https://emojis.slackmojis.com/emojis/images/1492722318/2062/angry.gif?1492722318',
  ':laugh:':
    'https://emojis.slackmojis.com/emojis/images/1471987884/1061/laugh.gif?1471987884',
  ':fb-heart:':
    'https://emojis.slackmojis.com/emojis/images/1588108661/8786/fb-heart.png?1588108661',
  ':fb-hug:':
    'https://emojis.slackmojis.com/emojis/images/1588108671/8787/fb-hug.png?1588108671',
  ':like:':
    'https://emojis.slackmojis.com/emojis/images/1464135097/464/fb-like.gif?1464135097',
  ':fb-angry:':
    'https://emojis.slackmojis.com/emojis/images/1588108644/8785/fb-angry.png?1588108644',
  ':fb-like:':
    'https://emojis.slackmojis.com/emojis/images/1588108689/8789/fb-like.png?1588108689',
  ':wow:':
    'https://emojis.slackmojis.com/emojis/images/1464135017/461/fb-wow.gif?1464135017',
  ':fbsad:':
    'https://emojis.slackmojis.com/emojis/images/1594314837/9661/fbsad.gif?1594314837',
  ':fb-thankful:':
    'https://emojis.slackmojis.com/emojis/images/1588108758/8792/fb-thankful.png?1588108758',
  ':sad:':
    'https://emojis.slackmojis.com/emojis/images/1471987890/1065/sad.gif?1471987890',
  ':heart:':
    'https://emojis.slackmojis.com/emojis/images/1471987884/1060/heart.gif?1471987884',
  ':fb-wow:':
    'https://emojis.slackmojis.com/emojis/images/1588108767/8793/fb-wow.png?1588108767',
  ':nightking:':
    'https://emojis.slackmojis.com/emojis/images/1555301698/5612/nightking.png?1555301698',
  ':daenerys_targaryen:':
    'https://emojis.slackmojis.com/emojis/images/1504657729/2875/daenerys_targaryen.png?1504657729',
  ':johnsnow:':
    'https://emojis.slackmojis.com/emojis/images/1555301587/5608/johnsnow.png?1555301587',
  ':arya:':
    'https://emojis.slackmojis.com/emojis/images/1555301278/5600/arya.png?1555301278',
  ':tyronl:':
    'https://emojis.slackmojis.com/emojis/images/1555301815/5618/tyronl.png?1555301815',
  ':cersei_lannister:':
    'https://emojis.slackmojis.com/emojis/images/1504657968/2878/cersei_lannister.png?1504657968',
  ':daenery:':
    'https://emojis.slackmojis.com/emojis/images/1555301439/5604/daenery.png?1555301439',
  ':khal_drogo:':
    'https://emojis.slackmojis.com/emojis/images/1504658611/2880/khal_drogo.png?1504658611',
  ':arya_stark:':
    'https://emojis.slackmojis.com/emojis/images/1504657569/2873/arya_stark.png?1504657569',
  ':jamie_lannister:':
    'https://emojis.slackmojis.com/emojis/images/1504657895/2877/jamie_lannister.png?1504657895',
  ':sansa_stark:':
    'https://emojis.slackmojis.com/emojis/images/1504657679/2874/lady_stoneheart.png?1504657679',
  ':sansa:':
    'https://emojis.slackmojis.com/emojis/images/1555301772/5615/sansa.png?1555301772',
  ':varys:':
    'https://emojis.slackmojis.com/emojis/images/1555301831/5619/varys.png?1555301831',
  ':cersei:':
    'https://emojis.slackmojis.com/emojis/images/1555301396/5603/cersei.png?1555301396',
  ':benjen_stark:':
    'https://emojis.slackmojis.com/emojis/images/1504658198/2879/benjen_stark.png?1504658198',
  ':euron:':
    'https://emojis.slackmojis.com/emojis/images/1555301597/5609/euron.png?1555301597',
  ':anger:':
    'https://emojis.slackmojis.com/emojis/images/1542340458/4962/anger.gif?1542340458',
  ':watching-you:':
    'https://emojis.slackmojis.com/emojis/images/1542340473/4982/watching-you.gif?1542340473',
  ':depressed:':
    'https://emojis.slackmojis.com/emojis/images/1542340463/4966/depressed.gif?1542340463',
  ':dabbing:':
    'https://emojis.slackmojis.com/emojis/images/1542340462/4965/dabbing.gif?1542340462',
  ':fart:':
    'https://emojis.slackmojis.com/emojis/images/1542340464/4968/fart.gif?1542340464',
  ':giggle:':
    'https://emojis.slackmojis.com/emojis/images/1542340466/4970/giggle.gif?1542340466',
  ':lol:':
    'https://emojis.slackmojis.com/emojis/images/1542340468/4973/lol.gif?1542340468',
  ':blush:':
    'https://emojis.slackmojis.com/emojis/images/1542340460/4963/blush.gif?1542340460',
  ':shhh:':
    'https://emojis.slackmojis.com/emojis/images/1542340470/4977/shhh.gif?1542340470',
  ':thinking:':
    'https://emojis.slackmojis.com/emojis/images/1542340471/4979/thinking.gif?1542340471',
  ':surprise:':
    'https://emojis.slackmojis.com/emojis/images/1542340471/4978/surprise.gif?1542340471',
  ':yuck:':
    'https://emojis.slackmojis.com/emojis/images/1542340473/4983/yuck.gif?1542340473',
  ':perfect:':
    'https://emojis.slackmojis.com/emojis/images/1542340470/4976/perfect.gif?1542340470',
  ':party:':
    'https://emojis.slackmojis.com/emojis/images/1542340469/4975/party.gif?1542340469',
  ':notinterested:':
    'https://emojis.slackmojis.com/emojis/images/1542340469/4974/notinterested.gif?1542340469',
  ':sadblob:':
    'https://emojis.slackmojis.com/emojis/images/1578406259/7444/sadblob.gif?1578406259',
  ':party-blob:':
    'https://emojis.slackmojis.com/emojis/images/1581539211/7808/party-blob.gif?1581539211',
  ':blob_cheer:':
    'https://emojis.slackmojis.com/emojis/images/1572027739/6832/blob_cheer.png?1572027739',
  ':blob-no:':
    'https://emojis.slackmojis.com/emojis/images/1584725348/8266/blob-no.png?1584725348',
  ':blob-yes:':
    'https://emojis.slackmojis.com/emojis/images/1551756505/5431/blob-yes.png?1551756505',
  ':blob-hearts:':
    'https://emojis.slackmojis.com/emojis/images/1531847696/4239/blob-hearts.gif?1531847696',
  ':blobhelp:':
    'https://emojis.slackmojis.com/emojis/images/1596524176/9908/blobhelp.png?1596524176',
  ':blob-dance:':
    'https://emojis.slackmojis.com/emojis/images/1584726180/8270/blob-dance.gif?1584726180',
  ':blob-clap:':
    'https://emojis.slackmojis.com/emojis/images/1531847402/4229/blob-clap.gif?1531847402',
  ':bongo_blob:':
    'https://emojis.slackmojis.com/emojis/images/1562883039/5948/bongo_blob.gif?1562883039',
  ':blob-hype:':
    'https://emojis.slackmojis.com/emojis/images/1584725500/8268/blob-hype.gif?1584725500',
  ':rainbow_blobpray:':
    'https://emojis.slackmojis.com/emojis/images/1613771488/13672/rainbow_blobpray.gif?1613771488',
  ':blob-wave:':
    'https://emojis.slackmojis.com/emojis/images/1536351075/4594/blob-wave.gif?1536351075',
  ':blob_aww:':
    'https://emojis.slackmojis.com/emojis/images/1572027736/6827/blob_aww.png?1572027736',
  ':blob_help:':
    'https://emojis.slackmojis.com/emojis/images/1596799009/9949/blob_help.png?1596799009',
  ':jmr_thunderbolts:':
    'https://emojis.slackmojis.com/emojis/images/1592938795/9469/jmr_thunderbolts.png?1592938795',
  ':jmr_indigostars:':
    'https://emojis.slackmojis.com/emojis/images/1592937668/9443/jmr_indigostars.jpg?1592937668',
  ':jmr_midnightwhisps:':
    'https://emojis.slackmojis.com/emojis/images/1592938221/9458/jmr_midnightwhisps.png?1592938221',
  ':jmr_galactic:':
    'https://emojis.slackmojis.com/emojis/images/1592937541/9439/jmr_galactic.jpg?1592937541',
  ':jmr_bumblebees:':
    'https://emojis.slackmojis.com/emojis/images/1592937486/9436/jmr_bumblebees.jpg?1592937486',
  ':jmr_hazers:':
    'https://emojis.slackmojis.com/emojis/images/1592937975/9452/jmr_hazers.png?1592937975',
  ':jmr_jawbreakers:':
    'https://emojis.slackmojis.com/emojis/images/1592937685/9444/jmr_jawbreakers.jpg?1592937685',
  ':jmr_greenducks:':
    'https://emojis.slackmojis.com/emojis/images/1592937554/9440/jmr_greenducks.jpg?1592937554',
  ':jmr_mintymaniacs:':
    'https://emojis.slackmojis.com/emojis/images/1592938309/9459/jmr_mintymaniacs.png?1592938309',
  ':jmr_orangers:':
    'https://emojis.slackmojis.com/emojis/images/1592938492/9461/jmr_orangers.png?1592938492',
  ':jmr_turtlesliders:':
    'https://emojis.slackmojis.com/emojis/images/1592938816/9470/jmr_turtlesliders.png?1592938816',
  ':jmr_junglejumpers:':
    'https://emojis.slackmojis.com/emojis/images/1592938172/9455/jmr_junglejumpers.png?1592938172',
  ':jmr_chocolatiers:':
    'https://emojis.slackmojis.com/emojis/images/1592937502/9437/jmr_chocolatiers.jpg?1592937502',
  ':jmr_savagespeeders:':
    'https://emojis.slackmojis.com/emojis/images/1592938658/9465/jmr_savagespeeders.png?1592938658',
  ':spotify:':
    'https://emojis.slackmojis.com/emojis/images/1450319454/41/spotify.png?1450319454',
  ':youtube:':
    'https://emojis.slackmojis.com/emojis/images/1487135004/1757/youtube.png?1487135004',
  ':twitch:':
    'https://emojis.slackmojis.com/emojis/images/1487135037/1758/twitch.png?1487135037',
  ':paypal:':
    'https://emojis.slackmojis.com/emojis/images/1467306584/630/paypal.png?1467306584',
  ':instagram:':
    'https://emojis.slackmojis.com/emojis/images/1467306728/632/instagram.png?1467306728',
  ':adidas:':
    'https://emojis.slackmojis.com/emojis/images/1539868723/4844/adidas.png?1539868723',
  ':discord:':
    'https://emojis.slackmojis.com/emojis/images/1536347295/4590/discord.png?1536347295',
  ':fortnite:':
    'https://emojis.slackmojis.com/emojis/images/1536345773/4589/fortnite.ico?1536345773',
  ':bitcoin:':
    'https://emojis.slackmojis.com/emojis/images/1485555744/1681/bitcoin.png?1485555744',
  ':netflix:':
    'https://emojis.slackmojis.com/emojis/images/1538653147/4757/netflix.png?1538653147',
  ':roblox:':
    'https://emojis.slackmojis.com/emojis/images/1518141268/3514/roblox.png?1518141268',
  ':appleinc:':
    'https://emojis.slackmojis.com/emojis/images/1450319442/24/appleinc.png?1450319442',
  ':tesla:':
    'https://emojis.slackmojis.com/emojis/images/1459365617/335/tesla.jpg?1459365617',
  ':android:':
    'https://emojis.slackmojis.com/emojis/images/1493026598/2124/android.png?1493026598',
  ':playstation:':
    'https://emojis.slackmojis.com/emojis/images/1474372014/1168/playstation.png?1474372014',
  ':dodgers:':
    'https://emojis.slackmojis.com/emojis/images/1486698561/1722/dodgers.jpg?1486698561',
  ':padres:':
    'https://emojis.slackmojis.com/emojis/images/1486698563/1731/padres.jpg?1486698563',
  ':yankess:':
    'https://emojis.slackmojis.com/emojis/images/1486698566/1742/yankess.jpg?1486698566',
  ':mets:':
    'https://emojis.slackmojis.com/emojis/images/1486698563/1728/mets.jpg?1486698563',
  ':red_sox:':
    'https://emojis.slackmojis.com/emojis/images/1486698565/1736/red_sox.jpg?1486698565',
  ':cubs:':
    'https://emojis.slackmojis.com/emojis/images/1486698561/1720/cubs.jpg?1486698561',
  ':astros:':
    'https://emojis.slackmojis.com/emojis/images/1486698558/1716/astros.jpg?1486698558',
  ':tigers:':
    'https://emojis.slackmojis.com/emojis/images/1486698566/1740/tigers.jpg?1486698566',
  ':bluejays:':
    'https://emojis.slackmojis.com/emojis/images/1488914770/1825/bluejays.png?1488914770',
  ':angels:':
    'https://emojis.slackmojis.com/emojis/images/1491578308/2005/angels.jpg?1491578308',
  ':braves:':
    'https://emojis.slackmojis.com/emojis/images/1491578353/2006/braves.png?1491578353',
  ':giants:':
    'https://emojis.slackmojis.com/emojis/images/1472153436/1098/giants.jpg?1472153436',
  ':white_sox:':
    'https://emojis.slackmojis.com/emojis/images/1486698566/1741/white_sox.jpg?1486698566',
  ':nats:':
    'https://emojis.slackmojis.com/emojis/images/1486698563/1729/nats.jpg?1486698563',
  ':reds:':
    'https://emojis.slackmojis.com/emojis/images/1486698565/1737/reds.jpg?1486698565',
  ':expos:':
    'https://emojis.slackmojis.com/emojis/images/1486698561/1723/expos.jpg?1486698561',
  ':quakes:':
    'https://emojis.slackmojis.com/emojis/images/1550624616/5376/quakes.png?1550624616',
  ':portland_timbers:':
    'https://emojis.slackmojis.com/emojis/images/1550719009/5392/portland_timbers.png?1550719009',
  ':lafc:':
    'https://emojis.slackmojis.com/emojis/images/1550620389/5373/lafc.png?1550620389',
  ':mnufc:':
    'https://emojis.slackmojis.com/emojis/images/1550636138/5383/mnufc.png?1550636138',
  ':dcunited:':
    'https://emojis.slackmojis.com/emojis/images/1550635953/5382/dcunited.png?1550635953',
  ':orlando_city:':
    'https://emojis.slackmojis.com/emojis/images/1550696097/5389/orlando_city.png?1550696097',
  ':rbny:':
    'https://emojis.slackmojis.com/emojis/images/1550695616/5388/rbny.png?1550695616',
  ':rsl:':
    'https://emojis.slackmojis.com/emojis/images/1550720502/5396/rsl.png?1550720502',
  ':torontofc:':
    'https://emojis.slackmojis.com/emojis/images/1550719735/5394/torontofc.png?1550719735',
  ':fccincinnati:':
    'https://emojis.slackmojis.com/emojis/images/1550634192/5379/fccincinnati.png?1550634192',
  ':nerevolution:':
    'https://emojis.slackmojis.com/emojis/images/1550694821/5386/nerevolution.png?1550694821',
  ':nycfc:':
    'https://emojis.slackmojis.com/emojis/images/1550695017/5387/nycfc.png?1550695017',
  ':chicago_fire:':
    'https://emojis.slackmojis.com/emojis/images/1550634008/5378/chicago_fire.png?1550634008',
  ':philadelphia_union:':
    'https://emojis.slackmojis.com/emojis/images/1550697158/5390/philadelphia_union.png?1550697158',
  ':seattle_sounders:':
    'https://emojis.slackmojis.com/emojis/images/1550719549/5393/seattle_sounders.png?1550719549',
  ':atlanta_united:':
    'https://emojis.slackmojis.com/emojis/images/1559745276/5788/atlanta_united.png?1559745276',
  ':doge:':
    'https://emojis.slackmojis.com/emojis/images/1450451598/168/doge2.png?1450451598',
  ':panik:':
    'https://emojis.slackmojis.com/emojis/images/1589585623/9102/panik.png?1589585623',
  ':coffin_dance:':
    'https://emojis.slackmojis.com/emojis/images/1586361156/8558/coffin_dance.gif?1586361156',
  ':troll:':
    'https://emojis.slackmojis.com/emojis/images/1463602125/429/troll.png?1463602125',
  ':homerdisppear:':
    'https://emojis.slackmojis.com/emojis/images/1450475643/211/homer-disappear.gif?1450475643',
  ':success:':
    'https://emojis.slackmojis.com/emojis/images/1465999900/516/success.png?1465999900',
  ':cat_confused:':
    'https://emojis.slackmojis.com/emojis/images/1576117217/7294/cat_confused.png?1576117217',
  ':take_my_money:':
    'https://emojis.slackmojis.com/emojis/images/1450319446/65/take_my_money.png?1450319446',
  ':socially_awesome_penguin:':
    'https://emojis.slackmojis.com/emojis/images/1590132806/9201/socially_awesome_penguin.jpg?1590132806',
  ':suns:':
    'https://emojis.slackmojis.com/emojis/images/1464146340/489/suns.png?1464146340',
  ':76ers:':
    'https://emojis.slackmojis.com/emojis/images/1464145836/465/76ers.png?1464145836',
  ':lakers:':
    'https://emojis.slackmojis.com/emojis/images/1464146132/478/lakers.png?1464146132',
  ':bucks:':
    'https://emojis.slackmojis.com/emojis/images/1464145871/466/bucks.png?1464145871',
  ':nets:':
    'https://emojis.slackmojis.com/emojis/images/1464146190/481/nets.png?1464146190',
  ':clippers:':
    'https://emojis.slackmojis.com/emojis/images/1464145963/470/clippers.png?1464145963',
  ':hawks:':
    'https://emojis.slackmojis.com/emojis/images/1464146002/472/hawks.png?1464146002',
  ':bulls:':
    'https://emojis.slackmojis.com/emojis/images/1464145910/467/bulls.png?1464145910',
  ':jazz:':
    'https://emojis.slackmojis.com/emojis/images/1464146076/475/jazz.png?1464146076',
  ':knicks:':
    'https://emojis.slackmojis.com/emojis/images/1464146113/477/knicks.png?1464146113',
  ':celtics:':
    'https://emojis.slackmojis.com/emojis/images/1464145943/469/celtics.png?1464145943',
  ':raptors:':
    'https://emojis.slackmojis.com/emojis/images/1464146288/486/raptors.png?1464146288',
  ':trailblazers:':
    'https://emojis.slackmojis.com/emojis/images/1464146395/492/trailblazers.png?1464146395',
  ':heat:':
    'https://emojis.slackmojis.com/emojis/images/1464146040/473/heat.png?1464146040',
  ':warriors:':
    'https://emojis.slackmojis.com/emojis/images/1464146409/493/warriors.png?1464146409',
  ':mavericks:':
    'https://emojis.slackmojis.com/emojis/images/1464146169/480/mavericks.png?1464146169',
  ':49ers:':
    'https://emojis.slackmojis.com/emojis/images/1472153431/1083/49ers.jpg?1472153431',
  ':seahawks:':
    'https://emojis.slackmojis.com/emojis/images/1471556135/1048/seahawks.png?1471556135',
  ':cardinals:':
    'https://emojis.slackmojis.com/emojis/images/1478302489/1327/cardinals.png?1478302489',
  ':cowboys:':
    'https://emojis.slackmojis.com/emojis/images/1472153434/1094/cowboys.jpg?1472153434',
  ':bills:':
    'https://emojis.slackmojis.com/emojis/images/1472153433/1087/bills.jpg?1472153433',
  ':packers:':
    'https://emojis.slackmojis.com/emojis/images/1472153437/1104/packers.jpg?1472153437',
  ':raiders:':
    'https://emojis.slackmojis.com/emojis/images/1472153438/1107/raiders.jpg?1472153438',
  ':patriots:':
    'https://emojis.slackmojis.com/emojis/images/1472153438/1106/patriots.jpg?1472153438',
  ':vikings:':
    'https://emojis.slackmojis.com/emojis/images/1472153440/1116/vikings.jpg?1472153440',
  ':nfl:':
    'https://emojis.slackmojis.com/emojis/images/1472153437/1103/nfl.jpg?1472153437',
  ':browns:':
    'https://emojis.slackmojis.com/emojis/images/1472153433/1089/browns.jpg?1472153433',
  ':eagles:':
    'https://emojis.slackmojis.com/emojis/images/1472153435/1096/eagles.jpg?1472153435',
  ':broncos:':
    'https://emojis.slackmojis.com/emojis/images/1472153433/1088/broncos.jpg?1472153433',
  ':falcons:':
    'https://emojis.slackmojis.com/emojis/images/1472153435/1097/falcons.jpg?1472153435',
  ':texans:':
    'https://emojis.slackmojis.com/emojis/images/1472153439/1114/texans.jpg?1472153439',
  ':canadiens:':
    'https://emojis.slackmojis.com/emojis/images/1490321965/1924/canadiens.png?1490321965',
  ':lightning:':
    'https://emojis.slackmojis.com/emojis/images/1490322335/1936/lightning.png?1490322335',
  ':bruins:':
    'https://emojis.slackmojis.com/emojis/images/1490321931/1923/bruins.png?1490321931',
  ':islanders:':
    'https://emojis.slackmojis.com/emojis/images/1490322273/1933/islanders.png?1490322273',
  ':avalanche:':
    'https://emojis.slackmojis.com/emojis/images/1490321858/1919/avalanche.png?1490321858',
  ':oilers:':
    'https://emojis.slackmojis.com/emojis/images/1490322378/1938/oilers.png?1490322378',
  ':capitals:':
    'https://emojis.slackmojis.com/emojis/images/1490322014/1926/capitals.png?1490322014',
  ':blackhawks:':
    'https://emojis.slackmojis.com/emojis/images/1490321879/1920/blackhawks.png?1490321879',
  ':wild:':
    'https://emojis.slackmojis.com/emojis/images/1490322589/1948/wild.png?1490322589',
  ':canucks:':
    'https://emojis.slackmojis.com/emojis/images/1490321988/1925/canucks.png?1490321988',
  ':flyers:':
    'https://emojis.slackmojis.com/emojis/images/1490322170/1931/flyers.png?1490322170',
  ':flames:':
    'https://emojis.slackmojis.com/emojis/images/1490322134/1930/flames.png?1490322134',
  ':penguins:':
    'https://emojis.slackmojis.com/emojis/images/1490322432/1940/penguins.png?1490322432',
  ':predators:':
    'https://emojis.slackmojis.com/emojis/images/1490322453/1941/predators.png?1490322453',
  ':1train:':
    'https://emojis.slackmojis.com/emojis/images/1471449977/1019/1train.png?1471449977',
  ':3train:':
    'https://emojis.slackmojis.com/emojis/images/1471450024/1021/3train.png?1471450024',
  ':ltrain:':
    'https://emojis.slackmojis.com/emojis/images/1471450342/1035/ltrain.png?1471450342',
  ':ftrain:':
    'https://emojis.slackmojis.com/emojis/images/1471450283/1032/ftrain.png?1471450283',
  ':4train:':
    'https://emojis.slackmojis.com/emojis/images/1471450038/1022/4train.png?1471450038',
  ':wtrain:':
    'https://emojis.slackmojis.com/emojis/images/1471534843/1046/wtrain.png?1471534843',
  ':7train:':
    'https://emojis.slackmojis.com/emojis/images/1471450091/1025/7train.png?1471450091',
  ':dtrain:':
    'https://emojis.slackmojis.com/emojis/images/1471450248/1030/dtrain.png?1471450248',
  ':gtrain:':
    'https://emojis.slackmojis.com/emojis/images/1471450313/1033/gtrain.png?1471450313',
  ':2train:':
    'https://emojis.slackmojis.com/emojis/images/1471449994/1020/2train.png?1471449994',
  ':5train:':
    'https://emojis.slackmojis.com/emojis/images/1471450050/1023/5train.png?1471450050',
  ':9train:':
    'https://emojis.slackmojis.com/emojis/images/1471450111/1026/9train.png?1471450111',
  ':atrain:':
    'https://emojis.slackmojis.com/emojis/images/1471450126/1027/atrain.png?1471450126',
  ':ntrain:':
    'https://emojis.slackmojis.com/emojis/images/1471450619/1037/ntrain.png?1471450619',
  ':ttrain:':
    'https://emojis.slackmojis.com/emojis/images/1471450754/1041/ttrain.png?1471450754',
  ':strain:':
    'https://emojis.slackmojis.com/emojis/images/1471450728/1040/strain.png?1471450728',
  ':hyperfastparrot:':
    'https://emojis.slackmojis.com/emojis/images/1571411041/6723/hyperfastparrot.gif?1571411041',
  ':deployparrot:':
    'https://emojis.slackmojis.com/emojis/images/1554740062/5584/deployparrot.gif?1554740062',
  ':quad_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1597609887/10125/quad_parrot.gif?1597609887',
  ':everythings_fine_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1597609852/10064/everythings_fine_parrot.gif?1597609852',
  ':headbanging_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1597609860/10080/headbanging_parrot.gif?1597609860',
  ':conga_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1471119455/978/conga_parrot.gif?1471119455',
  ':hmm_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1597609862/10083/hmm_parrot.gif?1597609862',
  ':partyparrot:':
    'https://emojis.slackmojis.com/emojis/images/1578740447/7500/partyparrot.gif?1578740447',
  ':ultra_fast_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1597609906/10160/ultra_fast_parrot.gif?1597609906',
  ':bob_ross_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1597609840/10042/bob_ross_parrot.gif?1597609840',
  ':wfh_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1597609912/10174/wfh_parrot.gif?1597609912',
  ':fast_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1471119456/981/fast_parrot.gif?1471119456',
  ':birthday_party_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1597609839/10039/birthday_party_parrot.gif?1597609839',
  ':corona-parrot:':
    'https://emojis.slackmojis.com/emojis/images/1586969916/8631/corona-parrot.gif?1586969916',
  ':node_parrot:':
    'https://emojis.slackmojis.com/emojis/images/1597609878/10110/node_parrot.gif?1597609878',
  ':pig-scoot:':
    'https://emojis.slackmojis.com/emojis/images/1549409786/5279/pig-scoot.gif?1549409786',
  ':pig-hello-sitting:':
    'https://emojis.slackmojis.com/emojis/images/1549409632/5276/pig-hello-sitting.gif?1549409632',
  ':pig-happy-jumping:':
    'https://emojis.slackmojis.com/emojis/images/1549409407/5272/pig-happy-jumping.gif?1549409407',
  ':pig-kiss:':
    'https://emojis.slackmojis.com/emojis/images/1549409659/5277/pig-kiss.gif?1549409659',
  ':pig-angry:':
    'https://emojis.slackmojis.com/emojis/images/1549409234/5267/pig-angry.gif?1549409234',
  ':pig-sparkle-eyes:':
    'https://emojis.slackmojis.com/emojis/images/1549409901/5282/pig-sparkle-eyes.gif?1549409901',
  ':pig-cry:':
    'https://emojis.slackmojis.com/emojis/images/1549409282/5268/pig-cry.gif?1549409282',
  ':pig-silly:':
    'https://emojis.slackmojis.com/emojis/images/1549409813/5280/pig-silly.gif?1549409813',
  ':pig-hello-front:':
    'https://emojis.slackmojis.com/emojis/images/1549409562/5275/pig-hello-front.gif?1549409562',
  ':pig-drool:':
    'https://emojis.slackmojis.com/emojis/images/1549409330/5269/pig-drool.gif?1549409330',
  ':pig-hello-door:':
    'https://emojis.slackmojis.com/emojis/images/1549409475/5274/pig-hello-door.gif?1549409475',
  ':pig-working:':
    'https://emojis.slackmojis.com/emojis/images/1549409993/5285/pig-working.png?1549409993',
  ':pig-multiply:':
    'https://emojis.slackmojis.com/emojis/images/1549409690/5278/pig-multiply.gif?1549409690',
  ':pig-squeeze-toy:':
    'https://emojis.slackmojis.com/emojis/images/1549409925/5283/pig-squeeze-toy.gif?1549409925',
  ':pig-sing-karaoke:':
    'https://emojis.slackmojis.com/emojis/images/1549409858/5281/pig-sing-karaoke.gif?1549409858',
  ':pig-exercise:':
    'https://emojis.slackmojis.com/emojis/images/1549409355/5270/pig-exercise.gif?1549409355',
  ':pikachu:':
    'https://emojis.slackmojis.com/emojis/images/1450735712/238/pikachu.png?1450735712',
  ':charmander_dancing:':
    'https://emojis.slackmojis.com/emojis/images/1469223471/679/charmander_dancing.gif?1469223471',
  ':eevee:':
    'https://emojis.slackmojis.com/emojis/images/1468518265/661/eevee.png?1468518265',
  ':snorlax:':
    'https://emojis.slackmojis.com/emojis/images/1450735389/233/snorlax.png?1450735389',
  ':psyduck:':
    'https://emojis.slackmojis.com/emojis/images/1450736025/241/psyduck.png?1450736025',
  ':charizard:':
    'https://emojis.slackmojis.com/emojis/images/1450735493/236/charizard.png?1450735493',
  ':mew:':
    'https://emojis.slackmojis.com/emojis/images/1450736274/243/mew.png?1450736274',
  ':abra_pokemon:':
    'https://emojis.slackmojis.com/emojis/images/1613629237/13477/abra_pokemon.gif?1613629237',
  ':umbreon:':
    'https://emojis.slackmojis.com/emojis/images/1479081112/1366/umbreon.gif?1479081112',
  ':charmander_shiny:':
    'https://emojis.slackmojis.com/emojis/images/1619172245/32756/charmander_shiny.gif?1619172245',
  ':charmander:':
    'https://emojis.slackmojis.com/emojis/images/1450735852/239/charmander.png?1450735852',
  ':bulbasaur:':
    'https://emojis.slackmojis.com/emojis/images/1450735430/234/bulbasaur.png?1450735430',
  ':poke_pika:':
    'https://emojis.slackmojis.com/emojis/images/1472722064/1126/poke_pika.png?1472722064',
  ':regional_indicator_a:':
    'https://emojis.slackmojis.com/emojis/images/1532523105/4266/regional_indicator_a.png?1532523105',
  ':regional_indicator_b:':
    'https://emojis.slackmojis.com/emojis/images/1532523142/4267/regional_indicator_b.png?1532523142',
  ':regional_indicator_c:':
    'https://emojis.slackmojis.com/emojis/images/1532523182/4268/regional_indicator_c.png?1532523182',
  ':regional_indicator_g:':
    'https://emojis.slackmojis.com/emojis/images/1532523285/4272/regional_indicator_g.png?1532523285',
  ':regional_indicator_l:':
    'https://emojis.slackmojis.com/emojis/images/1532523430/4277/regional_indicator_l.png?1532523430',
  ':regional_indicator_e:':
    'https://emojis.slackmojis.com/emojis/images/1532523230/4270/regional_indicator_e.png?1532523230',
  ':regional_indicator_i:':
    'https://emojis.slackmojis.com/emojis/images/1532523340/4274/regional_indicator_i.png?1532523340',
  ':regional_indicator_f:':
    'https://emojis.slackmojis.com/emojis/images/1532523255/4271/regional_indicator_f.png?1532523255',
  ':regional_indicator_k:':
    'https://emojis.slackmojis.com/emojis/images/1532523397/4276/regional_indicator_k.png?1532523397',
  ':regional_indicator_o:':
    'https://emojis.slackmojis.com/emojis/images/1532523541/4280/regional_indicator_o.png?1532523541',
  ':regional_indicator_d:':
    'https://emojis.slackmojis.com/emojis/images/1532523209/4269/regional_indicator_d.png?1532523209',
  ':regional_indicator_s:':
    'https://emojis.slackmojis.com/emojis/images/1532523663/4284/regional_indicator_s.png?1532523663',
  ':regional_indicator_y:':
    'https://emojis.slackmojis.com/emojis/images/1532523952/4290/regional_indicator_y.png?1532523952',
  ':regional_indicator_n:':
    'https://emojis.slackmojis.com/emojis/images/1532523511/4279/regional_indicator_n.png?1532523511',
  ':regional_indicator_h:':
    'https://emojis.slackmojis.com/emojis/images/1532523314/4273/regional_indicator_h.png?1532523314',
  ':regional_indicator_j:':
    'https://emojis.slackmojis.com/emojis/images/1532523369/4275/regional_indicator_j.png?1532523369',
  ':sonic:':
    'https://emojis.slackmojis.com/emojis/images/1450372448/149/sonic.gif?1450372448',
  ':mario_luigi_dance:':
    'https://emojis.slackmojis.com/emojis/images/1490885301/1973/mario_luigi_dance.gif?1490885301',
  ':kirby_dance:':
    'https://emojis.slackmojis.com/emojis/images/1612999083/12510/kirby_dance.gif?1612999083',
  ':question_block:':
    'https://emojis.slackmojis.com/emojis/images/1450319445/46/question.gif?1450319445',
  ':kirby:':
    'https://emojis.slackmojis.com/emojis/images/1450448467/162/kirby.gif?1450448467',
  ':coin:':
    'https://emojis.slackmojis.com/emojis/images/1490884029/1971/coin.gif?1490884029',
  ':star:':
    'https://emojis.slackmojis.com/emojis/images/1490884209/1972/star.gif?1490884209',
  ':1up:':
    'https://emojis.slackmojis.com/emojis/images/1450319442/13/1up.png?1450319442',
  ':doom_look:':
    'https://emojis.slackmojis.com/emojis/images/1460579133/354/doom_look.gif?1460579133',
  ':kirby_angy_sit:':
    'https://emojis.slackmojis.com/emojis/images/1612998998/12509/kirby_angy_sit.png?1612998998',
  ':mario_wave:':
    'https://emojis.slackmojis.com/emojis/images/1613942497/14160/mario_wave.gif?1613942497',
  ':yoshi:':
    'https://emojis.slackmojis.com/emojis/images/1450319459/144/yoshi.gif?1450319459',
  ':powerup:':
    'https://emojis.slackmojis.com/emojis/images/1450731407/227/powerup.gif?1450731407',
  ':mario:':
    'https://emojis.slackmojis.com/emojis/images/1450731329/226/mario.gif?1450731329',
  ':a:':
    'https://emojis.slackmojis.com/emojis/images/1481250592/1443/a.jpg?1481250592',
  ':f:':
    'https://emojis.slackmojis.com/emojis/images/1481250616/1448/f.jpg?1481250616',
  ':b:':
    'https://emojis.slackmojis.com/emojis/images/1481250615/1444/b.jpg?1481250615',
  ':c:':
    'https://emojis.slackmojis.com/emojis/images/1481250615/1445/c.jpg?1481250615',
  ':k:':
    'https://emojis.slackmojis.com/emojis/images/1481250732/1453/k.jpg?1481250732',
  ':t:':
    'https://emojis.slackmojis.com/emojis/images/1481250751/1462/t.jpg?1481250751',
  ':g:':
    'https://emojis.slackmojis.com/emojis/images/1481250617/1449/g.jpg?1481250617',
  ':i:':
    'https://emojis.slackmojis.com/emojis/images/1481250618/1451/i.jpg?1481250618',
  ':n:':
    'https://emojis.slackmojis.com/emojis/images/1481250734/1456/n.jpg?1481250734',
  ':s:':
    'https://emojis.slackmojis.com/emojis/images/1481250751/1461/s.jpg?1481250751',
  ':e:':
    'https://emojis.slackmojis.com/emojis/images/1481250616/1447/e.jpg?1481250616',
  ':l:':
    'https://emojis.slackmojis.com/emojis/images/1481250733/1454/l.jpg?1481250733',
  ':m:':
    'https://emojis.slackmojis.com/emojis/images/1481250733/1455/m.jpg?1481250733',
  ':o:':
    'https://emojis.slackmojis.com/emojis/images/1481250734/1457/o.jpg?1481250734',
  ':r:':
    'https://emojis.slackmojis.com/emojis/images/1481250751/1460/r.jpg?1481250751',
  ':blank:':
    'https://emojis.slackmojis.com/emojis/images/1481251189/1469/blank.jpg?1481251189',
  ':tumbleweed:':
    'https://emojis.slackmojis.com/emojis/images/1471045881/949/tumbleweed.gif?1471045881',
  ':computerrage:':
    'https://emojis.slackmojis.com/emojis/images/1471045839/793/computerrage.gif?1471045839',
  ':fistbump:':
    'https://emojis.slackmojis.com/emojis/images/1471045847/821/fistbump.gif?1471045847',
  ':penguin:':
    'https://emojis.slackmojis.com/emojis/images/1471045864/890/penguin.gif?1471045864',
  ':emo:':
    'https://emojis.slackmojis.com/emojis/images/1471045844/812/emo.gif?1471045844',
  ':headbang:':
    'https://emojis.slackmojis.com/emojis/images/1471045851/836/headbang.gif?1471045851',
  ':brb:':
    'https://emojis.slackmojis.com/emojis/images/1471045835/775/brb.gif?1471045835',
  ':clapping:':
    'https://emojis.slackmojis.com/emojis/images/1471045839/790/clapping.gif?1471045839',
  ':monkey:':
    'https://emojis.slackmojis.com/emojis/images/1471045860/875/monkey.gif?1471045860',
  ':rock:':
    'https://emojis.slackmojis.com/emojis/images/1471987889/1064/rock.gif?1471987889',
  ':handshake:':
    'https://emojis.slackmojis.com/emojis/images/1471045850/833/handshake.gif?1471045850',
  ':laddu:':
    'https://emojis.slackmojis.com/emojis/images/1471045856/858/laddu.gif?1471045856',
  ':hero:':
    'https://emojis.slackmojis.com/emojis/images/1471045852/841/hero.gif?1471045852',
  ':sheep:':
    'https://emojis.slackmojis.com/emojis/images/1471045871/915/sheep.gif?1471045871',
  ':highfive:':
    'https://emojis.slackmojis.com/emojis/images/1471045852/843/highfive.gif?1471045852',
  ':baby-yoda-soup:':
    'https://emojis.slackmojis.com/emojis/images/1575409644/7248/baby-yoda-soup.gif?1575409644',
  ':bluelightsaber:':
    'https://emojis.slackmojis.com/emojis/images/1511368775/3217/bluelightsaber.png?1511368775',
  ':babyyoda:':
    'https://emojis.slackmojis.com/emojis/images/1575217269/7231/babyyoda.png?1575217269',
  ':baby-yoda:':
    'https://emojis.slackmojis.com/emojis/images/1575297777/7233/baby-yoda.png?1575297777',
  ':baby_yoda_soup:':
    'https://emojis.slackmojis.com/emojis/images/1601391178/10663/baby_yoda_soup.png?1601391178',
  ':lightsaber:':
    'https://emojis.slackmojis.com/emojis/images/1482947228/1532/lightsaber.png?1482947228',
  ':porg:':
    'https://emojis.slackmojis.com/emojis/images/1507678299/3023/porg.png?1507678299',
  ':darth_vader1:':
    'https://emojis.slackmojis.com/emojis/images/1566579070/6237/darth_vader1.jpeg?1566579070',
  ':baby-yoda-speeder:':
    'https://emojis.slackmojis.com/emojis/images/1579012065/7515/baby-yoda-speeder.gif?1579012065',
  ':empire:':
    'https://emojis.slackmojis.com/emojis/images/1450319450/114/empire.png?1450319450',
  ':darth_vader:':
    'https://emojis.slackmojis.com/emojis/images/1450319458/131/darth_vader.png?1450319458',
  ':evillightsaber:':
    'https://emojis.slackmojis.com/emojis/images/1513363813/3290/evillightsaber.png?1513363813',
  ':r2d2:':
    'https://emojis.slackmojis.com/emojis/images/1453827632/278/r2d2.png?1453827632',
  ':rebel:':
    'https://emojis.slackmojis.com/emojis/images/1450319450/113/rebel.png?1450319450',
  ':poop:':
    'https://emojis.slackmojis.com/emojis/images/1471987887/1063/poop.gif?1471987887',
  ':glowstick:':
    'https://emojis.slackmojis.com/emojis/images/1471987883/1059/glowstick.gif?1471987883',
  ':thumbs_up:':
    'https://emojis.slackmojis.com/emojis/images/1471987891/1069/thumbs_up.gif?1471987891',
  ':thumbs_down:':
    'https://emojis.slackmojis.com/emojis/images/1471987891/1068/thumbs_down.gif?1471987891',
  ':peace:':
    'https://emojis.slackmojis.com/emojis/images/1471987885/1062/peace.gif?1471987885',
  ':smh:':
    'https://emojis.slackmojis.com/emojis/images/1471987890/1066/smh.gif?1471987890',
  ':wink:':
    'https://emojis.slackmojis.com/emojis/images/1471987891/1070/wink.gif?1471987891',
  ':smile:':
    'https://emojis.slackmojis.com/emojis/images/1471987890/1067/smile.gif?1471987890',
  ':kappa:':
    'https://emojis.slackmojis.com/emojis/images/1450319446/57/kappa.png?1450319446',
  ':notlikethis:':
    'https://emojis.slackmojis.com/emojis/images/1551876952/5435/notlikethis.png?1551876952',
  ':pogchamp:':
    'https://emojis.slackmojis.com/emojis/images/1613199048/12672/pogchamp.png?1613199048',
  ':lul:':
    'https://emojis.slackmojis.com/emojis/images/1607532838/11662/lul.png?1607532838',
  ':wutface:':
    'https://emojis.slackmojis.com/emojis/images/1611954255/12280/wutface.png?1611954255',
  ':biblethump:':
    'https://emojis.slackmojis.com/emojis/images/1531900736/4253/biblethump.jpg?1531900736',
  ':kappakek:':
    'https://emojis.slackmojis.com/emojis/images/1602902945/10958/kappakek.png?1602902945',
  ':smorc:':
    'https://emojis.slackmojis.com/emojis/images/1529531656/4110/smorc.png?1529531656',
  ':dansgame:':
    'https://emojis.slackmojis.com/emojis/images/1611954265/12281/dansgame.png?1611954265',
  ':komodohype:':
    'https://emojis.slackmojis.com/emojis/images/1613199031/12671/komodohype.png?1613199031',
  ':trihard:':
    'https://emojis.slackmojis.com/emojis/images/1613556996/13372/trihard.jpg?1613556996',
  ':dududu:':
    'https://emojis.slackmojis.com/emojis/images/1538662733/4761/dududu.png?1538662733',
  ':kappastani:':
    'https://emojis.slackmojis.com/emojis/images/1503470422/2823/kappastani.png?1503470422',
  ':goldenkappa:':
    'https://emojis.slackmojis.com/emojis/images/1478250225/1325/goldenkappa.png?1478250225',
  ':yahoo_games_otter:':
    'https://emojis.slackmojis.com/emojis/images/1595268825/9729/yahoo_games_otter.png?1595268825',
  ':yahoo_games_boybluehat:':
    'https://emojis.slackmojis.com/emojis/images/1595268884/9732/yahoo_games_boybluehat.png?1595268884',
  ':yahoo_games_dragon:':
    'https://emojis.slackmojis.com/emojis/images/1595268792/9728/yahoo_games_dragon.png?1595268792',
  ':yahoo_games_woman:':
    'https://emojis.slackmojis.com/emojis/images/1595268865/9731/yahoo_games_woman.png?1595268865',
  ':yahoo_games_puss:':
    'https://emojis.slackmojis.com/emojis/images/1595268906/9733/yahoo_games_puss.png?1595268906',
  ':yahoo_games_doggiestyle:':
    'https://emojis.slackmojis.com/emojis/images/1595268923/9734/yahoo_games_doggiestyle.png?1595268923',
  ':yahoo_games_mohawk:':
    'https://emojis.slackmojis.com/emojis/images/1595268771/9727/yahoo_games_mohawk.png?1595268771',
  ':yahoo_games_pinkhair:':
    'https://emojis.slackmojis.com/emojis/images/1595268975/9736/yahoo_games_pinkhair.png?1595268975',
  ':yahoo_games_alien:':
    'https://emojis.slackmojis.com/emojis/images/1595268943/9735/yahoo_games_alien.png?1595268943',
  ':yahoo_games_flower:':
    'https://emojis.slackmojis.com/emojis/images/1595268841/9730/yahoo_games_flower.png?1595268841',
  ':whining:':
    'https://emojis.slackmojis.com/emojis/images/1492722368/2094/whining.gif?1492722368',
  ':excited:':
    'https://emojis.slackmojis.com/emojis/images/1492722350/2069/excited.gif?1492722350',
  ':money_bath:':
    'https://emojis.slackmojis.com/emojis/images/1492722355/2081/money_bath.gif?1492722355',
  ':in_love:':
    'https://emojis.slackmojis.com/emojis/images/1492722353/2076/in_love.gif?1492722353',
  ':headbutt:':
    'https://emojis.slackmojis.com/emojis/images/1492722351/2073/headbutt.gif?1492722351',
  ':love:':
    'https://emojis.slackmojis.com/emojis/images/1492722354/2080/love.gif?1492722354',
  ':blow_up:':
    'https://emojis.slackmojis.com/emojis/images/1492722347/2064/blow_up.gif?1492722347',
  ':eyebrows:':
    'https://emojis.slackmojis.com/emojis/images/1492722350/2070/eyebrows.gif?1492722350',
  ':surrender:':
    'https://emojis.slackmojis.com/emojis/images/1492722367/2092/surrender.gif?1492722367',
  ':nudge:':
    'https://emojis.slackmojis.com/emojis/images/1492722355/2082/nudge.gif?1492722355',
  ':say_nothing:':
    'https://emojis.slackmojis.com/emojis/images/1492722366/2087/say_nothing.gif?1492722366',
  ':cough:':
    'https://emojis.slackmojis.com/emojis/images/1492722349/2067/cough.gif?1492722349',
  ':looking:':
    'https://emojis.slackmojis.com/emojis/images/1492722353/2078/looking.gif?1492722353',
  ':entranced:':
    'https://emojis.slackmojis.com/emojis/images/1492722349/2068/entranced.gif?1492722349',
  ':good_job:':
    'https://emojis.slackmojis.com/emojis/images/1492722351/2071/good_job.gif?1492722351',
  ':poggers:':
    'https://emojis.slackmojis.com/emojis/images/1526876487/3966/poggers.png?1526876487',
  ':pepe_naruto:':
    'https://emojis.slackmojis.com/emojis/images/1598266360/10254/pepe_naruto.gif?1598266360',
  ':cool-doge:':
    'https://emojis.slackmojis.com/emojis/images/1520808873/3643/cool-doge.gif?1520808873',
  ':rip:':
    'https://emojis.slackmojis.com/emojis/images/1558097714/5705/rip.png?1558097714',
  ':mild-panic-intensifies:':
    'https://emojis.slackmojis.com/emojis/images/1610572925/12068/mild-panic-intensifies.gif?1610572925',
  ':awkward_monkey_look:':
    'https://emojis.slackmojis.com/emojis/images/1599212740/10402/awkward_monkey_look.gif?1599212740',
  ':pornhub:':
    'https://emojis.slackmojis.com/emojis/images/1538070824/4733/pornhub.png?1538070824',
  ':typingcat:':
    'https://emojis.slackmojis.com/emojis/images/1577982316/7421/typingcat.gif?1577982316',
  ':confused_dog:':
    'https://emojis.slackmojis.com/emojis/images/1554323875/5570/confused_dog.gif?1554323875',
  ':thankyou:':
    'https://emojis.slackmojis.com/emojis/images/1505289129/2905/thankyou.gif?1505289129',
  ':wazowski:':
    'https://emojis.slackmojis.com/emojis/images/1592225674/9377/wazowski.png?1592225674',
  ':juneteenth-flag:':
    'https://emojis.slackmojis.com/emojis/images/1592576525/9413/juneteenth-flag.png?1592576525',
  ':valorant:':
    'https://emojis.slackmojis.com/emojis/images/1589798377/9104/valorant.png?1589798377',
  ':ak-47:':
    'https://emojis.slackmojis.com/emojis/images/1582993057/7943/ak-47.png?1582993057',
  ':tank:':
    'https://emojis.slackmojis.com/emojis/images/1482560015/1528/tank.jpeg?1482560015',
  ':8P:': 'https://emots.yetihehe.com/2/8P.gif',
  ':aparat:': 'https://emots.yetihehe.com/1/aparat.gif',
  ':beczy:': 'https://emots.yetihehe.com/1/beczy.gif',
  ':beksa:': 'https://emots.yetihehe.com/2/beksa.gif',
  ':bezradny:': 'https://emots.yetihehe.com/1/bezradny.gif',
  ':bije:': 'https://emots.yetihehe.com/2/bije.gif',
  ':boisie:': 'https://emots.yetihehe.com/1/boisie.gif',
  ':brawa:': 'https://emots.yetihehe.com/2/brawa.gif',
  ':buja_w_oblokach:': 'https://emots.yetihehe.com/2/buja_w_oblokach.gif',
  ':bukiet:': 'https://emots.yetihehe.com/2/bukiet.gif',
  ':buziak:': 'https://emots.yetihehe.com/1/buziak.gif',
  ':buzki:': 'https://emots.yetihehe.com/1/buzki.gif',
  ':chatownik:': 'https://emots.yetihehe.com/2/chatownik.gif',
  ':cmok:': 'https://emots.yetihehe.com/3/cmok.gif',
  ':cwaniak:': 'https://emots.yetihehe.com/1/cwaniak.gif',
  ':dobani:': 'https://emots.yetihehe.com/2/dobani.gif',
  ':dokuczacz:': 'https://emots.yetihehe.com/1/dokuczacz.gif',
  ':dostal:': 'https://emots.yetihehe.com/2/dostal.gif',
  ':dresiarz:': 'https://emots.yetihehe.com/2/dresiarz.gif',
  ':drink:': 'https://emots.yetihehe.com/2/drink.gif',
  ':figielek:': 'https://emots.yetihehe.com/1/figielek.gif',
  ':foch:': 'https://emots.yetihehe.com/1/foch.gif',
  ':fuck:': 'https://emots.yetihehe.com/2/fuck.gif',
  ':gafa:': 'https://emots.yetihehe.com/2/gafa.gif',
  ':gazeta:': 'https://emots.yetihehe.com/2/gazeta.gif',
  ':glupek:': 'https://emots.yetihehe.com/3/glupek.gif',
  ':gool:': 'https://emots.yetihehe.com/2/gool.gif',
  ':gra:': 'https://emots.yetihehe.com/2/gra.gif',
  ':haha:': 'https://emots.yetihehe.com/1/haha.gif',
  ':heej:': 'https://emots.yetihehe.com/2/heej.gif',
  ':hejka:': 'https://emots.yetihehe.com/1/hejka.gif',
  ':hmmm:': 'https://emots.yetihehe.com/2/hmmm.gif',
  ':hura:': 'https://emots.yetihehe.com/1/hura.gif',
  ':jablko:': 'https://emots.yetihehe.com/2/jablko.gif',
  ':je_pizze:': 'https://emots.yetihehe.com/2/je_pizze.gif',
  ':jezyk:': 'https://emots.yetihehe.com/1/jezyk.gif',
  ':jezyk_oko:': 'https://emots.yetihehe.com/1/jezyk_oko.gif',
  ':kawa:': 'https://emots.yetihehe.com/2/kawa.gif',
  ':klotnia:': 'https://emots.yetihehe.com/3/klotnia.gif',
  ':kotek:': 'https://emots.yetihehe.com/1/kotek.gif',
  ':krecka_dostal:': 'https://emots.yetihehe.com/2/krecka_dostal.gif',
  ':krzyk:': 'https://emots.yetihehe.com/1/krzyk.gif',
  ':kwadr:': 'https://emots.yetihehe.com/1/kwadr.gif',
  ':kwiatek:': 'https://emots.yetihehe.com/2/kwiatek.gif',
  ':lol2:': 'https://emots.yetihehe.com/3/lol.gif',
  ':luzik:': 'https://emots.yetihehe.com/1/luzik.gif',
  ':milczek:': 'https://emots.yetihehe.com/1/milczek.gif',
  ':milosc:': 'https://emots.yetihehe.com/2/milosc.gif',
  ':mniam:': 'https://emots.yetihehe.com/1/mniam.gif',
  ':mruga:': 'https://emots.yetihehe.com/2/mruga.gif',
  ':mutny:': 'https://emots.yetihehe.com/2/mutny.gif',
  ':muza:': 'https://emots.yetihehe.com/1/muza.gif',
  ':mysli:': 'https://emots.yetihehe.com/1/mysli.gif',
  ':nerwus:': 'https://emots.yetihehe.com/1/nerwus.gif',
  ':nie:': 'https://emots.yetihehe.com/3/nie.gif',
  ':niee:': 'https://emots.yetihehe.com/2/niee.gif',
  ':nonono:': 'https://emots.yetihehe.com/2/nonono.gif',
  ':obiad:': 'https://emots.yetihehe.com/2/obiad.gif',
  ':oczko:': 'https://emots.yetihehe.com/3/oczko.gif',
  ':ok:': 'https://emots.yetihehe.com/3/ok.gif',
  ':oklasky:': 'https://emots.yetihehe.com/1/oklasky.gif',
  ':okok:': 'https://emots.yetihehe.com/1/okok.gif',
  ':okularnik:': 'https://emots.yetihehe.com/2/okularnik.gif',
  ':olaboga:': 'https://emots.yetihehe.com/2/olaboga.gif',
  ':onajego:': 'https://emots.yetihehe.com/2/onajego.gif',
  ':ostr:': 'https://emots.yetihehe.com/1/ostr.gif',
  ':pada:': 'https://emots.yetihehe.com/2/pada.gif',
  ':palacz:': 'https://emots.yetihehe.com/2/palacz.gif',
  ':paluszkiem:': 'https://emots.yetihehe.com/1/paluszkiem.gif',
  ':papa:': 'https://emots.yetihehe.com/3/papa.gif',
  ':papa2:': 'https://emots.yetihehe.com/1/papa2.gif',
  ':pies:': 'https://emots.yetihehe.com/1/pies.gif',
  ':piwko2:': 'https://emots.yetihehe.com/2/piwko2.gif',
  ':plask:': 'https://emots.yetihehe.com/1/plask.gif',
  ':plotki:': 'https://emots.yetihehe.com/1/plotki.gif',
  ':pocieszacz:': 'https://emots.yetihehe.com/1/pocieszacz.gif',
  ':prezent:': 'https://emots.yetihehe.com/2/prezent.gif',
  ':prosi:': 'https://emots.yetihehe.com/1/prosi.gif',
  ':prysznic:': 'https://emots.yetihehe.com/2/prysznic.gif',
  ':puknijsie:': 'https://emots.yetihehe.com/2/puknijsie.gif',
  ':rotfl:': 'https://emots.yetihehe.com/3/rotfl.gif',
  ':serce:': 'https://emots.yetihehe.com/2/serce.gif',
  ':serducho:': 'https://emots.yetihehe.com/2/serducho.gif',
  ':smutny:': 'https://emots.yetihehe.com/3/smutny.gif',
  ':snieg:': 'https://emots.yetihehe.com/2/snieg.gif',
  ':spadaj:': 'https://emots.yetihehe.com/1/spadaj.gif',
  ':spioch:': 'https://emots.yetihehe.com/2/spioch.gif',
  ':stres:': 'https://emots.yetihehe.com/1/stres.gif',
  ':szampan:': 'https://emots.yetihehe.com/2/szampan.gif',
  ':szok:': 'https://emots.yetihehe.com/1/szok.gif',
  ':tak:': 'https://emots.yetihehe.com/1/tak.gif',
  ':telefon:': 'https://emots.yetihehe.com/3/telefon.gif',
  ':tiaaa:': 'https://emots.yetihehe.com/2/tiaaa.gif',
  ':tort:': 'https://emots.yetihehe.com/2/tort.gif',
  ':uoeee:': 'https://emots.yetihehe.com/1/uoeee.gif',
  ':usmiech:': 'https://emots.yetihehe.com/3/usmiech.gif',
  ':usta:': 'https://emots.yetihehe.com/2/usta.gif',
  ':w8:': 'https://emots.yetihehe.com/1/w8.gif',
  ':wanna:': 'https://emots.yetihehe.com/2/wanna.gif',
  ':wc:': 'https://emots.yetihehe.com/2/wc.gif',
  ':wesoly:': 'https://emots.yetihehe.com/2/wesoly.gif',
  ':winko:': 'https://emots.yetihehe.com/2/winko.gif',
  ':wnerw:': 'https://emots.yetihehe.com/1/wnerw.gif',
  ':wstydnis:': 'https://emots.yetihehe.com/2/wstydnis.gif',
  ':wysmiewacz:': 'https://emots.yetihehe.com/1/wysmiewacz.gif',
  ':yyyy:': 'https://emots.yetihehe.com/1/yyyy.gif',
  ':z_jezorem:': 'https://emots.yetihehe.com/2/z_jezorem.gif',
  ':zab:': 'https://emots.yetihehe.com/2/zab.gif',
  ':zacieszacz:': 'https://emots.yetihehe.com/1/zacieszacz.gif',
  ':zakochany:': 'https://emots.yetihehe.com/2/zakochany.gif',
  ':zakupy:': 'https://emots.yetihehe.com/1/zakupy.gif',
  ':zalamka:': 'https://emots.yetihehe.com/1/zalamka.gif',
  ':zawstydzony:': 'https://emots.yetihehe.com/3/zawstydzony.gif',
  ':zdziwko:': 'https://emots.yetihehe.com/2/zdziwko.gif',
  ':zegar:': 'https://emots.yetihehe.com/2/zegar.gif',
  ':ziew:': 'https://emots.yetihehe.com/2/ziew.gif',
  ':zlezkawoku:': 'https://emots.yetihehe.com/1/zlezkawoku.gif',
  ':zly:': 'https://emots.yetihehe.com/3/zly.gif',
  ':zmeczony:': 'https://emots.yetihehe.com/1/zmeczony.gif',
  ':zniesmaczony:': 'https://emots.yetihehe.com/2/zniesmaczony.gif',
  ':3m_sie:': 'https://emots.yetihehe.com/3/3m_sie.gif',
  ':aniolek:': 'https://emots.yetihehe.com/3/aniolek.gif',
  ':boje_sie:': 'https://emots.yetihehe.com/3/boje_sie.gif',
  ':boks:': 'https://emots.yetihehe.com/3/boks.gif',
  ':calus:': 'https://emots.yetihehe.com/3/calus.gif',
  ':cfaniak:': 'https://emots.yetihehe.com/3/cfaniak.gif',
  ':chytry:': 'https://emots.yetihehe.com/3/chytry.gif',
  ':cisza:': 'https://emots.yetihehe.com/3/cisza.gif',
  ':co:': 'https://emots.yetihehe.com/3/co.gif',
  ':co_jest:': 'https://emots.yetihehe.com/3/co_jest.gif',
  ':czarodziej:': 'https://emots.yetihehe.com/3/czarodziej.gif',
  ':czas:': 'https://emots.yetihehe.com/3/czas.gif',
  ':czytaj:': 'https://emots.yetihehe.com/3/czytaj.gif',
  ':diabelek:': 'https://emots.yetihehe.com/3/diabelek.gif',
  ':dupa:': 'https://emots.yetihehe.com/3/dupa.gif',
  ':faja:': 'https://emots.yetihehe.com/3/faja.gif',
  ':ganja:': 'https://emots.yetihehe.com/3/ganja.gif',
  ':glaszcze:': 'https://emots.yetihehe.com/3/glaszcze.gif',
  ':glupek2:': 'https://emots.yetihehe.com/3/glupek2.gif',
  ':hahaha:': 'https://emots.yetihehe.com/3/hahaha.gif',
  ':jem:': 'https://emots.yetihehe.com/3/jem.gif',
  ':jezyk1:': 'https://emots.yetihehe.com/3/jezyk1.gif',
  ':jezyk2:': 'https://emots.yetihehe.com/3/jezyk2.gif',
  ':jupi:': 'https://emots.yetihehe.com/3/jupi.gif',
  ':killer:': 'https://emots.yetihehe.com/3/killer.gif',
  ':krzywy:': 'https://emots.yetihehe.com/3/krzywy.gif',
  ':kwasny:': 'https://emots.yetihehe.com/3/kwasny.gif',
  ':list:': 'https://emots.yetihehe.com/3/list.gif',
  ':menu:': 'https://emots.yetihehe.com/3/menu.gif',
  ':nauka:': 'https://emots.yetihehe.com/3/nauka.gif',
  ':nie_powiem:': 'https://emots.yetihehe.com/3/nie_powiem.gif',
  ':oczko2:': 'https://emots.yetihehe.com/3/oczko2.gif',
  ':oczy:': 'https://emots.yetihehe.com/3/oczy.gif',
  ':ok2:': 'https://emots.yetihehe.com/3/ok2.gif',
  ':paker:': 'https://emots.yetihehe.com/3/paker.gif',
  ':peace:': 'https://emots.yetihehe.com/3/peace.gif',
  ':pisze:': 'https://emots.yetihehe.com/3/pisze.gif',
  ':piwo:': 'https://emots.yetihehe.com/3/piwo.gif',
  ':placze:': 'https://emots.yetihehe.com/3/placze.gif',
  ':pomocy:': 'https://emots.yetihehe.com/3/pomocy.gif',
  ':przytul:': 'https://emots.yetihehe.com/3/przytul.gif',
  ':pytajnik:': 'https://emots.yetihehe.com/3/pytajnik.gif',
  ':roza:': 'https://emots.yetihehe.com/3/roza.gif',
  ':sciana:': 'https://emots.yetihehe.com/3/sciana.gif',
  ':serduszka:': 'https://emots.yetihehe.com/3/serduszka.gif',
  ':serduszka2:': 'https://emots.yetihehe.com/3/serduszka2.gif',
  ':sex:': 'https://emots.yetihehe.com/3/sex.gif',
  ':slonko:': 'https://emots.yetihehe.com/3/slonko.gif',
  ':soczek:': 'https://emots.yetihehe.com/3/soczek.gif',
  ':spie:': 'https://emots.yetihehe.com/3/spie.gif',
  ':spoko:': 'https://emots.yetihehe.com/3/spoko.gif',
  ':stop:': 'https://emots.yetihehe.com/3/stop.gif',
  ':tancze:': 'https://emots.yetihehe.com/3/tancze.gif',
  ':tuptup:': 'https://emots.yetihehe.com/3/tuptup.gif',
  ':uczen:': 'https://emots.yetihehe.com/3/uczen.gif',
  ':uscisk:': 'https://emots.yetihehe.com/3/uscisk.gif',
  ':usmiech2:': 'https://emots.yetihehe.com/3/usmiech2.gif',
  ':wow:': 'https://emots.yetihehe.com/3/wow.gif',
  ':wsciekly:': 'https://emots.yetihehe.com/3/wsciekly.gif',
  ':wykrzyknik:': 'https://emots.yetihehe.com/3/wykrzyknik.gif',
  ':ysz:': 'https://emots.yetihehe.com/3/ysz.gif',
  ':zeby:': 'https://emots.yetihehe.com/3/zeby.gif',
  ':zygi:': 'https://emots.yetihehe.com/3/zygi.gif',
};

const ggRegexp = /<[^/][\w\S]+>/gi;
const emoteRegexp = /:[\w\S]+:/gi;

const appObserver = new MutationObserver((mutationList, observer) => {
  mutationList.forEach((mutation) => {
    if (
      [...mutation.addedNodes].some(
        (x) => x.dataset?.testid === 'thumbnail' || !!x.dataset?.emote
      )
    )
      return;

    if (
      [...mutation.addedNodes].some(
        (x) =>
          (x.innerHTML?.includes('href=') &&
            x.textContent?.includes('youtu')) ||
          emoteRegexp.test(x.textContent) ||
          x.innerHTML?.includes('role="dialog"')
      )
    ) {
      console.log(mutation.addedNodes);
      replaceMessages(mutation.addedNodes);
    }
  });
});

appObserver.observe(document.querySelector('body'), {
  childList: true,
  attributes: true,
  subtree: true,
});

function replaceMessages(y) {
  console.log(y);
  y.forEach((x) => {
    if (x instanceof HTMLDivElement) {
      x.querySelectorAll('[role="gridcell"]>a').forEach((link) => {
        if (link.innerHTML.includes('data-testid')) return;
        if (link.textContent.includes('youtu')) {
          const prevText = link.textContent;
          const vidId = prevText.match(/(\w|\d|\_|\-){11}/g);
          link.innerHTML = `<img data-testid="thumbnail" style="width: 100%; margin-top: 1rem" src="https://img.youtube.com/vi/${vidId[0]}/0.jpg" alt="video thumbnail"/><span data-testid="thumbnail">${prevText}</span>`;
        }
      });
      x.querySelectorAll('[role="gridcell"] div[dir="auto"]').forEach((msg) => {
        if (
          msg.innerHTML.includes('data-emote') ||
          !msg.textContent?.match(emoteRegexp)
        )
          return;
        msg.innerHTML = msg.textContent?.replace(emoteRegexp, (match) => {
          if (emotes[match]) {
            return `<img style="display: inline-flex; align-items: center; height: 24px" data-emote='${match}' src='${emotes[match]}' alt='${match}' />`;
          } else {
            return match;
          }
        });
      });
      x.querySelectorAll('[role="dialog"]').forEach((dialog) => {
        if (dialog.dataset.edited) return;

        dialog.setAttribute('data-edited', 'true');

        console.log('edited');
      });
    }
  });
}
