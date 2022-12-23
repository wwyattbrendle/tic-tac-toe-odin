const Player = () => {
    let choice;
    let classList = "";
    let win = (score, selector) => {
        game.hasWinner = true;
        score++;
        selector.textContent = score;
    }
    return {choice, classList, win};
};

const board = (() => { 
    const array = [9];
    for (let i = 0; i < 9; i++) {
       array[i] = 0;
    }
    const tl = document.getElementById("tl");
    tl.addEventListener("click", () => {
        if (array[0] === 0 && game.hasWinner == false) {
            if (game.turnCount % 2 === 1) {
                array[0] = "x";
                tl.innerHTML = player1.choice;
                tl.className = "";
                tl.classList.add(player1.classList, "player-1");
                game.checkWinner();
                game.turnCount++;
            }else {
                array[0] = "o";
                tl.innerHTML = player2.choice;
                tl.className = "";
                tl.classList.add(player2.classList, "player-2");
                game.checkWinner();
                game.turnCount++;
            }
        }
        console.log(array[0]);
    });
    const tm = document.getElementById("tm");
    tm.addEventListener("click", () => {
        if (array[1] === 0 && game.hasWinner == false) {
            if (game.turnCount % 2 === 1) {
                array[1] = "x";
                tm.innerHTML = player1.choice;
                tm.className = "";
                tm.classList.add(player1.classList, "player-1");
                game.checkWinner();
                game.turnCount++;
            }else {
                array[1] = "o";
                tm.innerHTML = player2.choice;
                tm.className = "";
                tm.classList.add(player2.classList, "player-2");
                game.checkWinner();
                game.turnCount++;
            }
        }
        console.log(array[1]);
    });
    const tr = document.getElementById("tr");
    tr.addEventListener("click", () => {
        if (array[2] === 0 && game.hasWinner == false) {
            if (game.turnCount % 2 === 1) {
                array[2] = "x";
                tr.innerHTML = player1.choice;
                tr.className = "";
                tr.classList.add(player1.classList, "player-1");
                game.checkWinner();
                game.turnCount++;
            }else {
                array[2] = "o";
                tr.innerHTML = player2.choice;
                tr.className = "";
                tr.classList.add(player2.classList, "player-2");
                game.checkWinner();
                game.turnCount++;
            }
        }
        console.log(array[2]);
    });
    const ml = document.getElementById("ml");
    ml.addEventListener("click", () => {
        if (array[3] === 0 && game.hasWinner == false) {
            if (game.turnCount % 2 === 1) {
                array[3] = "x";
                ml.innerHTML = player1.choice;
                ml.className = "";
                ml.classList.add(player1.classList, "player-1");
                game.checkWinner();
                game.turnCount++;
            }else {
                array[3] = "o";
                ml.innerHTML = player2.choice;
                ml.className = "";
                ml.classList.add(player2.classList, "player-2");
                game.checkWinner();
                game.turnCount++;
            }
        }
        console.log(array[3]);
    });
    const mm = document.getElementById("mm");
    mm.addEventListener("click", () => {
        if (array[4] === 0 && game.hasWinner == false) {
            if (game.turnCount % 2 === 1) {
                array[4] = "x";
                mm.innerHTML = player1.choice;
                mm.className = "";
                mm.classList.add(player1.classList, "player-1");
                game.checkWinner();
                game.turnCount++;
            }else {
                array[4] = "o";
                mm.innerHTML = player2.choice;
                mm.className = "";
                mm.classList.add(player2.classList, "player-2");
                game.checkWinner();
                game.turnCount++;
            }
        }
        console.log(array[4]);
    });
    const mr = document.getElementById("mr");
    mr.addEventListener("click", () => {
        if (array[5] === 0 && game.hasWinner == false) {
            if (game.turnCount % 2 === 1) {
                array[5] = "x";
                mr.innerHTML = player1.choice;
                mr.className = "";
                mr.classList.add(player1.classList, "player-1");
                game.checkWinner();
                game.turnCount++;
            }else {
                array[5] = "o";
                mr.innerHTML = player2.choice;
                mr.className = "";
                mr.classList.add(player2.classList, "player-2");
                game.checkWinner();
                game.turnCount++;
            }
        }
        console.log(array[5]);
    });
    const bl = document.getElementById("bl");
    bl.addEventListener("click", () => {
        if (array[6] === 0 && game.hasWinner == false) {
            if (game.turnCount % 2 === 1) {
                array[6] = "x";
                bl.innerHTML = player1.choice;
                bl.className = "";
                bl.classList.add(player1.classList, "player-1");
                game.checkWinner();
                game.turnCount++;
            }else {
                array[6] = "o";
                bl.innerHTML = player2.choice;
                bl.className = "";
                bl.classList.add(player2.classList, "player-2");
                game.checkWinner();
                game.turnCount++;
            }
        }
        console.log(array[6]);
    });
    const bm = document.getElementById("bm");
    bm.addEventListener("click", () => {
        if (array[7] === 0 && game.hasWinner == false) {
            if (game.turnCount % 2 === 1) {
                array[7] = "x";
                bm.innerHTML = player1.choice;
                bm.className = "";
                bm.classList.add(player1.classList, "player-1");
                game.checkWinner();
                game.turnCount++;
            }else {
                array[7] = "o";
                bm.innerHTML = player2.choice;
                bm.className = "";
                bm.classList.add(player2.classList, "player-2");
                game.checkWinner();
                game.turnCount++;
            }
        }
        console.log(array[7]);
    });
    const br = document.getElementById("br");
    br.addEventListener("click", () => {
        if (array[8] === 0 && game.hasWinner == false) {
            if (game.turnCount % 2 === 1) {
                array[8] = "x";
                br.innerHTML = player1.choice;
                br.className = "";
                br.classList.add(player1.classList, "player-1");
                game.checkWinner();
                game.turnCount++;
            }else {
                array[8] = "o";
                br.innerHTML = player2.choice;
                br.className = "";
                br.classList.add(player2.classList, "player-2");
                game.checkWinner();
                game.turnCount++;
            }
        }
        console.log(array[8]);
    });

    return {array, tl, tm, tr, ml, mm, mr, bl, bm, br};
})();

const character = (() => {
    const lmonk = `<img src="./assets/lmonk.png" alt="">`;
    const lbard = `<img src="./assets/lbard.png" alt="">`;
    const ldogkin =`<img src="./assets/ldogkinhunter.png" alt="">`;
    const lfrogling = `<img src="./assets/lfrogling.png" alt="">`;
    const lgunner = `<img src="./assets/lgunner.png" alt="">`;
    const llich = `<img src="./assets/llich.png" alt="">`;
    const lminotaur = `<img src="./assets/lminotaur.png" alt="">`;
    const lwizard = `<img src="./assets/lwizard.png" alt="">`;
    const rmonk = `<img src="./assets/rmonk.png" alt="">`;
    const rbard = `<img src="./assets/rbard.png" alt="">`;
    const rdogkin =`<img src="./assets/rdogkinhunter.png" alt="">`;
    const rfrogling = `<img src="./assets/rfrogling.png" alt="">`;
    const rgunner = `<img src="./assets/rgunner.png" alt="">`;
    const rlich = `<img src="./assets/rlich.png" alt="">`;
    const rminotaur = `<img src="./assets/rminotaur.png" alt="">`;
    const rwizard = `<img src="./assets/rwizard.png" alt="">`;
    
    return {lmonk, lbard, ldogkin, lfrogling, lgunner, llich, lminotaur, lwizard, rmonk, rbard, rdogkin, rfrogling, rgunner, rlich, rminotaur, rwizard};
})();

const iconButtons = (() => {
    const p1monk = document.getElementById("p1-monk");
    p1monk.addEventListener("click", () => {
        player1.choice = character.rmonk;
        p1.innerHTML = player1.choice;
        p1.className = "";
        p1.classList.add("img-container", "monk");
        player1.classList = "monk";
    });

    const p1bard = document.getElementById("p1-bard");
    p1bard.addEventListener("click", () => {
        player1.choice = character.rbard;
        p1.innerHTML = player1.choice;
        p1.className = "";
        p1.classList.add("img-container", "bard");
        player1.classList = "bard";
    });

    const p1dogkin = document.getElementById("p1-dogkin");
    p1dogkin.addEventListener("click", () => {
        player1.choice = character.rdogkin;
        p1.innerHTML = player1.choice;
        p1.className = "";
        p1.classList.add("img-container", "dogkin");
        player1.classList = "dogkin";
    });

    const p1frogling = document.getElementById("p1-frogling");
    p1frogling.addEventListener("click", () => {
        player1.choice = character.rfrogling;
        p1.innerHTML = player1.choice;
        p1.className = "";
        p1.classList.add("img-container", "frogling");
        player1.classList = "frogling";
    });

    const p1gunner = document.getElementById("p1-gunner");
    p1gunner.addEventListener("click", () => {
        player1.choice = character.rgunner;
        p1.innerHTML = player1.choice;
        p1.className = "";
        p1.classList.add("img-container", "gunner");
        player1.classList = "gunner";
    });

    const p1lich = document.getElementById("p1-lich");
    p1lich.addEventListener("click", () => {
        player1.choice = character.rlich;
        p1.innerHTML = player1.choice;
        p1.className = "";
        p1.classList.add("img-container", "lich");
        player1.classList = "lich";
    });

    const p1minotaur = document.getElementById("p1-minotaur");
    p1minotaur.addEventListener("click", () => {
        player1.choice = character.rminotaur;
        p1.innerHTML = player1.choice;
        p1.className = "";
        p1.classList.add("img-container", "minotaur");
        player1.classList = "minotaur";
    });

    const p1wizard = document.getElementById("p1-wizard");
    p1wizard.addEventListener("click", () => {
        player1.choice = character.rwizard;
        p1.innerHTML = player1.choice;
        p1.className = "";
        p1.classList.add("img-container", "wizard");
        player1.classList = "wizard";
    });

    const p2monk = document.getElementById("p2-monk");
    p2monk.addEventListener("click", () => {
        player2.choice = character.lmonk;
        p2.innerHTML = player2.choice;
        p2.className = "";
        p2.classList.add("img-container", "monk");
        player2.classList = "monk";
    });

    const p2bard = document.getElementById("p2-bard");
    p2bard.addEventListener("click", () => {
        player2.choice = character.lbard;
        p2.innerHTML = player2.choice;
        p2.className = "";
        p2.classList.add("img-container", "bard");
        player2.classList = "bard";
    });

    const p2dogkin = document.getElementById("p2-dogkin");
    p2dogkin.addEventListener("click", () => {
        player2.choice = character.ldogkin;
        p2.innerHTML = player2.choice;
        p2.className = "";
        p2.classList.add("img-container", "dogkin");
        player2.classList = "dogkin";
    });

    const p2frogling = document.getElementById("p2-frogling");
    p2frogling.addEventListener("click", () => {
        player2.choice = character.lfrogling;
        p2.innerHTML = player2.choice;
        p2.className = "";
        p2.classList.add("img-container", "frogling");
        player2.classList = "frogling";
    });

    const p2gunner = document.getElementById("p2-gunner");
    p2gunner.addEventListener("click", () => {
        player2.choice = character.lgunner;
        p2.innerHTML = player2.choice;
        p2.className = "";
        p2.classList.add("img-container", "gunner");
        player2.classList = "gunner";
    });

    const p2lich = document.getElementById("p2-lich");
    p2lich.addEventListener("click", () => {
        player2.choice = character.llich;
        p2.innerHTML = player2.choice;
        p2.className = "";
        p2.classList.add("img-container", "lich");
        player2.classList = "lich";
    });

    const p2minotaur = document.getElementById("p2-minotaur");
    p2minotaur.addEventListener("click", () => {
        player2.choice = character.lminotaur;
        p2.innerHTML = player2.choice;
        p2.className = "";
        p2.classList.add("img-container", "minotaur");
        player2.classList = "minotaur";
    });

    const p2wizard = document.getElementById("p2-wizard");
    p2wizard.addEventListener("click", () => {
        player2.choice = character.lwizard;
        p2.innerHTML = player2.choice;
        p2.className = "";
        p2.classList.add("img-container", "wizard");
        player2.classList = "wizard";
    });
})();

const game = (() => {
    let player1Score = 0;
    let player2Score = 0;
    const p1Score = document.getElementById("p1-score");
    const p2Score = document.getElementById("p2-score");
    let turnCount = 1;
    let hasWinner = false;
    const checkWinner = () => {
        if (board.array[0] !== 0 && board.array[0] == board.array[4] && board.array[0] == board.array[8]) {
            if (game.turnCount % 2 == 1) {
                player1.win(player1Score, p1Score);
            } else {
                player2.win(player2Score, p2Score);
            }
        } else if (board.array[2] !== 0 && board.array[2] == board.array[4] && board.array[2] == board.array[6]) {
            if (game.turnCount % 2 == 1) {
                player1.win(player1Score, p1Score);
            } else {
                player2.win(player2Score, p2Score);
            }
        }
        for (let n = 0; n < 3; n++) {
            if (board.array[n] !== 0 && board.array[n] == board.array[n + 3] && board.array[n] == board.array[n + 6]) {
                if (game.turnCount % 2 == 1) {
                    player1.win(player1Score, p1Score);
                } else {
                    player2.win(player2Score, p2Score);
                }
            }
        }
        for (let n = 0; n < 6; n += 3) {
            if (board.array[n] !== 0 && board.array[n] == board.array[n + 1] && board.array[n] == board.array[n + 2]) {
                if (game.turnCount % 2 == 1) {
                    player1.win(player1Score, p1Score);
                } else {
                    player2.win(player2Score, p2Score);
                }
            }
        }
    }
    const playButton = document.getElementById("play-button");
    playButton.addEventListener("click", () => {
        game.turnCount = 1;
        game.hasWinner = false;
        for (let i = 0; i < 9; i++) {
            board.array[i] = 0;
        }
        board.tl.className = "";
        board.tl.classList.add("unit");
        board.tl.innerHTML = "";
        board.tm.className = "";
        board.tm.classList.add("unit");
        board.tm.innerHTML = "";
        board.tr.className = "";
        board.tr.classList.add("unit");
        board.tr.innerHTML = "";
        board.ml.className = "";
        board.ml.classList.add("unit");
        board.ml.innerHTML = "";
        board.mm.className = "";
        board.mm.classList.add("unit");
        board.mm.innerHTML = "";
        board.mr.className = "";
        board.mr.classList.add("unit");
        board.mr.innerHTML = "";
        board.bl.className = "";
        board.bl.classList.add("unit");
        board.bl.innerHTML = "";
        board.bm.className = "";
        board.bm.classList.add("unit");
        board.bm.innerHTML = "";
        board.br.className = "";
        board.br.classList.add("unit");
        board.br.innerHTML = "";
    });
    const resetButton = document.getElementById("reset-button");
    resetButton.addEventListener("click", () => {
        playButton.click();
        player1Score = 0;
        player2Score = 0;
        p1Score.textContent = 0;
        p2Score.textContent = 0;
    });
    return {turnCount, checkWinner, hasWinner};
})();

const player1 = Player();
player1.choice = character.rwizard;
player1.classList = "wizard";
const player2 = Player();
player2.choice = character.llich;
player2.classList = "lich";
const p1 = document.getElementById("p1-pic");
p1.innerHTML = player1.choice;
p1.classList.add("wizard");
const p2 = document.getElementById("p2-pic");
p2.innerHTML = player2.choice;
p2.classList.add("lich");