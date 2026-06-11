// --- 遊戲常數與設定 ---
const ROW = 12;
const COL = 15;
const BOSS_ROW = 7;
const BOSS_COL = 7;
const MAX_TEAM_SIZE = 3;
const MAX_ENEMY_SIZE = 5;

const ELEM = {
    ANEMO: { id: 0, name: '風', color: 'elem-ANEMO' },
    GEO: { id: 1, name: '岩', color: 'elem-GEO' },
    ELECTRO: { id: 2, name: '雷', color: 'elem-ELECTRO' },
    DENDRO: { id: 3, name: '草', color: 'elem-DENDRO' },
    HYDRO: { id: 4, name: '水', color: 'elem-HYDRO' },
    PYRO: { id: 5, name: '火', color: 'elem-PYRO' },
    CRYO: { id: 6, name: '冰', color: 'elem-CRYO' },
    NONE: { id: 7, name: '無', color: 'text-slate-400' }
};

const TILE_ICONS = {
    0: '', 1: '', 2: '', 3: '🪤', 4: '🎁', 5: '👤', 6: '👹', 'ally': '🧙‍♂️', 7: '🐉', 8: '🌀', 9: '💎'
};

// --- 遊戲全域變數 (State) ---
let originalMap1 = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 3, 0, 8, 1],
    [1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 3, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1],
    [1, 0, 0, 4, 1, 0, 2, 2, 0, 0, 0, 1, 0, 0, 1],
    [1, 0, 2, 2, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 3, 0, 1, 0, 3, 0, 0, 1, 0, 0, 1],
    [1, 0, 2, 2, 2, 2, 2, 0, 2, 2, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 1],
    [1, 0, 1, 0, 2, 2, 2, 0, 2, 2, 2, 2, 2, 0, 1],
    [1, 5, 1, 3, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

let originalMap2 = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 8, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
    [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1, 4, 0, 0, 1, 0, 1],
    [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1],
    [1, 5, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

let originalMap3 = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 1],
    [1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 4, 0, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
];

let originalBossMap = [
    [2, 2, 2, 2, 2, 2, 2],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [2, 2, 2, 2, 2, 2, 2]
];

let maps = [];
let boss_map = [];
let current_map_id = 1;
let team_unlocked = 0;
let boss_defeated = 0;
let core_exists = 0;
let boss_move_step = 0;
let game_active = false;

const boss_path = [[0, 1], [0, 1], [1, 0], [1, 0], [0, -1], [0, -1], [-1, 0], [-1, 0]];

// 實體
let traveler = {};
let playerTeam = [];
let enemies = [];

// --- DOM 元素 ---
const UI = {
    mapGrid: document.getElementById('map-grid'),
    mapTitle: document.getElementById('map-title'),
    logContainer: document.getElementById('log-container'),
    playerStatus: document.getElementById('player-status'),
    alliesStatus: document.getElementById('allies-status'),
    bossStatusContainer: document.getElementById('boss-status-container'),
    bossStatus: document.getElementById('boss-status'),
    modalOverlay: document.getElementById('modal-overlay'),
    modalTitle: document.getElementById('modal-title'),
    modalDesc: document.getElementById('modal-desc'),
    modalButtons: document.getElementById('modal-buttons'),
    btnAttack: document.getElementById('btn-attack')
};

// --- Core Logic & Initialization ---
function deepCopy(arr) { return JSON.parse(JSON.stringify(arr)); }

function initCharactersBase() {
    traveler = { name: "旅行者", element: ELEM.ANEMO, max_hp: 1000, current_hp: 1000, attack_power: 200, defense: 10, range: 3, x: 10, y: 1, is_alive: 1 };
    
    playerTeam = [
        { name: "夜蘭", element: ELEM.HYDRO, max_hp: 80, current_hp: 80, attack_power: 25, defense: 5, range: 5, x: 0, y: 0, is_alive: 1 },
        { name: "班尼特", element: ELEM.PYRO, max_hp: 70, current_hp: 70, attack_power: 15, defense: 10, range: 1, x: 0, y: 0, is_alive: 1 },
        { name: "萊伊拉", element: ELEM.CRYO, max_hp: 90, current_hp: 90, attack_power: 10, defense: 20, range: 1, x: 0, y: 0, is_alive: 1 }
    ];

    enemies = [
        { name: "雷電影(Boss)", element: ELEM.ELECTRO, max_hp: 400, current_hp: 400, attack_power: 45, defense: 30, range: 2, x: 3, y: 3, is_alive: 1, map_id: 4 },
        { name: "野伏眾(火)", element: ELEM.PYRO, max_hp: 50, current_hp: 50, attack_power: 15, defense: 5, range: 1, x: 4, y: 2, is_alive: 1, map_id: 1 },
        { name: "野伏眾(雷)", element: ELEM.ELECTRO, max_hp: 50, current_hp: 50, attack_power: 15, defense: 5, range: 1, x: 10, y: 4, is_alive: 1, map_id: 1 },
        { name: "盜寶團(水)", element: ELEM.HYDRO, max_hp: 80, current_hp: 80, attack_power: 20, defense: 10, range: 1, x: 5, y: 5, is_alive: 1, map_id: 2 },
        { name: "盜寶團(冰)", element: ELEM.CRYO, max_hp: 80, current_hp: 80, attack_power: 20, defense: 10, range: 1, x: 8, y: 8, is_alive: 1, map_id: 2 },
        { name: "愚人眾(火)", element: ELEM.PYRO, max_hp: 120, current_hp: 120, attack_power: 30, defense: 15, range: 2, x: 4, y: 6, is_alive: 1, map_id: 3 },
        { name: "愚人眾(雷)", element: ELEM.ELECTRO, max_hp: 120, current_hp: 120, attack_power: 30, defense: 15, range: 2, x: 7, y: 10, is_alive: 1, map_id: 3 }
    ];

    maps = [deepCopy(originalMap1), deepCopy(originalMap2), deepCopy(originalMap3)];
    boss_map = deepCopy(originalBossMap);
    current_map_id = 1;
    team_unlocked = 0;
    boss_defeated = 0;
    core_exists = 0;
    boss_move_step = 0;
}

function addLog(text, type = '') {
    const el = document.createElement('div');
    el.className = `log-entry ${type}`;
    el.innerHTML = text;
    UI.logContainer.appendChild(el);
    UI.logContainer.scrollTop = UI.logContainer.scrollHeight;
}

function saveGame() {
    if(!game_active) return;
    const data = {
        traveler, playerTeam, enemies, maps, boss_map,
        current_map_id, team_unlocked, boss_defeated, core_exists, boss_move_step
    };
    localStorage.setItem('genshin_save', JSON.stringify(data));
    addLog(">>> 遊戲進度已儲存！", 'log-sys');
}

function loadGame() {
    const saved = localStorage.getItem('genshin_save');
    if (saved) {
        const data = JSON.parse(saved);
        traveler = data.traveler;
        playerTeam = data.playerTeam;
        enemies = data.enemies;
        maps = data.maps || [deepCopy(originalMap1), deepCopy(originalMap2), deepCopy(originalMap3)];
        boss_map = data.boss_map;
        current_map_id = data.current_map_id;
        team_unlocked = data.team_unlocked;
        boss_defeated = data.boss_defeated;
        core_exists = data.core_exists;
        boss_move_step = data.boss_move_step || 0;
        
        addLog(">>> 遊戲進度已載入！", 'log-sys');
        startGameLoop();
    } else {
        alert("找不到存檔！");
    }
}

function getMapArray() {
    return current_map_id <= 3 ? maps[current_map_id - 1] : boss_map;
}

function renderMap() {
    UI.mapGrid.innerHTML = '';
    let currentMap = getMapArray();
    let rows = current_map_id <= 3 ? ROW : BOSS_ROW;
    let cols = current_map_id <= 3 ? COL : BOSS_COL;

    UI.mapGrid.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
    UI.mapGrid.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
    
    const mapTitles = {
        1: "地圖一：稻妻開放世界",
        2: "地圖二：璃月層岩巨淵",
        3: "地圖三：須彌雨林",
        4: "BOSS 地圖：一心淨土"
    };
    UI.mapTitle.innerText = mapTitles[current_map_id];
    UI.btnAttack.disabled = (current_map_id !== 4);

    if (current_map_id === 4) {
        for(let r=0; r<rows; r++) {
            for(let c=0; c<cols; c++) {
                if (currentMap[r][c] === 5 || currentMap[r][c] === 6 || currentMap[r][c] === 7) {
                    currentMap[r][c] = 0;
                }
            }
        }
        for (let i = 0; i < team_unlocked; i++) {
            let ally = playerTeam[i];
            if (ally.is_alive && ally.x !== 0) currentMap[ally.x][ally.y] = 'ally';
        }
        if (enemies[0].is_alive) currentMap[enemies[0].x][enemies[0].y] = 7;
        currentMap[traveler.x][traveler.y] = 5;
    } else {
        currentMap[traveler.x][traveler.y] = 5;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let val = currentMap[r][c];
            let div = document.createElement('div');
            div.className = `tile tile-${val}`;
            div.innerText = TILE_ICONS[val] || '';
            UI.mapGrid.appendChild(div);
        }
    }
}

function renderStats() {
    const elemHtml = (e) => `<span class="${e.color}">[${e.name}]</span>`;
    
    UI.playerStatus.innerHTML = `
        <div class="flex justify-between items-center mb-1">
            <span class="font-bold text-lg">${traveler.name} ${elemHtml(traveler.element)}</span>
            <span class="text-green-400">HP: ${traveler.current_hp}/${traveler.max_hp}</span>
        </div>
        <div class="text-xs text-slate-400">ATK: ${traveler.attack_power} | DEF: ${traveler.defense} | 座標: (${traveler.x},${traveler.y})</div>
    `;

    UI.alliesStatus.innerHTML = '';
    for (let i = 0; i < team_unlocked; i++) {
        let ally = playerTeam[i];
        if(ally.is_alive) {
            UI.alliesStatus.innerHTML += `
                <div class="flex justify-between items-center border-t border-slate-700 pt-1">
                    <span>A${i+1}: ${ally.name} ${elemHtml(ally.element)}</span>
                    <span class="text-green-400">HP: ${ally.current_hp}</span>
                </div>
            `;
        }
    }

    if (current_map_id === 4) {
        UI.bossStatusContainer.classList.remove('hidden');
        let boss = enemies[0];
        if (boss.is_alive) {
            UI.bossStatus.innerHTML = `
                <div class="flex justify-between items-center mb-1">
                    <span class="font-bold text-red-400">${boss.name} ${elemHtml(boss.element)}</span>
                    <span class="text-red-400">HP: ${boss.current_hp}/${boss.max_hp}</span>
                </div>
                <div class="text-xs text-slate-400">ATK: ${boss.attack_power} | DEF: ${boss.defense} | 座標: (${boss.x},${boss.y})</div>
            `;
        } else {
            UI.bossStatus.innerHTML = "<span class='text-slate-400'>Boss 雷電影已被打敗！</span>";
        }
    } else {
        UI.bossStatusContainer.classList.add('hidden');
    }
}

function updateScreen() {
    renderMap();
    renderStats();
}

function getDistance(x1, y1, x2, y2) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
}

function getElementMultiplier(attElem, defElem) {
    if (attElem.id === ELEM.HYDRO.id && defElem.id === ELEM.PYRO.id) return 1.2;
    if (attElem.id === ELEM.PYRO.id && defElem.id === ELEM.ELECTRO.id) return 1.2;
    if (attElem.id === ELEM.ELECTRO.id && defElem.id === ELEM.HYDRO.id) return 1.2;
    return 1.0;
}

function applyDamage(target, damage) {
    let finalDmg = damage - target.defense;
    if (finalDmg < 1) finalDmg = 1;
    target.current_hp -= finalDmg;
    addLog(`-> 💥 ${target.name} 受到 ${finalDmg} 點傷害。`, 'log-dmg');
    
    if (target.current_hp <= 0) {
        target.current_hp = 0;
        target.is_alive = 0;
        addLog(`-> 💀 ${target.name} 被擊敗了！`, 'log-sys');
        
        if (target.name === "雷電影(Boss)") {
            boss_defeated = 1;
            addLog(">>> 雷電影倒下了！神之心即將現世！<<<", 'log-sys text-xl text-yellow-300');
            boss_map[1][1] = 9;
            core_exists = 1;
            addLog("💎 >>> 神之心已在 (1, 1) 出現！請前往奪取！<<<", 'log-sys text-xl text-yellow-300');
        }
    }
}

function handleCombat(attacker, defender) {
    if (!defender.is_alive) return;
    let mult = getElementMultiplier(attacker.element, defender.element);
    let dmg = Math.floor(attacker.attack_power * mult);
    addLog(`⚔️ ${attacker.name} 攻擊 ${defender.name} (屬性倍率: ${mult}x)！`, 'log-atk');
    applyDamage(defender, dmg);
}

function movePlayer(dx, dy) {
    if(!game_active) return;
    
    let currentMap = getMapArray();
    let rows = current_map_id <= 3 ? ROW : BOSS_ROW;
    let cols = current_map_id <= 3 ? COL : BOSS_COL;
    
    let nx = traveler.x + dx;
    let ny = traveler.y + dy;

    if (nx < 0 || nx >= rows || ny < 0 || ny >= cols) return;
    let nextVal = currentMap[nx][ny];
    if (nextVal === 1 || nextVal === 2) return;

    if (currentMap[traveler.x][traveler.y] === 5) {
        currentMap[traveler.x][traveler.y] = 0;
    }

    let old_x = traveler.x;
    let old_y = traveler.y;
    traveler.x = nx;
    traveler.y = ny;

    addLog(`🏃 旅行者移動到 (${nx}, ${ny})`);

    checkMapEvents(old_x, old_y, nextVal);

    if (game_active) {
        if (current_map_id <= 3) spawnEnemies();
        else processBossTurn();
        
        updateScreen();
        checkGameOver();
    }
}

function checkMapEvents(ox, oy, tileVal) {
    let currentMap = getMapArray();
    
    if (tileVal === 3) {
        addLog("⚠️ 踩到陷阱！旅行者受到 10 點傷害！", 'log-dmg');
        applyDamage(traveler, 10);
    } 
    else if (tileVal === 4) {
        if (current_map_id === 1) {
            team_unlocked = Math.max(team_unlocked, 1);
            traveler.attack_power += 50;
            addLog(`🎉 開啟寶箱！獲得武器【磐岩結綠】(攻擊力+50)！解鎖隊友: ${playerTeam[0].name}`, 'log-heal');
        } else if (current_map_id === 2) {
            team_unlocked = Math.max(team_unlocked, 2);
            traveler.defense += 20;
            addLog(`🎉 開啟寶箱！獲得防具【千岩頭盔】(防禦力+20)！解鎖隊友: ${playerTeam[1].name}`, 'log-heal');
        } else if (current_map_id === 3) {
            team_unlocked = Math.max(team_unlocked, 3);
            traveler.max_hp += 500;
            traveler.current_hp += 500;
            addLog(`🎉 開啟寶箱！獲得聖遺物【角鬥士的留戀】(生命值+500)！解鎖隊友: ${playerTeam[2].name}`, 'log-heal');
        }
        currentMap[traveler.x][traveler.y] = 0;
    }
    else if (tileVal === 6) {
        if (current_map_id <= 3) {
            addLog("⚔️ 與敵人遭遇！進入戰鬥！", 'log-sys');
            for (let i = 1; i < enemies.length; i++) {
                let e = enemies[i];
                if (e.map_id === current_map_id && e.is_alive && e.x === traveler.x && e.y === traveler.y) {
                    addLog("--- 旅行者反擊階段 ---", 'log-sys');
                    handleCombat(traveler, e);
                    if (e.is_alive) handleCombat(e, traveler);
                    else currentMap[e.x][e.y] = 0;
                    break;
                }
            }
        }
    }
    else if (tileVal === 8) {
        if (current_map_id < 3) {
            addLog(`🌀 來到傳送點！準備進入下一區！`, 'log-sys');
            currentMap[traveler.x][traveler.y] = 0;
            current_map_id++;
            traveler.x = 10;
            traveler.y = 1;
        } else if (current_map_id === 3) {
            addLog("🌀 來到傳送點！準備進入 Boss 地圖！", 'log-sys');
            currentMap[traveler.x][traveler.y] = 0;
            current_map_id = 4;
            bossMapSetup();
        }
    }
    else if (tileVal === 9 && current_map_id === 4 && core_exists) {
        addLog("✨ 成功奪回【神之心】！旅行者勝利！", 'log-sys text-xl text-yellow-300');
        core_exists = 0;
        checkGameOver(true);
    }
}

function bossMapSetup() {
    for (let r = 1; r < BOSS_ROW - 1; r++) {
        for (let c = 1; c < BOSS_COL - 1; c++) {
            boss_map[r][c] = 0;
        }
    }
    traveler.x = 3; traveler.y = 1;
    let boss = enemies[0];
    boss.x = 3; boss.y = 3; boss.is_alive = 1;
    
    const fixed_coords = [[2, 1], [5, 1], [5, 5]];
    addLog(">>> 隊友已在指定戰略位置就位！", 'log-sys');
    for (let i = 0; i < team_unlocked; i++) {
        let ally = playerTeam[i];
        if (ally.is_alive) {
            ally.x = fixed_coords[i][0];
            ally.y = fixed_coords[i][1];
            addLog(`   - ${ally.name} 已就位: (${ally.x}, ${ally.y})`);
        }
    }
}

function processBossTurn() {
    let boss = enemies[0];
    if(!boss.is_alive) return;
    
    addLog("--- 我方隊友攻擊階段 ---", 'log-sys');
    for (let i = 0; i < team_unlocked; i++) {
        let ally = playerTeam[i];
        if (ally.is_alive && ally.x !== 0) {
            if (getDistance(ally.x, ally.y, boss.x, boss.y) <= ally.range) {
                handleCombat(ally, boss);
            } else {
                addLog(`💨 ${ally.name} 距離雷電影太遠，無法攻擊。`);
            }
        }
    }

    if(boss.is_alive) {
        addLog("--- 雷電影攻擊階段 ---", 'log-sys');
        if (getDistance(traveler.x, traveler.y, boss.x, boss.y) <= boss.range) {
            handleCombat(boss, traveler);
        }
        for (let i = 0; i < team_unlocked; i++) {
            let ally = playerTeam[i];
            if (ally.is_alive && ally.x !== 0) {
                if (getDistance(ally.x, ally.y, boss.x, boss.y) <= boss.range) {
                    handleCombat(boss, ally);
                }
            }
        }

        let dx = boss_path[boss_move_step][0];
        let dy = boss_path[boss_move_step][1];
        boss.x += dx;
        boss.y += dy;
        boss_move_step = (boss_move_step + 1) % boss_path.length;
        addLog(`🐉 雷電影移動至 (${boss.x}, ${boss.y})`);
    }
}

function playerAttackBoss() {
    if (current_map_id !== 4 || !game_active) return;
    let boss = enemies[0];
    
    if (!boss.is_alive) {
        addLog(">> Boss 已經被擊敗了！", 'log-sys');
        return;
    }
    
    if (getDistance(traveler.x, traveler.y, boss.x, boss.y) <= traveler.range) {
        addLog("--- 旅行者主動攻擊 ---", 'log-sys');
        handleCombat(traveler, boss);
        processBossTurn();
        updateScreen();
        checkGameOver();
    } else {
        addLog("❌ 旅行者距離雷電影太遠，無法攻擊！");
    }
}

function isPlayerNearby(target, range) {
    if (!target.is_alive) return false;
    return getDistance(traveler.x, traveler.y, target.x, target.y) <= range;
}

function spawnEnemies() {
    let currentMap = getMapArray();
    for (let i = 1; i < enemies.length; i++) {
        let e = enemies[i];
        if (e.map_id === current_map_id && e.is_alive && currentMap[e.x][e.y] !== 6 && isPlayerNearby(e, 1.5)) {
            currentMap[e.x][e.y] = 6;
            addLog(`🚨 警報！ ${e.name} 出現在附近！`, 'log-dmg');
        }
    }
}

function showEndGame(isWin) {
    game_active = false;
    UI.modalOverlay.style.display = 'flex';
    UI.modalButtons.style.display = 'none';
    
    if (isWin) {
        UI.modalTitle.innerText = "🎉 遊戲勝利 🎉";
        UI.modalTitle.className = "text-5xl font-bold text-yellow-400 mb-6";
        UI.modalDesc.innerHTML = "恭喜您取得了勝利！奪回了神之心！<br><br><button onclick='location.reload()' class='mt-4 bg-blue-600 p-2 rounded text-white'>重新開始</button>";
    } else {
        UI.modalTitle.innerText = "💀 遊戲結束 💀";
        UI.modalTitle.className = "text-5xl font-bold text-red-500 mb-6";
        UI.modalDesc.innerHTML = "旅行者不幸倒下... 冒險到此為止。<br><br><button onclick='location.reload()' class='mt-4 bg-blue-600 p-2 rounded text-white'>重新開始</button>";
    }
}

function checkGameOver(forceWin = false) {
    if (forceWin) { showEndGame(true); return; }
    if (traveler.current_hp <= 0) {
        traveler.is_alive = 0;
        showEndGame(false);
    }
}

function startGameLoop() {
    UI.modalOverlay.style.display = 'none';
    UI.logContainer.innerHTML = '';
    addLog(">>> 遊戲開始！", 'log-sys text-xl');
    game_active = true;
    updateScreen();
}

document.getElementById('btn-new').addEventListener('click', () => {
    initCharactersBase();
    startGameLoop();
});

document.getElementById('btn-load').addEventListener('click', () => {
    loadGame();
});

window.addEventListener('keydown', (e) => {
    if(!game_active) return;
    const key = e.key.toLowerCase();
    if (key === 'w' || key === 'arrowup') movePlayer(-1, 0);
    else if (key === 's' || key === 'arrowdown') movePlayer(1, 0);
    else if (key === 'a' || key === 'arrowleft') movePlayer(0, -1);
    else if (key === 'd' || key === 'arrowright') movePlayer(0, 1);
    else if (key === 't') playerAttackBoss();
    else if (key === 'i') saveGame();
    else if (key === 'q') { traveler.current_hp = 0; checkGameOver(); }
});

document.getElementById('btn-up').addEventListener('click', () => movePlayer(-1, 0));
document.getElementById('btn-down').addEventListener('click', () => movePlayer(1, 0));
document.getElementById('btn-left').addEventListener('click', () => movePlayer(0, -1));
document.getElementById('btn-right').addEventListener('click', () => movePlayer(0, 1));

UI.btnAttack.addEventListener('click', playerAttackBoss);
document.getElementById('btn-save').addEventListener('click', saveGame);
document.getElementById('btn-quit').addEventListener('click', () => { traveler.current_hp = 0; checkGameOver(); });

if(localStorage.getItem('genshin_save')) {
    document.getElementById('btn-load').innerText += " (發現紀錄)";
} else {
    document.getElementById('btn-load').classList.add('opacity-50', 'cursor-not-allowed');
    document.getElementById('btn-load').disabled = true;
}