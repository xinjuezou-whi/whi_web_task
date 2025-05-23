(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define(['exports', 'echarts'], factory);
    } else if (
        typeof exports === 'object' &&
        typeof exports.nodeName !== 'string'
    ) {
        factory(exports, require('echarts'));
    } else {
        factory({}, root.echarts);
    }
})(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    if (!echarts.registerMap) {
        log('ECharts Map is not loaded');
        return;
    }
    echarts.registerMap(
        'USA',
        {
            type: 'FeatureCollection',
            features: [
                {
                    type: 'Feature',
                    id: '01',
                    properties: {name: 'Alabama'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ไaƨܡȸ੝ĬɻĠƅĉĬ¹ƛŁLŁóƛĊʩÑəĠɯбKᄑ@ōȌǇƏÜçŭůŗɃƐwȸÝxýƻƱɍ¤Ý౺ȘུŢऄēĔ܀L'
                        ],
                        encodeOffsets: [[-89455, 35842]]
                    }
                },
                {
                    type: 'Feature',
                    id: '02',
                    properties: {name: 'Alaska'},
                    geometry: {
                        type: 'MultiPolygon',
                        coordinates: [
                            ['@@ƒǴĉƛɏlè'],
                            ['@@ƾĵēƥéº@Ȣ'],
                            ['@@ȮlĖŭǵǇþþĖ'],
                            [
                                '@@ζĠǉζǳŮōXğĔmbšƦţnŁĬ¤ĉl͛ÏóɻbÝǔĉaǝŮ»£ƛ¤xŭƆĔ¯£ǝǉlʑɐçŌbŘȗU@ĖƨVƦþÛƒǩɚÛŎţý¯ŮŮÒĵƜÒ'
                            ],
                            ['@@ǈÅŎèŌŗůǵēł'],
                            ['@@ţĊƐÆҘýȬJƜƻˀŻĩƏ»ȋxƅÑǿȭ£ȢlźƱLô'],
                            ['@@ŗÜůƒałĸºł¹xĔͨƱƥŗmóǓĊ¯ķȕŹ¤kţĉÒ»ɼƨŎ'],
                            ['@@īŗÆ̹ώȡŌèĖÿɄəǞɦǔĶçȤÅǴULƅǪѩ@ϋ'],
                            ['@@˸ÛǔVUÝʈɯǓ¥ýǶţÆɃǵÇÏñ̃ƱēJǊÒĪƜĵǪlĠÛɦōĬǔȬƽ'],
                            ['@@Ť@ŰƱÇŁȋwǔŘ'],
                            ['@@ʪIǔôʆķŹŋ²¥ŢŰ̄¥ǈğğǓôaĪəəХǴbǿŹóƱġŘǩþƃǈǟôVƆŚ°ŘĈ»'],
                            ['@@ΟɃĉ˵ÅÐź̰ƄȘƨłÑ'],
                            ['@@¯ǩţǵǓÒƒȸȖĖ'],
                            [
                                '@@ĖѪɰx͆@ΊȬlȤçΪýӚmƆ°͐ƐÒΖVK£ȸxєÝ̂Ł˖»Ò¯ʞUɼý°»Ɯ¦Ǫ@䫿ϺçºôШŁʒƆԜbğɥźÿ̄ñÜţࡦѵƆ˫ƲĀςƄȸLĬĶUƲƦ@ƆˀϸŘϤȡšĠţɐ˖ǵm¹ŰīΈō֘әĊŹǪŹʶ˵ʴʓīĵˊÛƥɎÑǟɎVвǩʴƆĉźwĉ˖wĊĵůȋnƽŤʳġÝȫɻ̍ǝĉĔōýǪxôğĔȖĠÅȗřŁôţ£ΓȀŤȮəçUķǩĀĪŢłłǓēǓȌķÛƾǈĶƾ@¯ŮĊǊŹKˋƐȉǔѵŤVͲƛ¦ƐƧɍȀÑĬύХʞǩ׆ĉƅţǔɯ£ŌȋwŭǇŹƒǟxʅJȢƥǔƅ»ՉǪ¯¹̂ÇɦƏĖIōŚŹ̃óǝ°KŗəĖóÜƏ@ϣǔ˫ƦĖƽźѝĠʇĬлŎˡłxŘĀĠôğǔŘĠÅ¤ȹǩѝŗԧ¤ѝłmĊȫkɏÒәÆ˫Lؿ¯ɥ˷ŤΟÈŋò¥ŰʑWĉŋѝƦçÞѿţɏƛğƆĠôźmшĬÅôȡÿĬǿ`ǿʔéÑʳĉēÿ͑aĕɍwķôƼğIƥǓȬÅnţŮŹóƑǇ°¯çƾĔȁɣůȡ¹ĵ¤ʿIVèŭ¯çĕōþƏŋÒ»ȗÛǩWçēȋÿŹƛğŗLʇȋʳaĉÒƽķ͏ĀôƜɄºƐU¤ÆʞŎVĠ͛ŭ˕ò¼ƐɄɼƲŰèxƄţƨ̂ÆւɄƆĉǠwʨĖ˫ŘōĔəUƽ¦¯ʽÑţŗʿ˕ƅēȹ¯¯īƥÑçǟ˷ŋƐĕŗŹˉwwǓʝÑÿêŭŻƧIğ͛ÇÝʧώa̎çĊĉţƅȡĉȁIkóţÆğŭƏˉŹƱ@Ƨ¯ƛVŋ»çȹ£ĵƛÞƽȣʽblŁƻō¯@ƛǩə˫ɱĵÇƥĀʝɃçÒƏmţƙ¯ǟnƅţɼʧˉܫĕȭɻ»¼ƦƛxǳÅÑ˫īţŋþóğǓÒ̭ƛɱLŌĵłğēVğ̯˭ŁêŁɃlǔŹ¯ÑŘóÅŗǟÑŹźƽV¹Ƽó˵ţȖLÇǇ¦ɏōлLȹókÅʇÝǩxÑƾǪ¼ƆȌǪJϘṲ̋JŘšĖĔmĸǬ°Ȍ@ʨɚˬȢςǪўþǶǪº°ñīĉłÝĶɐXÒÝƆwJþəêm°ƨɎȢŰˊŢшł̰ƴƨÇŢx¹ĬĠɼȘ͐ŮʴǔaĠȺٺ͐ǪƐޝȡʑxÑĊƏ¯Ġů¥ýƙƆǵǉýƙˡ˸ȋƜī@ÛŁĉmůĖƱbçƜ҉ǉЛŗÛͅīƽĔƜĸ»ʆŁʪɄłǩɄƱŤţǪǳò¯ƱɏΉīЯ£ɥVȗ¼wƄǓ¦ʽȀɛʳȮǪĠǠƃmłÞĔǟĀkĉȹƜǉlēĬJŤǇÇŚȢǉź˸X@ƼèłՊʹŎĶþk¯ƚȮʔǪĬ͜¤ʪ£ΞƧɲl͆Ɯ͜ɐǔx¤ÅІ@Δ°̺ɦ@ÆƻɄmŮʑƆğŘʞɼĬbĠ̥ǞɣƃɃxȣóɣkÇ»ʳóýŭŹ»ÑƦƽŋŗÝǼĊקKчğǇaΉÆٷÞǝ¼ÿĊÒŘɻĬ°łƨÆ¯Ɔɻ@ȗϗȡẹ̀èĖӄŘײȘмŘʈÝʒ_ÆĠƥbaþאźڄĬΠVȘķƑĩñéŮŋɰl̄kͲxĬ¥ɚUȘ¦ʨ¯ʒȀǪVŤÒłͱ¼͑£ƐʧƦ˟°ĉƆɎˢƃ»ŁƆĉ̂īèĶͧƆƜʈŗ¤͛»ͳb¹¦ǟ¥۳ĸaŀɃɾǝĔ˕ôցȮʩþʧlϗƒρþkˠ¤ŰźVʴݚkࣖÒɼ°όźΠȢôȢƲǠ̺ƚƆłϮǠÒ¯͐aҸĖ̎Ġ۴˸ˌ`£˖ˌUԾԨŮԞʴȸÈ±޾ŁÜñ˓īůKLŹЄ¦xèǶÜÒƄƦϺƅÛĵʒƜÑɄĬόLɄլˠƃȡԐ»»ӰēL¤ΠÈ;KL¯ȢKȸÞ;Vʈ͜çƲbɐīŮȮƦÑ'
                            ],
                            ['@@K́ÈȸɎȌnźȢƜǩŤÒɰī@ƅͱkƧÑʅ'],
                            [
                                '@@ʆŎɍxKĬǶÜź¯līôÞLƜƼÝĠƐÅǔ@ź¼Ʉĕ@ʑˊlǩǇ͏ÞŢŁğĕǓ¤IǑʩ¯ĉéƻÞǓǩŹmƏý»ȌȗĵUÐǩÒaǠǝèĪȢʹŰȸWnğ'
                            ],
                            ['@@ǩǝÇɲƜ'],
                            ['@@ƆU¯ǫəxÒǞĸ'],
                            ['@@»ǵʳƧŮɦĖwĬŰ'],
                            ['@@Ƽ@IğƽĵƏèĕÝ¹ƾ°¼ɼm'],
                            ['@@lóĩ¯óĀƲ¤'],
                            ['@@ŭĉ¥ôǔV'],
                            ['@@ǶmçƛLkĪ'],
                            ['@@ÒīŹ£¯ĶŘ'],
                            ['@@ʳğÅÞŌĊȮÇ'],
                            ['@@Ȗ¦ÑǞbǔÇʅēÿɏ¯¯ĉͅĢƥKͅŤō@ǿèÝŎĠ̼ƦĔƾVèÒŎ'],
                            ['@@ƒÛ˫ƽJΠŘLÝƛýɱ»wýʝĉɍKƛýˉçƛôˬĔĔaɄô¹ĊŤĖǴ¥nÆȗnŁÒĠĶ͞ÒèŗƼŌ'],
                            ['@@͒ǈlèŰþȖĶ£ōΩţȗǩƻÑĕǊ'],
                            ['@@ĉɍIwÆȮ'],
                            ['@@ŗýwþƐ@'],
                            ['@@ÈýƽÅwĊŮº'],
                            ['@@ښŭϮłǬUƼÑ¦ĵͲÇł¹ѪwˀƛůɃɥwŗÅŁůǉŘȉĀǫVĉĔхŎȣḶīɯ¼īĶĠȖ'],
                            ['@@`ĩǇmĊŚ'],
                            ['@@Ō̼Jbύ¥Ûĸ'],
                            ['@@KĊŤǞĉÛýķLĕǉUͽğȕÆÞȺUˬƦ'],
                            ['@@Ʋb@Łȕ`ʇŭğǔĶJbŰŮJ@ğƆI'],
                            ['@@Ġ£ÛƛŹ¥KĖłƐ'],
                            ['@@ƜKźĵƏţƅɦ'],
                            ['@@ƼÅXĕͳ¹əƐ@ÜϺU']
                        ],
                        encodeOffsets: [
                            [[-134760, 56441]],
                            [[-134996, 56755]],
                            [[-136168, 57793]],
                            [[-136801, 57703]],
                            [[-136947, 56890]],
                            [[-137121, 58298]],
                            [[-137334, 57838]],
                            [[-137867, 57636]],
                            [[-137946, 59621]],
                            [[-139118, 58707]],
                            [[-139550, 59604]],
                            [[-150609, 61646]],
                            [[-151103, 62033]],
                            [[-151333, 71932]],
                            [[-156610, 59419]],
                            [[-157653, 58920]],
                            [[-158242, 57961]],
                            [[-159370, 57266]],
                            [[-163727, 56610]],
                            [[-164372, 56688]],
                            [[-166150, 56301]],
                            [[-166313, 65162]],
                            [[-166711, 55796]],
                            [[-169521, 55600]],
                            [[-169717, 55454]],
                            [[-170356, 61809]],
                            [[-170368, 55308]],
                            [[-172841, 54434]],
                            [[-173822, 54164]],
                            [[-174232, 58595]],
                            [[-174765, 53962]],
                            [[-175864, 65246]],
                            [[-176570, 53648]],
                            [[-177793, 53402]],
                            [[-178505, 53536]],
                            [[-180704, 53099]],
                            [[-181405, 53194]],
                            [[-182398, 53166]],
                            [[-191377, 54265]]
                        ]
                    }
                },
                {
                    type: 'Feature',
                    id: '04',
                    properties: {name: 'Arizona'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@K⶙ၵ@ট̺ᓋڐþȌǔ°ô¯ƾŗJÇ̼ǠŢxŰȢĶƨƆÆĶŌǓŤŗɚƏƒ@ł¼Řmƾçǈ»Ӱ̰ĶĵĊJĖƜ@ڲᲤJ௨I'
                        ],
                        encodeOffsets: [[-111659, 37889]]
                    }
                },
                {
                    type: 'Feature',
                    id: '05',
                    properties: {name: 'Arkansas'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@⋒IôǇŹķƅƽլ@ƻŭ¯ŹƻƑbȫĉƧĉwºóƃÛÑƛĕbǓƱ¯LÅǫƏ¼ġƱƃƅʳƨōóç°ǩÛŗᏋ`ε@@ҀšǓ£ĕþ°๒ƽघŤ@'
                        ],
                        encodeOffsets: [[-96741, 37378]]
                    }
                },
                {
                    type: 'Feature',
                    id: '06',
                    properties: {name: 'California'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ܖJૼ_࢈@JนI੝ઌݯ৺ݍߪ׽׆ѿ৺߿@ŁƐƑŘəǔţĵŋƅÅĵƧȡwůǟšÈ̻ŘI°ƽ¯óǓ૙ý࣡óĵŎKǪÝȸšƦʿȮͱȌÝ¹ŹlĊƥǞȡΓŰ»ĶɻŰˉKɛÆ˫wƥŎɼ»ǔɛŮUǠĉVƏƦī£Ġ͑ΈƱĸ˖ÜwÒǈţƦƥkȗƆçłbĶīƆ@ɚƾ@Ṵ̂é_ƱǓȣŘȢŹƾǝĬğŌʝɐ¤Üŗˮ¼ƼóɼɏɲɃź£ƲɄς¤Ů£ĬþʨçɲğÆȀ࠘L'
                        ],
                        encodeOffsets: [[-126190, 43015]]
                    }
                },
                {
                    type: 'Feature',
                    id: '08',
                    properties: {name: 'Colorado'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: ['@@ᇆIඨJှ@@ࡃVᡍߩL૯Kᑽ@ҭLഷ@@ঔaĢL܊J༼ैJ'],
                        encodeOffsets: [[-110509, 41988]]
                    }
                },
                {
                    type: 'Feature',
                    id: '09',
                    properties: {name: 'Connecticut'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: ['@@ੈ_@a@ӻ»ýñbρÝѩnȋřȭʅĩÑĪȸĢÑèÈٌζW'],
                        encodeOffsets: [[-74806, 43048]]
                    }
                },
                {
                    type: 'Feature',
                    id: '10',
                    properties: {name: 'Delaware'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: ['@@ýĵēÅlƅŮŭȹǴɍĊW́իVý੔ƜĠǞw'],
                        encodeOffsets: [[-77224, 40760]]
                    }
                },
                {
                    type: 'Feature',
                    id: '11',
                    properties: {name: 'District of Columbia'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: ['@@łĉŋēÝŤèº'],
                        encodeOffsets: [[-78884, 39930]]
                    }
                },
                {
                    type: 'Feature',
                    id: '12',
                    properties: {name: 'Florida'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@вLŘʓ଴ÅંÛ¤ǵĸJǠƾĀÜȖçɲºεłХʔաόֹÅ£lˉƾ̙ʒ׽¼ȋKȕğ۝ÿaćɍéǇƻÝƻÝˋýĖźȋόƥèŻ»ĵȺǞǩȌ£ŰǴĩxŁĕˉҖŁŚʨͲǓkŋŁōǒƨҢϤĵĠŮǉȉȮƳĊUŮŁ°ēƐ͑Ȃ˫¥bŹğxΕƻϋVĠēŎѩʜ̹ł˭ɻkԛÿŮŰÛèƐȋǈŎᄒ@'
                        ],
                        encodeOffsets: [[-87549, 31742]]
                    }
                },
                {
                    type: 'Feature',
                    id: '13',
                    properties: {name: 'Georgia'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ǵǵaĕˬǳĖbźȁīƆǩȘŁŌƻɦƛUīƦƽɦŹÆƏXǵŘÑƆɣJƛȘóȹ˷ƥēŹUƅğÑΩɱȕèÿÛƽǟķI£ǶઁÜଳÆŗʔğɰÒɚĉʪôƜKłƜłīºĊğƆīɼȷਫ਼ƧܢઌJלIєb'
                        ],
                        encodeOffsets: [[-85103, 35842]]
                    }
                },
                {
                    type: 'Feature',
                    id: '15',
                    properties: {name: 'Hawaii'},
                    geometry: {
                        type: 'MultiPolygon',
                        coordinates: [
                            ['@@ȷòôȌƥ͒ŘłĊƦÑĬnĶɼţʾēǊŹ@ōʆǵƥƥʿçǿōķƻ'],
                            ['@@ĪŗŰº˖ƃ¥ţ˟ÑÇx_ƦƛÇĊĢĠ'],
                            ['@@ĉĕȗ@ÒĬɐU'],
                            ['@@Ġȡ¯ŗǵmšɼłLƦĠ'],
                            ['@@ĪU°ĕŭīÿˉĬƐɐÞ']
                        ],
                        encodeOffsets: [
                            [[-159370, 19404]],
                            [[-160345, 21535]],
                            [[-160749, 21720]],
                            [[-161742, 22219]],
                            [[-163295, 22763]]
                        ]
                    }
                },
                {
                    type: 'Feature',
                    id: '16',
                    properties: {name: 'Idaho'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@@ࡱ˖ɻJɯǊķǞnÑ̺ɣġɚēVÅʒJš̹wȡĔŹƱġÒē£ğǴĕȺŘĊĠƲćwéĊǇƐǝĶÑIǉĪçǬUŌ˕Ĭ¯ĔþˀIȘôŘ¥Ȣ¦¯ǞȘǪƄƥƲĕ@ᐍयIཅ@ᠡJ@໢ŎˢéèǇbÑŘǠ̚ĔĖŰaþĬĶºƨǬʞéŘȡÒŗƜIƦōƨbèK૰Vਨࠤ@'
                        ],
                        encodeOffsets: [[-118832, 50177]]
                    }
                },
                {
                    type: 'Feature',
                    id: '17',
                    properties: {name: 'Illinois'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@༐aࠢ@ǇźȋƄ̯IጡğƱłǵ`ƧŁšōƱǵī_xŁÝ¥¹ȡÅŋţþƧΉýĕĀŋŁç̯źīWŹƥ¤¯ƃVȋʈèÆçǈ@ź˕ǶğkğŌʝǠJƄƜɐwþĊĸţÒǿīÿÛ¼Çˠ˫ǶʳɐŁʴUǞôŤbƲɼĠxźŌĊbƨƏŤÆƦ͜¦ˀłźŌÆǈyłȉĊyĖǿƲ'
                        ],
                        encodeOffsets: [[-92815, 43531]]
                    }
                },
                {
                    type: 'Feature',
                    id: '18',
                    properties: {name: 'Indiana'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@শ@@ÅLোa୭ÝèɱƥKƽýɍVǓƛçÅŁƧ£ýɃīÇȋĀĪǿŁ`ğȉÇĊɃĉçĕɃŰŋóÒçÑɃUÿýÆºȢÞ¦włĬ`ƲǶŎłŢ_ƨŁǶĠƲJጢĊÅʴ@ʞĪ۪@'
                        ],
                        encodeOffsets: [[-88053, 42762]]
                    }
                },
                {
                    type: 'Feature',
                    id: '19',
                    properties: {name: 'Iowa'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ź@VůŰćĵķȋÞƃ̘īÒŁȀƱzĕȊĉzŁǇŋÅŹʿŁ͛¥ÅƥƐţaƧŋĉwŹɻğaƱğǟǞēI஥wଽW॑bīŎ°ɎĉȌLɄƧôwŘ¼ĸÅƦřÆƱϘƻȂòŮǔÜÒŁĊƦ¯èŎn⣨@'
                        ],
                        encodeOffsets: [[-93561, 44546]]
                    }
                },
                {
                    type: 'Feature',
                    id: '20',
                    properties: {name: 'Kansas'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: ['@@㔌@Ċý˖ÝȋʑłĉƄȡǶ¥KᆁⰃ@࿥KUᡎŰ@'],
                        encodeOffsets: [[-104351, 40962]]
                    }
                },
                {
                    type: 'Feature',
                    id: '21',
                    properties: {name: 'Kentucky'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ȌŗƆÒ͆ÝĠĊŤƛĬwŘŗwʩĶǇƆŭ¤īǊīŌa͏ɣ̯ů@ÛůÇUñǇÅğҋţa_ܕVسǓUङ੓kȁbƱ਱VĵU°łŮè;£°źƦĬX̰ŹłèÿŌĖΊþýƨŌŤĀþɄVèÒôÑŌɄůèĖɄĊÈĉȊ_ĠȀłĩȌÿĬÈþɄƨ¤ÆłƜèUǔɎƾþƦLçɲÞ͐@Ǡǩbñʾ'
                        ],
                        encodeOffsets: [[-85917, 39700]]
                    }
                },
                {
                    type: 'Feature',
                    id: '22',
                    properties: {name: 'Louisiana'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@Ꮜ_þīÑUǟŮĿnʝķȗȡţ¹ȋĉna̯ķUÒǓÑÑཞ@ĉˡƒǿƏĶĕʝŗkĉȮÅĔƆǪƅ_Łķ¯ȋ¤xýÛţǈŁʴĠůôkƅƛƥŭƦ̯Ā@ƚƱ¯VšçōōkĉŮȕLçŹŹƑþŋVŁȺȋĠóaóǪəwKłɍĵÿǓñʳ̙ŚɃºҕ£ÑóĊȢ̘ÛǈÒĖŘĊĖĖɎaǶɱ;IȀȁȂ@ࡰζ@'
                        ],
                        encodeOffsets: [[-95855, 33811]]
                    }
                },
                {
                    type: 'Feature',
                    id: '23',
                    properties: {name: 'Maine'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ķÒbĊƅĪÅૄ£լζŘÑÒƐźƜÒ¼Ɔþ¥ƨĊɚźô¼ɼٮ٢ƲVƽŎÅ˖ĠǞ@ŤÒɼƃƐōXऻmɥ̂Ï£īôğÑĉŤŹƼƲ̗ǩƅĵ¼ĉğţxaÿƻXʝǵÑŮĕV¦ƃȗÝ¯łğÅɏ@IŮŹxĕţǿx»ƽĵƻġŁŹaŁĕŹnĠȋƧºğƏUýƽīŭə'
                        ],
                        encodeOffsets: [[-72400, 44092]]
                    }
                },
                {
                    type: 'Feature',
                    id: '24',
                    properties: {name: 'Maryland'},
                    geometry: {
                        type: 'MultiPolygon',
                        coordinates: [
                            ['@@k@w@¤@'],
                            [
                                '@@᷈@þ੓լUǓΟŹaɯ¹ǵLƐçÆĪÒŹƐ£Ïǩ`ÑƲÆ@LȤÆþóˊĢƾƚxǈŁmIćəŁÝīaʓĉŗȕŎƅaĵèķçȕƆˡÜĉźƻñÑĶŮźôƆŌĔŁĊç¹ŋþǩ¤@ŰġèŹbĩɼƛ@ƛþýÛƑJğʝÒǓŭŋǓƛǓýVў'
                            ]
                        ],
                        encodeOffsets: [[[-77818, 38865]], [[-81385, 40676]]]
                    }
                },
                {
                    type: 'Feature',
                    id: '25',
                    properties: {name: 'Massachusetts'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ĊaƧšƃōKŹȀkŎƅkŁĠVĩɼĉ˖þÑŗЏķƥIĕþƏwKÑƽÛƲwĕÒ¯Ȣŭ@ɥU@bੇ`εXmȮւڼaঊĠĀɦĊ'
                        ],
                        encodeOffsets: [[-72619, 43918]]
                    }
                },
                {
                    type: 'Feature',
                    id: '26',
                    properties: {name: 'Michigan'},
                    geometry: {
                        type: 'MultiPolygon',
                        coordinates: [
                            [
                                '@@଑@Æ঵@۩@ǠŎŘȌłŘþǊ°ɰkʞʝӤþȂÅɚȘɦ¤ȌĶƒ¤lƒɐǔƲḁĔ_ŎƲLʴèÜɰ¦óǶƲƲȌVɄīȺaĶţƾUˀŋĠJƜǵřĩŎů¤ƛ¹̹ǟý£ǉȭÅōȕ¦óȮçƼłȂɎ̂ĊƜÛĔţĖΓbǩĠɃĕ̥Ə¯IŎġŁʩǝī»ȕɃǇaé'
                            ],
                            ['@@bķōk²Ɯºw'],
                            [
                                '@@ŹĖþŢȡnĀŘVƦǩĸīłΫĊŋΫŰࡻǞğƜƽ¼͜Ĕƨĸπ¤ʈŮŎLĠĖˀŮƄłȢèȌÑͧʳýēLƽǈŤ̂mɦĉȮɯŎ¥Ʉº¹ɄҌȘɼl̺UɄÜǈLɻǔǔèÅŌèʔxJ̍ŎŭǔlĊǈ@ĖĕóÛҡÆəʅĶéğýŁlƽŚ˕èƏJƅŋəʇxĩ¯wğʿÿbŎřx¯ŗȕKĕ¹Źȣʅʧlw'
                            ],
                            ['@@ɃŁōaXĖՊȢķƏŗ']
                        ],
                        encodeOffsets: [
                            [[-85457, 42734]],
                            [[-87560, 46829]],
                            [[-89691, 46178]],
                            [[-90936, 49128]]
                        ]
                    }
                },
                {
                    type: 'Feature',
                    id: '27',
                    properties: {name: 'Minnesota'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@Ûǟç@ӻ¹»ʇçȕǵašĪWłŁĩŹlƛṊ̃ɚƱǬaĔğʴġ¦ŋʆƛƆǈȁwƃ°īŹ@⣧@@ພȗĬƥǊɰǴlĬͲĵĖçȀbɦՠǓ˸Ýǈ;ÆŘōˌნ@@͐ǔUŌÛŎѩĖ»ˠa£͒mğˠx@ɐ°ȌkɎçÒĕŰVŘȋÆĀɄÿʞÅ@óŮÑʪƲĈȸ¼ôŭƜǞȤlɤŁɐnm¯˫ŁϷĉʩĕεɏƽƃʅƱϗȭÜç'
                        ],
                        encodeOffsets: [[-94223, 47827]]
                    }
                },
                {
                    type: 'Feature',
                    id: '28',
                    properties: {name: 'Mississippi'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ɦ@ĔēšःȗཱིÞ౹ġȫnĉÆȭ˫īĕÑĵĖƐƑȀĊˢཝ@ÒÒÑǔĸVb̰ĊmºȌȢŤĸȘmʞŭŀVǠÒýĬÜŘ¯ǪôèƧŎƆʴƲƄ»ĢǬƐKÆƲ°aǔĖÒƜƄÜ¹ô໸@'
                        ],
                        encodeOffsets: [[-90594, 35836]]
                    }
                },
                {
                    type: 'Feature',
                    id: '29',
                    properties: {name: 'Missouri'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ĔJǠǝĠóţVǝłʳʴɏˬǵÈ˟Ü»ĬĀȀŤÑĉķxýƛɏIƃʞǟĠŋĠl˖ǵ@ŹèǇçÅȌʇƄUçͽŭ¯ŁÅ@±@LȹǓɃի@Ɔƾźĸóǈ⋑Jţ@@оLᆂǵ¦ƃȢŁĊȌʒ˕Þĉþȹɚǳ˖॒aାX஦x'
                        ],
                        encodeOffsets: [[-94037, 41585]]
                    }
                },
                {
                    type: 'Feature',
                    id: '30',
                    properties: {name: 'Montana'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@Jढ़IྕJߓ_@༛Lᦑ@စ@JѵƱĖƃƦȗǩǝ¥°ȡŗ¦ȗóʿJēýī°ŋ˖ǫVĩèJǊĵÒƏǞĉǈxêƱĈĉğȹŗǳĖ¤ĠÑĔƲĢēźxȢŢ̺ʑIUÆəĔĢ̹ɤmÒǝǉĸIɰ˕ɼ@ࡲ⒞KႢL⮀@'
                        ],
                        encodeOffsets: [[-106544, 50177]]
                    }
                },
                {
                    type: 'Feature',
                    id: '31',
                    properties: {name: 'Nebraska'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ූK᥄@¥ўƱĶĊŤkЄ@ѶƽÆţƲwƲϗŚÅÆƥ»ķxŗƨóKɃĊȋ¯ɍĬōǴ˕Ⱥə㔋@ů@@ࡄွ@@၀ؔ@'
                        ],
                        encodeOffsets: [[-105804, 44036]]
                    }
                },
                {
                    type: 'Feature',
                    id: '32',
                    properties: {name: 'Nevada'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: ['@@ᠢIK⠵@ڱĕƛĉIĵĶ̯¼ӯèǇnƽ»ŗ৹ࠀׅҀߩ׾৹ݎઋݰJਫ਼IบબKඞV'],
                        encodeOffsets: [[-119836, 43009]]
                    }
                },
                {
                    type: 'Feature',
                    id: '33',
                    properties: {name: 'New Hampshire'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@¤իÆૃƆĩaĉĸÑīƽĉbɥĉğÿউóÞVŮô°UŤÞΠƦǔôȌòèIȸˬĀƐƚýƒŘƐUĊŤɎȖw¦¼'
                        ],
                        encodeOffsets: [[-72787, 46391]]
                    }
                },
                {
                    type: 'Feature',
                    id: '34',
                    properties: {name: 'New Jersey'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ˬţĵʑƏÇóŹɰÛnīķҋʽͱǟīƱɃýƐʑê̙ȀkŮKn°°þĶɦèbÞʴƐ¦ôʇǞUłŁUĬźƦçĖɂǪ²ĠŌÒϮǿ'
                        ],
                        encodeOffsets: [[-76018, 42129]]
                    }
                },
                {
                    type: 'Feature',
                    id: '35',
                    properties: {name: 'New Mexico'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: ['@@ҮKᑾ@૰L@н@Kᐣk࡙@ࡅᲥ@wĉĬĩඳ@@ϣ۳@L⶚സ@'],
                        encodeOffsets: [[-109999, 37889]]
                    }
                },
                {
                    type: 'Feature',
                    id: '36',
                    properties: {name: 'New York'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@Xǩ¯ƽþƱwǇīǟôɯ¯çƄƑ׃VóȭցnÇًÒçȷġÒĩΪçôº̰@ƼʴƆnīƆ¥̯ŭ٭ǿ˕ǵVƃ¥óƒĶʒ˫ŤϭȀÒŹLƱƚnŰķĬÛKğŘ⍻@@Ʉ@bԪʈĊŘǒþÛƜç»ɰӰĬѪKǪwȌğŤζKɚÒɼƲƲLLɰþƆȋĠ¦łͲƜŰŮКˮϤƚ֮wڰn'
                        ],
                        encodeOffsets: [[-75104, 46094]]
                    }
                },
                {
                    type: 'Feature',
                    id: '37',
                    properties: {name: 'North Carolina'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ֺaڄIᵤVĬͳɻ¥˵¹¥±ȋ_XÑɰ¤ʪ¦ĊÿƲÆȭ»īĵUɃȷ˫W¯ƙŤƛĪǳɻƱˋwǿ»́ǇɱɃţˋǩỌ̀Å॑ߠऻbbĪŹƜē¹KĔਛ¦ɯǵý́ÅѓaכJxȤǔlÞƐȸŰɰJȺźɎ°ȂȌŘÈxĉͨǈƲłƾƾ¤Ȣלw'
                        ],
                        encodeOffsets: [[-82922, 37440]]
                    }
                },
                {
                    type: 'Feature',
                    id: '38',
                    properties: {name: 'North Dakota'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: ['@@ŎˋÅŗͽÞǇǔ˷՟aɥèǿĶĕͱ㰣VJྖIफ़㛌@'],
                        encodeOffsets: [[-99562, 50177]]
                    }
                },
                {
                    type: 'Feature',
                    id: '39',
                    properties: {name: 'Ohio'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@@ૻŭ¯ÒġKŹŗȫý̯͛˕ŁġÆĩšīJŁǇxīĕýŭźƽȭ¦Źķ¯ōəkŗŘīxƜţğĉͅÞƅÑȋŘʽaòǟǪ͏@b୮Kৌ଒͞ŗŌçĊÞȀƅŚ¥ϸŎɲwʞƾζƲаł@@'
                        ],
                        encodeOffsets: [[-82451, 42987]]
                    }
                },
                {
                    type: 'Feature',
                    id: '40',
                    properties: {name: 'Oklahoma'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@Ⰴ@@нƾग¯๑͑ĠćĬɏĊÅóɏL¯°ȡĉĉ°ǵ£ǓŹÛòǩÒȁ@ÑĬɃȋçłīñèȡÞƧōÛŘţbçĠǉŁýçèǓUǿòǟUÏǈˋXĵȋǈÝU@࿂຿@ু@@оߪK࿦L'
                        ],
                        encodeOffsets: [[-102489, 37889]]
                    }
                },
                {
                    type: 'Feature',
                    id: '41',
                    properties: {name: 'Oregon'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@þVǶĕþĵ¦ʧўġςƆɰbˌ¯ÅҢŢŎ£ʜxȺĊςôͲlŘÆაIŘƛȢÑêŗǫʝ¹Ƨīĵbýĕůēǟ̙Òŗǈaêçōˡ@໡ඝUફLࢇ@ૻ`ܕIࠗKţĬÝ˖bȌŗƦĊƒÒɤŮʈÈɄĠ܊aĬĊ̺Ѡ¯ʆ¦ƜͲŰƦīƆx'
                        ],
                        encodeOffsets: [[-126168, 47283]]
                    }
                },
                {
                    type: 'Feature',
                    id: '42',
                    properties: {name: 'Pennsylvania'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@@Ƀ⍼@ĠŗÜLĸīmůƲƙźKÑŋÑ±ğɁǩèĕŹƥVīłVŁʈǝ¥óʳƏaÝɥçǝxƛğ᷇@࢓@@ޒ@ૼ@@ƾ°ӎȢ@a'
                        ],
                        encodeOffsets: [[-81677, 43267]]
                    }
                },
                {
                    type: 'Feature',
                    id: '44',
                    properties: {name: 'Rhode Island'},
                    geometry: {
                        type: 'MultiPolygon',
                        coordinates: [['@@ÜƱǑkĶǞ'], ['@@Ů@°ȡĖÑĵbĕůǩͅ£¼þ@ӼɦV']],
                        encodeOffsets: [[[-72905, 42678]], [[-73247, 43026]]]
                    }
                },
                {
                    type: 'Feature',
                    id: '45',
                    properties: {name: 'South Carolina'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@Ƕþɰਜ¥LēĔºźƛaĩ़a॒ߟƥ¥ȁƏǳɍǩƛƑȋ@£ĵȡōōţǩ¹ȋŹkÑǩçȋǵȗôIƜƅɤŗÒWǶÅƐɥźƥƾVĬɥƜŋƼȗłƅǪĬŹȂĕa˫ǴbĖǶǶ̂Æ'
                        ],
                        encodeOffsets: [[-84750, 35909]]
                    }
                },
                {
                    type: 'Feature',
                    id: '46',
                    properties: {name: 'South Dakota'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@㰤UkīɯǳƦǉȘī@ຝōm°çƥłĉÛÑǓñŭƼȁƱxÅŤѵƾЃ@ţlĵĉѝƲ¦᥃@෕Lؓ@Iဲ`@Iߔ'
                        ],
                        encodeOffsets: [[-106544, 47047]]
                    }
                },
                {
                    type: 'Feature',
                    id: '47',
                    properties: {name: 'Tennessee'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@aƲȂ੔lचǔVشܖUb`ဲUȡƽ£ŁƽƱͧǇwĊŗÇȁȋɍ¯ȹŹɯIȷůÝƏǓkwȣઋIใbۿKɥ@໷@ĊxĊƨaȬƼƒźŮ°ƼǔɄKȺ²@Æ@ĶVਲU'
                        ],
                        encodeOffsets: [[-90168, 37373]]
                    }
                },
                {
                    type: 'Feature',
                    id: '48',
                    properties: {name: 'Texas'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ເ@@࿁ÞVȌǇĶˌWÐǇǠVȀñǔVèçłþǊèğŤaÜŗƨŎȢÝòçĬèŁɄȌÒīȂ@ǪÑÜñǔźǶ¤Ċ¯ȢĊ°¯ɐKÆôɐĉĈī͒ğĖýǔ¤Ţ@ѿ@࡯ȂȁJǿɲͽbǵĕɍĉĕŗÑĕÜǇȡ̗ôĉƏKѩŗƽÜƒŋīýx¥ţĖ»`ƻƻǓʩȹԑə¹ƱÅKºȷīŀÑwɚɍǇçƱ¤wƱȋƽȗ́ụ̆ğxwōĪ¯əÛUKůþçzʧĠĕxǇòƛʳĕŁŎȡ¤ʽUɥƐǟbŹŎǩţłýʨƱƲlźçƒxŢŁƆēbƛŤ¯ƲůƐǳŘĕʪĉèōȮǒŁŤǵł¥ôǓÞŹȀο¤əUȋÞ¥ĕȭƱǩğ˫»IŗǓƏKȷźԳȺķŌȫłƛʈUɎƛǪƴġĪ͛ƜǩȘƛèƱǔɃĔƥɜů°īĪxĊᲦ@@ࡆl࡚Lᐤ@ূ@'
                        ],
                        encodeOffsets: [[-104256, 37378]]
                    }
                },
                {
                    type: 'Feature',
                    id: '49',
                    properties: {name: 'Utah'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: ['@@रJ@ࡃှ@I༻K܉bġ@ও௧JᲣIL⠶ཆ@'],
                        encodeOffsets: [[-114856, 43004]]
                    }
                },
                {
                    type: 'Feature',
                    id: '50',
                    properties: {name: 'Vermont'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@VĉŗƏþƑƏƙ˫ÿJȷñçóȋƥǓÝΟVţó¯UŭôÝڻbUôׄƃƒ°èóɰĬǠxǈýƲ°ƾWǪ࢈UڲV'
                        ],
                        encodeOffsets: [[-73219, 46094]]
                    }
                },
                {
                    type: 'Feature',
                    id: '51',
                    properties: {name: 'Virginia'},
                    geometry: {
                        type: 'MultiPolygon',
                        coordinates: [
                            ['@@źbŋƛŗ¹éȗǩ̹ƛÝ¯Řôʴɦ͞ɰº'],
                            ['@@l@£@x@'],
                            [
                                '@@Ѫ˭ĠǊźaĢç@ůǪ£ŌýÞţóƅĵÝţēɦ¤ƃ̎ÅĊŁɼřŁɻĬǿŗĕaŁłÛŗĵǩƄ¥¯Ʋīвwł̹ᵣUڃJֹbכxေVҌŤÆĠǈVòŰÈ@Ṵ̈Ű͐ɤaçŚƛƚçłLǊŌŘēɐ°Ϣǈ¹ƨòJƲĢƆƼŮÞƴǔƼÜȘƜŗƐĖèǶ̘łñϸ;°ʞ'
                            ]
                        ],
                        encodeOffsets: [
                            [[-77207, 38926]],
                            [[-77840, 38865]],
                            [[-80230, 40413]]
                        ]
                    }
                },
                {
                    type: 'Feature',
                    id: '53',
                    properties: {name: 'Washington'},
                    geometry: {
                        type: 'MultiPolygon',
                        coordinates: [
                            [
                                '@@UਧL૯açŎƧJƥ჏JŗÅͱkρóȹĉʛwō¤ҡšÆˋ°ɯaρƅѝĢ¥ʨýĶǵĖýUƅwƥĬƱů»ǇôŘŎÒǝǪřҖçÒğ͒ǓŮçʞĠǔǠýΈŁɼJɼ£ɜ¤łñȢJƐǿĶbnʝÒɥĊxĉȘxȌƐȖōþUƒĉƲ¦ŌÇźƃnůĬĠ⸈@'
                            ],
                            ['@@ŌkǟƅÞ¦è'],
                            ['@@ĠŌŮƅŗȕbł']
                        ],
                        encodeOffsets: [
                            [[-119842, 50177]],
                            [[-125663, 49470]],
                            [[-125977, 49751]]
                        ]
                    }
                },
                {
                    type: 'Feature',
                    id: '54',
                    properties: {name: 'West Virginia'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@@ޑ࢔@UѝǔþǔƜŌǔŮʞÑĠƒIþÜƜýƜ@Īɻğǉѩˮ¯ʝϷͽŁòǵ̗ĕçƏƛŘÛȗǓƻÝƳƻŭġƅIƱƧñºϡǇɏ¯ŗĔǉŋŁKƙèřƜbèŋbǉĬ£ĬƅŮĵǈxʪɚlŎĸ°¥źƾȮŮŹĖþwĬłǈĬIĪŢĢÅł͜˖þ̰ŘȬLźÑĢŮ°'
                        ],
                        encodeOffsets: [[-82451, 41613]]
                    }
                },
                {
                    type: 'Feature',
                    id: '55',
                    properties: {name: 'Wisconsin'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: [
                            '@@ƾ»ĠƛࡼǝάůŌάĉĬŁǪķUƥÿŗȢmýšźĕĵǉmƏȕ¹ƅĪwźĔƒǔǪÞƐɄǪ°aōţĵɻΓÛȗLƏĕ¯ýȋǇñŁķʿxȷĸȁʑࠡ@༏bÑł̗ĬÝƄȌĶĸůĈUŰ¯ĬxƄǇȂƅʅƜ¥ŌʳĢēĠǫbəƲÒ̮kƜĪźŁłĩXbŢȖǶʈèº¼@ӼǠèÜȌUגƚɎĀôÑŗōˠƛŤ_'
                        ],
                        encodeOffsets: [[-92585, 47687]]
                    }
                },
                {
                    type: 'Feature',
                    id: '56',
                    properties: {name: 'Wyoming'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: ['@@ᦒ@༜KJေ@ဿටIᇅJेIွ@@ࡄ@ᐎIѶဆ@'],
                        encodeOffsets: [[-111698, 46083]]
                    }
                },
                {
                    type: 'Feature',
                    id: '72',
                    properties: {name: 'Puerto Rico'},
                    geometry: {
                        type: 'Polygon',
                        coordinates: ['@@˓nŻÝ¹ȋa°ȤīƚƨźŘwҢ@ӎ¯ǪÅLƏĕaēƛͳóǵ°'],
                        encodeOffsets: [[-68043, 18416]]
                    }
                }
            ],
            UTF8Encoding: true
        },
        {
            Alaska: {left: -131, top: 25, width: 15},
            Hawaii: {left: -110, top: 28, width: 5},
            'Puerto Rico': {left: -76, top: 26, width: 2}
        }
    );
});
