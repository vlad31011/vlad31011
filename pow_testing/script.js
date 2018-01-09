
function result() {

    var power = document.getElementById('form-power').value;
    var number = document.getElementById('form-number').value;

    switch (true) {
        case ( ((power.indexOf('.')+1) && (+number<0)) || !(isFinite(power)) || !(isFinite(number)) ):
        {
            document.getElementById('my-result').innerHTML = 'error';
            break;
        }
        default:
        {
            answer = Math.pow(number, power);
            document.getElementById('my-result').innerHTML = 'Answer: '+answer.toFixed(10);
            return answer;
        }
    }
}