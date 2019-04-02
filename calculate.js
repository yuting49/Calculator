let inputOne = ''
let inputTwo = ''
let operator = ''
let current = ''

for (let i = 0; i < 10; i++) {
    document.querySelector('.num' + i).addEventListener('click', ()=>{
        appendNumber(i)
    });
}

function appendNumber(str){
    if (document.getElementById('output').innerHTML === '0'){
        document.getElementById('output').innerHTML = ''
    }
    document.getElementById('output').innerHTML += str
}

function changeHistory(str){
    if (str === 'clear'){
        document.getElementById('history').innerHTML = ''
        return
    }
    document.getElementById('history').innerHTML += str
}
//calc 三者皆有值即可
function calc(){
    if (inputOne && operator && document.getElementById('output').innerHTML) {
        inputTwo = document.getElementById('output').innerHTML ;
        changeHistory(inputTwo)
        switch(operator){
            case '+':
            current = Number(inputOne) + Number(inputTwo)
            break;
            case '-':
            current = Number(inputOne) - Number(inputTwo)
            break;
            case '*':
            current = Number(inputOne) * Number(inputTwo)
            break;
            case '/':
            current = Number(inputOne) / Number(inputTwo)
            break;
        }
        changeHistory('=' + current)
        inputOne = ''
        inputTwo = ''
        operator = ''
    }
}

//press operator 
for (let i = 0; i < 6; i++) {
    document.querySelector('.opr'+i).addEventListener('click', () => {
        if (inputOne && operator && !inputTwo) {
            //press equal inputTwo尚未被賦值
            document.querySelector('#equal').addEventListener('click', calc())
        } else {
            switch(i){
                case 1:
                operator = '+';
                inputOne = document.getElementById('output').innerHTML ;
                changeHistory(inputOne + operator)
                document.getElementById('output').innerHTML = '' ;
                break; 
                case 2:
                operator = '-';
                inputOne = document.getElementById('output').innerHTML ;
                changeHistory(inputOne  + operator)
                document.getElementById('output').innerHTML = '' ;
                break; 
                case 3:
                operator = '*';
                inputOne = document.getElementById('output').innerHTML ;
                changeHistory(inputOne + operator)
                document.getElementById('output').innerHTML = '' ;
                break; 
                case 4:
                operator = '/';
                inputOne = document.getElementById('output').innerHTML ;
                changeHistory(inputOne + operator)
                document.getElementById('output').innerHTML = '' ;
                break; 
            }   
            
        }
        if (current) {
            document.getElementById('output').innerHTML = current
            inputOne = current;
            switch(i){
                case 1:
                operator = '+';
                changeHistory('clear')
                changeHistory(inputOne + operator)
                document.getElementById('output').innerHTML = '' 
                calc();
                break; 
                case 2:
                operator = '-';
                changeHistory('clear')
                changeHistory(inputOne + operator)
                document.getElementById('output').innerHTML = '' ;
                calc()
                break; 
                case 3:
                operator = '*';
                changeHistory('clear')
                changeHistory(inputOne + operator)
                document.getElementById('output').innerHTML = '' ;
                calc()
                break; 
                case 4:
                operator = '/';
                changeHistory('clear')
                changeHistory(inputOne + operator)
                document.getElementById('output').innerHTML = '' ;
                calc()
                break; 
            }   
        }
    });
}
//press #ac
document.querySelector('#ac').addEventListener('click', ()=>{
    document.getElementById('output').innerHTML = ''
    changeHistory('clear')
    inputOne = ''
    inputTwo = ''
    operator = ''
    current = ''
})
