const characters = [
  {
    price: 5,
    list: [
      { name: "秋山澪", role: "贝斯手/作词/主唱", mbti: "ISTJ", desc: "放学后茶会乐队贝斯手。是一个左撇子，丹凤眼，有着到腰长度的黑发。是轻音部中唯一有后援会的部员。贝斯技术扎实，容易害羞但舞台表现力强。" },
      { name: "要乐奈", role: "主音吉他", mbti: "INTP", desc: "MyGO!!!!!乐队吉他手。喜欢的食物是抹茶和荞麦面。有着高超的吉他技术，仅一眼就能记住乐谱并演奏，是个即兴大师。" },
      { name: "河原木桃香", role: "吉他/作曲/作词", mbti: "ESTP", desc: "无刺有刺乐队主音吉他手。20岁的街头音乐艺人，演奏经验丰富，编曲老手。开朗又很会照顾人，是值得依靠的前辈。" },
      { name: "丰川祥子", role: "键盘手/作曲", mbti: "ENTJ", desc: "Ave Mujica乐队键盘手。丰川集团的千金。曾经的她个性温柔、天真烂漫，拥有天才的作曲能力，是才华横溢的少女。" },
      { name: "花园多惠", role: "主音吉他", mbti: "INFP", desc: "Poppin'Party乐队主音吉他手。小学就开始练习吉他的强大实力派。非常喜欢音乐，升入高中后就一直在Live House打工。" },
      { name: "凑友希那", role: "主唱/作词/作曲", mbti: "INTJ", desc: "Roselia乐队的主唱兼领队，同时也是乐队的作词作曲人。内心坚定，绝不怀疑自己相信的事情，纯真的性格，偶尔也会对相信的事情过于盲目而忽视身边的事情。在众人面前不怎么露出笑容，因此给人脾气不好的印象。" },
      { name: "后藤一里", role: "主音吉他/作词", mbti: "INFP", desc: "结束乐队主音吉他手。吉他技术高超，是网络上人气不菲的视频主“吉他英雄”，但在现实中却有着严重的社交恐惧症。" }
    ]
  },
  {
    price: 4,
    list: [
      { name: "平泽唯", role: "主音吉他/主唱", mbti: "ENFP", desc: "放学后茶会乐队主音吉他手。天然呆指数爆灯，在学会弹吉他后被发现有“绝对音感”的特殊能力，被称为最强单核处理器。" },
      { name: "高松灯", role: "主唱/作词", mbti: "INFP", desc: "MyGO!!!!!乐队主唱。性格略悲观的女孩。感情细腻，有着自己独特的内心世界。容易感到寂寞，常会称自己“感受着孤独”。对人际关系极为敏感，时刻担心着自己的言行是否会产生不良影响。" },
      { name: "井芹仁菜", role: "节奏吉他/主唱", mbti: "ISFP", desc: "无刺有刺乐队主唱兼节奏吉他。喜欢的食物是浸物、牛奶咖啡和酸奶，坚韧执着，歌词创作强。" },
      { name: "三角初华", role: "吉他/主唱/作词", mbti: "INFJ", desc: "Ave Mujica主唱。真名三角初音，系丰川祥子的小姨。因其酷炫的外观而受欢迎，喜欢观星。" },
      { name: "户山香澄", role: "节奏吉他/主唱", mbti: "ENFP", desc: "Poppin'Party乐队的主唱兼吉他手。喜欢冒险和唱卡拉OK。被粉丝们尊称为邦高祖。" },
      { name: "白金燐子", role: "键盘手", mbti: "ISFJ", desc: "Roselia乐队的键盘手。喜欢玩网络游戏和填字游戏，喜欢喝热牛奶，讨厌芹菜。就读于四叶女子大学艺术学部。" },
      { name: "山田凉", role: "贝斯手/作曲", mbti: "INTP", desc: "结束乐队贝斯手。贝斯技术高超，内心意外的纤细。爱好很远离世俗，是喜欢被别人叫做怪人的怪人。" }
    ]
  },
  {
    price: 3,
    list: [
      { name: "琴吹紬", role: "键盘手/作曲", mbti: "INFP", desc: "放学后茶会乐队键盘手。富家千金，怪力大小姐，音乐素养高，轻音部茶点的提供者。" },
      { name: "椎名立希", role: "鼓手/作曲", mbti: "ISTJ", desc: "MyGO!!!!!乐队鼓手。个性认真，不苟言笑，言辞犀利，态度上无论是待人还是待己都非常严格，只有在高松灯面前态度会有所软化。" },
      { name: "海老冢智", role: "键盘手", mbti: "INTJ", desc: "无刺有刺乐队键盘手。原本是在家乡相当有名的有钱人家大小姐，现在则是与其他人分租公寓。像是刺猬一样非常有警戒心，难以敞开心房。" },
      { name: "八幡海铃", role: "贝斯手", mbti: "ISTP", desc: "Ave Mujica乐队贝斯手。贝斯技巧达到了职业水准，同时担任30个乐团的支援乐手。" },
      { name: "山吹沙绫", role: "鼓手", mbti: "ESFJ", desc: "Poppin'Party乐队的鼓手。兴趣是卡拉OK、观看棒球赛、收集发饰。" },
      { name: "冰川纱夜", role: "主音吉他", mbti: "ISTJ", desc: "Roselia乐队的吉他手。生活态度认真，做一件事的时候一定要做得最好，而为了达到这个目标会不断磨练。与友希那同为乐队的强硬派。" },
      { name: "伊地知虹夏", role: "鼓手", mbti: "ENFJ", desc: "结束乐队鼓手。元气温柔的气氛调节者，善解人意，能够细心的观察每个成员并给予关照。" }
    ]
  },
  {
    price: 2,
    list: [
      { name: "中野梓", role: "节奏吉他", mbti: "ISTJ", desc: "放学后茶会乐队节奏吉他手。小学四年级开始练吉他，对吉他十分精通。很适合戴猫耳。虽然肤质很好但特别容易晒黑。" },
      { name: "长崎爽世", role: "贝斯手", mbti: "ISFJ", desc: "MyGO!!!!!乐队贝斯手。如同具有安稳气氛的大姐姐一般的存在，经常被周围的人所依赖，温柔可靠，有作曲经验。" },
      { name: "RUPA", role: "贝斯手", mbti: "INFJ", desc: "无刺有刺乐队贝斯手。非常有艺术才华，也很聪明，是所谓的天才，因稳重的说话方式和谦虚的态度而受到众人尊敬。" },
      { name: "若叶睦", role: "节奏吉他", mbti: "INTP", desc: "Ave Mujica乐队节奏吉他手。缺乏情感表达，平时也是沉默不语的孩子。内向但有音乐天赋。" },
      { name: "市谷有咲", role: "键盘手", mbti: "INTP", desc: "Poppin'Party乐队的键盘手。就读花咲川女子学园。以盆景和上网为兴趣的室内派。" },
      { name: "今井莉莎", role: "贝斯手", mbti: "ENFJ", desc: "Roselia乐队的贝斯手。喜欢编织和看恋爱故事，爱吃筑前煮和醋拌凉菜，讨厌绿色奶昔，怕鬼。个性开朗、会照顾人而且重视情感。" },
      { name: "喜多郁代", role: "节奏吉他/主唱", mbti: "ESFJ", desc: "结束乐队节奏吉他手。个性开朗活泼，精力旺盛，善良细心，是一个有很多朋友和社交活动的现充，喜欢在社交平台上发照片或者直播分享自己的生活。" }
    ]
  },
  {
    price: 1,
    list: [
      { name: "田井中律", role: "鼓手", mbti: "ESTP", desc: "放学后茶会乐队鼓手。有男孩子气息的元气娘，性格粗枝大叶。擅长针线活和料理。" },
      { name: "千早爱音", role: "节奏吉他", mbti: "ESFP", desc: "MyGO!!!!!乐队节奏吉他手。虽然有点爱慕虚荣和想出风头，但个性积极善良，关心他人，心思细腻，会为了朋友挺身而出。" },
      { name: "安和昴", role: "鼓手", mbti: "ENTP", desc: "无刺有刺乐队贝斯手。就读艺能学校的女孩子。相当有前途，会出演广告。" },
      { name: "祐天寺若麦", role: "鼓手", mbti: "ESTP", desc: "Ave Mujica乐队鼓手。，目前就读于艺术学院高中，主修演技。作为双利手，打鼓的手法十分华丽。" },
      { name: "牛込里美", role: "贝斯手", mbti: "ISFJ", desc: "Poppin'Party乐队的贝斯手。喜欢的食物是巧克力螺、肉、鲜奶油。" },
      { name: "宇田川亚子", role: "鼓手", mbti: "ENFP", desc: "Roselia乐队的爵士鼓手。喜欢研究自己认为的很帅气的事。喜欢洋芋片和雷根糖，讨厌海参和青椒，从初中到高中皆就读于羽丘女子学园。" }
    ]
  }
];

let selected = {};

function loadImage(imgElement, name) {
  const extensions = ['.jpg'];
  let loaded = false;
  extensions.forEach(ext => {
    if (loaded) return;
    const img = new Image();
    img.src = `image/${name}${ext}`;
    img.onload = () => { imgElement.src = img.src; loaded = true; };
    img.onerror = () => {};
  });
}

function updateTotal() {
  const total = Object.values(selected).reduce((sum, c) => sum + c.price, 0);
  document.getElementById('total').textContent = total;
}

function checkCoreRoles() {
  const hasGuitar = Object.values(selected).some(d => d.role.includes('吉他'));
  const hasBass   = Object.values(selected).some(d => d.role.includes('贝斯'));
  const hasDrums  = Object.values(selected).some(d => d.role.includes('鼓'));
  const missing = [];
  if (!hasGuitar) missing.push('吉他手');
  if (!hasBass)   missing.push('贝斯手');
  if (!hasDrums)  missing.push('鼓手');
  return missing.length > 0 ? missing : null;
}

function renderCharacters() {
  const area = document.getElementById('selection-area');
  area.innerHTML = '';
  characters.forEach(tier => {
    const tierDiv = document.createElement('div');
    tierDiv.className = 'price-tier';
    const label = document.createElement('div');
    label.className = 'price-label';
    label.textContent = `${tier.price}¥`;
    const grid = document.createElement('div');
    grid.className = 'character-grid';
    tier.list.forEach(char => {
      const item = document.createElement('div');
      item.className = 'character-item';
      item.dataset.name = char.name;
      item.dataset.price = tier.price;
      item.dataset.mbti = char.mbti;
      item.dataset.desc = char.desc;
      const img = document.createElement('img');
      img.alt = char.name;
      loadImage(img, char.name);
      const nameSpan = document.createElement('span');
      nameSpan.className = 'character-name';
      nameSpan.textContent = char.name;
      const roleSpan = document.createElement('span');
      roleSpan.className = 'character-role';
      roleSpan.textContent = char.role;
      item.appendChild(img);
      item.appendChild(nameSpan);
      item.appendChild(roleSpan);
      item.addEventListener('click', () => toggleSelect(item));
      grid.appendChild(item);
    });
    tierDiv.appendChild(label);
    tierDiv.appendChild(grid);
    area.appendChild(tierDiv);
  });
}

function toggleSelect(item) {
  const name = item.dataset.name;
  if (selected[name]) {
    delete selected[name];
    item.classList.remove('selected');
  } else {
    if (Object.keys(selected).length >= 5) {
      alert("⚠️ 最多只能选择5人！");
      return;
    }
    selected[name] = {
      price: parseInt(item.dataset.price),
      mbti: item.dataset.mbti,
      desc: item.dataset.desc,
      role: item.querySelector('.character-role').textContent
    };
    item.classList.add('selected');
  }
  updateTotal();
}

async function buildBand() {
  const total = Object.values(selected).reduce((sum, c) => sum + c.price, 0);
  const count = Object.keys(selected).length;
  if (total > 15) return alert(`⚠️ 预算超支！当前花费 ${total} 元`);
  if (count < 2 || count > 5) return alert(`⚠️ 乐队人数需在2至5人之间`);

  const missingCore = checkCoreRoles();
  if (missingCore && !confirm(`ℹ️ 提示：以下核心职位未覆盖：${missingCore.join(', ')}\n\n您可以继续组建...`)) return;

  // 显示成员信息
  let html = '<h2>✨ 你的少女乐队阵容</h2>';
  const members = [];
  for (const [name, data] of Object.entries(selected)) {
    members.push({ name, mbti: data.mbti, role: data.role, price: data.price, desc: data.desc });
    html += `<div class="member-info"><strong>${name}</strong>（${data.role}｜${data.mbti}｜${data.price}元）<br><em>${data.desc}</em></div>`;
  }

  html += `<div class="band-photos" style="display:flex; justify-content:center; gap:10px; margin:20px 0;">`;
  members.forEach(m => {
    html += `<img src="image/${m.name}.jpg" alt="${m.name}" style="width:60px; height:60px; border-radius:50%; object-fit:cover;">`;
  });
  html += `</div>`;

  html += `
    <div class="analysis-progress">
      <div>⏳ 正在生成深度分析...</div>
      <div>⏱️ 已用时间: <span id="elapsed-time">0</span> 秒</div>
      <div id="streaming-content" style="margin-top:10px; min-height:20px; background:#f9f9f9; padding:8px; border-radius:4px;"></div>
    </div>
  `;
  document.getElementById('result').innerHTML = html;
  document.getElementById('result').style.display = 'block';

  let startTime = Date.now();
  const timer = setInterval(() => {
    const elapsed = Math.floor((Date.now() - startTime) / 1000);
    const timeEl = document.getElementById('elapsed-time');
    if (timeEl) {
      timeEl.textContent = elapsed;
    } else {
      clearInterval(timer);
    }
  }, 1000);

  let finalContent = '';
  try {
    const res = await fetch('data/character_knowledge.json');
    const db = await res.json();
    const knowledge = members.map(m => db[m.name]).filter(Boolean);
    if (knowledge.length === 0) throw new Error("知识库缺失");

    const allNames = knowledge.map(k => k.全名).join('、');
    const prompt = `
你是一位资深动漫乐评人，熟悉《轻音少女》《孤独摇滚！》《MyGO!!!!!》《GBC》等作品。
请基于以下真实、准确的角色信息，分析这支由【${allNames}】组成的少女乐队的化学反应：
${knowledge.map(k =>
  `${k.全名}（${k.动漫出处}·${k.所属团体}）担任【${k.乐队职责}】。特点：${k.特点.join('、')}。音乐风格：${k.音乐风格}。`
).join('\n')}
分析要求：
- 不要弄错乐队人数，不要单独评价；
- 要两两循环分组评价（如5人组需10对）；
- 分析创作、排练、演出中的互动张力与互补性；
- 语言生动，有画面感，1000字以上；
- 若信息不足，只基于已知事实，不虚构；
- 不要说“在某某作品中”这种话；
- 以“这支由（所有角色名字）组成的少女乐队，其化学反应无疑充满了丰富性和多样性。”开头。
输出格式：直接输出分析段落，不要标题、列表、解释。
`.trim();

    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ model: 'qwen3:30b', prompt, stream: true }),
      timeout: 120000
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop();

      for (const line of lines) {
        if (line.trim()) {
          try {
            const json = JSON.parse(line);
            if (json.response) {
              finalContent += json.response;
              const streamEl = document.getElementById('streaming-content');
              if (streamEl) streamEl.textContent = finalContent;
            }
          } catch (e) {
            console.warn('流解析失败:', line);
          }
        }
      }
    }
  } catch (e) {
    console.warn("流式失败，回退到规则分析", e);
    finalContent = generateMBTIAnalysis(members);
  }

  clearInterval(timer);

  const resultEl = document.getElementById('result');
  const progressEl = resultEl.querySelector('.analysis-progress');
  if (progressEl) {
    const analysisDiv = document.createElement('div');
    analysisDiv.className = 'mbti-analysis';
    analysisDiv.innerHTML = `<strong>乐队深度分析：</strong><br>${finalContent}`;
    
    const saveBtn = document.createElement('button');
    saveBtn.id = 'save-analysis-btn';
    saveBtn.style.cssText = 'background:#4CAF50; color:white; padding:8px 16px; border:none; border-radius:4px; margin-top:15px; cursor:pointer;';
    saveBtn.textContent = '保存分析结果';
    saveBtn.addEventListener('click', () => {
      const filename = members.map(m => m.name.trim()).join('_') + '.txt';
      const content = `【你的少女乐队阵容】\n${members.map(m => 
        `${m.name}（${m.role}｜${m.mbti}｜${m.price}元）\n${m.desc}`
      ).join('\n\n')}\n\n【乐队深度分析】\n${finalContent}`;

      const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });

    progressEl.replaceWith(analysisDiv, saveBtn);
  }
}

function clearAll() {
  selected = {};
  document.querySelectorAll('.character-item').forEach(item => item.classList.remove('selected'));
  updateTotal();
  document.getElementById('result').style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  renderCharacters();
  document.getElementById('build-btn').addEventListener('click', buildBand);
  document.getElementById('clear-btn').addEventListener('click', clearAll);
});
