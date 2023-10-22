import { MissionUtils, Console } from "@woowacourse/mission-utils";

class App {
  constructor(input, answer) {
    this.input = input;
    this.answer = answer;
  }

  async play() {
    Console.print("숫자 야구 게임을 시작합니다.");
    await this.setInputNumber();
    await this.getNumber();
    await Console.print(this.isIncluded());
  }

  async getNumber() {
    this.answer = MissionUtils.Random.pickNumberInRange(100, 999);
    return this.answer;
  }

  async setInputNumber() {
    try {
      this.input = await Console.readLineAsync("숫자를 입력해주세요 : ");
    } catch (error) {
      console.log(error);
    }
  }

  async isIncluded() {
    const inputArr = this.input.toString().split("");
    const answerArr = this.answer.toString().split("");
    try {
      const isInclude = (item) => answerArr.includes(item);
      return inputArr.some(isInclude);
    } catch (error) {
      console.log(error);
    }
  }
}

const app = new App();
app.play();

export default App;
