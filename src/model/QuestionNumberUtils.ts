class QuestionNumberUtils {
  static getQuestionIndexForQuestionStr(question: string): number {
    try {
      let index = parseInt(question, 10);
      if (!Number.isNaN(index) && index >= 1) {
        if (index < 16) {
          if (index.toString() === question) {
            return index;
          }
          throw new Error(`${question} is not a valid question number!`);
        }

        // increase the base index number to account for A and B questions after Q16
        index += (index - 16) * 2;

        const suffix = question.substring(index.toString().length);
        if (suffix === '') {
          return index;
        }
        if (suffix.toLocaleLowerCase() === 'a') {
          return index + 1;
        }
        if (suffix.toLocaleLowerCase() === 'b') {
          return index + 2;
        }

        // if we fall through to here, the suffix is unsupported; throw an error
      }
    } catch (e) {
      // Nothing to do here; there must be an error with the input string, so throw an error
    }
    throw new Error(`${question} is not a valid question number!`);
  }
}

export default QuestionNumberUtils;
