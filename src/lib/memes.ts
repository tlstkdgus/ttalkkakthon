/**
 * 밈 이미지 레지스트리
 *
 * 각 이미지에 시맨틱 태그를 붙여 맥락에 맞는 이미지를 제공합니다.
 */

import type { AppMode } from '../store/modeStore'

export type MemeTag =
  | 'boss_work'      // 부장님 모드 - 업무/직장 공감
  | 'boss_angry'     // 부장님 모드 - 압박/엄포
  | 'secret_tired'   // 속마음 모드 - 지침/번아웃
  | 'secret_angry'   // 속마음 모드 - 분노/억울
  | 'secret_escape'  // 속마음 모드 - 도망/탈출 욕구
  | 'secret_survive' // 속마음 모드 - 버팀/생존
  | 'shocked'        // 공통 - 놀람/황당한 반응
  | 'quiz_pass'      // 퀴즈 결과 - 좋은 결과
  | 'quiz_fail'      // 퀴즈 결과 - 저조한 결과
  | 'fortune_cheer'  // 운세 - 응원/긍정
  | 'fortune_neutral'// 운세 - 현실적/중립
  | 'fortune_wisdom' // 운세 - 조언/지혜

export type MemeImage = {
  file: string
  tags: MemeTag[]
}

export type MemeContext =
  | 'home'
  | 'learn'
  | 'fortune'
  | 'quiz_good'   // 좋은 퀴즈 결과
  | 'quiz_mid'    // 중간 퀴즈 결과
  | 'quiz_bad'    // 나쁜 퀴즈 결과

export const MEME_REGISTRY: MemeImage[] = [
  { file: '006050edfc3c4ae23f7d87ec41053633.jpg', tags: ['boss_work'] },
  { file: '029d4735663ce4b76eba334fa8dfdb15.jpg', tags: ['secret_tired'] },
  { file: '02d7dcdb8a1258726b9c87d8ceceb928.jpg', tags: ['shocked'] },
  { file: '0321dd33829d31a1494c4c2782efa07c.jpg', tags: ['boss_angry'] },
  { file: '06140abb59610cb2ce82210baf2005db.jpg', tags: ['quiz_fail'] },
  { file: '0780f31b1d389ccf5bf06ea62142ccf3.jpg', tags: ['boss_angry'] },
  { file: '07ca92ba372a1a3ac6dffb939b5bc489.jpg', tags: ['boss_work'] },
  { file: '09db64b7e35a0c245c5eed5cba0fd57f.jpg', tags: ['quiz_fail'] },
  { file: '0e766e2aeb923a01e3fd73b38d74bb71.jpg', tags: ['secret_escape'] },
  { file: '0edfb5f336151425079551f166f0ce34.jpg', tags: ['secret_survive'] },
  { file: '11151b1c47b1455a38a1cc4da1249ee9.jpg', tags: ['secret_tired'] },
  { file: '17b06eb90d68b5baf42b2897a69202bb.jpg', tags: ['secret_escape'] },
  { file: '18a2b972a6360982c48ebb6763fe541b.jpg', tags: ['secret_tired'] },
  { file: '1a0f301acbc5d201a0d46c58c11cf1ee.jpg', tags: ['fortune_neutral'] },
  { file: '1f0d59237abc165ccee067efcc05bcfa.jpg', tags: ['secret_tired'] },
  { file: '256b220dacf478dea8653e1ba35f7adf.jpg', tags: ['secret_angry'] },
  { file: '25aaf9f5fb2008b00617a46dba853349.jpg', tags: ['secret_tired'] },
  { file: '283af21fb244999c4bbe4ee9b30fb6a3.jpg', tags: ['fortune_wisdom'] },
  { file: '2ab0458d1f82f467092a0eda61fba0ff.jpg', tags: ['secret_tired'] },
  { file: '2b07551fa48299130f02ca98eeea0b1c.jpg', tags: ['secret_survive'] },
  { file: '2b4efc7ef982247eb8e6f29b13fd8b65.jpg', tags: ['secret_escape'] },
  { file: '2c545683ce5124cfce3b0b817211acde.jpg', tags: ['fortune_neutral'] },
  { file: '2d212f7dde6cbc9aa8a4f178e4726b3f.jpg', tags: ['secret_tired'] },
  { file: '2df3cb76069fec766a12a4340fefb330.jpg', tags: ['secret_tired'] },
  { file: '2fbeb1679af0181243a648959795bfeb.jpg', tags: ['fortune_cheer'] },
  { file: '357f0e83cb6e1bd7db6dd1593266ddf9.jpg', tags: ['fortune_neutral'] },
  { file: '3769d2c632763c5ba8fc6c0acc372d5d.jpg', tags: ['fortune_neutral'] },
  { file: '38dca9cd4712f9e504e558d3ca111980.jpg', tags: ['secret_tired'] },
  { file: '3af4f4be528a02eab5ab91c9c99eef63.jpg', tags: ['shocked'] },
  { file: '3c9ee97a9505f5d2832217f746ac3d5f.jpg', tags: ['fortune_neutral'] },
  { file: '3ca474a1891a348ca0c35e5132d4c224.jpg', tags: ['fortune_neutral'] },
  { file: '3db7798503385d23db2a44b717913394.jpg', tags: ['boss_work'] },
  { file: '3fae8f75c06fceaec3ca8c430c2c7c32.jpg', tags: ['secret_escape'] },
  { file: '418be95886248a0beda0616fc1a82845.jpg', tags: ['shocked'] },
  { file: '43a1facf9cda1deaf2399f00383a2eff.jpg', tags: ['secret_tired'] },
  { file: '44e37f34896894c4f5739c4e3d85e8df.jpg', tags: ['secret_survive'] },
  { file: '4657b8265b9caa780596d3d9af5ddd20.jpg', tags: ['boss_work'] },
  { file: '47680e579e191a93c1c0f80154c0f14f.jpg', tags: ['secret_tired'] },
  { file: '48a0c928fb31adbf080806dc674130b8.jpg', tags: ['secret_angry'] },
  { file: '4989b258653a5797e73fead5350df058.jpg', tags: ['secret_tired'] },
  { file: '4998b528f80d01538d13b919069409da.jpg', tags: ['secret_escape'] },
  { file: '4bc23b36c5882190e57195b170ef9383.jpg', tags: ['secret_tired'] },
  { file: '4e1d5e1dca14f1844ffac92da4257cca.jpg', tags: ['fortune_neutral'] },
  { file: '4e3e5912cf5f894afc1675fb77a5581a.jpg', tags: ['boss_angry'] },
  { file: '50dae7332babb0254a2341b8387fb2b2.jpg', tags: ['fortune_neutral'] },
  { file: '513feab27ca796c20e8f94abbbda9a9c.jpg', tags: ['boss_work'] },
  { file: '51dde8349cdff904264f17b8a5fc0e03.jpg', tags: ['quiz_pass'] },
  { file: '554432596ce6f2d173b647930c99774c.jpg', tags: ['fortune_neutral'] },
  { file: '55ffa4ef9bc6ac25fb0739fa085b1577.jpg', tags: ['secret_tired'] },
  { file: '564eff9375df2bff060b5241713cce43.jpg', tags: ['fortune_wisdom'] },
  { file: '5adf29ed59cd99ae3b1ab7146370eb3e.jpg', tags: ['secret_tired'] },
  { file: '5dad6f123e28e1f7298fe26622510b6a.jpg', tags: ['fortune_wisdom'] },
  { file: '5dd00ea0e63d286d007fec970e6690cf.jpg', tags: ['shocked'] },
  { file: '5f34c7d1000b19925a4cffa4f2d10553.jpg', tags: ['secret_tired'] },
  { file: '62073c169ff45b8975a93edae94a245a.jpg', tags: ['secret_tired'] },
  { file: '6856ea0d1123057fc51e1f1c067c00aa.jpg', tags: ['boss_work'] },
  { file: '69b140bf50db1dcc3e35b9b5e6167158.jpg', tags: ['secret_tired'] },
  { file: '6bb2b6c02c3e62bbe2cf0221543db9a2.jpg', tags: ['secret_tired'] },
  { file: '6bcd7dab12a5d5dcebfe9222a231dc3b.jpg', tags: ['boss_work'] },
  { file: '714149a87681f70aed57e196ab25051f.jpg', tags: ['secret_angry'] },
  { file: '7204c7b6e9acbb9ce782fbf670eff755.jpg', tags: ['secret_tired'] },
  { file: '7219283dbffb718de2a3759bc49b87e5.jpg', tags: ['secret_tired'] },
  { file: '72be5947ab2dfa8880ad193810546684.jpg', tags: ['boss_work'] },
  { file: '744f2cf70c86ba90679d9f2af363c3fc.jpg', tags: ['boss_work'] },
  { file: '74fa8d009c9951f33e0c6db5a26e0c73.jpg', tags: ['secret_tired'] },
  { file: '78cff7d005c9749f2e3cf7bbb0a73a57.jpg', tags: ['secret_escape'] },
  { file: '79be71c779cae81890968524dd9c4484.jpg', tags: ['secret_tired'] },
  { file: '8026b0de382cbb8be197d4b283fc71a1.jpg', tags: ['fortune_cheer'] },
  { file: '81c370784abf427b5ea3128b5f56ebe7.jpg', tags: ['boss_work'] },
  { file: '8572395413ecf4e2297522a3f6dd72a3.jpg', tags: ['secret_escape'] },
  { file: '87f08f9bd3f15859a8305215ea85bffd.jpg', tags: ['secret_escape'] },
  { file: '898e2f25a2e1a9b67990ac4424c7bbb3.jpg', tags: ['secret_tired'] },
  { file: '89acb8d3868d1c5186e342c88f1cece4.jpg', tags: ['quiz_pass'] },
  { file: '8a1fb28b7c549d20d0868326e8c377e6.jpg', tags: ['secret_angry'] },
  { file: '8fe0ce2201e205e2b30c4cd003e8b659.jpg', tags: ['secret_tired'] },
  { file: '913db05dfb8b59c585bbd5e510932daa.jpg', tags: ['secret_tired'] },
  { file: '9427f9c986339f22d01c9cbe92584b9b.jpg', tags: ['boss_work'] },
  { file: '9a7a89c2e778d5afb3c5e2b1dbf982e4.jpg', tags: ['secret_tired'] },
  { file: '9bf55c1a78c72bc9fcfce516ec3dd423.jpg', tags: ['fortune_neutral'] },
  { file: '9ce907963f372118c23118603b7c3214.jpg', tags: ['secret_tired'] },
  { file: '9d63d8da368e55b230ac910738857f0c.jpg', tags: ['fortune_cheer'] },
  { file: '9f936e3764fc920a3c5162cff1d54ed2.jpg', tags: ['secret_tired'] },
  { file: 'a049d1a158c7f566aaab524565aca300.jpg', tags: ['secret_tired'] },
  { file: 'a356120a40eb9f75cad435b67052be14.jpg', tags: ['secret_escape'] },
  { file: 'a4f4ee6af5eee0f6ba5592bd24dd56a7.jpg', tags: ['fortune_cheer'] },
  { file: 'a7fb4efb2591d5b2262821641f6e1e42.jpg', tags: ['boss_work'] },
  { file: 'a85161a963dabb492620b6a966f94014.jpg', tags: ['secret_tired'] },
  { file: 'aa45f40683fae2460d563b0c422fcf53.jpg', tags: ['secret_angry'] },
  { file: 'aac989eea707274a1b1d6053649e538b.jpg', tags: ['shocked'] },
  { file: 'ac248a8428d06fc674dae6543d8b863c.jpg', tags: ['secret_angry'] },
  { file: 'acc067d548ea103b003ad5481b39f172.jpg', tags: ['boss_work'] },
  { file: 'b11bb6b1c7c1fca09cc26169ab76555b.jpg', tags: ['boss_work'] },
  { file: 'b55acb19a8dc871d4091dfeb79420114.jpg', tags: ['secret_tired'] },
  { file: 'b6ee94dc722329aaf9f5cd6956d1948b.jpg', tags: ['fortune_wisdom'] },
  { file: 'b7a3f7758e52bca12f1d3d9a938f7800.jpg', tags: ['fortune_neutral'] },
  { file: 'bae0c75465e2f24647f8327617636965.jpg', tags: ['boss_work'] },
  { file: 'bd2ca090c0369158a5ce065ad607bc7e.jpg', tags: ['secret_survive'] },
  { file: 'bd8b4405a75f23b488f910cf03249535.jpg', tags: ['shocked'] },
  { file: 'c0b8c7ae25ed5b0d73b01f218e4ad50d.jpg', tags: ['fortune_neutral'] },
  { file: 'c8b720660f7413104c2f9c6b73adae7e.jpg', tags: ['secret_angry'] },
  { file: 'c939def65f7e135b488da60bf22a0213.jpg', tags: ['shocked'] },
  { file: 'c9425061fe7db364f4c32ac9be8cff83.jpg', tags: ['secret_tired'] },
  { file: 'ca5d7c058ca0e06811e26bb5d10ae945.jpg', tags: ['shocked'] },
  { file: 'cf1a50d3e18f2a630e2e461128309c9d.jpg', tags: ['secret_escape'] },
  { file: 'cf75f9ac43e036c5cd5ce8e51605fc0b.jpg', tags: ['fortune_neutral'] },
  { file: 'd3e0a802995135bd43d0769610e55882.jpg', tags: ['boss_work'] },
  { file: 'da1febd44f1ecf69eade2b5ca2308edf.jpg', tags: ['shocked'] },
  { file: 'da267adcc0f87c758fb8d06826a02c9f.jpg', tags: ['fortune_wisdom'] },
  { file: 'dfc73cce31e53e6c7bedaea9cfcbd017.jpg', tags: ['secret_tired'] },
  { file: 'e0c28116a3dd34c4ce6f8b17c6188240.jpg', tags: ['fortune_neutral'] },
  { file: 'e1a322bd0d39fc89a91c5febf8da1e0e.jpg', tags: ['boss_work'] },
  { file: 'e605ac8245c601d96afea1607b54875c.jpg', tags: ['secret_escape'] },
  { file: 'e6aeaab93f94135e82da1d9a47f5035f.jpg', tags: ['fortune_neutral'] },
  { file: 'e8542f7f3ccdccf7be735ecad5053f7e.jpg', tags: ['secret_tired'] },
  { file: 'e8b09b629ceb4444f411399bb602c5cf.jpg', tags: ['secret_tired'] },
  { file: 'e9ce880f0311a421626e9f14db0c1172.jpg', tags: ['boss_work'] },
  { file: 'ecfa34fd0b0ffbe3bbfc6d6534d6b04a.jpg', tags: ['secret_tired'] },
  { file: 'ee2dd438bcbf4a92e909135ba3f75524.jpg', tags: ['shocked'] },
  { file: 'eeaf427fac5868347a48607d42366e44.jpg', tags: ['secret_tired'] },
  { file: 'efdade44cdd52a7b2b2acc0d6d64336b.jpg', tags: ['secret_angry'] },
  { file: 'f02422bf0a562c0103a68ecdb2530713.jpg', tags: ['fortune_wisdom'] },
  { file: 'f3e6876986996d0cf1c8542d8aa8e2e9.jpg', tags: ['secret_escape'] },
  { file: 'f5e69cfef706be294777feb723bcfffd.jpg', tags: ['secret_tired'] },
  { file: 'f7758066772f1728e7688cc49635cbd3.jpg', tags: ['shocked'] },
  { file: 'f7deb5ab28367b3a211802c11852dacf.jpg', tags: ['secret_escape'] },
  { file: 'f926da2901639f36245be29d3da2b7fa.jpg', tags: ['secret_tired'] },
  { file: 'f9b1b8169f8f25c1371d31df5ac974eb.jpg', tags: ['boss_work'] },
  { file: 'fb552f9828e4a9c9a2fe0dc20097bf17.jpg', tags: ['secret_tired'] },
  { file: 'fbf790ebd2e37791fffbcbd118eba110.jpg', tags: ['boss_work'] },
]

/** 컨텍스트 + 모드에 맞는 태그 목록 반환 */
function getTagsForContext(mode: AppMode, context: MemeContext): MemeTag[] {
  switch (context) {
    case 'fortune':
      return ['fortune_cheer', 'fortune_neutral', 'fortune_wisdom']
    case 'quiz_good':
      return ['quiz_pass', 'fortune_cheer']
    case 'quiz_mid':
      return ['fortune_neutral', 'shocked']
    case 'quiz_bad':
      return mode === 'boss'
        ? ['quiz_fail', 'boss_angry']
        : ['quiz_fail', 'secret_tired']
    case 'learn':
      return mode === 'boss'
        ? ['boss_work', 'boss_angry']
        : ['secret_tired', 'secret_survive', 'secret_angry', 'secret_escape']
    case 'home':
    default:
      return mode === 'boss'
        ? ['boss_work', 'boss_angry', 'shocked']
        : ['secret_tired', 'secret_angry', 'secret_escape', 'secret_survive', 'shocked']
  }
}

function pickRandom<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]!
}

function getPool(mode: AppMode, context: MemeContext): MemeImage[] {
  const tags = getTagsForContext(mode, context)
  return MEME_REGISTRY.filter((m) => m.tags.some((t) => tags.includes(t)))
}

/** 컨텍스트에 맞는 랜덤 밈 이미지 URL 반환 */
export function pickMemeImage(mode: AppMode, context: MemeContext = 'home'): string {
  const pool = getPool(mode, context)
  return `/memes/${pickRandom(pool).file}`
}

/** 컨텍스트에 맞는 중복 없는 N개의 밈 이미지 URL 배열 반환 */
export function pickMemeImages(mode: AppMode, count: number, context: MemeContext = 'home'): string[] {
  const pool = [...getPool(mode, context)].sort(() => Math.random() - 0.5)
  return pool.slice(0, Math.min(count, pool.length)).map((m) => `/memes/${m.file}`)
}
