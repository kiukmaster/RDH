function calculate() { // 강화석 계산
    let stoneTiers = [0,0,0,0,0,0,0,0,0,0,0]
    for (var index = 1; index < 11; index++) {
        stoneTiers[index] = parseInt(document.getElementById("stoneTier" + index).value) || 0;
    }
    for (var index = 1; index < 10; index++) {
        if(stoneTiers[index] >= 4) {
            stoneTiers[index + 1] += Math.floor(stoneTiers[index] / 4);
            stoneTiers[index] = stoneTiers[index] % 4;
        }
    }
    let result = ""
    for (var index = 1; index < 11; index++) {
        result += `<img src="img/${index}.png" alt="error"> ${index}강 = ${stoneTiers[index]}개 <br>`
    }
    document.getElementById("result").innerHTML = result;
}

function calculate1() { // 메인보스 계산
    const mb1 = document.getElementById("mb1").value;
    const mb2 = document.getElementById("mb2").value;
    const mb3 = document.getElementById("mb3").value;
    const mb4 = document.getElementById("mb4").value;
    const mb5 = document.getElementById("mb5").value;
    const mb6 = document.getElementById("mb6").value;
    const mb7 = document.getElementById("mb6").value;

    const slimeBoss = mb1 * 1;
    const skeletonBoss = mb2 * 2;
    const zombieBoss = mb3 * 2;
    const golemBoss = mb4 * 3;
    const spideBoss = mb5 * 3;
    const guardianBoss = mb6 * 2;
    const steBoss = mb7 * 1;

    const resultbs = `<img src="img/boss/boss1.png" alt="error"> 라바슬라임 전리품: 4강 ${slimeBoss}개 <br> <img src="img/boss/boss2.png" alt="error"> 기간틱 스켈레톤 전리품: 4강 ${skeletonBoss}개 <br> <img src="img/boss/boss3.png" alt="error"> 사스콰치 전리품: 4강 ${zombieBoss}개 <br> <img src="img/boss/boss4.png" alt="error"> 멸파의렘골 전리품: 4강 ${golemBoss}개 <br> <img src="img/boss/boss5.png" alt="error"> 스피드이더 전리품: 4강 ${spideBoss}개 <br> <img src="img/boss/boss6.png" alt="error"> 엘더가디언 전리품: 5강 ${guardianBoss}개 <br> <img src="img/boss/boss7.png" alt="error"> 스테들러 전리품: 6강${steBoss}개`;
    document.getElementById("resultbs").innerHTML = resultbs;
  }

  function calculate2() { // 미니보스 계산
    const mnb1 = document.getElementById("mnb1").value;
    const mnb2 = document.getElementById("mnb2").value;
    const mnb3 = document.getElementById("mnb3").value;
    const mnb4 = document.getElementById("mnb4").value;
    const mnb5 = document.getElementById("mnb5").value;
    const mnb6 = document.getElementById("mnb6").value;
    const mnb7 = document.getElementById("mnb7").value;

    const guardian = mnb1 * 1;
    const bard = mnb2 * 3;
    const yeti = mnb3 * 2;
    const gup = mnb4 * 2;
    const lecle = mnb5 * 3;
    const squid = mnb6 * 3;
    const fireice = mnb7 * 3;

    const resultmnbs = `<img src="img/miniboss/miniboss1.png" alt="error"> 가디언 락토 전리품: 3강 ${guardian}개 <br> <img src="img/miniboss/miniboss2.png" alt="error"> 바드 스켈레톤 전리품: 3강 ${bard}개 <br> <img src="img/miniboss/miniboss3.png" alt="error"> 예티 전리품: 4강 ${yeti}개 <br> <img src="img/miniboss/miniboss4.png" alt="error"> 겁쟁이 선장 전리품: 4강 ${gup}개 <br> <img src="img/miniboss/miniboss5.png" alt="error"> 레클루즈 거미 전리품: 4강 ${lecle}개 <br> <img src="img/miniboss/miniboss6.png" alt="error"> 오징오징 대마왕 전리품: 5강 ${squid}개 <br> <img src="img/miniboss/miniboss7.png" alt="error"> 피레이세 전리품: 5강${fireice}개`;
    document.getElementById("resultmnbs").innerHTML = resultmnbs;
}

function resultcbst() {
    var total = 0;
    document.querySelectorAll('input[type="checkbox"]:checked').forEach(function(checkbox) {
        total += parseInt(checkbox.value);
    });
    document.getElementById("resultcbst").innerHTML = "당신의 전투력은 " + total + "점 입니다.";
}

const Cball = document.querySelectorAll('#Cball');
const checkboxList = document.querySelectorAll('input[type="checkbox"]');
Cball.forEach((element) => {
element.addEventListener('change', () => {
    checkboxList.forEach((checkbox) => {
        checkbox.checked = element.checked;
        });
    });
});

