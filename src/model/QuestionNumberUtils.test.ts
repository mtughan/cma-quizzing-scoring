import QuestionNumberUtils from './QuestionNumberUtils';

test('questions before Q16 should parse correctly', () => {
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('1')).toBe(1);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('2')).toBe(2);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('3')).toBe(3);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('4')).toBe(4);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('5')).toBe(5);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('6')).toBe(6);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('7')).toBe(7);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('8')).toBe(8);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('9')).toBe(9);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('10')).toBe(10);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('11')).toBe(11);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('12')).toBe(12);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('13')).toBe(13);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('14')).toBe(14);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('15')).toBe(15);
});

test('questions after Q16 should parse correctly', () => {
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('16')).toBe(16);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('16A')).toBe(17);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('16B')).toBe(18);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('16a')).toBe(17);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('16b')).toBe(18);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('17')).toBe(19);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('17A')).toBe(20);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('17B')).toBe(21);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('17a')).toBe(20);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('17b')).toBe(21);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('18')).toBe(22);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('18A')).toBe(23);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('18B')).toBe(24);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('18a')).toBe(23);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('18b')).toBe(24);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('19')).toBe(25);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('19A')).toBe(26);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('19B')).toBe(27);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('19a')).toBe(26);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('19b')).toBe(27);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('20')).toBe(28);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('20A')).toBe(29);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('20B')).toBe(30);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('20a')).toBe(29);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('20b')).toBe(30);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('21')).toBe(31);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('21A')).toBe(32);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('21B')).toBe(33);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('21a')).toBe(32);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('21b')).toBe(33);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('22')).toBe(34);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('22A')).toBe(35);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('22B')).toBe(36);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('22a')).toBe(35);
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('22b')).toBe(36);

  // I really hope we don't get to here in a quiz!!
  expect(QuestionNumberUtils.getQuestionIndexForQuestionStr('29b')).toBe(57);
});

test('invalid question numbers should return undefined', () => {
  expect(() => QuestionNumberUtils.getQuestionIndexForQuestionStr('')).toThrow();
  expect(() => QuestionNumberUtils.getQuestionIndexForQuestionStr('0')).toThrow();
  expect(() => QuestionNumberUtils.getQuestionIndexForQuestionStr('1A')).toThrow();
  expect(() => QuestionNumberUtils.getQuestionIndexForQuestionStr('016')).toThrow();
  expect(() => QuestionNumberUtils.getQuestionIndexForQuestionStr('17AA')).toThrow();
  expect(() => QuestionNumberUtils.getQuestionIndexForQuestionStr('17C')).toThrow();
  expect(() => QuestionNumberUtils.getQuestionIndexForQuestionStr('-1')).toThrow();
});
