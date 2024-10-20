// 卡片資料結構
const createCard = (cost, power, title, ability, tags, image) => ({
    cost,
    power,
    title,
    ability,
    tags,
    image
});

// 卡片資訊設定
const cards = [
    createCard(0, 1, "黃蜂女", "「我的超能力是解決問題。」", [""], "./img/Wasp.webp"),
    createCard(0, 2, "黃蜂俠", "揭示：此牌揭示區域的我方其他卡牌均-1戰鬥力。", [""], "./img/Yellowjacket.webp"),
    createCard(1, -3, "紅兜帽", "揭示：將一張惡魔加入我方手牌。", [""], "./img/Hood.webp"),
    createCard(1, 0, "米克", "你每丟棄一張牌，此牌就+1戰鬥力，且可於下回合移動。", [""], "./img/Miek.webp"),
    createCard(1, 0, "太陽黑子", "每回合结束後，每有一點未消耗的能量，就+1戰鬥力。", [""], "./img/Sunspot.webp"),
    createCard(1, 1, "蟻人", "持續：若我方填滿此牌所在區域，則此卡牌+4戰鬥力。", [""], "./img/AntMan.webp"),
    createCard(1, 1, "蜘蛛女孩", "啟動：使你放置的下張卡牌+2戰鬥力，並將該牌往右移動一個區域。", [""], "./img/Arana.webp"),
    createCard(1, 1, "巴斯特", "揭示：將你所有手牌的戰鬥力設定為3。", [""], "./img/Bast.webp"),
    createCard(1, 1, "死侍", "此卡牌被摧毀後會退回你的手牌，且戰鬥力翻倍。", [""], "./img/Deadpool.webp"),
    createCard(1, 1, "鷹眼", "揭示：若你下回合在此牌揭示區域放置卡牌，則此牌+3戰鬥力。", [""], "./img/Hawkeye.webp"),
    createCard(1, 1, "凱蒂．普萊德", "當此卡牌退回手牌時，獲得+1戰鬥力。在每回合開始時收回。", [""], "./img/KittyPryde.webp"),
    createCard(1, 1, "涅布拉", "每回合你的對手未在此區域放置卡牌，則+2戰鬥力。（但你放置此卡牌的回合除外）", [""], "./img/Nebula.webp"),
    createCard(1, 1, "新星", "當此卡牌被摧毀後，我方卡牌+1戰鬥力。", [""], "./img/Nova.webp"),
    createCard(1, 1, "火箭浣熊", "揭示：若對方本回合在此牌揭示區域放置過卡牌，則此牌+4戰鬥力。", [""], "./img/RocketRaccoon.webp"),
    // createCard(1, 1, "銀貂", "揭示：從對方牌組最頂端的1張卡牌偷取2戰鬥力。", ["揭示"], "./img/.webp"),
    createCard(1, 1, "豬豬人", "揭示：把對方手牌最左邊的卡牌變成豬仔，其戰鬥力與能量花費維持不變。", [""], "./img/SpiderHam.webp"),
    createCard(1, 2, "13號特工", "揭示：將隨機1張卡牌加入我方手牌中。", [""], "./img/Agent13.webp"),
    createCard(1, 2, "亞美莉嘉．莎薇絲", "揭示：使我方牌組最頂端卡牌+2戰鬥力。", [""], "./img/AmericaChavez.webp"),
    createCard(1, 2, "黑騎士", "當你丟棄1張牌，就將1張戰鬥力等同該牌的烏木劍加入我方手牌。（每局限1次）", [""], "./img/BlackKnight.webp"),
    createCard(1, 2, "迴聲", "對方每在此牌所在區域放置1張持續卡牌，就移除該卡牌的特殊效果。", [""], "./img/Echo.webp"),
    createCard(1, 2, "艾麗卡", "揭示：摧毀此牌揭示區域的1張敵方1費牌。", [""], "./img/Elektra.webp"),
    createCard(1, 2, "霍華鴨", "持續：輕按此卡牌，即可查看我方牌組最頂端的卡牌。", [""], "./img/HowardTheDuck.webp"),
    createCard(1, 2, "霹靂火", "此卡牌移動後戰鬥力翻倍。", [""], "./img/HumanTorch.webp"),
    createCard(1, 2, "冰人", "揭示：使對方1張手牌的能量花費+1。（最大至6）", [""], "./img/Iceman.webp"),
    createCard(1, 2, "鐵拳俠", "揭示：你放置下張卡牌後，該卡牌向左移動1個區域。", [""], "./img/IronFist.webp"),
    createCard(1, 2, "金霸王", "每有一張敵方卡片移動至此牌所在區域，該牌就-2戰鬥力。", [""], "./img/Kingpin.webp"),
    createCard(1, 2, "寇格", "揭示：將1張石塊洗進對方牌組。", [""], "./img/Korg.webp"),
    createCard(1, 2, "曼蒂斯", "揭示：若本回合對方將任何卡牌放置於此區域，則複製其中1張並放入你的手牌。", [""], "./img/Mantis.webp"),
    createCard(1, 2, "瑪利亞．希爾", "揭示：隨機將1張2費牌加入我方手牌。", [""], "./img/MariaHill.webp"),
    createCard(1, 2, "恩巴庫", "本局對戰結束時，此卡從我方牌組跳出至我方戰鬥力最低的任一區域。（須有空位）", [""], "./img/MBaku.webp"),
    createCard(1, 2, "迷霧騎士", "「我們必須拯救這座城市。」", [""], "./img/MistyKnight.webp"),
    createCard(1, 2, "妮可．米諾魯", "揭示：你放置下張卡牌後，施展法術。（放置前，法術效果每回合改變）", [""], "./img/NicoMinoru.webp"),
    createCard(1, 2, "夜行者", "你可以移動此卡牌1次。", [""], "./img/Nightcrawler.webp"),
    createCard(1, 2, "快銀", "必出現於起始手牌中。", [""], "./img/Quicksilver.webp"),
    createCard(1, 2, "昆式戰鬥機", "持續：初始之時不在我方牌組的卡牌能量花費-1。（最低須為1）", [""], "./img/Quinjet.webp"),
    createCard(1, 2, "黑皇后", "揭示：雙方手牌戰鬥力最低的1張隨機卡牌-3戰鬥力。", [""], "./img/Selene.webp"),
    createCard(1, 2, "雪守衛", "揭示：將1張雪守衛(鷹)和1張雪守衛(熊)加入我方手牌。", [""], "./img/Snowguard.webp"),
    createCard(1, 2, "松鼠女孩", "揭示：將1張戰鬥力為1的松鼠分別添加到你的其他區域。", [""], "./img/SquirrelGirl.webp"),
    createCard(1, 2, "觀察者奧圖", "對戰開始時，向你顯示未揭示區域的效果。", [""], "./img/Uatu.webp"),
    createCard(1, 2, "X-23", "此卡牌被丟棄或摧毀後，將隨機在任一區域重生，並在下回合提供你 + 1能量。", [""], "./img/X23.webp"),
    createCard(1, 2, "勇度", "揭示：摧毀對方牌組能量花費最低的任1張卡牌。", [""], "./img/Yondu.webp"),
    createCard(1, 2, "沙寶", "揭示：我方牌組中每張4費牌的能量花費 - 1。", [""], "./img/Zabu.webp"),
    createCard(1, 3, "刀鋒戰士", "揭示：丟棄我方手牌最右邊的卡牌。", [""], "./img/Blade.webp"),
    createCard(1, 3, "零號", "揭示：移除你打出的下張卡牌的特殊效果。", [""], "./img/Zero.webp"),
    createCard(1, 3, "九頭蛇鮑伯", "每回合結束後，若該回合有任何玩家SNAP，則此牌移走。", [""], "./img/HydraBob.webp"),
    createCard(1, 5, "殉道者", "在本局對戰結束時，此卡牌移動至會讓你輸掉對戰的區域。（若能輸的話）", [""], "./img/Martyr.webp"),
    createCard(1, 5, "泰坦妮亞", "任1張卡牌被放置於此牌所在區域後，此卡牌即對調敵我位置。", [""], "./img/Titania.webp"),
    createCard(1, 7, "黑舌謀士", "第3回合結束後不可打出此卡牌。持續：不可再放置卡牌至此區域。", [""], "./img/EbonyMaw.webp"),
    // 二費
    createCard(2, 0, "匕首", "此牌移動後，目標區域每有1張敵方卡牌，此牌就+3戰鬥力。", [""], "./img/Dagger.webp"),
    createCard(2, 0, "法官", "每回合結束後，我方失去1點最大能量值，且此牌+4戰鬥力。", [""], "./img/Havok.webp"),
    createCard(2, 0, "魔比斯", "持續：本局對戰中，你每丟棄1張牌，就+2戰鬥力。", ["丟棄"], "./img/Morbius.webp"),
    createCard(2, 0, "聖娜", "每回合結束後，若你放置過剛好2張卡牌，則此牌+3戰鬥力。", [""], "./img/Thena.webp"),
    createCard(2, 1, "巴奇．巴恩斯", "此卡牌被摧毀後，會替換成酷寒戰士。", [""], "./img/BuckyBarnes.webp"),
    createCard(2, 1, "蜘蛛夫人", "持續：你每回合可將此處我方任1張其他卡牌移走。", [""], "./img/MadameWeb.webp"),
    createCard(2, 1, "魔仙子", "揭示：將起始牌組中所有卡牌（不含目前手牌）的基礎能量花費隨機交換。", [""], "./img/Pixie.webp"),
    createCard(2, 2, "卡耐基", "揭示：摧毀我方在此牌揭示區域的其他卡牌，每摧毀1張，就+2戰鬥力。", [""], "./img/Carnage.webp"),
    createCard(2, 2, "夜魔俠", "在第5回合，你可以在出牌之前，先看見對方的操作。", [""], "./img/Daredevil.webp"),
    createCard(2, 2, "炫音", "持續：我方每填滿一個區域，此卡牌+2戰鬥力。", [""], "./img/Dazzler.webp"),
    createCard(2, 2, "鍛造者", "揭示：你打出的下張卡牌+2戰鬥力。", [""], "./img/Forge.webp"),
    createCard(2, 2, "呆頭鵝", "持續：雙方均不可將能量花費為4、5、6的卡牌放置在此牌所在區域。", [""], "./img/Goose.webp"),
    createCard(2, 2, "生化女", "揭示：所有其他卡牌-1戰鬥力。", [""], "./img/Hazmat.webp"),
    createCard(2, 2, "洛基", "揭示：將你的牌組替換成對方起始牌組，且能量花費-1。", [""], "./img/Loki.webp"),
    createCard(2, 2, "主體模組", "揭示：將2張哨兵機器人加入對方手牌。", [""], "./img/MasterMold.webp"),
    createCard(2, 2, "美杜莎", "揭示：若此卡牌在中間區域，則+3戰鬥力。", [""], "./img/Medusa.webp"),
    createCard(2, 2, "幻境", "揭示：複製對方手牌中能量花費最低的任1張卡牌，並放入我方手牌。使該牌+2戰鬥力。", [""], "./img/Mirage.webp"),
    createCard(2, 2, "邪惡先生", "揭示：將1張戰鬥力相同的邪惡先生克隆體添加至此牌揭示區域。", [""], "./img/MrSinister.webp"),
    createCard(2, 2, "莫卓", "持續：若雙方均將此牌所在區域填滿，則此牌+6戰鬥力。", [""], "./img/Mojo.webp"),
    createCard(2, 2, "靈蝶", "揭示：下回合，你獲得+1能量。", [""], "./img/Psylocke.webp"),
    createCard(2, 2, "拉芙娜．洛斯蕾爾", "持續：我方戰鬥力小於或等於1的所有卡牌能量花費-1（最低須為1）。", [""], "./img/RavonnaRenslayer.webp"),
    createCard(2, 2, "毒蠍人", "揭示：對方手牌-1戰鬥力。", [""], "./img/Scorpion.webp"),
    createCard(2, 2, "黑影王", "揭示：將此區域所有卡牌戰鬥力重置為原始戰鬥力。", [""], "./img/ShadowKing.webp"),
    createCard(2, 2, "星爵", "揭示：若對方本回合在此牌揭示區域放置過卡牌，則此牌+4戰鬥力。", [""], "./img/Starlord.webp"),
    createCard(2, 2, "收藏者", "每有1張卡牌加入至我方手牌（從牌組中加入除外），此牌就+1戰鬥力。", [""], "./img/TheCollector.webp"),
    createCard(2, 2, "白寡婦", "揭示：將1張寡婦之吻添加至敵方此區域。", [""], "./img/WhiteWidow.webp"),
    createCard(2, 2, "金剛狼", "此卡牌被丟棄或摧毀後，在隨機區域重生並+2戰鬥力。", [""], "./img/Wolverine.webp"),
    createCard(2, 3, "天使", "當1張我方卡牌被摧毀，此卡牌飛出我方手牌或牌組替換該牌。", [""], "./img/Angel.webp"),
    createCard(2, 3, "安吉拉", "你每在此牌所在區域放置1張卡牌，此牌就+1戰鬥力。", [""], "./img/Angela.webp"),
    createCard(2, 3, "鎧", "持續：此牌所在區域的卡牌均無法被摧毀。", [""], "./img/Armor.webp"),
    createCard(2, 3, "莫度男爵", "揭示：對方牌組最頂端的卡牌能量花費變成6，直到第6回合開始。", [""], "./img/BaronMordo.webp"),
    createCard(2, 3, "黑天鵝", "持續：下回合結束前，我方1費牌的能量花費均為0。", [""], "./img/BlackSwan.webp"),
    createCard(2, 3, "機堡", "揭示：從對方的牌組抽1張卡牌。", [""], "./img/Cable.webp"),
    createCard(2, 3, "鋼人", "持續：不能被摧毀、移動，或減少戰鬥力。", [""], "./img/Colossus.webp"),
    createCard(2, 3, "奇異博士", "揭示：將我方戰鬥力最高的所有卡牌移動到此牌揭示區域。", [""], "./img/DoctorStrange.webp"),
    createCard(2, 3, "多米諾", "你僅能在第2回合抽到此卡牌。", [""], "./img/Domino.webp"),
    createCard(2, 3, "獵鷹", "揭示：將我方所有1費牌退回手牌。", [""], "./img/Falcon.webp"),
    createCard(2, 3, "宗師", "揭示：將此牌揭示區域的另1張我方揭示卡牌移動至中間區域，並再次觸發期特殊效果。", [""], "./img/GrandMaster.webp"),
    createCard(2, 3, "「鷹眼」凱特．畢夏普", "揭示：將2支箭加入我方手牌。", [""], "./img/KateBishop.webp"),
    createCard(2, 3, "反浩克裝甲", "揭示：此牌揭示區域的1張我方卡牌與此牌合併。", [""], "./img/Hulkbuster.webp"),
    createCard(2, 3, "隱形女", "持續：你在此牌所在區域放置的卡牌直到對戰結束才會揭示。", [""], "./img/InvisibleWoman.webp"),
    createCard(2, 3, "傑夫寶寶陸行鯊", "你可以移動此卡牌1次，不受任何限制地將此牌移動或放置到任何區域。", [""], "./img/JeffTheBabyLandShark.webp"),

    // createCard(2,3, "", "", [""], "./img/.webp"),
];

const container = document.getElementById('card-container');

// 撈全部的卡圖
function displayCards(filteredCards) {
    filteredCards.sort((a, b) => a.cost - b.cost); // 根据消费排序

    container.innerHTML = ''; // 清空容器

    filteredCards.forEach(card => {
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('card');

        const img = document.createElement('img');
        img.src = card.image;
        img.alt = card.title;

        const statsDiv = document.createElement('div');
        statsDiv.classList.add('stats');

        cardDiv.appendChild(img);
        container.appendChild(cardDiv);

        cardDiv.addEventListener('click', () => {
            showCardModal(card.title, card.cost, card.power, card.ability);
        });
    });
}

const clearCostFilters = () => {
    const costFilters = document.querySelectorAll('input[id^="cost-filter"]');
    costFilters.forEach(filter => {
        filter.checked = false;
    });
    applyFilters();
};

const clearPowerFilters = () => {
    const powerFilters = document.querySelectorAll('input[id^="power-filter"]'); // 修正為 "power-filter"
    powerFilters.forEach(filter => {
        filter.checked = false;
    });
    applyFilters();
};

// modal小視窗
function showCardModal(title, cost, power, ability) {
    const modal = document.createElement('div');
    modal.classList.add('modal');

    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    const closeButton = document.createElement('span');
    closeButton.classList.add('close-button');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', () => {
        modal.remove();
    });

    // 卡片名
    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    // 能力
    const abilityElement = document.createElement('p');
    abilityElement.textContent = ability;

    // 消費&戰鬥力
    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.alignItems = 'center';
    container.style.margin = '10px 0';

    const costElement = document.createElement('h3');
    costElement.textContent = cost;

    const slashElement = document.createElement('span');
    slashElement.textContent = '/';
    slashElement.style.margin = '0 10px';

    const powerElement = document.createElement('h3');
    powerElement.textContent = power;

    // 將消費和戰鬥力添加到容器
    container.appendChild(costElement);
    container.appendChild(slashElement);
    container.appendChild(powerElement);

    modalContent.appendChild(closeButton);
    modalContent.appendChild(titleElement);
    modalContent.appendChild(container);
    modalContent.appendChild(abilityElement);

    modal.appendChild(modalContent);
    document.body.appendChild(modal);

    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.remove();
        }
    });
}

const applyFilters = () => {
    const filters = document.querySelectorAll(".filter");
    let selectedCosts = [];
    let selectedPower = [];

    filters.forEach(filter => {
        if (filter.checked) {
            const filterType = filter.id.split("-")[0]; // 確認是 cost 還是 power
            const filterValue = filter.id.split("-")[2];

            if (filterType === "cost") {
                if (filterValue === "6+") {
                    selectedCosts.push(7, 8, 9); // 6+ 範圍為 6 以上
                } else {
                    selectedCosts.push(parseInt(filterValue));
                }
            } else if (filterType === "power") {
                if (filterValue === "0") {
                    selectedPower.push(0, -1, -2, -3, -4, -5, -6, -7, -8); // 篩選 0 以下的 Power
                } else if (filterValue === "6+") {
                    selectedPower.push(6, 7, 8, 9, 10, 11, 12, 14, 20); // 6+ 範圍為 6 以上
                } else {
                    selectedPower.push(parseInt(filterValue));
                }
            }
        }
    });

    let filteredCards = cards;

    // 篩選符合消費條件的卡片
    if (selectedCosts.length > 0) {
        filteredCards = filteredCards.filter(card => selectedCosts.includes(card.cost));
    }

    // 篩選符合戰鬥力條件的卡片
    if (selectedPower.length > 0) {
        filteredCards = filteredCards.filter(card => selectedPower.includes(card.power));
    }

    displayCards(filteredCards);
};


displayCards(cards);