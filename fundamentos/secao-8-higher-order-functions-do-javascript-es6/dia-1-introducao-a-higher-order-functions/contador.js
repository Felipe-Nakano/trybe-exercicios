const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const compareAnswers = (rightAnswers, studentAnswers) => {
    if (rightAnswers === studentAnswers){
        return 1;
    } else if (studentAnswers === 'N.A'){
        return 0;
    } else {
        return -0.5;
    }
    };

    const finalTest = (rightAnswers, studentAnswers, callback) => {
        let pontos = 0;
        for (let index = 0; index < rightAnswers.length; index += 1) {
            const pontuacao = callback(rightAnswers[index], studentAnswers[index])
            pontos += pontuacao;
        }
        return `Pontuação ${pontos}`
    }

    console.log(finalTest(RIGHT_ANSWERS, STUDENT_ANSWERS, compareAnswers));