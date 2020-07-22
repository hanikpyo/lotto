var LOTTO = document.getElementById('LOTTO');

                // 랜덤 번호 생성 함수
                function genLottoNo() {
                    return Math.floor(Math.random() * 45) + 1;
                }
                // 로또 번호 추첨 함수
                function getLuckyNumber() {
                    var numbers = [];
                    while (numbers.length < 6) {
                        var newNumber = genLottoNo();
                        if (numbers.indexOf(newNumber) < 0) {
                            // 중복검사
                            numbers.push(newNumber);
                        }
                    }
                    return numbers;
                }
                function genLottoHTML() {
                    var numbers = getLuckyNumber();
                    var lottoHTML = '';
                    for (var i = 0; i < 1; i++) {
                        var numbers = getLuckyNumber();
                        while (checkLogic(numbers)) numbers = getLuckyNumber();
                        lottoHTML += '<div class="numset"><div class="number">';
                        lottoHTML += numbers.join('</div> <div class="number">');
                        lottoHTML += '</div></div>';
                    }

                    LOTTO.innerHTML = lottoHTML;
                }
                // 11,12,13과 같은 연속된 숫자가 3개이상 나오지 않도록 [testPR]
                function checkLogic(numbers) {
                    for (var i = 0; i < numbers.length; i++) {
                        var no = numbers[i];
                        if (numbers.indexOf(no + 1) >= 0 && numbers.indexOf(no + 2) >= 0)
                            return true;
                    }
                    return false;
                }